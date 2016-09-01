var imgArray = ['AA.jpg', 'AA.jpg', 'BB.jpg', 'BB.jpg', 'CC.jpg', 'CC.jpg', 'DD.jpg', 'DD.jpg', 'EE.jpg', 'EE.jpg', 'FF.jpg', 'FF.jpg'];
var gamefinished = false;

// document.getElementById("cell-1-1").onclick = click;
// document.getElementById("cell-1-2").onclick = click;
// document.getElementById("cell-1-3").onclick = click;
// document.getElementById("cell-1-4").onclick = click;
// document.getElementById("cell-2-1").onclick = click;
// document.getElementById("cell-2-2").onclick = click;
// document.getElementById("cell-2-3").onclick = click;
// document.getElementById("cell-2-4").onclick = click;
// document.getElementById("cell-3-1").onclick = click;
// document.getElementById("cell-3-2").onclick = click;
// document.getElementById("apple").onclick = click;
// document.getElementById("cell-3-4").onclick = click;

var numChosenCards = 0
var tempArray = []

function click() {
  var index = this.id
  console.log(index)

//   for (var i = 0; i < imgArray.length; i++) {
//     if (imgArray[i] === index) {
//       tempArray.push(imgArray[i]);
//     }
//   }
// }



  if (numChosenCards == 0) {
    //The first click will be the first image chosen
    tempArray.push(imgArray[index])
    console.log(tempArray);
    numChosenCards = 1;
  }
  else if (numChosenCards == 1) {
    tempArray.push(imgArray)
    console.log(tempArray);
  }
}

function checkIfMatch() {
  tempArray = tempArray.sort()
  tempArray[1] = tempArray[1].split('')[0]

  if (tempArray[0] === tempArray[1]) {
    console.log('match')

    // don't flip the card back
    // points++
  } else {
    console.log('not a match');
    // execute function to flip card back

    $("#" + tempArray[0]).flip(false)
    $("#" + tempArray[1] + tempArray[1]).flip(false)
  }
}



$("div.card").click(function() {
  tempArray.push(this.id)
  if (tempArray.length < 2) {

  } else if (tempArray.length === 2) {
    checkIfMatch()
    tempArray = []
  }

  console.log(tempArray);
})

// function checkWin() {
// var b0 = document.getElementById("cell-1-1");
// var b1 = document.getElementById("cell-1-2");
// var b2 = document.getElementById("cell-1-3");
// var b3 = document.getElementById("cell-1-4");
// var b4 = document.getElementById("cell-2-1");
// var b5 = document.getElementById("cell-2-2");
// var b6 = document.getElementById("cell-2-3");
// var b7 = document.getElementById("cell-2-4");
// var b8 = document.getElementById("cell-3-1");
// var b9 = document.getElementById("cell-3-2");
// var b10 = document.getElementById("cell-3-3");
// var b11 = document.getElementById("cell-3-4");
//
// if (b0.innerHTML == imgArray[0]) && b6.innerHTML == imgArray[1]) {
//   gamefinished=false
// // } else if
//
// if (b1.innerHTML == imgArray[2]) && b7.innerHTML == imgArray[3]) {
//   gamefinished=false
//
//
// if (b2.innerHTML == imgArray[4]) && b8.innerHTML == imgArray[5]) {
//     gamefinished=false
//
//
// if (b3.innerHTML == imgArray[6]) && b9.innerHTML == imgArray[7]) {
//     gamefinished=false
//
//
// if (b4.innerHTML == imgArray[8]) && b10.innerHTML == imgArray[9]) {
//     gamefinished=false
//
// if (b5.innerHTML == imgArray[10]) && b11.innerHTML == imgArray[11]) {
//     gamefinished=false



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
