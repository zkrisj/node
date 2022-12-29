const mode = document.querySelector('#color-scheme-toggle');
if (eval(localStorage.dark)) {
  document.body.classList.add('dark-mode');
  mode.src = mode.src.replace(/(\w+)(.svg)/, 'light$2');
  document.querySelectorAll('img[src="assets/anchor.svg"]').forEach(v => v.src = 'assets/anchor-dark.svg');
  document.querySelectorAll('img[src="../assets/anchor.svg"]').forEach(v => v.src = '../assets/anchor-dark.svg');
}
mode.addEventListener('click', function(e) {
  e.stopPropagation();
  const dark = document.body.classList.toggle('dark-mode');
  this.src = this.src.replace(/(\w+)(.svg)/, (dark ? 'light' : 'dark') + '$2');
  if (dark) {
    document.querySelectorAll('img[src="assets/anchor.svg"]').forEach(v => v.src = 'assets/anchor-dark.svg');
    document.querySelectorAll('img[src="../assets/anchor.svg"]').forEach(v => v.src = '../assets/anchor-dark.svg');
  } else {
    document.querySelectorAll('img[src="assets/anchor-dark.svg"]').forEach(v => v.src = 'assets/anchor.svg');
    document.querySelectorAll('img[src="../assets/anchor-dark.svg"]').forEach(v => v.src = '../assets/anchor.svg');
  }
  localStorage.dark = dark;
});
