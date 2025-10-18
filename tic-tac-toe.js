// tic-tac-toe.js

document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";  // Start with player X
    let boardState = Array(9).fill(null); // To keep track of the board

    // Style the board squares
    squares.forEach((square, index) => {
        square.classList.add("square");

        // Add a click event to each square
        square.addEventListener("click", function () {
            // Only allow marking an empty square
            if (!boardState[index]) {
                boardState[index] = currentPlayer; // Record move
                square.textContent = currentPlayer; // Display X or O
                square.classList.add(currentPlayer); // Add class for colour

                // Switch player
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });

    console.log("Tic Tac Toe board loaded and ready!");
});
