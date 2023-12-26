let play = document.querySelector(".play");
let audio = document.querySelector(".center");
let next = document.querySelector(".next");
play.addEventListener("click", function () {
  next.pause();
  audio.play();
  console.log("play");
});
let nextBtn = document.querySelector(".nextBtn");
nextBtn.addEventListener("click", function () {
  audio.pause();
  next.play();
  console.log("play");
});
