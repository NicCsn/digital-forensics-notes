(function(){
  var theme = localStorage.getItem('theme');
  if (!theme) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }
  document.documentElement.setAttribute('data-theme', theme);

  var btn = document.getElementById('themeToggle');
  if (!btn) return;
  updateIcon(theme);
  btn.addEventListener('click', function(){
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon(next);
  });

  function updateIcon(t) { btn.textContent = t === 'dark' ? 'Light' : 'Dark'; }
})();
