// const buttonRight = document.querySelector("#buttonRight");
// const buttonLeft = document.querySelector("#buttonLeft");

// buttonRight.onclick = function () {
// 	document.querySelector("#otherProjectsCarousell").scrollLeft += 20;
// };
// buttonLeft.onclick = function () {
// 	document.querySelector("#otherProjectsCarousell").scrollLeft -= 20;
// };
const buttonRight = document.querySelector("#buttonRight");
const buttonLeft = document.querySelector("#buttonLeft");
const carousell = document.querySelector("#otherProjectsCarousell");

let scrollSpeed = 0;

// Function to update the scroll position based on the speed
function updateScroll() {
	carousell.scrollLeft += scrollSpeed;
	requestAnimationFrame(updateScroll);
}

// Event listener for buttonRight click
buttonRight.addEventListener("mousedown", () => {
	scrollSpeed = 3; // Adjust the speed as needed
	updateScroll();
});

// Event listener for buttonLeft click
buttonLeft.addEventListener("mousedown", () => {
	scrollSpeed = -3; // Adjust the speed as needed
	updateScroll();
});

// Event listener for mouse up
document.addEventListener("mouseup", () => {
	// Reset the scroll speed when the mouse is released
	scrollSpeed = 0;
});
