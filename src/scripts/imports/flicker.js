//find the text i want to flicker
const text = document.getElementById('flicker');

export function flicker() {
	//logic to invert the opacity
	text.classList.toggle('clear');

	setTimeout(flicker, Math.random() * 500 + 1);
}
