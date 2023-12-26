let play = document.querySelector(".play");
let audio = document.querySelector(".center");
play.addEventListener("click", function () {
  audio.play();
  console.log("play");
});
let next = document.querySelector(".next");
let nextBtn = document.querySelector(".nextBtn");
nextBtn.addEventListener("click", function () {
  next.play();
  console.log("play");
});
