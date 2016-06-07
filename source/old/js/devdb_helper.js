// упарвление вкладками
var tabControl = document.querySelector('.tab-control');
tabControl.onclick = function(e) {
	var target = e.target;
	while (target != tabControl) {
		if (target.nodeName == 'A') clickA();
		target = target.parentNode;
		return;
	}

	function clickA() {
		// показ вкладок
		var getTabId = document.querySelector(target.getAttribute('href'));
		var allTabs = document.querySelectorAll('.tab');
		for (var i = 0; i < allTabs.length; i++) {
			allTabs[i].classList.remove("active");
		}
		getTabId.classList.add("active");

		// подсветка кнопки
		var buttons = tabControl.querySelectorAll('li');
		var parent = target.parentNode;
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove("active");
		}
		while (parent != tabControl) {
			if (parent.nodeName == 'LI') parent.classList.add("active");
			parent = parent.parentNode;
			return;
		}
	}
};
// скрытие \ раскрытие комментариев