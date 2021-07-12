let start = document.getElementById('start');
let reset = document.getElementById('reset');
let pause = document.getElementById('pause');

let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let startCountdown = null;

function countdown(){
  if(minutes.value == 0 && seconds.value == 0){
    minutes.value = 0;
    seconds.value = 0;
  } else if(minutes.value != 0 && seconds.value == 0){
    seconds.value = 59;
    minutes.value--;
  } else if(seconds.value != 0){
    seconds.value--;
  }
}

function stopCountdown(){
  clearInterval(startCountdown);
}

start.addEventListener('click', function(){
  function startInterval(){
    startCountdown = setInterval(function() {
      countdown();
    }, 1000);
  }
  startInterval()
})

reset.addEventListener('click', function(){
  minutes.value = 0;
  seconds.value = 0;
  stopCountdown();
})

// pause.addEventListener('click', function(){

// })