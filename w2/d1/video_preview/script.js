console.log("page loaded...");

//Store video element from html
var video1 = document.querySelector('#video1');

//Play the video when mouseover with sound muted
video1.onmouseover = function playVideo(){
    video1.play();
    video1.muted = true;
}

//Pause the video when onmouseout
video1.onmouseout = function stopVideo(){
    video1.pause();
}