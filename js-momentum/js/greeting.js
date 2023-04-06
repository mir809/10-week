const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";

const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

const date = new Date();

const hourInt = date.getHours();

function paintGreetings(greetingName) {
  if (hourInt < 12 && hourInt >= 5) {
    greeting.innerText = `Good Morning ${greetingName} !`;
  } else if (hourInt < 17 && hourInt >= 12) {
    greeting.innerText = `Good Afternoon ${greetingName} !`;
  } else if (hourInt < 22 && hourInt >= 17) {
    greeting.innerText = `Good Evening ${greetingName} !`;
  } else if (hourInt < 5 || hourInt >= 22) {
    greeting.innerText = `Good Night ${greetingName} !`;
  }

  greeting.classList.remove(HIDDEN);
}

function loginSubmit(info) {
  loginForm.classList.add(HIDDEN);

  img.classList.remove("filter");

  todoPart.classList.remove(HIDDEN);
  todoListBtn.classList.remove(HIDDEN);
  logOutBtn.classList.remove(HIDDEN);
  quotePart.classList.remove("low");

  info.preventDefault();

  const inputName = loginInput.value;

  localStorage.setItem(USERNAME_KEY, inputName);

  paintGreetings(inputName);

  for (let index = 0; index < 50; index++) {
    setTimeout(makeSnow, 500 * index);
  }
}

if (savedUsername === null) {
  todoPart.classList.add(HIDDEN);
  todoListBtn.classList.add(HIDDEN);
  logOutBtn.classList.add(HIDDEN);

  img.classList.add("filter");

  loginForm.classList.remove(HIDDEN);

  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreetings(savedUsername);

  for (let index = 0; index < 50; index++) {
    setTimeout(makeSnow, 500 * index);
  }

  quotePart.classList.remove("low");
}
