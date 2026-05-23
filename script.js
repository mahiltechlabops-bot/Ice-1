const proposalContent = {
  recipient: "My Forever Girl",
  headline: "Will You Marry Me?",
  subheadline: "Every memory, every prayer, and every soft little moment between us has led my heart to this one beautiful question.",
  microPromise: "No matter how many pages I could make about us, they would all end the same way: I want my forever to begin with you.",
  detailOne: "From the first smile to every late-night conversation, you became my favorite chapter.",
  detailTwo: "You are my peace, my home, my safe place, and the person I want beside me in every season.",
  detailThree: "I will keep choosing you with effort, loyalty, tenderness, and a heart that never gets tired of loving you.",
  detailFour: "The answer I dream of is simple, beautiful, and life-changing: yes.",
  noteTitle: "You are my once in a lifetime.",
  noteBody: "You made love feel calm, real, and worth protecting. With you, joy feels deeper, hope feels stronger, and the future feels like something I can hold with both hands. I do not just want more beautiful moments with you. I want the ordinary days, the difficult days, the victories, the quiet nights, and every little forever in between. So here is the question my whole heart has been carrying for you: will you marry me?",
  answerStatus: "The button is just a little sparkle. The real question is here, wrapped in every word I feel for you.",
  signature: "Forever Yours",
  storyTitle: "Every chapter keeps leading me back to you.",
  promiseTitle: "If you say yes, this is the life I want to build with you.",
  memoryTitle: "Every photo feels like a love letter I never want to lose.",
  memoryIntro: "These are the little moments my heart keeps returning to, because every version of happiness somehow starts with you."
};

const storyMoments = [
  {
    number: "01",
    title: "The beginning",
    body: "What started as simple moments slowly became the place where my heart felt most at home."
  },
  {
    number: "02",
    title: "The realization",
    body: "Somewhere between your kindness, your smile, and the way you made life softer, I knew I loved you deeply."
  },
  {
    number: "03",
    title: "The future",
    body: "Now every dream I have worth keeping includes your hand in mine and a lifetime still unfolding."
  }
];

const promisePoints = [
  {
    label: "Promise 01",
    title: "Choose you daily",
    body: "Not only in grand moments, but in the ordinary hours where real love is built."
  },
  {
    label: "Promise 02",
    title: "Protect our peace",
    body: "I want our love to feel safe, gentle, honest, and full of respect."
  },
  {
    label: "Promise 03",
    title: "Grow with you",
    body: "I will keep becoming better, listening better, and loving you with intention."
  }
];

const memoryMoments = [
  {
    src: "attachments/IMG_1407.JPG",
    alt: "A happy memory of the couple together",
    quote: "In your smile, I found the kind of peace I never want to live without."
  },
  {
    src: "attachments/IMG_1449.JPG",
    alt: "A sweet portrait memory of the couple",
    quote: "Every picture with you feels like proof that love can be gentle and real."
  },
  {
    src: "attachments/IMG_1452.JPG",
    alt: "A romantic memory of the couple together",
    quote: "You made ordinary moments feel beautiful enough to remember forever."
  },
  {
    src: "attachments/IMG_1453.JPG",
    alt: "A precious selfie memory of the couple",
    quote: "If my heart had a favorite view, it would look a lot like us."
  },
  {
    src: "attachments/IMG_1457.JPG",
    alt: "A warm black and white memory of the couple",
    quote: "With you, even the quietest moment carries a little bit of magic."
  },
  {
    src: "attachments/A0C68D29-FFF0-43DA-88F9-C67DE94D65FE.PNG",
    alt: "A cherished captured moment of the couple",
    quote: "Every memory with you becomes something my heart protects like treasure."
  },
  {
    src: "attachments/F88FDB84-7AD8-4F1D-BE78-673EC708272A.PNG",
    alt: "A beautiful memory of the couple together",
    quote: "No matter how many photos I keep, my favorite part will always be you in them."
  }
];

const fieldElements = document.querySelectorAll("[data-field]");
const notePanel = document.getElementById("notePanel");
const readLetterButton = document.getElementById("readLetterButton");
const celebrateYesButton = document.getElementById("celebrateYes");
const answerStatus = document.getElementById("answerStatus");
const particleField = document.getElementById("particleField");
const storyList = document.getElementById("storyList");
const promiseList = document.getElementById("promiseList");
const memoryGrid = document.getElementById("memoryGrid");

fieldElements.forEach((element) => {
  const key = element.dataset.field;
  if (!key || !(key in proposalContent)) {
    return;
  }

  element.textContent = proposalContent[key];
});

function renderStoryMoments() {
  const fragment = document.createDocumentFragment();

  storyMoments.forEach((moment) => {
    const item = document.createElement("article");
    item.className = "story-item";

    const index = document.createElement("span");
    index.className = "story-index";
    index.textContent = moment.number;

    const copy = document.createElement("div");
    copy.className = "story-copy";

    const title = document.createElement("h3");
    title.textContent = moment.title;

    const body = document.createElement("p");
    body.textContent = moment.body;

    copy.append(title, body);
    item.append(index, copy);
    fragment.appendChild(item);
  });

  storyList.appendChild(fragment);
}

function renderPromisePoints() {
  const fragment = document.createDocumentFragment();

  promisePoints.forEach((promise) => {
    const card = document.createElement("article");
    card.className = "promise-card";

    const label = document.createElement("span");
    label.textContent = promise.label;

    const title = document.createElement("h3");
    title.textContent = promise.title;

    const body = document.createElement("p");
    body.textContent = promise.body;

    card.append(label, title, body);
    fragment.appendChild(card);
  });

  promiseList.appendChild(fragment);
}

function renderMemoryMoments() {
  const fragment = document.createDocumentFragment();

  memoryMoments.forEach((memory, index) => {
    const card = document.createElement("figure");
    card.className = "memory-card";

    const frame = document.createElement("div");
    frame.className = "memory-card__frame";

    const image = document.createElement("img");
    image.className = "memory-card__image";
    image.src = memory.src;
    image.alt = memory.alt;
    image.loading = index < 2 ? "eager" : "lazy";
    image.decoding = "async";

    const caption = document.createElement("figcaption");
    caption.className = "memory-card__caption";

    const number = document.createElement("span");
    number.className = "memory-card__count";
    number.textContent = `Memory ${String(index + 1).padStart(2, "0")}`;

    const quote = document.createElement("blockquote");
    quote.textContent = memory.quote;

    frame.appendChild(image);
    caption.append(number, quote);
    card.append(frame, caption);
    fragment.appendChild(card);
  });

  memoryGrid.appendChild(fragment);
}

function createParticles() {
  const totalParticles = 24;

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

function burstFromButton(button) {
  const buttonRect = button.getBoundingClientRect();
  const centerX = `${buttonRect.left + buttonRect.width / 2}px`;
  const centerY = `${buttonRect.top + buttonRect.height / 2 + window.scrollY}px`;

  for (let index = 0; index < 18; index += 1) {
    const burst = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 18;
    const distance = 45 + Math.random() * 55;
    const x = `${Math.cos(angle) * distance}px`;
    const y = `${Math.sin(angle) * distance}px`;

    burst.className = "burst";
    burst.style.setProperty("--origin-x", centerX);
    burst.style.setProperty("--origin-y", centerY);
    burst.style.setProperty("--x", x);
    burst.style.setProperty("--y", y);
    document.body.appendChild(burst);

    burst.addEventListener("animationend", () => {
      burst.remove();
    });
  }
}

function celebrateYes() {
  document.body.classList.add("is-celebrating");
  answerStatus.textContent = "And if your answer is yes, I promise to spend my whole life making this the happiest beginning for us both.";
  celebrateYesButton.textContent = "Forever Starts Here";
  burstFromButton(celebrateYesButton);
}

readLetterButton.addEventListener("click", () => {
  notePanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

celebrateYesButton.addEventListener("click", celebrateYes);

renderStoryMoments();
renderPromisePoints();
renderMemoryMoments();
createParticles();

const shouldCelebrate = new URLSearchParams(window.location.search).get("yes") === "1";

if (shouldCelebrate) {
  celebrateYes();
}
