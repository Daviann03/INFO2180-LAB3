// tic-tac-toe.js

document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";  // Start with player X
    let boardState = Array(9).fill(null); // To keep track of the board

    // Style the board squares
    squares.forEach((square, index) => {
        square.classList.add("square");

        // Handle clicks for X and O
        square.addEventListener("click", function () {
            if (!boardState[index]) {
                boardState[index] = currentPlayer;
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });

        // Exercise 3: Handle hover styling
        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });
    });

    console.log("Tic Tac Toe board loaded and interactive!");
});
