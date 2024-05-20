var quotes = [
	"The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
	"The way to get started is to quit talking and begin doing. - Walt Disney",
	"Life is what happens when you're busy making other plans. - John Lennon",
	"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
	"It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
];

let lastRandomIndex = -1;
function generateQuote() {
	let randomIndex;
	while (true) {
		randomIndex = Math.floor(Math.random() * quotes.length);
		if (randomIndex !== lastRandomIndex) {
			break;
		}
	}
	lastRandomIndex = randomIndex;
	document.getElementById("quote").textContent = quotes[randomIndex];
}
