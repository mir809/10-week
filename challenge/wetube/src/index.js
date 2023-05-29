const video = document.querySelector("video");
const videoController = document.getElementById("videoController");
const psBtn = videoController.querySelector("#playPauseBtn");
const volumeBtn = videoController.querySelector("#volume");
const volumeRange = videoController.querySelector("#volumeRange");

let volumeValue = 0.5;
video.volume = volumeValue;

const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const timeline = document.getElementById("timeline");

let playAgain = false;

const fullScreenBtn = document.getElementById("fullScreen");
const videoBox = document.getElementById("videoBox");

const handlePlayAndStop = () => {
  if (video.paused) {
    video.play();
    psBtn.className = "fas fa-pause";
  } else {
    video.pause();
    psBtn.className = "fas fa-play";
  }
};

const handleSound = () => {
  if (video.muted) {
    video.muted = false;
    volumeRange.value = volumeValue;
    volumeBtn.className = "fas fa-volume-up";
  } else {
    video.muted = true;
    volumeRange.value = 0;
    volumeBtn.className = "fas fa-volume-mute";
  }
};

const handleVolume = (event) => {
  const {
    target: { value }
  } = event;
  if (video.muted) {
    video.muted = false;
    volumeBtn.className = "fas fa-volume-mute";
  }
  if (value === "0") {
    volumeBtn.className = "fas fa-volume-off";
  } else {
    volumeBtn.className = "fas fa-volume-up";
  }
  video.volume = volumeValue = value;
};

// 동영상 시간
const formatTime = (seconds) => {
  let N;
  if (video.duration >= 36000) {
    N = 11;
  } else if (video.duration >= 3600) {
    N = 12;
  } else if (video.duration >= 600) {
    N = 14;
  } else {
    N = 15;
  } //동영상 전체시간(video.duration)기준으로 표시되는 시간단위 조절
  return new Date(seconds * 1000).toISOString().substring(N, 19);
};

const timeUpdate = () => {
  currentTime.innerText = formatTime(Math.floor(video.currentTime));

  timeline.value = Math.floor(video.currentTime);

  totalTime.innerText = formatTime(Math.floor(video.duration));
};

const loadedMetaData = async () => {
  currentTime.innerText = formatTime(
    Math.floor(video.duration) - Math.floor(video.duration)
  ); // 시작시 동영상 현재시간 = 전체시간 - 전체시간
  totalTime.innerText = formatTime(Math.floor(video.duration));

  timeline.max = await Math.floor(video.duration);
};

const timelineInput = (event) => {
  const {
    target: { value } // 타입라인 막대를 조절한 값
  } = event;

  video.currentTime = value;
  // 타임라인 막대에 따라 실제 영상시간 조절

  video.pause();
  // 타임라인 막대 조절 중에는 영상 일시정지
};

const timelineChange = (event) => {
  playAgain ? video.play() : video.pause();
};
/* 타임라인 막대 조절 후 다시재생시작 or 정지상태 유지 여부 결정
 (타임라인 막대 조절 전 동영상이 재생중인지 정지인지에 따라) */

const fullScreenClick = () => {
  const fullScreen = document.fullscreenElement;
  //현재 전체화면상태인지 파악
  if (fullScreen) {
    document.exitFullscreen(); //전체화면 해제
    fullScreenBtn.innerText = "전체화면";
  } else {
    videoBox.requestFullscreen(); // 전체화면으로 변경
    fullScreenBtn.innerText = "전체화면 종료";
  }
};

const WindowKeyDown = (event) => {
  if (event.code === "KeyF") {
    fullScreenClick();
  } // F : 동영상 전체화면/전체화면 해제
  if (event.code === "Escape") {
    const fullScreen = document.fullscreenElement;
    //현재 전체화면상태인지 파악
    if (fullScreen) {
      document.exitFullscreen(); //전체화면 해제
      fullScreenBtn.innerText = "전체화면";
    }
  } // Esc :전체화면 상태인 경우 전체화면 해제
};

psBtn.addEventListener("click", handlePlayAndStop);
volumeBtn.addEventListener("click", handleSound);
volumeRange.addEventListener("input", handleVolume);

video.addEventListener("timeupdate", timeUpdate);
video.addEventListener("loadedmetadata", loadedMetaData);
//비디오 '재생시간/전체시간'

timeline.addEventListener("input", timelineInput);
timeline.addEventListener("change", timelineChange);
// 비디오 타임라인 조절 막대

fullScreenBtn.addEventListener("click", fullScreenClick);
//전체화면, 전체화면 종료

window.addEventListener("keydown", WindowKeyDown);
//키보드 단축키
