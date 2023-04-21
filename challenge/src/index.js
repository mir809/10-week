const background = document.querySelector("body");

function resize() {
  const width = window.innerWidth;

  if (width <= 600) {
    background.style.backgroundColor = "skyblue";
  } else if (width > 600 && width <= 900) {
    background.style.backgroundColor = "violet";
  } else {
    background.style.backgroundColor = "orange";
  }
}

resize();

window.addEventListener("resize", resize);
