var imgArray = ['AA.jpg', 'AA.jpg', 'BB.jpg', 'BB.jpg', 'CC.jpg', 'CC.jpg', 'DD.jpg', 'DD.jpg', 'EE.jpg', 'EE.jpg', 'FF.jpg', 'FF.jpg'];


document.getElementById("cell-1-1").onclick = click;
document.getElementById("cell-1-2").onclick = click;
document.getElementById("cell-1-3").onclick = click;
document.getElementById("cell-1-4").onclick = click;
document.getElementById("cell-2-1").onclick = click;
document.getElementById("cell-2-2").onclick = click;
document.getElementById("cell-2-3").onclick = click;
document.getElementById("cell-2-4").onclick = click;
document.getElementById("cell-3-1").onclick = click;
document.getElementById("cell-3-2").onclick = click;
document.getElementById("cell-3-3").onclick = click;
document.getElementById("cell-3-4").onclick = click;

var numChosenCards = 0
var tempArray = []

function click() {
  var index = this.id
  if (numChosenCards == 0) {
    //The first click will be the first image chosen
    tempArray.push(imgArray[index])
    console.log(tempArray);
    numChosenCards = 1;
  }
  else if (numChosenCards == 1) {
    tempArray.push(imgArray[index])
    console.log(tempArray);
  }
}
//
// function checkWin() {
//
// var b0 = document.getElementById("0");
// var b1 = document.getElementById("1");
// var b2 = document.getElementById("2");
// var b3 = document.getElementById("3");
// var b4 = document.getElementById("4");
// var b5 = document.getElementById("5");
// var b6 = document.getElementById("6");
// var b7 = document.getElementById("7");
// var b8 = document.getElementById("8");
// var b9 = document.getElementById("9");
// var b10 = document.getElementById("10");
// var b11 = document.getElementById("11");
//
// if (b0.innerHTML === "img/AA.jpg" && b6.innerHTML === "img/AA.jpg") {
  // document.getElementById("1").style.backgroundImage = "url('img/BB.jpg')"
  // document.getElementById("2").style.backgroundImage = "url('img/CC.jpg')"
  // document.getElementById("3").style.backgroundImage = "url('img/DD.jpg')"
  // document.getElementById("4").style.backgroundImage = "url('img/EE.jpg')"
  // document.getElementById("5").style.backgroundImage = "url('img/FF.jpg')"
  // document.getElementById("6").style.backgroundImage = "url('img/AA.jpg')"
  // document.getElementById("7").style.backgroundImage = "url('img/BB.jpg')"
  // document.getElementById("8").style.backgroundImage = "url('img/CC.jpg')"
  // document.getElementById("9").style.backgroundImage = "url('img/DD.jpg')"
  // document.getElementById("10").style.backgroundImage = "url('img/EE.jpg')"
  // document.getElementById("11").style.backgroundImage = "url('img/FF.jpg')"



  if (imgArray[0] == imgArray[1]) {
    //then the cards will remain
  }
  else if (imgArray[0] != imgArray[1])
  { //then the cards will flip
  }
// }
// }

// SHUFFLE SORT
// function shuffle() {
//   imgArray.sort(function(){return 0.5 - Math.random()});
// }

// function shuffle() {
//   if (Math.random() < .5) {
//     return -1;
//   } else {
//     return 1;
//   }
// };
// console.log("Random sort:", imgArray);
//



// function control() {
//   stopTimer();
//   if (imgArray[one] == imgArray[two]) {
//     hit ++;
//     numChosenCards = 0;
//   }
//   else if (imgArray[one] != imgArray[two])
//   {
//     //IF
//     document.images[one].src = back;
//     document.images[two].src = back;
//     numChosenCards = 0;
//   }
//
//   if (hit == imgArray.length/2) {
//     document.getElementById("win").textContent = "You've completed the game - go to the next level"
//   }
// }

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
    var time = new Date();
    time.setHours(pieces[0]);
    time.setMinutes(pieces[1]);
    time.setSeconds(pieces[2]);
    var timedif = new Date(time.valueOf() - 1000);
    var newtime = timedif.toTimeString().split(" ")[0];
    document.getElementById('hms').innerHTML=newtime;
    setTimeout(count, 1000);
}

count();

$(".card").flip()
