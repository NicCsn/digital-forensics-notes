# Contributing

Contributions are welcome. Here are some guidelines to keep the repo consistent.

## Getting Started

1. Fork the repo and create a feature branch.
2. Follow the structure and naming conventions described below.
3. Open a pull request with a clear description of your changes.

## Content Language

| Content Type          | Language |
|-----------------------|----------|
| Notes, Cheatsheets, Writeups | German |
| README, file names, folder names, code comments, commit messages, this file | English |

## File Naming

- Use `kebab-case` for all file and folder names.
- Choose descriptive names (e.g. `wireshark-basics-paketanalyse.md`).

## Templates

Use the templates in `00-meta/templates/` as a starting point:

- `note-template.md` — for learning notes and cheatsheets
- `writeup-template.md` — for CTF writeups
- `tool-readme-template.md` — for documenting custom tools

## Frontmatter

Every content file must include YAML frontmatter at the top with at least these fields:

```yaml
---
title: ""
tags: []
type: notes  # notes | code | writeup | lab
difficulty: ""  # basics | intermediate | advanced
last_updated: ""
---
```

See the templates for the full structure.

## Adding New Content

1. Place the file in the appropriate topic folder (e.g. `03-netzwerke/` for networking topics).
2. Add a row to `INDEX.md` with Topic, Folder, Type, and Tags.
3. Use the `tags` field in frontmatter for cross-referencing (the INDEX is kept manually in sync).

### Website Sync Checklist

When adding a new note, update these three files to keep the website navigation in sync:

- [ ] **`index.html`** — Add a sidebar link in the correct `<details>` section
- [ ] **`search.js`** — Add an entry in the `var notes = [...]` array with `t:` (title), `p:` (path), `f:` (folder), `g:` (tags), `d:` (difficulty)
- [ ] **`INDEX.md`** — Add a row in the correct category table

If adding a tool (in `09-tools/`), include a `README.md` following the `tool-readme-template.md` structure.

If adding a glossary term, update `00-meta/glossary.md` and link to the relevant note file in the "siehe auch" column.

## No Institutional References

This is a personal, independent learning repository. Do not include:
- University names, course/module IDs (e.g. "CS101"), instructor names
- Institution-specific exam content or grading details

Topics should stand on their own.
