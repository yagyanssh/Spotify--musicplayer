function playAll(songnumber){
    var audioElement = document.getElementById("song");
    var playBtn = document.getElementById("play-pause");
    var songFilename = "music/"+songnumber+".mp3";
    var currentRow = document.getElementById("song"+songnumber);

    if (audioElement.getAttribute("src")==songFilename && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML = '<img src="images/play-button.svg">';
        currentRow.classList.remove("highlight");
    }
    else{
        audioElement.setAttribute("src", songFilename);
        audioElement.play();
        playBtn.innerHTML = '<img src="images/pause-button.svg">';
        currentRow.classList.add("highlight");
    }
}

function playaudio(){
    var audio = document.getElementById("song");
    var playBtn = document.getElementById("play-pause");

    if (audio.paused){
        audio.play();
        playBtn.innerHTML = '<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML = '<img src="images/play-button.svg">';
    }
}