import md5 from 'blueimp-md5';
import encodeUrl from 'encodeurl';

export function Gravatar(config) {
	let hash = md5(config.email.toLowerCase());
	let baseUrl = `https://www.gravatar.com/avatar/${hash}`;

	// appending options
	let options = [];
	if (config.rating) {
		options.push(`r=${config.rating}`);
	}
	if (config.size) {
		options.push(`s=${config.size}`);
	}
	if (config.defaultImageUrl) {
		options.push(`d=${encodeUrl(config.defaultImageUrl)}`);
	}

	baseUrl += '?' + options.join('&');

	config.imageElement.src = baseUrl;
}
