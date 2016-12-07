var player, seconds = 0;
function onYouTubeIframeAPIReady() {
    
    player = new YT.Player('player', {
    });
	  
	playerTwo = new YT.Player('playerTwo', {
	});
	
	playerThree = new YT.Player('playerThree', {
	});
	
	playerFour = new YT.Player('playerFour', {
	});
	
	playerFive = new YT.Player('playerFive', {
	});
	
	playerSix = new YT.Player('playerSix', {
	});
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
