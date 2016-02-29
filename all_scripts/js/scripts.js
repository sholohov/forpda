/**
 *		IMG OFF
 */
/*
var postBodyImg = document.querySelectorAll('.attach, .linked-image');
for (var i = 0; i < postBodyImg.length; i++) {
	var img = postBodyImg[i];
	var link = document.createElement('a');
		link.className = "link-img";
	if (img.parentNode.nodeName == "A") {
		var text = document.createTextNode(img.parentNode.title);
		img.parentNode.appendChild(text);
		img.parentNode.className = "link-img";
	}
	else {
		link.innerHTML = img.alt;
		link.href = img.src;
		img.parentNode.insertBefore(link, img.nextSibling);
	}
	img.parentNode.replaceChild(link, img);
}
*/
/**
 *		SUBSTITUTION ATTRIBUTES
 */

var postBlockSpoils = document.body.querySelectorAll('.post-block.spoil.close > .block-body');
for (var i = 0; i < postBlockSpoils.length; i++) {
	var images = postBlockSpoils[i].querySelectorAll('img');
	for (var j = 0; j < images.length; j++) {
		var img = images[j];
		if (!img.hasAttribute('src')) continue;
		img.dataset.imageSrc = img.src;
		img.removeAttribute('src');
	}
}
document.body.addEventListener("click", substitutionAttributes);
function substitutionAttributes(event) {
	var event = event || window.event;
	var target = event.target || event.srcElement;
	while (target != this) {
		if (~target.className.indexOf('spoil')) {
			var images = target.querySelectorAll('img');
			for (var i = 0; i < images.length; i++) {
				var img = images[i];
				img.src = img.dataset.imageSrc;
			}
			return;
		}
		target = target.parentNode;
	}
}

/**
 *		CREATE OBJECT ALL ATTACHES
 */

function PostAttach(targetAttach) {
	var anchorList = document.querySelectorAll('div[id*="entry"]');
	for (var i = 0; i < anchorList.length; i++) {
		var anchor = anchorList[i];
		var post = anchor.nextElementSibling;
		if (post.className != 'post_container') return;
		var attachList = post.querySelectorAll('a[attach_id]');
		function attachCollection() {
			var obj = {};
			for (var j = 0; j < attachList.length; j++) {
				var att = attachList[j];
				obj['att' + (j + 1)] = att.getAttribute('href');
			}
			if (!obj.att1) return;
			return obj;
		}
		this[anchor.getAttribute("id")] = attachCollection();
	}
}

var postAttach = new PostAttach;

var postAttachJSON = JSON.stringify(postAttach);

/**
 *		GET INDEX AND ID FOR ATTACH
 */

var postBody = document.querySelectorAll('.post_body');
var postAttachIndex = {};
var postAttachIndexJSON = '';

for (var i = 0; i < postBody.length; i++) {
	postBody[i].addEventListener('click', foo, false);
	function foo(event) {
		event = event || window.event;
		var target = event.target || event.srcElement;
		var post = this;
		var postId = post.parentNode.previousElementSibling.id;

		function showAttach(link) {
			var attaches = post.querySelectorAll('a[attach_id]');
			function attachIndex() {	
				for (var j = 0; j < attaches.length; j++) {
					if (attaches[j].getAttribute('href') == link) {
						return j + 1;
					}
				}
			}
			postAttachIndex[postId] = {};
			postAttachIndex[postId]['att' + attachIndex()] = link;
			postAttachIndexJSON = JSON.stringify(postAttachIndex);

			textarea.value = postAttachIndexJSON;
		}
		while (target != post) {
			if (target.nodeName == 'A') {
				showAttach(target.getAttribute('href'));
				event.preventDefault();
				return;
			}
			target = target.parentNode;
		}
	}
}

var textarea = document.createElement('textarea');
textarea.style.position = 'fixed';
textarea.style.bottom = 0;
document.body.appendChild(textarea);

