-- DFP (Digital Forensics Protocol) Wireshark Dissector
-- Place in: ~/.local/lib/wireshark/plugins/ or Wireshark Plugins directory
-- DFP runs on TCP port 9191 by default

local dfp_proto = Proto("DFP", "Digital Forensics Protocol")

-- Field definitions
local f_version = ProtoField.uint8("dfp.version", "Version", base.DEC)
local f_type    = ProtoField.uint8("dfp.type", "Message Type", base.DEC, {
    [0x01] = "DATA",
    [0x02] = "ACK",
    [0x03] = "NACK",
    [0x04] = "HELLO",
    [0x05] = "RESET",
    [0x06] = "EVIDENCE",
    [0x07] = "CHECKSUM",
})
local f_length  = ProtoField.uint16("dfp.length", "Payload Length", base.DEC)
local f_payload = ProtoField.bytes("dfp.payload", "Payload")
local f_checksum = ProtoField.uint16("dfp.checksum", "Checksum", base.HEX)

dfp_proto.fields = { f_version, f_type, f_length, f_payload, f_checksum }

-- Dissector function
function dfp_proto.dissector(tvbuf, pinfo, tree)
    local length = tvbuf:len()
    if length < 6 then return end  -- minimum header: version(1) + type(1) + length(2) + checksum(2)

    pinfo.cols.protocol:set("DFP")
    pinfo.cols.info:set("DFP Message")

    local subtree = tree:add(dfp_proto, tvbuf(0, length), "DFP Header (Digital Forensics Protocol)")

    local version = tvbuf(0, 1):uint()
    subtree:add(f_version, tvbuf(0, 1)):append_text(" (" .. version .. ")")

    local msg_type = tvbuf(1, 1):uint()
    subtype = subtree:add(f_type, tvbuf(1, 1))
    local type_name = {
        [1]="DATA", [2]="ACK", [3]="NACK", [4]="HELLO",
        [5]="RESET", [6]="EVIDENCE", [7]="CHECKSUM"
    }
    subtype:append_text(" (" .. (type_name[msg_type] or "Unknown") .. ")")

    local payload_len = tvbuf(2, 2):uint()
    subtree:add(f_length, tvbuf(2, 2)):append_text(" (" .. payload_len .. " bytes)")

    subtree:add(f_checksum, tvbuf(4, 2))

    if payload_len > 0 and length >= 6 + payload_len then
        subtree:add(f_payload, tvbuf(6, payload_len))
        pinfo.cols.info:set("DFP " .. (type_name[msg_type] or "?") .. " (" .. payload_len .. " bytes)")
    end

    -- Expert info for evidence messages
    if msg_type == 0x06 then
        subtree:add_proto_expert_info(expert.group, pinfo, expert_comment, "Evidence data received")
    end
end

-- Register the dissector on TCP port 9191
local tcp_table = DissectorTable.get("tcp.port")
tcp_table:add(9191, dfp_proto)

-- Also register for heuristic detection on any port
dfp_proto:register_heuristic("tcp", function(tvbuf, pinfo, tree)
    if tvbuf:len() < 6 then return false end
    -- DFP magic version byte is always 0x01
    if tvbuf(0, 1):uint() == 0x01 then
        dfp_proto.dissector(tvbuf, pinfo, tree)
        return true
    end
    return false
end)
