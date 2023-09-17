const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readButton = document.getElementById("read");
const toggleButton = document.getElementById("toggle");
const closeButton = document.getElementById("close");

const data = [
  {
    image: "https://images.unsplash.com/photo-1624948465027-6f9b51067557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTg4NjR8MHwxfHNlYXJjaHwxfHx0aGlyc3R5fGVufDB8fHx8MTY5NDkyOTg1MXww&ixlib=rb-4.0.3&q=80&w=400",
    text: "I'm Thirsty",
  },
  {
    image: "https://images.unsplash.com/photo-1564228511783-821f2f547f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTg4NjR8MHwxfHNlYXJjaHwzfHxodW5ncnl8ZW58MHx8fHwxNjk0OTMwMzY4fDA&ixlib=rb-4.0.3&q=80&w=400",
    text: "I'm Hungry",
  },
  {
    image: "https://images.unsplash.com/photo-1621252179027-94459d278660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTg4NjR8MHwxfHNlYXJjaHw3fHx0aXJlZHxlbnwwfHx8fDE2OTQ5MzA0MDR8MA&ixlib=rb-4.0.3&q=80&w=400",
    text: "I'm Tired",
  },
  {
    image: "https://images.unsplash.com/photo-1562176952-3b39db7af417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTg4NjR8MHwxfHNlYXJjaHw0fHxodXJ0fGVufDB8fHx8MTY5NDkzMDQ0N3ww&ixlib=rb-4.0.3&q=80&w=400",
    text: "I'm Hurt",
  },
  {
    image: "https://images.unsplash.com/photo-1590698933947-a202b069a861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTg4NjR8MHwxfHNlYXJjaHwxN3x8aGFwcHl8ZW58MHx8fHwxNjk0OTMwNTAyfDA&ixlib=rb-4.0.3&q=80&w=400",
    text: "I'm Happy",
  },
  {
    image: "https://images.unsplash.com/photo-1609852234838-147db6815968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTg4NjR8MHwxfHNlYXJjaHw1fHxhbmdyeXxlbnwwfHx8fDE2OTQ5MzA1Mzd8MA&ixlib=rb-4.0.3&q=80&w=400",
    text: "I'm Angry",
  },
  {
    image: "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTg4NjR8MHwxfHNlYXJjaHwxNnx8c2FkfGVufDB8fHx8MTY5NDkzMDU4M3ww&ixlib=rb-4.0.3&q=80&w=400",
    text: "I'm Sad",
  },
  {
    image: "https://images.unsplash.com/photo-1522343728099-436fe0bc856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTg4NjR8MHwxfHNlYXJjaHwyM3x8c2NhcmVkfGVufDB8fHx8MTY5NDkzMDYzOXww&ixlib=rb-4.0.3&q=80&w=400",
    text: "I'm Scared",
  },
  {
    image: "https://images.unsplash.com/photo-1557176707-aa46c0e347a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTg4NjR8MHwxfHNlYXJjaHw5fHxvdXRzaWRlfGVufDB8fHx8MTY5NDkzMDY4Mnww&ixlib=rb-4.0.3&q=80&w=400",
    text: "I Want To Go Outside",
  },
  {
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTg4NjR8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8fHx8MTY5NDkzMDcyMnww&ixlib=rb-4.0.3&q=80&w=400",
    text: "I Want To Go Home",
  },
  {
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTg4NjR8MHwxfHNlYXJjaHwyfHxzY2hvb2x8ZW58MHx8fHwxNjk0OTMwNzQ2fDA&ixlib=rb-4.0.3&q=80&w=400",
    text: "I Want To Go To School",
  },
  {
    image: "https://images.unsplash.com/photo-1442458370899-ae20e367c5d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0MTg4NjR8MHwxfHNlYXJjaHwzfHxncmFuZG1hfGVufDB8fHx8MTY5NDkzMDc3MXww&ixlib=rb-4.0.3&q=80&w=400",
    text: "I Want To Go To Grandmas",
  },
];

function createBox(item) {
  const box = document.createElement("div");
  const { image, text } = item;
  box.classList.add("box");
  box.innerHTML = `
    <img src='${image}' alt="${text}"/>
    <p class="info">${text}</p>
    `;
  box.addEventListener("click", () => handleSpeech(text, box));
  main.appendChild(box);
}

data.forEach(createBox);

let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    voicesSelect.appendChild(option);
  });
}

function handleSpeech(text, box) {
  setTextMessage(text);
  speakText();
  box.classList.add("active");
  setTimeout(() => box.classList.remove("active"), 800);
}

const message = new SpeechSynthesisUtterance();

function setTextMessage(text) {
  message.text = text;
}

function speakText() {
  speechSynthesis.speak(message);
}

function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// Event Listeners
toggleButton.addEventListener("click", () => {
  document.getElementById("text-box").classList.toggle("show");
});
closeButton.addEventListener("click", () => {
  document.getElementById("text-box").classList.remove("show");
});
speechSynthesis.addEventListener("voiceschanged", getVoices);
voicesSelect.addEventListener("change", setVoice);
readButton.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();