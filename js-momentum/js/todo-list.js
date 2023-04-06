const todoListBtn = document.querySelector("footer > span:nth-child(2)");
const todoBox = document.querySelector(".todo-box");

let ClassArr = [];

const toDoBox_KEY = "todoBoxClasslist";

const alarm = document.querySelector(".Alarm");
const alarmCount = document.querySelector(".Alarm span");

const todoBoxClass = localStorage.getItem(toDoBox_KEY);

if (todoBoxClass !== null) {
  todoBoxStay();
}
function todoBoxStay() {
  const todoBoxClassArr = JSON.parse(todoBoxClass);
  ClassArr = todoBoxClassArr;

  if (ClassArr[1] !== "hidden") {
    todoBox.classList.remove("hidden");
    alarm.classList.add("hidden");
  } else {
    arlamStack();
  }
}

function arlamStack() {
  if (todoBox.classList.contains("hidden")) {
    alarm.classList.remove("hidden");
    alarmCount.innerText = toDos.length;
  }
}

if (toDos.length === 0) {
  alarm.classList.add("hidden");
}

function todoListBoxOpen() {
  if (todoBox.classList.contains("hidden") === true) {
    todoBox.classList.remove("hidden");
    todoBox.style.animation = `bigger 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both`;
  } else if (todoBox.classList.contains("hidden") === false) {
    todoBox.classList.add("hidden");
    alarm.style.animation = `smaller 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) forwards`;
  }
  alarm.classList.toggle("hidden");
  if (toDos.length === 0) {
    alarm.classList.add("hidden");
  }
  alarmCount.innerText = toDos.length;

  localStorage.setItem(toDoBox_KEY, JSON.stringify(todoBox.classList));
}

todoListBtn.addEventListener("click", todoListBoxOpen);
