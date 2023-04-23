const btn = document.querySelector("button");
const generate = document.querySelector(".generate");
const guess = document.querySelector(".guess");

const you = document.querySelector(".select-number");
const machine = document.querySelector(".random-number");
const victory = document.querySelector(".victory");

const hidden = document.querySelector(".hidden");

hidden.style.display = "none";

function result(event) {
  event.preventDefault();
  hidden.style.display = "contents";

  const genNum = parseInt(generate.value);
  const guessNum = parseInt(guess.value);

  const random = parseInt(Math.ceil(Math.random() * genNum));

  you.innerText = guessNum;
  machine.innerText = random;

  if (guessNum === random) {
    victory.innerText = "You win!";
    victory.style.fontWeight = "600";
  } else {
    victory.innerText = "You lost!";
    victory.style.fontWeight = "100";
  }
}

btn.addEventListener("click", result);
