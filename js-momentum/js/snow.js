const body = document.querySelector("body");
const Min_Duration = 10;

function makeSnow() {
  const snow = document.createElement("div");
  const delay = Math.random() * 10;
  const opacity = Math.random();
  const duration = Math.random() * 20 + Min_Duration;

  snow.classList.add("snow");
  snow.style.left = `${Math.random() * window.screen.width}px`;
  snow.style.animationDelay = `${delay}s`;
  snow.style.opacity = opacity;
  snow.style.animation = `fall ${duration}s linear`;

  body.appendChild(snow);

  setTimeout(() => {
    body.removeChild(snow);
    makeSnow();
  }, (duration + delay) * 1000);
}
