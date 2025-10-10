const button = document.createElement("button");
button.textContent = "💀";
button.style.fontSize = "8em";
button.style.padding = "0.2em 0.4em";
button.style.borderRadius = "0.2em";
button.style.marginLeft = "200px";
document.body.appendChild(button);

let counter: number = 0;

let automaticCounter: number = 0;

const counterText = document.createElement("div");
counterText.style.fontSize = "3em";
counterText.innerText = "Click to reap souls";
counterText.style.marginLeft = "160px";
document.body.appendChild(counterText);

button.addEventListener("click", () => {
  counter += 1;
  counterText.style.fontSize = "4em";
  counterText.style.marginLeft = "240px";
  counterText.innerText = "Souls: " + counter;
});

function autoClick() {
  counter += 1;
  counterText.innerText = "Souls: " + counter;
  counterText.style.marginLeft = "240px";
  counterText.style.fontSize = "4em";
  automaticButton.innerText = "Souls per second: " + automaticCounter;
  automaticButton.style.marginLeft = "180px";
}

const automaticButton = document.createElement("button");
automaticButton.innerText = "Cick to automatically reap souls";
automaticButton.style.fontSize = "2em";
automaticButton.style.padding = "0.2em 0.4em";
automaticButton.style.borderRadius = "0.2em";
automaticButton.style.marginLeft = "100px";
document.body.appendChild(automaticButton);

automaticButton.addEventListener("click", () => {
  setInterval(autoClick, 1000);
  automaticCounter += 1;
});
