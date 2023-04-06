const todoPart = document.querySelector(".todo");

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];

const toDosKEY = "todos";

const savedToDos = localStorage.getItem(toDosKEY);

if (savedToDos !== null) {
  const parsedTodos = JSON.parse(savedToDos);

  toDos = parsedTodos;

  parsedTodos.forEach(paintTodo);
}

function saveToDos() {
  localStorage.setItem(toDosKEY, JSON.stringify(toDos));
}

function deleteTodo(btnClick) {
  const delLi = btnClick.target.parentElement;

  delLi.remove();

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(delLi.id));

  saveToDos();
}

function paintTodo(newTodoObject) {
  const list = document.createElement("li");
  list.id = newTodoObject.id;
  const text = document.createElement("span");
  text.innerText = newTodoObject.text;

  const btn = document.createElement("button");
  btn.innerText = "❌";

  todoList.appendChild(list);
  list.appendChild(text);
  list.appendChild(btn);

  btn.addEventListener("click", deleteTodo);

  btn.addEventListener("mouseenter", hover);
  btn.addEventListener("mouseleave", leave);

  function hover() {
    text.style.textDecoration = `line-through`;
    text.style.backgroundColor = `gray`;
    text.style.opacity = `0.3`;
    text.style.borderRadius = `8px`;
  }
  function leave() {
    text.style.textDecoration = `none`;
    text.style.backgroundColor = `transparent`;
    text.style.opacity = `1`;
  }
}

function todoSubmit(submit) {
  submit.preventDefault();
  const newTodo = todoInput.value;

  todoInput.value = "";

  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };

  toDos.push(newTodoObject);

  paintTodo(newTodoObject);

  saveToDos();

  arlamStack();
}

todoForm.addEventListener("submit", todoSubmit);
