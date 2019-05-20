function format() {
  var elementSand = document.getElementById('sand');
  if (player.sand.value() < 1e+12)
    elementSand.innerHTML =  player.sand.format('0.00a');
  else
    elementSand.innerHTML = player.sand.format('0.00e+0');
  var elementSandPerSec = document.getElementById('sandPerSec');
  if (player.sandPerSec.value() < 1e+12)
    elementSandPerSec.innerHTML =  player.sandPerSec.format('0.00a');
  else
    elementSandPerSec.innerHTML = player.sandPerSec.format('0.00e+0');
  var elementTotalSand = document.getElementById('totalSand');
  if (player.totalSand.value() < 1e+12)
    elementTotalSand.innerHTML =  player.totalSand.format('0.00a');
  else
    elementTotalSand.innerHTML = player.totalSand.format('0.00e+0');
  var elementTime = document.getElementById('time');
  elementTime.innerHTML = player.runTime.format('00:00:00');
}

setInterval(function() {player.runTime.add(1);}, 1000);
setInterval(function() {format();setLocation();}, 33);
