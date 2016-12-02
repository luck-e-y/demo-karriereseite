var player, seconds = 0;
function onYouTubeIframeAPIReady() {
    console.log("player");
    player = new YT.Player('player', {
        events: {
          'onReady': onPlayerReady
        }
      });
	playerTwo = new YT.Player('playerTwo', {
        events: {
          'onReady': onPlayerReady
        }
	});
}

function onPlayerReady(event) {
    //empty
}


function seek(sec){
    if(player){
        seconds = sec;
        player.seekTo(seconds, true);
    }
	if(playerTwo){
        seconds = sec;
        playerTwo.seekTo(seconds, true);
    }
}

