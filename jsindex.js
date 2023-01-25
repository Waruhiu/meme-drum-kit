const eventTarget = document.querySelectorAll(".drum");
const eventTargetArray = Array.from(eventTarget);

eventTargetArray.map(target => {
  target.addEventListener("click", clicker);
});

function clicker() {
  var button = this.textContent;
  makeSound(button);
  console.log("Click detected");
}

document.addEventListener("keydown", keypress);

function keypress(e) {
  makeSound(e.key);
  console.log("keydown detected");
}

function makeSound(key) {
  switch (key) {
    case "w":
      makokha = new Audio();
      makokha.src = "sounds/Afasali.mp3";
      makokha.play();
      break;

    case "a":
      kife = new Audio("sounds/Where are my whips.mp3");
      kife.play();
      break;

    case "s":
      mbusi = new Audio("sounds/Hakuna Mbrrr cha.mp3");
      mbusi.play();
      break;

    case "d":
      nice = new Audio("sounds/Very Nice.mp3");
      nice.play();
      break;

    case "j":
      maridadi = new Audio("sounds/Maridadi.mp3");
      maridadi.play();
      break;

    case "k":
      oliskia = new Audio("sounds/UlisikiaWapi.mp3");
      oliskia.play();
      break;

    case "l":
      uongo = new Audio("sounds/Hio ni Uongo.mp3");
      uongo.play();
      break;

    case "m":
      wajinga = new Audio("sounds/Watu si Wajinga Buana.mp3");
      wajinga.play();
      break;

    default:
      console.log(key);
  }
}
