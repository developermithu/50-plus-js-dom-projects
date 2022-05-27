/**
 * Project requirments:
 * - Change the background color by generating random RGB color by clicking a button
 */

// step 1 - create onload handler
// step 2 - random color generator function
// step 3 - collect alll nessecery reference
// step 4 - handle the click event

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("btn");
  const input = document.getElementById("input");

  btn.addEventListener("click", function () {
    root.style.backgroundColor = generateRGBColor();
    input.value = generateRGBColor()
  });
}

// rgb(0, 0, 0), rgb(255, 255, 255)
// return random number between 0 and 255
function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
