var player, seconds = 0;
function onYouTubeIframeAPIReady() {
    
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
	
	playerThree = new YT.Player('playerTwo', {
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
		console.log("player");
    }
}

function seekTwo(sec){
    if(playerTwo){
        seconds = sec;
        playerTwo.seekTo(seconds, true);
		console.log("player2");
    }
}

function seekThree(sec){
    if(playerTwo){
        seconds = sec;
        playerThree.seekTo(seconds, true);
		console.log("player3");
    }
}
