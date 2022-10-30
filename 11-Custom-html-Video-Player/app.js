//  Get the Elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullScreen = player.querySelector(".full-screen");


// Built functions

// Play  &&  Stop
function togglePlay() {
    //video[video.paused ? 'play' : 'pause']();
    if(video.paused){
        video.play();
        toggle.textContent = "||"
    }else{
        video.pause();
        toggle.textContent = "►"
    }//an alternative way
}

function skip () {
    //console.log(video.currentTime)
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    //console.log(this.value)
    //console.log(this.name) //playbackRate , volume
}

function handleProgress() {
    const percent = (video.currentTime / video.duration)*100
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    //console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function makeFullScreen() {
    //console.log('full screen request')
    video.requestFullscreen();
}



 
// EVent listeners

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress); // optional event = progress
progress.addEventListener('click', scrub);
//progress.addEventListener('mousemove', scrub);
fullScreen.addEventListener('click', makeFullScreen);

skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))