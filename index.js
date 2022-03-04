// Create variables for the game state

let scoreOne = 0;
let scoreTwo = 0;

let playerOneTurn = true;

document.getElementById("rollBtn").addEventListener("click", rollBtn)
let player1Dice = document.getElementById("player1Dice")
let player2Dice = document.getElementById("player2Dice")
let playerOneScore = document.getElementById("player1Scoreboard")
let playerTwoScore = document.getElementById("player2Scoreboard")
const resetBtn = document.getElementById("resetBtn")

const message = document.getElementById("message")



function rollBtn(){
    
    if(playerOneTurn){
        playerOneTurn = false
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        let diceRoll1 = Math.ceil(Math.random() * 6)
        player1Dice.innerHTML = diceRoll1
        console.log(scoreOne)
        scoreOne +=  diceRoll1
        playerOneScore.innerHTML = scoreOne
        message.innerHTML = "Player 2 Turn"
    } else {
        playerOneTurn = true;
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        let diceRoll2 = Math.ceil(Math.random() * 6)
        player2Dice.innerHTML = diceRoll2
        scoreTwo +=  diceRoll2
        playerTwoScore.innerHTML = scoreTwo
        console.log(scoreTwo)
        message.innerHTML = "Player 1 Turn"
    }
}
