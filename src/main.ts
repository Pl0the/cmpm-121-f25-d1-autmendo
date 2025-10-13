let counter: number = 0;
let SoulsPS: number = 0;

let firstClick = true;

interface Item {
  name: string;
  cost: number;
  owned: number;
  soulsPerSecond: number;
  description: string;
}

const clickSound = new Audio("/src/mixkit-cool-interface-click-tone-2568.wav");
clickSound.volume = 1;

const music = new Audio("/src/scary-horror-music-351315.mp3");
music.volume = 0.04;
music.loop = true;

const availableItems: Item[] = [
  {
    name: "Soul-sickle",
    cost: 10,
    owned: 0,
    soulsPerSecond: 0.1,
    description: "A simple tool to harvest souls",
  },
  {
    name: "Soul Factory",
    cost: 100,
    owned: 0,
    soulsPerSecond: 2.0,
    description: "A Factory that mass harvests souls",
  },
  {
    name: "Grim Reaper",
    cost: 1000,
    owned: 0,
    soulsPerSecond: 50.0,
    description: "The Iconic Soul Reaper",
  },
  {
    name: "Soul Tyrant",
    cost: 10000,
    owned: 0,
    soulsPerSecond: 200.0,
    description: "A Powerful Overlord of Soul Harvesting",
  },
  {
    name: "Soul God",
    cost: 100000,
    owned: 0,
    soulsPerSecond: 1000.0,
    description: "The ultimate being of souls.",
  },
];

document.body.style.textAlign = "center";
document.body.style.backgroundImage = "url('./src/thumb-1920-699366.jpg')";
document.body.style.backgroundSize = "cover";

document.body.style.color = "white";
document.body.style.textShadow = "4px 4px 4px #2003dbff";

const buttonImage = document.createElement("img");
buttonImage.src = "./src/blue-skull.jpg";
buttonImage.style.width = "20em";
buttonImage.style.height = "25m";
buttonImage.style.verticalAlign = "middle";
buttonImage.style.border = "5px solid blue";

const button = document.createElement("button");
button.style.border = "none";
button.style.background = "none";
button.style.cursor = "pointer";

button.appendChild(buttonImage);
document.body.appendChild(button);

const counterText = document.createElement("div");
counterText.style.fontSize = "3em";
counterText.innerText = "Click the Blue Skull above to begin harvesting.";
document.body.appendChild(counterText);

const SPSText = document.createElement("div");
SPSText.style.fontSize = "2em";
SPSText.innerText = "Souls per second: 0";
document.body.appendChild(SPSText);

const itemButtons: HTMLButtonElement[] = [];

availableItems.forEach((item) => {
  const itemContainer = document.createElement("div");
  itemContainer.style.fontSize = "1.3em";

  const itemButton = document.createElement("button");
  itemButton.style.fontSize = "2em";
  itemButton.style.cursor = "pointer";

  itemButton.style.border = "3px solid black";

  itemButton.innerText =
    `Buy ${item.name} | Cost: ${item.cost} Souls | Owned: ${item.owned}`;
  itemButton.disabled = true;

  const itemDesc = document.createElement("div");
  itemDesc.style.fontSize = "1.2em";
  itemDesc.innerText = item.description;

  itemContainer.appendChild(itemButton);
  itemContainer.appendChild(itemDesc);
  document.body.appendChild(itemContainer);

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

  if (firstClick) {
    counterText.innerText = "Souls: " + counter.toFixed(2);
    firstClick = false;
    requestAnimationFrame(autoClick);
    music.play();
  } else {
    updateDisplay();
  }
  clickSound.currentTime = 0;
  clickSound.play();
});

function updateDisplay() {
  counterText.innerText = "Souls: " + counter.toFixed(2);
  SPSText.innerText = "Souls per second: " + SoulsPS.toFixed(1);

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
