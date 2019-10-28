window.addEventListener('load', () => {
	var tabs = document.getElementsByClassName('tab');
	var mobileWindow = window.matchMedia('(max-width: 700px)');
	tabs[1].classList.add('active');

	for (let j = 0; j < tabs.length; j++) {
		tabs[j].addEventListener('click', setContent);
	}

	//tab buttons working
	function setContent(e) {
		for (var j = 0; j < tabs.length; j++) {
			tabs[j].classList.remove('active');
		}
		e.target.classList.add('active');
		for (var i = 0; i < tabs.length; i++) {
			if (tabs[i].classList.contains('active')) {
				document.getElementById('window').style.transform =
					'translateX(' + i * -100 + 'vw)';
				if (mobileWindow.matches && i < 3 && i > 0) {
					document.getElementById('navbar').style.transform =
						'translateX(' + (i - 1) * -33.3 + 'vw)';
				}
			}
		}
	}

	{
		let events = document.querySelectorAll('#events .card');
		events.forEach((event) => {
			event.addEventListener('click', (eve) => {
				eve.target.classList.toggle('turned');
			});
		});
	}
});
