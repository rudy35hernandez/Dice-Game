// Create variables for the game state

let scoreOne = 0;
let scoreTwo = 0;

let playerOneTurn = true;

document.getElementById("rollBtn").addEventListener("click", rollBtn)

function rollBtn(){
    
    if(playerOneTurn){
        playerOneTurn = false
        console.log(playerOneTurn)
        document.getElementById("message").innerHTML = "Player 2 Turn"
    } else {
        playerOneTurn = true;
        console.log(playerOneTurn)
        document.getElementById("message").innerHTML = "Player 1 Turn"
    }
}
