const button = document.createElement("button");
button.textContent = "💀";
button.style.fontSize = "8em";
button.style.padding = "0.2em 0.4em";
button.style.borderRadius = "0.2em";
button.style.marginLeft = "40px";
document.body.appendChild(button);

let counter: number = 0;

const counterText = document.createElement("div");
counterText.style.fontSize = "3em";
counterText.innerText = "Click to gain Skulls";
document.body.appendChild(counterText);

button.addEventListener("click", () => {
  counter += 1;
  counterText.style.fontSize = "4em";
  counterText.style.marginLeft = "80px";
  counterText.innerText = "Skulls " + counter;
});
