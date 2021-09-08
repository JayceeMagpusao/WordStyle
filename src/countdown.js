let start = document.getElementById('start');
let stop = document.getElementById('stop');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let startCountdown = null;

function countdown(){
  if(minutes.value == 0 && seconds.value == 0){
    minutes.value = 0;
    seconds.value = 0;
    alert("Congrats! You finished rapping! If you clicked the 'record' button hit the 'stop' and you can download the mp3 file");
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
  stopCountdown();
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

function randomCountdown() {
  let randomMinutes = Math.floor(Math.random()*4);
  let randomSeconds = Math.floor(Math.random()*59);

  minutes.value = randomMinutes;
  seconds.value = randomSeconds;
}