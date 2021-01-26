export function countdown() {
    var now = new Date();
    var eventdate = new Date('February 12, 2021 00:00:00');

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
    var date = new Date();
    var id;
    if (date.getUTCFullYear() == 2020 && date.getMonth() == 0) {
        switch (date.getDate()) {
            case 24:
                id = 'day1';
                break;
            case 25:
                id = 'day2';
                break;
            case 26:
                id = 'day3';
                break;
        }
    }
    document.getElementById(id).style.opacity = 1;
}