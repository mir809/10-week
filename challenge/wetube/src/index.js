const startBtn = document.getElementById("startBtn");
const audio = document.getElementById("preview");

let stream;
let recorder;
let audioFile;

const audioDownload = () => {
  const a = document.createElement("a");
  a.href = audioFile;
  a.download = "MyAudio.mp3";
  document.body.appendChild(a);
  a.click();
};

const recordEnd = () => {
  startBtn.innerText = "Download Audio File";
  startBtn.removeEventListener("click", recordEnd);
  startBtn.addEventListener("click", audioDownload);

  recorder.stop();
};

const recordStart = () => {
  startBtn.innerText = "Stop Recording";
  startBtn.removeEventListener("click", recordStart);
  startBtn.addEventListener("click", recordEnd);

  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (event) => {
    audioFile = URL.createObjectURL(event.data);
    audio.srcObject = null;
    audio.src = audioFile;
    audio.loop = true;
    audio.play();
  };
  recorder.start();
  setTimeout(() => {
    recorder.stop();
    recordEnd();
  }, 5000);
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false
  });

  audio.srcObject = stream;
  audio.play();
};

init();

startBtn.addEventListener("click", recordStart);
