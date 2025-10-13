let counter: number = 0;
let SoulsPS: number = 0;

let ownedA: number = 0;
let costA: number = 10;

let ownedB: number = 0;
let costB: number = 100;

let ownedC: number = 0;
let costC: number = 1000;

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

const upgradeA = document.createElement("button");
upgradeA.style.fontSize = "2em";
upgradeA.innerText = "Buy Soul-sickle | Cost: 10 Souls | Owned: 0";
upgradeA.style.marginLeft = "33%";
document.body.appendChild(upgradeA);
upgradeA.disabled = true;

const UpgradeB = document.createElement("button");
UpgradeB.style.fontSize = "2em";
UpgradeB.innerText = "Buy Soul factory | cost: 100 Souls | Owned: 0";
UpgradeB.style.marginLeft = "32%";
document.body.appendChild(UpgradeB);
UpgradeB.disabled = true;

const UpgradeC = document.createElement("button");
UpgradeC.style.fontSize = "2em";
UpgradeC.innerText = "Buy Grim Reaper | cost: 1000 Souls | Owned: 0";
UpgradeC.style.marginLeft = "31%";
document.body.appendChild(UpgradeC);
UpgradeC.disabled = true;

button.addEventListener("click", () => {
  counter += 1;
  updateDisplay();
});

function UpgradeAFunc() {
  if (counter >= costA) {
    counter -= costA;
    ownedA += 1;
    SoulsPS += 0.1;
    costA = Math.floor(costA * 1.15);
    upgradeA.innerText =
      `Buy Soul-sickle | Cost: ${costA} Souls | Owned: ${ownedA}`;
    updateDisplay();
  }
}

function UpgradeBFunc() {
  if (counter >= costB) {
    counter -= costB;
    ownedB += 1;
    SoulsPS += 2.0;
    costB = Math.floor(costB * 1.15);
    UpgradeB.innerText =
      `Buy Soul Factory | Cost: ${costB} Souls | Owned: ${ownedB}`;
    updateDisplay();
  }
}

function UpgradeCFunc() {
  if (counter >= costC) {
    counter -= costC;
    ownedC += 1;
    SoulsPS += 50.0;
    costC = Math.floor(costC * 1.15);
    UpgradeC.innerText =
      `Buy Grim Reaper | Cost: ${costC} Souls | Owned: ${ownedC}`;
    updateDisplay();
  }
}

upgradeA.addEventListener("click", () => {
  UpgradeAFunc();
});
UpgradeB.addEventListener("click", () => {
  UpgradeBFunc();
});
UpgradeC.addEventListener("click", () => {
  UpgradeCFunc();
});

function updateDisplay() {
  counterText.innerText = "Souls: " + counter.toFixed(2);
  counterText.style.marginLeft = "43%";
  SPSText.innerText = "Souls per second: " + SoulsPS.toFixed(1);
  SPSText.style.marginLeft = "42%";

  upgradeA.disabled = counter < costA;
  UpgradeB.disabled = counter < costB;
  UpgradeC.disabled = counter < costC;
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
