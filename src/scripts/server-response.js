import '../less/server-response.less';
window.addEventListener('load', function() {
	const container = document.getElementById('container');
	let template;
	let clone;
	if (getUrlVars()) {
		switch (getUrlVars()['type']) {
			case 'error':
				template = document.querySelector('template#error');
				clone = document.importNode(template.content, true);
				clone.querySelector('#console').innerText = decodeURI(
					getUrlVars()['error'],
				);
				break;
			case 'player-registered':
				template = document.querySelector('template#player-registered');
				clone = document.importNode(template.content, true);
				clone.querySelector('#name').innerText = decodeURI(
					getUrlVars()['name'],
				);
				break;
			case 'team-registered':
				template = document.querySelector('template#team-registered');
				clone = document.importNode(template.content, true);
				clone.querySelector('#team-name').innerText = decodeURI(
					getUrlVars()['team-name'],
				);
				clone.querySelector('#event').innerText = decodeURI(
					getUrlVars()['event'],
				);
				clone.querySelector('#team-id').innerText = decodeURI(
					getUrlVars()['team-id'],
				);
				break;
		}
		container.appendChild(clone);
	} else {
		container.innerHTML =
			'<h1>Too lazy to add a meaning full easter egg</h1>';
	}
});
function getUrlVars() {
	/* usage
		var number = getUrlVars()["x"];
		var mytext = getUrlVars()["text"];
	*/
	var vars = {};
	var parts = window.location.href.replace(
		/[?&]+([^=&]+)=([^&]*)/gi,
		function(m, key, value) {
			vars[key] = value;
		},
	);
	return vars;
}
function getUrlParam(parameter, defaultvalue) {
	/* usage
		var mytext = getUrlParam('text','Empty');
	*/
	var urlparameter = defaultvalue;
	if (window.location.href.indexOf(parameter) > -1) {
		urlparameter = getUrlVars()[parameter];
	}
	return urlparameter;
}
