let mobileWindow;
export class TabWatcher {
	constructor(query) {
		this.tabs = document.querySelectorAll(query);

		// making circular deque
		for (let i = 0; i < this.tabs.length - 1; ++i) {
			this.tabs[i].nextTab = this.tabs[i + 1];
		}
		for (let i = 1; i < this.tabs.length; ++i) {
			this.tabs[i].prevTab = this.tabs[i - 1];
		}
		this.tabs[0].prevTab = this.tabs[this.tabs.length - 1];
		this.tabs[this.tabs.length - 1].nextTab = this.tabs[0];

		mobileWindow = window.matchMedia('(max-width: 700px)');

		this.previouslyActive = this.tabs[2];
		this.setActiveTab(this.tabs[0]);
	}
	watchTabs() {
		this.tabs.forEach((tab) => {
			tab.addEventListener('click', (event) => {
				this.setActiveTab(event.target);
			});
		});
	}
	watchKeys() {
		window.addEventListener('keydown', (event) => {
			switch (event.code) {
				case 'ArrowRight':
					this.setActiveTab(this.previouslyActive.nextTab);
					break;
				case 'ArrowLeft':
					this.setActiveTab(this.previouslyActive.prevTab);
					break;
				default:
					break;
			}
		});
	}
	setActiveTab(tab) {
		if (tab != this.previouslyActive) {
			// update active tab
			this.previouslyActive.classList.remove('active');
			tab.classList.add('active');

			// center tab
			if (mobileWindow.matches) {
				navbar.style.transform = `translateX(${window.innerWidth / 2 -
					(tab.offsetWidth / 2 + tab.offsetLeft)}px)`;
			}

			document
				.getElementById(tab.dataset.toggles)
				.classList.add('active');
			document
				.getElementById(this.previouslyActive.dataset.toggles)
				.classList.remove('active');
			this.previouslyActive = tab;

			if (tab.innerHTML == 'events') {
				document.querySelector('#events .band').classList.add('active');
			}
		}
	}
}
