var player, seconds = 0;
function onYouTubeIframeAPIReady() {
    
    player = new YT.Player('player', {
        events: {
          'onReady': onPlayerReady
        }
		console.log("player");
      });
	playerTwo = new YT.Player('playerTwo', {
        events: {
          'onReady': onPlayerReady
        }
		console.log("player2");
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
}

function seekTwo(sec){
    if(playerTwo){
        seconds = sec;
        playerTwo.seekTo(seconds, true);
    }
}

