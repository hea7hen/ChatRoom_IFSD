function playPause() {
    var myVideo = document.getElementById("videoPlayer");
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
}

function makeBig() {
    var myVideo = document.getElementById("videoPlayer");
    myVideo.width = 560;
}

function makeSmall() {
    var myVideo = document.getElementById("videoPlayer");
    myVideo.width = 320;
}

function makeNormal() {
    var myVideo = document.getElementById("videoPlayer");
    myVideo.width = 420;
}
