// Create variables for the game state

let scoreOne = 0;
let scoreTwo = 0;

let playerOneTurn = true;

document.getElementById("rollBtn").addEventListener("click", rollBtn)
let playerOneScore = document.getElementById("player1Scoreboard")
let playerTwoScore = document.getElementById("player2Scoreboard")



function rollBtn(){
    
    if(playerOneTurn){
        playerOneTurn = false
        scoreOne +=  Math.ceil(Math.random() * 6)
        console.log(scoreOne)
        playerOneScore.innerHTML = scoreOne
        document.getElementById("message").innerHTML = "Player 2 Turn"
    } else {
        playerOneTurn = true;
        scoreTwo +=  Math.ceil(Math.random() * 6)
        playerTwoScore.innerHTML = scoreTwo
        console.log(scoreTwo)
        document.getElementById("message").innerHTML = "Player 1 Turn"
    }
}
