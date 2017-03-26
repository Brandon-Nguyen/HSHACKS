
function sayThatWasEasy() {
  var thatWasEasy = new Audio("Baby.mp3");
  thatWasEasy.play();
}
function taylorSwift() {
  var thatWasEasy = new Audio("BlankSpace.mp3");
  thatWasEasy.play();
}
function EdSheeran() {
  var thatWasEasy = new Audio("Photograph.mp3");
  thatWasEasy.play();
}

$("#Baby").on("click", sayThatWasEasy);
$("#BlankSpace").on("click", taylorSwift);
$("#Photograph").on("click", EdSheeran);

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);