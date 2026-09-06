/**
 * Burger-Menü automatisch schließen, wenn ein Nav-Link geklickt wird
 * (auch bei Anker-Links auf derselben Seite, die keine Navigation auslösen).
 */
(function () {
	function init() {
		var toggle = document.getElementById('nav-toggle');
		var nav = document.querySelector('.site-nav');
		if (!toggle || !nav) {
			return;
		}
		nav.addEventListener('click', function (e) {
			if (e.target.closest('a')) {
				toggle.checked = false;
			}
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
