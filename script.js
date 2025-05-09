const pages = [
	"01 - Expanding Cards",
	"02 - Progress Steps",
	"03 - Rotating Navigation Animation",
	"04 - Hidden Search Widget",
	"05 - Blurry Loading",
	"06 - Scroll Animation",
	"07 - Split Landing Page",
	"08 - Form Input Wave",
	"09 - Sound Board",
	"10 - Dad Jokes",
	"11 - Event KeyCodes",
	"12 - FAQ Collapse",
	"13 - Random Choice Picker",
	"14 - Animated Navigation",
	"15 - Incrementing Counter",
	"16 - Drink Water",
	"17 - Movie App",
	"18 - Background Slider",
	"19 - Theme Clock",
	"20 - Button Ripple Effect",
	"21 - Drag N Drop",
	"22 - Drawing App",
	"23 - Kinetic Loader",
	"24 - Content Placeholder",
	"25 - Sticky Navigation",
	"26 - Double Vertical Slider",
	"27 - Toast Notification",
	"28 - GitHub Profile",
	"29 - Double Click Heart",
	"30 - Auto Text Effect",
	"31 - Password Generator",
	"32 - Good, Cheap, Fast",
	"33 - Notes App",
	"34 - Animated Countdown",
	"35 - Image Carousel",
	"36 - Hoverboard",
	"37 - Pokédex",
	"38 - Mobile Tab Navigation",
	"39 - Password Strength Background",
	"40 - 3D Boxes Background",
	"41 - Verify Account",
	"42 - Live User Filter",
	"43 - Feedback UI Design",
	"44 - Custom Range Slider",
	"45 - Netflix Mobile Navigation",
	"46 - Quiz App",
	"47 - Testimonial Box",
	"48 - Random Image Feed",
	"49 - Todo List",
	"50 - Insect Catch Game",
];
let counter = 0;
const ul = document.querySelector("ul");

function change(a) {
	if (a === "next") {
		counter === pages.length - 1 ? (counter = counter) : counter++;
	} else if (a === "prev") {
		counter === 0 ? (counter = counter) : counter--;
	} else {
		counter = parseInt(a.slice(0, 2)) - 1;
	}

	document.querySelector("iframe").src = pages[counter] + "/index.html";
	document.querySelector("h1").innerHTML = pages[counter];
}

ul.innerHTML = pages
	.map(
		(element) =>
			`<li><a href='${element}/index.html' target='iframe' onclick='change("${element}")'>${element}</a></li>`
	)
	.join("\n");
