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
	
	playerThree = new YT.Player('playerThree', {
        events: {
          'onReady': onPlayerReady
        }
	});
	
	playerFour = new YT.Player('playerFour', {
        events: {
          'onReady': onPlayerReady
        }
	});
	
	playerFive = new YT.Player('playerFive', {
        events: {
          'onReady': onPlayerReady
        }
	});
	
	playerSix = new YT.Player('playerSix', {
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
    if(playerThree){
        seconds = sec;
        playerThree.seekTo(seconds, true);
		console.log("player3");
    }
}

function seekFour(sec){
    if(playerFour){
        seconds = sec;
        playerFour.seekTo(seconds, true);
		console.log("player4");
    }
}

function seekFive(sec){
    if(playerFive){
        seconds = sec;
        playerFive.seekTo(seconds, true);
		console.log("player5");
    }
}

function seekSix(sec){
    if(playerSix){
        seconds = sec;
        playerSix.seekTo(seconds, true);
		console.log("player6");
    }
}
