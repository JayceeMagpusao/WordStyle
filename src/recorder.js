let audioChunks;

startRecord.onclick = e => {
  debugger
  const element = document.getElementById("recordingSession");
  element.innerHTML = "Recording in session";
  startRecord.disabled = true;
  stopRecord.disabled=false;
  // This will prompt for permission if not allowed earlier
  navigator.mediaDevices.getUserMedia({audio:true})
    .then(stream => {
      audioChunks = []; 
      rec = new MediaRecorder(stream);
      rec.ondataavailable = e => {
        audioChunks.push(e.data);
        if (rec.state == "inactive"){
          let blob = new Blob(audioChunks,{type:'audio/mpeg-3'});
          recordedAudio.src = URL.createObjectURL(blob);
          recordedAudio.controls=true;
          recordedAudio.autoplay=true;
          audioDownload.href = recordedAudio.src;
          audioDownload.download = 'mp3';
          audioDownload.innerHTML = 'download';
       }
      }
    rec.start();  
    })
}

stopRecord.onclick = e => {
  const element = document.getElementById("recordingSession");
  element.innerHTML = "";
  startRecord.disabled = false;
  stopRecord.disabled=true;
  rec.stop();
}

