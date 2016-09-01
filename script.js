var imgArray = ['AA.jpg', 'AA.jpg', 'BB.jpg', 'BB.jpg', 'CC.jpg', 'CC.jpg', 'DD.jpg', 'DD.jpg', 'EE.jpg', 'EE.jpg', 'FF.jpg', 'FF.jpg'];
var numChosenCards = 0
var tempArray = []
var tempCardArray = []

function addImages() {
  for(var i = 0 ; i < imgArray.length; i++) {
    // looping through image array to append specific image
    var currentDiv = $('div.back')[i]
    var img = imgArray[Math.floor(Math.random() * imgArray.length)]
    $(currentDiv).prepend('<img src="img/' + img + ' "/>')

    // getting first alphabet of image file to get ID for <div class='card'>
    var currentID = img.split('')[0]
    var currentParentDiv = $('.card')[i]
    $(currentParentDiv).attr('id', currentID)
  }
}
  addImages()

// var card = $('div.back')[i]
// var img = AA.jpg
// $(.card).prepend('<img src="img/' + imgArray[imgArray[Math.floor(Math.random() * imgArray.length)] + ' "/>')

// $("#AA.jpg").prepend('<img src="img/' + )



function click() {
  var index = this.id
  console.log(index)

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
  // tempArray = tempArray.sort()

  // tempArray[1] = tempArray[1].split('')[0]
  console.log(tempArray);

  if (tempArray[0] === tempArray[1]) {
    console.log('match')
    console.log(tempCardArray);

  // don't flip the card back
  for (var card = 0; card < tempCardArray.length; card++){
    $(tempCardArray[card]).unbind();
    }

  // points++
  } else {
    console.log('not a match');
    // execute function to flip card back
    console.log(tempCardArray);
    $("#" + tempArray[0]).flip(false)
    $("#" + tempArray[1]).flip(false)
    // $("#" + tempArray[1] + tempArray[1]).flip(false)
  }
}


$("div.card").click(function() {
  tempArray.push(this.id)
  tempCardArray.push(this)
  if (tempArray.length < 2) {

  } else if (tempArray.length === 2) {
    setTimeout(function() {
      checkIfMatch()
      tempArray = []
      tempCardArray = []
    }, 1000)
  }

  console.log(tempArray);
})

// CARD SHUFFLER
var shuffle = function(array) {
  var shuffledPages = []
  while(imgArray.length) {
    shuffle.push(array.splice(Math.floor(array.length*Math.random()),1));
  }
  return shuffle
}


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

//   for (var i = 0; i < imgArray.length; i++) {
//     if (imgArray[i] === index) {
//       tempArray.push(imgArray[i]);
//     }
//   }
// }


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
