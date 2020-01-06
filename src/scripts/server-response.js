'use strict';
import '../less/server-response.less';
window.addEventListener('load', function() {
	const container = document.getElementById('container');
	let clone;
	let urlParams = new URLSearchParams(window.location.search.slice(1));
	console.log(urlParams);

	if (urlParams.get('type')) {
		switch (urlParams.get('type')) {
			case 'error':
				clone = getContentClone('error-template');
				break;
			case 'player-registered':
				clone = getContentClone('player-registered-template');
				break;
			case 'team-registered':
				clone = getContentClone('team-registered-template');
				break;
			case 'joined-team':
				clone = getContentClone('joined-team-template');
				break;
		}
		delete urlParams.delete('type');
		fillupClone(clone, urlParams);
		container.appendChild(clone);
	} else {
		container.innerHTML =
			'<h1>Too lazy to add a meaning full easter egg</h1>';
	}
});

const fillupClone = (clone, config) => {
	for (const [key, value] of config) {
		console.log(key);
		clone.getElementById(key).innerText = value;
	}
};

function getContentClone(id) {
	return document.importNode(document.getElementById(id).content, true);
}
