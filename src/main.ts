let counter: number = 0;
let automaticCounter: number = 0;
let SoulsPS: number = 0;
let displayedSPS: number = 0;

const basePrice: number = 10;
let priceIncrease: number = basePrice;

const button = document.createElement("button");
button.textContent = "💀";
button.style.fontSize = "8em";
button.style.padding = "0.2em 0.4em";
button.style.borderRadius = "0.2em";
button.style.marginLeft = "42%";
document.body.appendChild(button);

const counterText = document.createElement("div");
counterText.style.fontSize = "3em";
counterText.innerText = "Click to reap souls";
counterText.style.marginLeft = "40%";
document.body.appendChild(counterText);

button.addEventListener("click", () => {
  counter += 1;
  counterText.style.fontSize = "4em";
  counterText.style.marginLeft = "42%";
  counterText.innerText = "Souls: " + counter;
  automaticButton.disabled = counter < priceIncrease;
});

const automaticButton = document.createElement("button");
automaticButton.innerText = "Cick to buy Auto-Reaper Cost: " + priceIncrease +
  " | SPS: " + displayedSPS.toFixed(0);
automaticButton.style.fontSize = "2em";
automaticButton.style.padding = "0.2em 0.4em";
automaticButton.style.borderRadius = "0.2em";
automaticButton.style.marginLeft = "32%";
document.body.appendChild(automaticButton);
automaticButton.disabled = true;

automaticButton.addEventListener("click", () => {
  if (counter >= priceIncrease) {
    counter -= priceIncrease;

    automaticCounter += 1;
    const currentRate = automaticCounter;
    SoulsPS += currentRate;

    if (SoulsPS == 1) {
      displayedSPS = 1;
    } else {
      displayedSPS = Math.floor(
        (automaticCounter * (automaticCounter + 1) * (automaticCounter + 2)) /
          3,
      );
    }

    priceIncrease = Math.floor(basePrice * Math.pow(2, automaticCounter));

    counterText.innerText = "Souls: " + counter.toFixed(2);
    automaticButton.innerText = "Cick to buy Auto-Reaper Cost: " +
      priceIncrease + " | SPS: " + displayedSPS.toFixed(0);
  }

  let lastTime = performance.now();

  function autoClick(currentTime: number) {
    const elapsed = (currentTime - lastTime) / 1000;
    lastTime = currentTime;
    counter += elapsed * SoulsPS;
    counterText.innerText = "Souls: " + counter.toFixed(2);
    counterText.style.marginLeft = "42%";
    counterText.style.fontSize = "4em";
    automaticButton.innerText = "Cick to buy Auto-Reaper Cost: " +
      priceIncrease + " | SPS: " + displayedSPS.toFixed(0);
    automaticButton.style.marginLeft = "32%";
    automaticButton.disabled = counter < priceIncrease;
    requestAnimationFrame(autoClick);
  }

  requestAnimationFrame(autoClick);
});
