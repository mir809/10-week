const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const today = new Date();
  const years = today.getFullYear();
  const Christmas = new Date(`${years}-12-25`);
  const diff = Christmas - today - 1000 * 60 * 60 * 9;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const min = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
  const sec = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
  clockTitle.innerText = `${days}d ${hours}h ${min}m ${sec}s`;
}

getClock();
setInterval(getClock, 1000);
