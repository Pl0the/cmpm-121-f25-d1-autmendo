let counter: number = 0;
let SoulsPS: number = 0;

interface Item {
  name: string;
  cost: number;
  owned: number;
  soulsPerSecond: number;
}

const clickSound = new Audio("./src/mixkit-cool-interface-click-tone-2568.wav");
clickSound.volume = 1;

const availableItems: Item[] = [
  { name: "Soul-sickle", cost: 10, owned: 0, soulsPerSecond: 0.1 },
  { name: "Soul Factory", cost: 100, owned: 0, soulsPerSecond: 2.0 },
  { name: "Grim Reaper", cost: 1000, owned: 0, soulsPerSecond: 50.0 },
];

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

const SPSText = document.createElement("div");
SPSText.style.fontSize = "2em";
SPSText.innerText = "Souls per second: 0";
SPSText.style.marginLeft = "43.5%";
document.body.appendChild(SPSText);

const itemButtons: HTMLButtonElement[] = [];

availableItems.forEach((item) => {
  const itemButton = document.createElement("button");
  itemButton.style.fontSize = "2em";
  itemButton.innerText =
    `Buy ${item.name} | Cost: ${item.cost} Souls | Owned: ${item.owned}`;
  itemButton.style.marginLeft = "30%";
  document.body.appendChild(itemButton);
  itemButton.disabled = true;

  itemButton.addEventListener("click", () => {
    if (counter >= item.cost) {
      counter -= item.cost;
      item.owned += 1;
      SoulsPS += item.soulsPerSecond;
      item.cost = Math.floor(item.cost * 1.15);
      itemButton.innerText =
        `Buy ${item.name} | Cost: ${item.cost} Souls | Owned: ${item.owned}`;
      updateDisplay();
    }
  });

  itemButtons.push(itemButton);
});

button.addEventListener("click", () => {
  counter += 1;
  updateDisplay();
  clickSound.currentTime = 0;
  clickSound.play();
});

function updateDisplay() {
  counterText.innerText = "Souls: " + counter.toFixed(2);
  counterText.style.marginLeft = "43%";
  SPSText.innerText = "Souls per second: " + SoulsPS.toFixed(1);
  SPSText.style.marginLeft = "42%";

  itemButtons.forEach((btn, idx) => {
    btn.disabled = counter < availableItems[idx].cost;
  });
}

let last = performance.now();

function autoClick(curr: number) {
  const elapsed = (curr - last) / 1000;
  last = curr;

  counter += elapsed * SoulsPS;
  updateDisplay();

  requestAnimationFrame(autoClick);
}

requestAnimationFrame(autoClick);
