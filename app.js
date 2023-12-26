let play = document.querySelector(".play");
let audio = document.querySelector(".center");
let next = document.querySelector(".next");
let changeTextOfMusic = document.querySelector(".change");
let changeTextOfMusicCreator = document.querySelector(".changes");
play.addEventListener("click", function () {
  changeTextOfMusic.innerHTML = "Night Changes";
  changeTextOfMusicCreator.innerHTML = "One Direction";
  next.pause();
  audio.play();
  console.log("play");
});
let nextBtn = document.querySelector(".nextBtn");
nextBtn.addEventListener("click", function () {
  changeTextOfMusic.innerHTML = "Khamoshiyan";
  changeTextOfMusicCreator.innerHTML = "Arijit Singh";
  audio.pause();
  next.play();
  console.log("play");
});
