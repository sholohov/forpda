var body = document.body;
body.onclick = function(e) {
	var target = e.target;
	while (target != this) {
		if (target.nodeName == 'A') return false;
		target = target.parentNode;
	}
};
        
function openHat(hidetop) {
	var hidemain = hidetop.nextElementSibling;
	if (hidemain.style.display == 'none') {
		hidemain.style.display = '';
		hidetop.classList.remove('close');
		hidetop.classList.add('open');
	} else {
		hidemain.style.display = 'none';
		hidetop.classList.remove('open');
		hidetop.classList.add('close');
	}
} 