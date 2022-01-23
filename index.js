var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

// i will increment.
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
//when user click that button of drum event will occure.
    buttonAnimation(buttonInnerHTML);

  });

}
// when the user press the any key from the keyboard at that time event will occure.
//keypress is event type.
document.addEventListener("keypress", function(event) {
//event will callback the method.
  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      //play is the method of Audio class 
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
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
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

//button animation.
function buttonAnimation(currentKey) {
 //(.) dot represent the class 

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

// when button clicked by user at that time pressed class removed.
//set the time for remove pressed class using setTimeout method.
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100); //100= 1 second

}
