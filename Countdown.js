var countdownDate = new Date("Jan 26, 2022 12:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countdownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day-days").innerHTML = days + "d ";

  document.getElementById("day-hours").innerHTML = hours + "h ";

  document.getElementById("day-mins").innerHTML = minutes + "m ";

  document.getElementById("day-sec").innerHTML = seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("day-days").innerHTML = "EXPIRED";
    document.getElementById("day-hours").innerHTML = "EXPIRED";
    document.getElementById("day-mins").innerHTML = "EXPIRED";
    document.getElementById("day-sec").innerHTML = "EXPIRED";
  }
}, 1000);