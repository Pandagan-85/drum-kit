// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("sono stato cliccato");
// }

// document.querySelector("button").addEventListener("click", function () {
//   alert("sono stato cliccato");
// });

// document.getElementsByClassName("drum").addEventListener("click", function () {
//   alert("sono stato cliccato");
// });

//codice che trova la pressione dei tasti
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let index = 0; index < numberOfDrumButtons; index++) {
  // prettier-ignore
  document.querySelectorAll(".drum")[index].addEventListener("click", function () {
    //alert("sono stato cliccato");
    //this.style.color = "#fff";
    //console.log(this);

    //creiamo una variabile che contine innerHTML del button, ovvero la letter
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    });
}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

//codice che trova la pressione dei tasti
document.addEventListener("keydown", function (event) {
  //alert("il tasto è stato pressato");
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  //aggiungiamo il punto per richiamare la classe
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
