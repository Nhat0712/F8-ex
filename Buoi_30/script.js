var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");
var timeTooltip = progressBar.querySelector(".time");

var initialClientX = 0;
var moveSpace = 0;
var lastMoveSpace = 0;
progressBar.addEventListener("mousedown", function (e) {
  if (e.which !== 1) {
    return;
  }
  var offsetX = e.offsetX;
  var progressBarWidth = progressBar.clientWidth;
  var rate = (offsetX / progressBarWidth) * audio.duration;
  audio.currentTime = rate;
  progress.style.width = `${(rate / audio.duration) * 100}%`;
  document.addEventListener("mousemove", handleDrag);
  initialClientX = e.clientX;
  moveSpace = offsetX;
  lastMoveSpace = offsetX;
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);
  initialClientX = e.clientX;
});

document.addEventListener("mouseup", function (e) {
  document.removeEventListener("mousemove", handleDrag);
  lastMoveSpace = moveSpace;
});

progressBar.addEventListener("mousemove", function (e) {
  var progressBarWidth = progressBar.clientWidth;
  var offsetX = e.offsetX;
  var rate = (offsetX / progressBarWidth) * audio.duration;
  var time = getTimeFormat(rate);
  timeTooltip.style.display = "block";
  timeTooltip.style.left = `${offsetX}px`;
  timeTooltip.innerText = time;
});

progressBar.addEventListener("mouseleave", function () {
  timeTooltip.style.display = "none";
});

function handleDrag(e) {
  var progressBarWidth = progressBar.clientWidth;
  moveSpace = e.clientX - initialClientX + lastMoveSpace;
  var rate = (moveSpace / progressBarWidth) * audio.duration;
  if (rate < 0) rate = 0;
  if (rate > audio.duration) rate = audio.duration;
  audio.currentTime = rate;
  progress.style.width = `${(rate / audio.duration) * 100}%`;
}

// xử lý audio
var audio = document.querySelector("audio");
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;
var playActionEl = document.querySelector(".play-action .fas");

var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
window.addEventListener("load", function () {
  durationEl.innerText = getTimeFormat(audio.duration);
});

playActionEl.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("play", function () {
  playActionEl.classList.replace("fa-play", "fa-pause");
});

audio.addEventListener("pause", function () {
  playActionEl.classList.replace("fa-pause", "fa-play");
});

audio.addEventListener("timeupdate", function () {
  var currentTime = audio.currentTime;
  currentTimeEl.innerText = getTimeFormat(currentTime);
  var rate = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${rate}%`;
});
