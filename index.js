$(document).ready(function(){
	var game = false;
	var board = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
	var p1 = "X";
	var c1 = "O";
	var count=0;

 function checkWinner(boardArray, currentTurn){
	 if(boardArray[0] === currentTurn && boardArray[1] === currentTurn && boardArray[2] === currentTurn) {
		 game = true;
		 alert("Player " + currentTurn + " wins! better luck next time");
 } else if (boardArray[2] === currentTurn && boardArray[4] === currentTurn && boardArray[6] === currentTurn){
		game = true;
	 alert("Player " + currentTurn + " wins! better luck next time");
	} else if (boardArray[3] === currentTurn && boardArray[4] === currentTurn && boardArray[5] === currentTurn){
		game = true;
		alert("Player " + currentTurn + " wins! better luck next time");
	} else if (boardArray[6] === currentTurn && boardArray[7] === currentTurn && boardArray[8] === currentTurn) {
		game = true;
		alert("Player " + currentTurn + " wins! better luck next time");
	} else if (boardArray[0] === currentTurn && boardArray[4] === currentTurn && boardArray[8] === currentTurn){
		game = true;
		alert("Player " + currentTurn + " wins! better luck next time");
	} else if (boardArray[0] === currentTurn && boardArray[3] === currentTurn && boardArray[6] === currentTurn){
		game = true;
		alert("Player " + currentTurn + " wins! better luck next time");
	} else if (boardArray[1] === currentTurn && boardArray[4] === currentTurn && boardArray[7] === currentTurn){
		game = true;
		alert("Player " + currentTurn + " wins! better luck next time");
	} else if (boardArray[2] === currentTurn && boardArray[5] === currentTurn && boardArray[8] === currentTurn) {
		game = true;
		alert("Player " + currentTurn + " wins! better luck next time");
	} else {
		game = false;
	}
 }
	
	function reset() {
		board = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
		count=0;
		$(".tac").text("#");
		game = false;
	}
	
	function computerChoice(){
		var chose = false;
		while(chose === false && count !== 5){
			var c1random = (Math.random()*10).toFixed();
			var choice= $("#" + c1random).text();
			if (choice === "#"){
				$("#" + c1random).text(c1);
				chose = true;
				board[c1random] = c1;
			}
		}
	}
	
	function playerChoice(affiliation, location){
		var slotTaken = $("#" + location).text();
		if (slotTaken === "#"){
			count++;
			$("#" + location).text(affiliation);
			board[location] = affiliation;
			checkWinner(board, p1);
			if (game === false){
				computerChoice();
			checkWinner(board, c1);
			}
		}
	}	
	
$(".tac").click(function(){
	var slot = $(this).attr("id");
	playerChoice(p1, slot);
});

$("#reset").click(function(){
	reset();
	alert("Choose your affiliation wisely ... ");
})	
	
$("#turnx").click(function(){
	p1 = "X";
	c1 = "O";
	$("#turno").removeClass("btn-primary");
	$("#turnx").addClass("btn-primary");
})
	
$("#turno").click(function(){
	p1 = "O";
	c1 = "X";
	$("#turnx").removeClass("btn-primary");
	$("#turno").addClass("btn-primary");
})	
	
});