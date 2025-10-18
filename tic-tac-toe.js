// tic-tac-toe.js

document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    const newGameButton = document.querySelector(".btn"); // The "New Game" button
    let currentPlayer = "X";
    let boardState = Array(9).fill(null);
    let gameOver = false;

    // Winning combinations (index positions in the board)
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Function to check for a winner
    function checkWinner() {
        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                gameOver = true;
                statusDiv.textContent = `Congratulations! ${boardState[a]} is the Winner!`;
                statusDiv.classList.add("you-won");
                return;
            }
        }
    }

    // Function to reset the game (Exercise 5)
    function resetGame() {
        boardState = Array(9).fill(null);
        gameOver = false;
        currentPlayer = "X";
        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");

        // Clear all squares
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
    }

    // Event listeners for squares
    squares.forEach((square, index) => {
        square.classList.add("square");

        // Click to mark X or O
        square.addEventListener("click", function () {
            if (!boardState[index] && !gameOver) {
                boardState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);

                checkWinner();

                if (!gameOver) {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });

        // Hover effects
        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });
    });

    //  Add event listener for the "New Game" button
    newGameButton.addEventListener("click", resetGame);

    console.log("Tic Tac Toe fully functional with reset feature!");
});
