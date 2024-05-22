let playerChoice;
let compChoice;
let compChar;
let playChar;
function rock(){
playerChoice=0;
}
function paper() {
playerChoice=1;
}

function scissors() {
playerChoice=2;
}

function compChoose() {
compChoice = Math.floor(Math.random()*3);
}
function chooseWin() {
    if(compChoice===0) {
        if(playerChoice===0) {
            document.getElementById("display1").innerHTML="It's a Tie!";
        }
        else if(playerChoice===1) {
            document.getElementById("display1").innerHTML="Player Wins!";
        }
        else if(playerChoice===2) {
            document.getElementById("display1").innerHTML="Computer Wins!";
        }
    }

    if(compChoice===1) {
        if(playerChoice===0) {
            document.getElementById("display1").innerHTML="Computer Wins!";
        }
        else if(playerChoice===1) {
            document.getElementById("display1").innerHTML="It's a Tie!!";
        }
        else if(playerChoice===2) {
            document.getElementById("display1").innerHTML="Player Wins!";
        }
    }

    if(compChoice===2) {
        if(playerChoice===0) {
            document.getElementById("display1").innerHTML="Player Wins!";
        }
        else if(playerChoice===1) {
            document.getElementById("display1").innerHTML="Computer Wins!";
        }
        else if(playerChoice===2) {
            document.getElementById("display1").innerHTML="It's a Tie!!";
        }
    }


}
function displayRPS() {
    if(compChoice===0) {
        compChar="The Computer chose Rock!";
    }
    else if(compChoice===1) {
        compChar="The Computer chose Paper!";
    }
    else if(compChoice===2) {
        compChar="The Computer chose Scissors!";
    }
document.getElementById("displayComp").innerHTML=compChar;
}

function displayPlay() {
    if(playerChoice===0) {
        playChar="Player chose Rock!";
    }
    else if(playerChoice===1) {
        playChar="The Player chose Paper!";
    }
    else if(playerChoice===2) {
        playChar="The Player chose Scissors!";
    }
    document.getElementById("displayPlayer").innerHTML=playChar;
}

function clearText() {
    compChar="N/A";
    document.getElementById("displayComp").innerHTML=compChar;
    document.getElementById("display1").innerHTML=compChar;

}