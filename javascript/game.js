var player = {
  sand: numeral(0),
  totalSand: numeral(0),
  sandPerSec: numeral(0),
  isDig: false,

  digBonus: numeral(1),

  runTime: numeral(0)
}

var dig;
function digSand() {
  if (!player.isDig) {
    dig = setInterval(function() {
      player.sandPerSec.set(1);
      player.sand.add(player.sandPerSec.value() * 0.0333333333);
      player.totalSand.add(player.sandPerSec.value() * 0.0333333333);
    }, 33);
    document.getElementById('dig').innerHTML = "Stop Digging";
    player.isDig = true;
  } else {
    clearInterval(dig);
    player.sandPerSec.set(0);
    document.getElementById('dig').innerHTML = "Start Digging";
    player.isDig = false;
  }
}
