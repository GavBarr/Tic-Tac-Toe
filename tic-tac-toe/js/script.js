//Javascript
var playerOne = prompt("Player #1:");
var playerTwo = prompt("Player #2:");
var markers = ["X", "O"];
var players = [playerOne, playerTwo];
var totals = [];
var winCodes = [7,56,73,84,146,273,292,448];
var gameOver;
var whoseTurn = 0;
var audio;
var points1 = 0;
var points2 = 0;
	



function restartGame()
{
	startGame();
}

function startGame()
{
	var counter = 1;
	var innerDivs = "";
	for (i = 1; i <=3; i++)
	{
		innerDivs += '<div id="row-' + i + '">';
		for(j = 1; j <=3; j++)
		{
		innerDivs += '<div onclick="playGame(this,' + counter + ');"></div>';
		counter *=2;
		}
		
		innerDivs+= '</div>';
	}
		document.getElementById("game-board").innerHTML = innerDivs; 
		totals = [0, 0];
		gameOver = false;
		document.getElementById("game-message").innerText = "It's " + players[whoseTurn] + "'s Turn";
}

function playGame(clickedDiv, divValue)
{
	if (!gameOver)
	{
		//add x or o to playing field
		clickedDiv.innerText = markers[whoseTurn];

		//increment players' total count for win
		totals[whoseTurn] += divValue;
	
		//call isWin() function 
		if (isWin())
		{
			document.getElementById("game-message").innerText = players[whoseTurn] + " Wins!";
			const audio = new Audio();
			audio.src = "img/happy.mp3";
			audio.play();
			
	
		 
			
				if(playerOne == 0)
					points1++;
				
				else(playerTwo == 0)
					points2++;
					
					
					
					
				
				document.getElementById("player1").innerHTML = points1;
				document.getElementById("player2").innerHTML = points2;
			
			
			
			 
		}
		else if (gameOver)
		{
			document.getElementById("game-message").innerText = "Tied Game!";
			const audio = new Audio();
			audio.src = "img/sad.mp3";
			audio.play();
			audio.volume = 0.2;
		}
		else
		{
			//toggle player turn
			if (whoseTurn) whoseTurn = 0; else whoseTurn = 1;
	
			//prevent clicking on same div again
			clickedDiv.attributes["0"].nodeValue = "";
	
			//toggle message to display next player
			document.getElementById("game-message").innerText = "It's " + players[whoseTurn] + "'s Turn";
		}
	}
}

//win code logic
function isWin()
{
	//var winCodes = [];
	for (i = 0; i < winCodes.length; i++)
	{
		if ((totals[whoseTurn] & winCodes[i]) == winCodes[i]) { gameOver = true; return true;}
		
	}
	
	if (totals[0] + totals[1] == 511) {gameOver = true;}	
	return false;
	

	
	
	
}
