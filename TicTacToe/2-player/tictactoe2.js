const cells = document.querySelectorAll('.butt');
const messageElement = document.getElementById('message');
let gameActive = true;
let gameState = Array(9).fill("");
let currentPlayer = 'X';

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
updateMessage(`X moves first!`);

function handleCellClick(event) {
    const clickedCellIndex = parseInt(event.target.getAttribute('data-cell-index'));
    if (gameState[clickedCellIndex] !== "" || !gameActive) return;

    gameState[clickedCellIndex] = currentPlayer;
    event.target.innerText = currentPlayer;

    if (checkWinner(currentPlayer)) return;

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateMessage(`It's ` + currentPlayer + `'s turn!`);
}

function checkWinner(player) {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            updateMessage(`${player} wins!`);
            gameActive = false;
            return true;
        }
    }
    if (!gameState.includes("")) {
        updateMessage('Draw!');
        gameActive = false;
        return true;
    }
    return false;
}

function updateMessage(msg) {
    messageElement.innerText = `${msg}`;
}
