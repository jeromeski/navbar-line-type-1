function init() {
	// start here

	var menuBar = document.querySelector('.hamburger');

	function handleToggleMenu() {
		var mobEl = document.querySelector('.mobile');
		if (mobEl.classList.contains('active')) {
			mobEl.classList.remove('active');
		} else {
			mobEl.classList.add('active');
		}
	}

	menuBar.addEventListener('click', handleToggleMenu);
}

window.addEventListener('load', function () {
	init();
});
