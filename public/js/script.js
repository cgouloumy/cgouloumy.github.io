function removeCharacter(str){
    return str.substring(1)
}

function addClass(button) {
    $(button).addClass('focus')
    $("#play").get(0).focus();
}
function remClass() {
    $('.focus').removeClass('focus')
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
        audio = new Audio("public/sound/" + removeCharacter($(this).attr('href') + ".wav"));
        remClass();
        if (oaudio != audio) {
            audio.play();
            console.log("play");
            playing = 1;
            addClass($(this))
        }
    } else if (playing == 0) {
        audio = new Audio("public/sound/" + removeCharacter($(this).attr('href') + ".wav"));
        audio.play();
        console.log("play");
        playing = 1;
        $('#stop').css('display', 'flex');
        addClass($(this))
    }
});



$('#stop').click(function() {
    audio.pause();
    audio.currentTime = 0;
})

$('#pause').click(function() {
    audio.pause();
})

$('#play').click(function() {
    audio.play();
})