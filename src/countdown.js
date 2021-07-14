let background = document.getElementById("countdown");
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let startCountdown = null;

function countdown(){
  if(minutes.value == 0 && seconds.value == 0){
    minutes.value = 0;
    seconds.value = 0;
    background.style.backgroundColor = "red";
    stopCountdown();
  } else if(minutes.value != 0 && seconds.value == 0){
    seconds.value = 59;
    minutes.value--;
  } else if(seconds.value != 0){
    seconds.value--;
  }
}

function stopCountdown(){
  clearInterval(startCountdown);
  startCountdown = null;
}

start.addEventListener('click', function(){
  function startInterval(){
    startCountdown = setInterval(function() {
      countdown();
    }, 1000);
  }
  startInterval();
})

stop.addEventListener('click', function(){
  minutes.value = 0;
  seconds.value = 0;
  stopCountdown();
})
