import '../less/styles.less';

import { flicker } from './imports/flicker';
import { animateMatrix } from './imports/matrix';
import { TabWatcher } from './imports/tabs';
import { handleSelectChange, watchTabs, confPass} from './imports/register';
import { countdown } from './imports/timer';

import 'vanilla-tilt';

window.addEventListener('load', () => {
	document.querySelector('header').style.height =
		document.querySelector('.tab').offsetHeight + 4 + 'px';

	document.querySelector('#window>.band').classList.toggle('active');

	VanillaTilt.init(document.querySelector('#banner .image img'), {
		reverse: true,
		max: 24,
		speed: 400,
		glare: true,
		scale: 1.2,
		gyroscope: true,
		gyroscopeMinAngleX: -45,
		gyroscopeMaxAngleX: 45,
		gyroscopeMinAngleY: -45,
		gyroscopeMaxAngleY: 45,
	});

	const tw = new TabWatcher('.tab');
	tw.watchTabs();
	tw.watchKeys();
	tw.watchSwipes();

	{
		let events = document.querySelectorAll('#events .card');
		events.forEach((event) => {
			event.addEventListener('click', (eve) => {
				eve.target.classList.toggle('turned');
			});
		});
	}
	animateMatrix('#matrix-effect', 'TEAM ISTE');
	flicker();
	countdown();

	handleSelectChange();
	watchTabs();
});

confPass();

document.getElementById('select').addEventListener('change', () => {
	handleSelectChange();
});
