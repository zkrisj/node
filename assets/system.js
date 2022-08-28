const mode = document.querySelector('#color-scheme-toggle');
if(eval(localStorage.dark)) {
	document.body.classList.add('dark-mode');
	mode.src = mode.src.replace(/(\w+)(.svg)/, 'light$2');
}
mode.addEventListener('click', function(e) {
	e.stopPropagation();
	const dark = document.body.classList.toggle('dark-mode');
	this.src = this.src.replace(/(\w+)(.svg)/, (dark ? 'light' : 'dark') + '$2');
	localStorage.dark = dark;
});
