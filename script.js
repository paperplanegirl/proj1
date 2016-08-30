var imgArray = ['AA.jpg', 'AA.jpg', 'BB.jpg', 'BB.jpg', 'CC.jpg', 'CC.jpg', 'DD.jpg', 'DD.jpg', 'EE.jpg', 'EE.jpg', 'FF.jpg', 'FF.jpg'];
var numChosenCards = 0

function clicks(index) {
  if (numChosenCards == 0)
  {
  //The first click will be the first image chosen
  one = index;
  //The image source is from the array
  document.images[index].src = imgArray(index);
  // now
  numChosenCards = 1;
}
else
{
  numChosenCards = 2;
  //The second click will be the second image
  two = index;
  document.images[index].src = imgArray[index];
  }
}

function control() {
  stopTimer();
  if (imgArray[one] == imgArray[two])
}
  hit ++;
  numChosenCards = 0;
}
else if (imgArray[one] != imgArray[two])
(
  //IF
  document.images[one].src = back;
  document.images[two].src = back;
  numChosenCards = 0;
)

if (hit == imgArray.length/2) {
  document.getElementById("win").textContent = "You've completed the game - go to the next level"
}

function checkWins() {

  var b0 = document.getElementById("b0");
  var b1 = document.getElementById("b1");
  var b2 = document.getElementById("b2");
  var b3 = document.getElementById("b3");
  var b4 = document.getElementById("b4");
  var b5 = document.getElementById("b5");
  var b6 = document.getElementById("b6");
  var b7 = document.getElementById("b7");
  var b8 = document.getElementById("b8");


// var memoryValues = [];
// var memory_tile_ids = [];
// var tiles_flipped = 0;
// Array.prototype.memory_tile_shuffle = function() {
//   var i = this.length, j, temp;
//   while (--i > 0) {
//     j = Math.floor(Math.random() * (i+1));
//     temp = this[j];
//     this[j] = this[i];
//     this[i] = temp;
//   }
// }
//
// function newBoard() {
//   tiles_flipped = 0;
//   var output = '';
//   memoryArray.memory_tile_shuffle();
//   for(var i = 0; i < memoryArray.length; i++) {
//     output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this, )
//
// }
// document.getElementById('memoryboard')


function count() {

    var startTime = document.getElementById('hms').innerHTML;
    var pieces = startTime.split(":");
    var time = new Date();    time.setHours(pieces[0]);
    time.setMinutes(pieces[1]);
    time.setSeconds(pieces[2]);
    var timedif = new Date(time.valueOf() - 1000);
    var newtime = timedif.toTimeString().split(" ")[0];
    document.getElementById('hms').innerHTML=newtime;
    setTimeout(count, 1000);
}
count();

document.getElementById("b0").style.backgroundImage = "url('img/AA.jpg')"
document.getElementById("b1").style.backgroundImage = "url('img/BB.jpg')"
document.getElementById("b2").style.backgroundImage = "url('img/CC.jpg')"
document.getElementById("b3").style.backgroundImage = "url('img/DD.jpg')"
document.getElementById("b4").style.backgroundImage = "url('img/EE.jpg')"
document.getElementById("b5").style.backgroundImage = "url('img/FF.jpg')"
document.getElementById("b6").style.backgroundImage = "url('img/AA.jpg')"
document.getElementById("b7").style.backgroundImage = "url('img/BB.jpg')"
document.getElementById("b8").style.backgroundImage = "url('img/CC.jpg')"
document.getElementById("b9").style.backgroundImage = "url('img/DD.jpg')"
document.getElementById("b10").style.backgroundImage = "url('img/EE.jpg')"
document.getElementById("b11").style.backgroundImage = "url('img/FF.jpg')"

// // SHUFFLE SORT
// imgArray.sort(function(a, b)) {
//   if (Math.random() < .5) {
//     return -1;
//   } else {
//     return 1;
//   }
// });
// console.log("Random sort:", imgArray);
