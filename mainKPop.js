
function BTS() {
  var thatWasEasy = new Audio("Dope.mp3");
  thatWasEasy.play();
}
function EXO() {
  var thatWasEasy = new Audio("Growl.mp3");
  thatWasEasy.play();
}
function GOT7() {
  var thatWasEasy = new Audio("Just Right.mp3");
  thatWasEasy.play();
}


$("#Bang").on("click", BTS);
$("#Growl").on("click", EXO);
$("#Just Right").on("click", GOT7);

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);