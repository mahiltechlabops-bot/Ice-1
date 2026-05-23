const noButton = document.getElementById("noButton");
const choiceHint = document.getElementById("choiceHint");
const particleField = document.getElementById("particleField");
let noEscapeCount = 0;

function createParticles() {
  const totalParticles = 18;

  for (let index = 0; index < totalParticles; index += 1) {
    const particle = document.createElement("span");
    const size = `${Math.random() * 12 + 4}px`;
    const left = `${Math.random() * 100}%`;
    const top = `${Math.random() * 100}%`;
    const delay = `${Math.random() * 8}s`;
    const duration = `${Math.random() * 7 + 9}s`;

    particle.className = "particle";
    particle.style.setProperty("--size", size);
    particle.style.setProperty("--left", left);
    particle.style.setProperty("--top", top);
    particle.style.setProperty("--delay", delay);
    particle.style.setProperty("--duration", duration);
    particleField.appendChild(particle);
  }
}

function moveNoButton() {
  const maxX = window.innerWidth < 720 ? 70 : 160;
  const maxY = window.innerWidth < 720 ? 24 : 34;
  const offsetX = Math.round((Math.random() * maxX + 28) * (Math.random() > 0.5 ? 1 : -1));
  const offsetY = Math.round((Math.random() * maxY * 2) - maxY);
  const rotate = Math.round((Math.random() * 18) - 9);

  noButton.style.setProperty("--no-x", `${offsetX}px`);
  noButton.style.setProperty("--no-y", `${offsetY}px`);
  noButton.style.setProperty("--no-rotate", `${rotate}deg`);
}

function evadeNoButton(event) {
  event.preventDefault();
  noEscapeCount += 1;

  moveNoButton();

  if (noEscapeCount === 1) {
    choiceHint.textContent = "That answer keeps slipping away.";
  } else if (noEscapeCount === 2) {
    choiceHint.textContent = "Nice try. This page was made for yes.";
  } else {
    choiceHint.textContent = "The no button keeps running away.";
  }

  noButton.blur();
}

noButton.addEventListener("pointerenter", evadeNoButton);
noButton.addEventListener("pointerdown", evadeNoButton);
noButton.addEventListener("click", evadeNoButton);
noButton.addEventListener("focus", evadeNoButton);
noButton.addEventListener("touchstart", evadeNoButton, { passive: false });
noButton.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    evadeNoButton(event);
  }
});

createParticles();
