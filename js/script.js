const pkbBul = document.querySelector("#pkb-bul");
const pkbSqui = document.querySelector("#pkb-squi");
const pkbChar = document.querySelector("#pkb-char");
const popupContainer = document.querySelector(".popup-container");
const popupBul = document.querySelector(".bulbasaur");
const popupSqui = document.querySelector(".squirtle");
const popupChar = document.querySelector(".charmander");
const selections = document.querySelectorAll(".selection-option");
const popupImg = document.querySelectorAll(".popup-img");
const musicBtn = document.querySelector(".music-btn");
const music = document.querySelector(".music"); 

const bulbasaurCries = ["/src/bulbasaur-cry-1.mp3", "/src/bulbasaur-cry-2.mp3", "/src/bulbasaur-cry-3.mp3"];
const squirtleCries = ["/src/squirtle-cry-1.mp3", "/src/squirtle-cry-2.mp3", "/src/squirtle-cry-3.mp3"];
const charmanderCries = ["/src/charmander-cry-1.mp3", "/src/charmander-cry-2.mp3", "/src/charmander-cry-3.mp3"];

pkbBul.addEventListener("click", () =>{
  const soundIndex = Math.floor(Math.random() * 3);
  const sound = new Audio(bulbasaurCries[soundIndex]);
  sound.play();

  popupContainer.style.display = "flex";
  popupBul.style.display = "flex";
})
pkbSqui.addEventListener("click", () =>{
  const soundIndex = Math.floor(Math.random() * 3);
  const sound = new Audio(squirtleCries[soundIndex]);
  sound.play();

  popupContainer.style.display = "flex";
  popupSqui.style.display = "flex";
})
pkbChar.addEventListener("click", () =>{
  const soundIndex = Math.floor(Math.random() * 3);
  const sound = new Audio(charmanderCries[soundIndex]);
  sound.play();

  popupContainer.style.display = "flex";
  popupChar.style.display = "flex";
})

selections.forEach(selection => {
  selection.addEventListener("click", () => {
    popupContainer.style.display = "none";
    popupBul.style.display = "none";
    popupSqui.style.display = "none";
    popupChar.style.display = "none";
  })
});

let isPlaying = false;
musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicBtn.classList.add("music-off");
    isPlaying = false;
  } else {
    music.play();
    musicBtn.classList.remove("music-off");
    isPlaying = true;
  }
})