const video = document.querySelector("video");

const playBtn = document.getElementById("playBtn");
const muteBtn = document.getElementById("muteBtn");
const volumeRange = document.getElementById("volume");

let volumeValue = 0.5; // 볼륨 초기값
video.volume = volumeValue; // 영상의 실제 소리

// 영상 재생/일시정지
const clickPlayBtn = () => {
  video.paused ? video.play() : video.pause();
  playBtn.innerText = video.paused ? "Play" : "Pause";
}; //버튼 클릭시

// 음량 - 음소거 버튼, 볼륨 막대
const clickMuteBtn = () => {
  if (video.muted) {
    video.muted = false;
    video.volume = volumeValue;
  } else {
    video.muted = true;
  }
  muteBtn.innerText = video.muted ? "Unmute" : "Mute";
  volumeRange.value = video.muted ? 0 : volumeValue;
  // 음소거 해제시 볼륨막대 위치가 음소거 하기 전으로 돌아감
};

const volumeInput = (event) => {
  const {
    target: { value } // 볼륨 막대를 조절한 값
  } = event;
  if (Number(value) === 0) {
    muteBtn.innerText = "Unmute";
    video.muted = true;
  } else {
    video.muted = false;
    muteBtn.innerText = "Mute";
  }
  video.volume = value; // 영상의 실제 소리
};

const volumeChange = (event) => {
  const {
    target: { value } // 볼륨 막대를 조절한 값
  } = event;
  if (Number(value) !== 0) {
    volumeValue = value;
  } // 볼륨조절 막대가 마지막에 멈춰있던 값을 기억함 (0일때 제외)
};

playBtn.addEventListener("click", clickPlayBtn);
video.addEventListener("click", clickPlayBtn);
//동영상 일시정지, 시작

muteBtn.addEventListener("click", clickMuteBtn);
volumeRange.addEventListener("input", volumeInput);
volumeRange.addEventListener("change", volumeChange);
//음소거&음소거 해제 , 볼륨조절
