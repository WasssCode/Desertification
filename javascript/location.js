var locations = {
  sahara: {
    totalSand: numeral(8e+27),
    sandDug: numeral(0),
    runTime: numeral(0)
  }
}

function setLocation() {
  var location = document.getElementById('location');
  if (player.totalSand.value() < 8e+27) {
    location.innerHTML = "Sahara Desert";
  }
}








/**
https://en.wikipedia.org/wiki/Sahara
https://en.wikipedia.org/wiki/Arabian_Desert
https://en.wikipedia.org/wiki/Atacama_Desert
https://en.wikipedia.org/wiki/Antarctica
DESSERTS TOO (as a meme or something)
*/
