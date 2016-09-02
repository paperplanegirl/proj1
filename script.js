var imgArray = ['AA.jpg', 'CC.jpg', 'DD.jpg', 'BB.jpg', 'FF.jpg', 'AA.jpg', 'DD.jpg', 'BB.jpg', 'CC.jpg', 'EE.jpg', 'EE.jpg', 'FF.jpg']
var numChosenCards = 0
var tempArray = []
var tempCardArray = []


function addImages () {
  // shuffle(imgArray);
  for (var i = 0; i < imgArray.length; i++) {
    // looping through image array to append specific image
    var currentDiv = $('div.back')[i]
    var img = imgArray[i]
    $(currentDiv).prepend('<img src="img/' + img + ' "/>')
  }
}

addImages()

// CODE THAT RANDOMISED THE PICTURES
// function addImages() {
//   for(var i = 0 ; i < imgArray.length; i++) {
//     // looping through image array to append specific image
//     var currentDiv = $('div.back')[i]
//     var img = imgArray[Math.floor(Math.random() * imgArray.length)]
//     $(currentDiv).prepend('<img src="img/' + img + ' "/>')

function checkIfMatch () {
  tempArray = tempArray.sort()

  tempArray[1] = tempArray[1].split('')[0]
  console.log(tempArray)

  if (tempArray[0] === tempArray[1]) {
    console.log('match')
    console.log(tempCardArray)

    // don't flip the card back
    for (var card = 0; card < tempCardArray.length; card++) {
      $(tempCardArray[card]).off('click', main);
    }

  // points++
  } else {
    console.log('not a match')
    // execute function to flip card back
    console.log(tempCardArray)
    $('#' + tempArray[0]).flip(false)
    $('#' + tempArray[1]).flip(false)
    $("#" + tempArray[1] + tempArray[1]).flip(false)
  }
}

var cards = $('div.card');
for (var i = 0; i < cards.length; i++) {
  $(cards[i]).on('click', main);
}

function main() {
  tempArray.push(this.id)
  tempCardArray.push(this)
  if (tempArray.length < 2) {
  } else if (tempArray.length === 2) {
    setTimeout(function () {
      checkIfMatch()
      tempArray = []
      tempCardArray = []
    }, 1000)
  }
}

function reset() {
  var cards = $('div.card');
  for (var i = 0; i < cards.length; i ++){
    $(cards[i]).flip(false);
    $(cards[i]).on('click', main);
  }
}


function count () {
  var startTime = document.getElementById('hms').innerHTML
  var pieces = startTime.split(':')
  var time = new Date()
  time.setHours(pieces[0])
  time.setMinutes(pieces[1])
  time.setSeconds(pieces[2])
  var timedif = new Date(time.valueOf() - 1000)
  var newtime = timedif.toTimeString().split(' ')[0]
  document.getElementById('hms').innerHTML = newtime
  setTimeout(count, 1000)
}

count()

$('.card').flip()
