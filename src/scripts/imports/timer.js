export function countdown() {
	var now = new Date();
	var eventdate = new Date('January 24, 2020 21:00:00');

	var currenttime = now.getTime();
	var eventtime = eventdate.getTime();

	var remTime = eventtime - currenttime;

	var s = Math.floor(remTime / 1000);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);

	h %= 24;
	// h += 8;
	m %= 60;
	s %= 60;

	h = h < 10 ? '0' + h : h;
	m = m < 10 ? '0' + m : m;
	s = s < 10 ? '0' + s : s;

	if (remTime > 0) {
		document.getElementById('days').textContent = d;
		document.getElementById('hours').textContent = h;
		document.getElementById('mins').textContent = m;
		document.getElementById('secs').textContent = s;
	} else {
		document.getElementById('days').textContent = '00';
		document.getElementById('hours').textContent = '00';
		document.getElementById('mins').textContent = '00';
		document.getElementById('secs').textContent = '00';
	}

	setTimeout(countdown, 1000);
}

export function highlight() {
	var today = new Date();
	var day1 = new Date(2020, 0, 24);
	var day2 = new Date(2020, 0, 25);
	var day3 = new Date(2020, 0, 26);
	var day4 = new Date(2020, 0, 27);
	if (today.getTime() > day1.getTime() && today.getTime() < day2.getTime()) {
		document.getElementById('day1').style.opacity = 1;
	}
	if (today.getTime() > day2.getTime() && today.getTime() < day3.getTime()) {
		document.getElementById('day2').style.opacity = 1;
	}
	if (today.getTime() > day3.getTime() && today.getTime() < day4.getTime()) {
		document.getElementById('day3').style.opacity = 1;
	}
}
