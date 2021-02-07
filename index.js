//Detecting Button Press
var drumsList = document.querySelector(".set").children;


for (var i = 0; i < drumsList.length; i++) {
  drumsList[i].addEventListener("click", function() {
    var buttonPressed = this.classList[0];
    makeSound(buttonPressed);
    buttonAnimation(buttonPressed);
  });
}


//Detecting Keyboard Press
document.addEventListener("keydown", function(e) {
  var pressedKey = e.key;
  makeSound(pressedKey);
  buttonAnimation(pressedKey);

});




//Function - Sound Mapping


function makeSound(pressed) {
  switch (pressed) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "k":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    default:
  }
}



//Function - Press Animation

function buttonAnimation(key) {
  var pressed = document.querySelector("."+key);
  pressed.classList.add("pressed");

  setTimeout(function() {
    pressed.classList.remove("pressed");
  }, 100);
}
