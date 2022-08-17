const sounds = document.getElementsByTagName("audio");

function playAudio(audio) {
    stopSongs();
    document.getElementById(audio).play(); 
}

function stopSongs() {
    for (const sound of sounds) {
        const song = document.getElementById(sound.id);
        song.pause();
        song.currentTime = 0;
    }
}