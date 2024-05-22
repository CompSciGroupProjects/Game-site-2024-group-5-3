let pRed = "Red";
let pYellow = "Yellow";
let currentPlayer = pRed;
let endGame = false;
let board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],]

function fill(row, column, playerNum) {
    if (playerNum === pRed) {
        document.getElementById(row + "," + column).style.backgroundColor = "#E34234";
        currentPlayer = pYellow;
        document.getElementById("current-player").style.color = "gold";
    } else {
        document.getElementById(row + "," + column).style.backgroundColor = "gold";
        currentPlayer = pRed;
        document.getElementById("current-player").style.color = "#E34234";
    }
    document.getElementById("current-player").innerText = currentPlayer;
}

    function column1() {
    if(endGame === false) {
        for (let x = 5; x >= 0; x--) {
            if (board[x][0] == null) {
                board[x][0] = currentPlayer;
                fill(x, 0, currentPlayer);
                checkWin()
                return;
            }
        }
    }
    }

function column2() {
    if(endGame === false) {
        for (let x = 5; x >= 0; x--) {
            if (board[x][1] == null) {
                board[x][1] = currentPlayer;
                fill(x, 1, currentPlayer);
                checkWin()
                return;
            }
        }
    }
}

function column3() {
    if(endGame === false) {
        for (let x = 5; x >= 0; x--) {
            if (board[x][2] == null) {
                board[x][2] = currentPlayer;
                fill(x, 2, currentPlayer);
                checkWin()
                return;
            }
        }
    }
}

function column4() {
    if(endGame === false) {
        for (let x = 5; x >= 0; x--) {
            if (board[x][3] == null) {
                board[x][3] = currentPlayer;
                fill(x, 3, currentPlayer);
                checkWin()
                return;
            }
        }
    }
}

function column5() {
    if(endGame === false) {
        for (let x = 5; x >= 0; x--) {
            if (board[x][4] == null) {
                board[x][4] = currentPlayer;
                fill(x, 4, currentPlayer);
                checkWin()
                return;
            }
        }
    }
}

function column6() {
    if(endGame === false) {
        for (let x = 5; x >= 0; x--) {
            if (board[x][5] == null) {
                board[x][5] = currentPlayer;
                fill(x, 5, currentPlayer);
                checkWin()
                return;
            }
        }
    }
}

function column7() {
    if(endGame === false) {
        for (let x = 5; x >= 0; x--) {
            if (board[x][6] == null) {
                board[x][6] = currentPlayer;
                fill(x, 6, currentPlayer);
                checkWin()
                return;
            }
        }
    }
}

    function checkWin() {
        for (let r = 0; r < 6; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c] !== null) {
                    if (board[r][c] === board[r][c + 1] && board[r][c + 1] === board[r][c + 2] && board[r][c + 2] === board[r][c + 3]) {
                        setWin(r, c);
                        return;
                    }
                }
            }
        }

        for (let c = 0; c < 7; c++) {
            for (let r = 0; r < 3; r++) {
                if (board[r][c] !== null) {
                    if (board[r][c] === board[r + 1][c] && board[r + 1][c] === board[r + 2][c] && board[r + 2][c] === board[r + 3][c]) {
                        setWin(r, c);
                        return;
                    }
                }
            }
        }

        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c] !== null) {
                    if (board[r][c] === board[r + 1][c + 1] && board[r + 1][c + 1] === board[r + 2][c + 2] && board[r + 2][c + 2] === board[r + 3][c + 3]) {
                        setWin(r, c);
                        return;
                    }
                }
            }
        }

        for (let r = 3; r < 6; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c] !== null) {
                    if (board[r][c] === board[r - 1][c + 1] && board[r - 1][c + 1] === board[r - 2][c + 2] && board[r - 2][c + 2] === board[r - 3][c + 3]) {
                        setWin(r, c);
                        return;
                    }
                }
            }
        }

        let boardFull = true;

        for(let r = 0; r<6; r++){
            for(let c=0; c<7; c++){
                if(board[r][c] === null){
                    boardFull = false;
                    break;
                }
            }
        }

        if(boardFull){
            document.getElementById("winner").innerText = "The game is a tie!";
            document.getElementById("player-turn").innerText = "";
        }
    }

    function setWin(r, c) {
        let winner = document.getElementById("winner");
        if (board[r][c] === pRed) {
            winner.innerText = "Player Red Is The Winner!";
            document.getElementById("winner").style.color = "#E34234";
            document.getElementById("player-turn").innerText = "";
        } else {
            winner.innerText = "Player Yellow Is The Winner!";
            document.getElementById("winner").style.color = "gold";
            document.getElementById("player-turn").innerText = "";
        }
        endGame = true;
    }

    function refresh(){
        window.location.reload();
    }