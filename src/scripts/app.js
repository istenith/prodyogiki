import '../less/styles.less';

import { flicker } from './imports/flicker';
import { animateMatrix } from './imports/matrix';
import { TabWatcher } from './imports/tabs';
import { handleSelectChange, watchTabs, confPass} from './imports/register';
import { countdown,highlight } from './imports/timer';

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


	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./service-worker.js').then(registration => {	 
			console.log('SW registered: ', registration);
	 		}).catch(registrationError => { 
				console.log('SW registration failed: ', registrationError);
		});
	}

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
	highlight();

	handleSelectChange();
	watchTabs();
});

confPass();

document.getElementById('select').addEventListener('change', () => {
	handleSelectChange();
});
