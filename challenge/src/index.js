const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const hello = document.querySelector("h2");

const superEventHandler = {
  enter: () => {
    hello.style.color = colors[0];
    hello.innerText = "You mouse is here!";
  },
  leave: () => {
    hello.style.color = colors[1];
    hello.innerText = "You mouse is gone!";
  },
  resize: () => {
    hello.style.color = colors[2];
    hello.innerText = "You just resized";
  },
  right: () => {
    hello.style.color = colors[3];
    hello.innerText = "That was a right click!";
  },
};

hello.addEventListener("mouseenter", superEventHandler.enter);
hello.addEventListener("mouseleave", superEventHandler.leave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.right);
