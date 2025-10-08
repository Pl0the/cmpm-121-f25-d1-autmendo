const button = document.createElement("button");
button.textContent = "Click me!!!";
button.style.fontSize = "8em";
document.body.appendChild(button);

let counter = 0;

const counterText = document.createElement("div");
counterText.style.fontSize = "8em";
counterText.innerText = "clicks: 0";
document.body.appendChild(counterText);

button.addEventListener("click", () => {
  counter += 1;
  counterText.innerText = "clicks: " + counter;
  console.log("button clicked!");
});
