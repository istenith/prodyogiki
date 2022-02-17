export function animateMatrix(query, text) {
	// geting canvas by id c
	let canvas = document.querySelector(query);
	let ctx = canvas.getContext('2d');

	//making the canvas full screen
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	//chinese characters - taken from the unicode charset
	let matrix = text.split('');
	//converting the string into an array of single characters

	let font_size = 21;
	let columns = Math.floor(canvas.width / font_size); //number of columns for the rain
	//an array of drops - one per column
	let drops = new Array(columns).fill(1);
	//1 = y co-ordinate of the drop(same for every drop initially)

	//drawing the characters
	function draw() {
		//Black BG for the canvas
		//translucent BG to show trail
		ctx.fillStyle = 'rgba(24, 24, 24, 0.14)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = '#c0c0c0'; //green text
		ctx.font = font_size + 'px monospace';
		//looping over drops
		for (let i = 0; i < drops.length; i++) {
			//a random chinese character to print
			let text = matrix[Math.floor(Math.random() * matrix.length)];
			//x = i*font_size, y = value of drops[i]*font_size
			ctx.fillText(text, i * font_size, drops[i] * font_size);

			//sending the drop back to the top randomly after it has crossed the screen
			//adding a randomness to the reset to make the drops scattered on the Y axis
			if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
				drops[i] = 0;

			//incrementing Y coordinate
			drops[i]++;
		}
	}

	setInterval(draw, 50);
}
