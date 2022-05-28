/**
 * Project requirments:
 * - Change the background (Hex) color by clicking a button
 * - Display the output color into a input field
 * - Copy to clipboard the code
 * - Display toast message after clicking the copy button
 */

// Global Variable
let div = null;

// create onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  let output = document.getElementById("output");
  const copyBtn = document.getElementById("copyBtn");
  const changeBtn = document.getElementById("changeBtn");

  changeBtn.addEventListener("click", function () {
    root.style.backgroundColor = generateHexColor();
    output.value = generateHexColor();
  });

  // copy the code
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    if (div !== null) {
      div.remove();
      div = null;
    }
    generateToastMessage(output.value + " copied");
  });
}

// random color generator function
function generateHexColor() {
  // return decimal number to hexa decimal(#000000, #ffffff)
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  // 255.toString(16) = FF, (255, 255, 255 = #FFFFFF)
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// Generate Toast Message
function generateToastMessage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in";

  // after clicking the toast div msg will remove
  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });

  document.body.appendChild(div);
}
