const button = document.createElement("button");
button.textContent = "💀";
button.style.fontSize = "8em";
button.style.padding = "0.2em 0.4em";
button.style.borderRadius = "0.2em";
button.style.marginLeft = "200px";
document.body.appendChild(button);

let counter: number = 0;

let automaticCounter: number = 0;

let SoulsPS: number = 0;

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

const automaticButton = document.createElement("button");
automaticButton.innerText = "Cick to automatically reap souls";
automaticButton.style.fontSize = "2em";
automaticButton.style.padding = "0.2em 0.4em";
automaticButton.style.borderRadius = "0.2em";
automaticButton.style.marginLeft = "100px";
document.body.appendChild(automaticButton);

automaticButton.addEventListener("click", () => {
  automaticCounter += 1;
  const currentRate = automaticCounter;
  SoulsPS += currentRate;

  let lastTime = performance.now();

  function autoClick(currentTime: number) {
    const elapsed = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    counter += elapsed * currentRate;
    counterText.innerText = "Souls: " + counter.toFixed(2);
    counterText.style.marginLeft = "220px";
    counterText.style.fontSize = "4em";
    automaticButton.innerText = "Souls per second: " + SoulsPS.toFixed(0);
    automaticButton.style.marginLeft = "180px";
    requestAnimationFrame(autoClick);
  }

  requestAnimationFrame(autoClick);
});
