var imgArray = ['AA.jpg', 'CC.jpg', 'DD.jpg', 'BB.jpg', 'FF.jpg', 'AA.jpg', 'DD.jpg', 'BB.jpg', 'CC.jpg', 'EE.jpg', 'EE.jpg', 'FF.jpg']
var counting = 0;
var numChosenCards = 0
var tempArray = []
var tempCardArray = []
var gamefinished = false


$(".card").flip({
  trigger: 'manual'
});

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

function randomise() {
  for (var i = 0; i < imgArray.length; i++) {
    var rand = Math.floor(Math.random() * imgArray.length)
    var td1 = $('td')[i]
    var td2 = $('td')[rand]
    var content1 = $(td1).children()
    var content2 = $(td2).children()
    $(td1).append(content2)
    $(td2).append(content1)
  }
}
// randomise()

function addEventListeners () {
  var cards = $('div.card');
  for (var i = 0; i < cards.length; i++) {
    $(cards[i]).on('click', main);
  }
}

addEventListeners()

  // for(var i = 0 ; i < imgArray.length; i++) {
  //   // looping through image array to append specific image
  //   var currentDiv = $('div.back')[i]
  //   var img = imgArray[Math.floor(Math.random() * imgArray.length)]
  //   $(currentDiv).prepend('<img src="img/' + img + ' "/>')


function checkIfMatch () {
  var card1 =  $('#' + tempArray[0])
  var card2 =  $("#" + tempArray[1])
  tempArray = tempArray.sort()

  tempArray[1] = tempArray[1].split('')[0]
  console.log(tempArray)

  if (tempArray[0] === tempArray[1]) {
    counting += 1
    console.log('match')
    console.log(tempCardArray)

    // don't flip the matched card back
    for (var card = 0; card < tempCardArray.length; card++) {
      $(tempCardArray[card]).off('click', main);
      // $(tempCardArray[card]).off('.flip');
      console.log("card don't flip");
    }


    if (counting == 6) {
      gamefinished = true;
      $('#status').text("Cards Cleared")
    }

  // points++
  } else {
    console.log('not a match')
    // execute function to flip card back
    console.log(tempCardArray)
    setTimeout(function(){
      console.log('hiding')
      card1.flip(false)
      card2.flip(false)
    }, 1000)
  }
}

function main() {
  if (tempArray.length > 0 && tempArray[0] === this.id) {
    return;
  }
  tempArray.push(this.id)
  tempCardArray.push(this)
  $(this).flip(true);
  // console.log("temp array is", tempArray);
  // console.log("temp card array is", tempCardArray);
  if (tempArray.length === 2) {
    checkIfMatch()
    tempArray = []
    tempCardArray = []
  }
}

function reset() {
  console.log("resetting game...");
  randomise()
  counting = 0;
  var cards = $('div.card');
  for (var i = 0; i < cards.length; i ++){
    $(cards[i]).flip(false);
    $(cards[i]).off('click');
    console.log('testing');
  }
  // cards.off('.flip');
  console.log('hello');

  addEventListeners();
  // cards.flip();
  // cards.on('.flip');

}
  //
  // var myVar = setInterval(myTimer, 60000);
  // gamefinished = true
  // function myTimer() {
  //   document.getElementById("hms").innerHTML
  //   $(cards).addClass('flip');
  // }



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

// cards.on('.flip');
// $(".card").flip();
// $('.card').flip(false)
