document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.butt');
    const messageElement = document.getElementById('message');
    let gameActive = true;
    let gameState = Array(9).fill("");
    const player = 'X';
    const computer = 'O';
    let currentPlayer = player;

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
    updateMessage(`X moves first! (player)`);

    function handleCellClick(event) {
        if (currentPlayer !== player || !gameActive) return;

        const clickedCellIndex = parseInt(event.target.getAttribute('data-cell-index'));
        if (gameState[clickedCellIndex] !== "") return;

        gameState[clickedCellIndex] = player;
        event.target.innerText = player;
        if (checkWinner(player)) return;

        if (!gameState.includes("")) {
            updateMessage('Draw!');
            gameActive = false;
            return;
        }

        currentPlayer = computer;
        updateMessage(`It's ` + computer + `'s turn!`);

        setTimeout(handleComputerMove, 500);
    }

    function handleComputerMove() {
        const bestMove = minimax(gameState, computer).index;
        gameState[bestMove] = computer;
        cells[bestMove].innerText = computer;
        if (checkWinner(computer)) return;

        currentPlayer = player;
        updateMessage(`It's ` + player + `'s turn!`);
    }

    function minimax(state, player) {
        const emptyCells = state.map((val, idx) => val === "" ? idx : null).filter(val => val !== null);
        const winner = checkWinnerState(state);
        if (winner) return { score: winner === 'X' ? -1 : 1 };
        if (emptyCells.length === 0) return { score: 0 };

        const moves = emptyCells.map(index => {
            state[index] = player;
            const score = minimax(state, player === 'O' ? 'X' : 'O').score;
            state[index] = "";
            return { index, score };
        });

        return player === 'O' ?
            moves.reduce((best, move) => move.score > best.score ? move : best) :
            moves.reduce((best, move) => move.score < best.score ? move : best);
    }

    function checkWinnerState(state) {
        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return null;
    }

    function checkWinner(player) {
        const winner = checkWinnerState(gameState);
        if (winner) {
            updateMessage(`${player} wins!`);
            gameActive = false;
            return true;
        }
        return false;
    }

    function updateMessage(msg) {
        messageElement.innerText = `${msg}`;
    }
});
