// variables for class details
// let now_playing = document.querySelector(".now-playing");
let track_name = document.querySelector(".track-name");
let producer = document.querySelector(".producer");

// variables for class buttons
let playpause_button = document.querySelector(".playpause-track");
let next_buttton = document.querySelector(".next-track");
let prev_button = document.querySelector(".prev-track");

// variables for class slider
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
 
// variables to be used in functions below
let track_index = 0;
let isPlaying = false;
let updateTimer;
 
// Create the audio element for the player
let curr_track = document.createElement('audio');
 
// Define the list of tracks that have to be played
let track_list = [
  {
    name: "Comeback",
    producer: "Drian",
    path: "../mp3/Comeback.mp3"
  },

  {
    name: "Forever Miss",
    producer: "Drian",
    path: "../mp3/Forever_Miss.mp3"
  },

  {
    name: "French Bread",
    producer: "Drian",
    path: "../mp3/French_Bread.mp3"
  },

  {
    name: "ill",
    producer: "Drian",
    path: "../mp3/ill.mp3"
  },

  {
    name: "Meditation",
    producer: "Drian",
    path: "../mp3/Meditation.mp3"
  },

  {
    name: "Redemption",
    producer: "Drian",
    path: "../mp3/Redemption.mp3"
  },

  {
    name: "The Spot",
    producer: "Drian",
    path: "../mp3/The_Spot.mp3"
  },
];

function loadTrack(track_index) {
  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();
 
  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();
 
  // Update details of the track
  track_name.textContent = track_list[track_index].name;
  producer.textContent = track_list[track_index].producer;
  // now_playing.textContent =
  //    "PLAYING " + track_name.textContent;
 
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);
 
  // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener("ended", nextTrack);
 
  // Apply a random background color
  // random_bg_color();
}
 
// function random_bg_color() {
//   // Get a random number between 64 to 256
//   // (for getting lighter colors)
//   let red = Math.floor(Math.random() * 256) + 64;
//   let green = Math.floor(Math.random() * 256) + 64;
//   let blue = Math.floor(Math.random() * 256) + 64;
 
//   // Construct a new color
//   let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 
//   // Set the background to the new color
//   document.body.style.background = bgColor;
// }
 
// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = "00:00";
  seek_slider.value = 0;
}

// toggles between play and pause
function playpauseTrack() {
  !isPlaying ? playTrack() : pauseTrack();
}
 
// Play function
function playTrack() {
  curr_track.play();
  isPlaying = true;
 
  playpause_button.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
 
// Pause function
function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
 
  playpause_button.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
 
// if last track play first track
function nextTrack() {
  if (track_index < track_list.length - 1){
    track_index++;
  } else {
    track_index = 0;
  };
 
  loadTrack(track_index);
  playTrack();
}
 
// play previous track
function prevTrack() {
  if (track_index > 0){
    track_index -= 1;
  } else {
    track_index = track_list.length;
  } 

  loadTrack(track_index);
  playTrack();
}

//slider calculates position on track
function seekTo() {
  seekto = curr_track.duration * (seek_slider.value / 100);
 
  curr_track.currentTime = seekto;
}

// slider adjusts volume
function seekVolume() {
  curr_track.volume = volume_slider.value / 100;
}
 
function seekUpdate() {
  let seekPosition = 0;
 
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;
 
    // calculates time played of track
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
 
    // Adds zero in front if single digits
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
 
    // Displays time
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
  }
}