function removeCharacter(str){
    return str.substring(1)
}

var audio;
var playing = 0;

$('#links > a').click(function() {
    if (playing == 1) {
        audio.pause();
        audio.currentTime = 0;
        console.log("stop");
        playing = 0;
        oaudio = audio;
        audio = new Audio("public/sound/" + removeCharacter($(this).attr('href') + ".mp3"));
        if (oaudio != audio) {
            audio.play();
            console.log("play");
            playing = 1;
        }
    } else if (playing == 0) {
        audio = new Audio("public/sound/" + removeCharacter($(this).attr('href') + ".mp3"));
        audio.play();
        console.log("play");
        playing = 1;
        $('#stop').css('display', 'flex');
    }
});

$('#stop').click(function() {
    audio.pause();
    $(this).css('display', 'none');
})