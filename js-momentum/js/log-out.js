const logOutBtn = document.querySelector("footer > span:nth-child(1)");

function logOut() {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(toDosKEY);
  localStorage.removeItem(toDoBox_KEY);
  window.location.reload();
}

logOutBtn.addEventListener("click", logOut);
