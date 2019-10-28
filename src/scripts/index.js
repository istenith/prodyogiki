window.addEventListener('load', () => {
	var mobileWindow = window.matchMedia('(max-width: 700px)');
	let navbar = document.getElementById('navbar');

	var tabs = document.querySelectorAll('.tab');

	var previouslyActive = tabs[0];
	setActiveTab(tabs[1]);

	document.querySelector('header').style.height = tabs[0].offsetHeight + 'px';

	tabs.forEach(tab => {
		tab.addEventListener('click', setContent);
	});

	//tab buttons working
	function setContent(eve) {
		setActiveTab(eve.target);
	}

	function setActiveTab(tab) {
		if (tab != previouslyActive) {
			// update active tab
			previouslyActive.classList.remove('active');
			tab.classList.add('active');

			// center tab
			navbar.style.left =
				window.innerWidth / 2 -
				(tab.offsetWidth / 2 + tab.offsetLeft) +
				'px';

			document.getElementById(tab.dataset.toggles).classList.add('active');
			document
				.getElementById(previouslyActive.dataset.toggles)
				.classList.remove('active');
			previouslyActive = tab;
		}
	}

	{
		let events = document.querySelectorAll('#events .card');
		events.forEach(event => {
			event.addEventListener('click', eve => {
				eve.target.classList.toggle('turned');
			});
		});
	}
});
