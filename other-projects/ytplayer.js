var player, seconds = 0;
function onYouTubeIframeAPIReady() {
    console.log("player");
    player = new YT.Player('player', {
        events: {
          'onReady': onPlayerReady
        }
      });
}

function onPlayerClick(event) {
    event.target.playVideo();
}


function seek(sec){
    if(player){
        seconds += sec;
        player.seekTo(seconds, true);
    }
}