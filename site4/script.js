(function () {

var names = ["Loral", "John", "Jenny", "Justin", "Patrick", "Fred", "Larry", "Sera", "Annie", "Jesean"];


for (var i = 0; i < names.length; i++) {


  var firstLetter = names[i].charAt(0).toLowerCase();


  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
