function init() {
	// start here

	var menuBar = document.querySelector('.hamburger');

	function handleToggleMenu() {
		var mobEl = document.querySelector('.mobile');
		console.dir(mobEl);
		if (mobEl.classList.contains('active')) {
			console.log('I have class');
			mobEl.classList.remove('active');
		} else {
			console.log('I dont have class');
			mobEl.classList.add('active');
		}
	}

	menuBar.addEventListener('click', handleToggleMenu);
}

window.addEventListener('load', function () {
	init();
});
