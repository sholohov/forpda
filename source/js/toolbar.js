var body = document.body;

//
// TOOLBAR
//

var devToolBar = document.createElement('div');
devToolBar.id = 'dev_toolbar';
devToolBar.style.cssText = "position:fixed;\
bottom: 0;\
left: 0;\
right: 0;";
body.appendChild(devToolBar);

//
//	OUTLINE ELEMENTS
//

function showOutlineElements() {
		var label = document.createElement('label');
		label.className = 'outline_elements';
		label.innerHTML = 'OUTLINE';
		devToolBar.appendChild(label);

		var checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		label.appendChild(checkbox);

		var outlineStyle = document.createElement('style');
		outlineStyle.innerHTML = "BODY * { outline: 1px solid rgba(255,100,0,0.5);}";

		checkbox.addEventListener('change', toggleOutline);
		function toggleOutline() {
				if (checkbox.checked) document.body.appendChild(outlineStyle);
				else document.body.removeChild(outlineStyle);
		}
}
showOutlineElements();

/*/
// LINK OFF
//

body.onclick = function(event) {
		event = event || window.event;
		var target = event.target || event.srcElement;
		while (target != this) {
				if (target.nodeName == 'A') return false;
				target = target.parentNode;
		}
};

/*/
// SWITCH FOR IMAGES
//

function imagesSwitch() {
		var imagesSwitchButton = document.createElement('button');
		imagesSwitchButton.innerHTML = 'AVA_SWITCH';
		devToolBar.appendChild(imagesSwitchButton);
		
		var avatar = body.querySelectorAll('.avatar');
		
}
imagesSwitch();