// tic-tac-toe.js

// Wait for the DOM to finish loading

document.addEventListener("DOMContentLoaded", function () {
    // Select all the divs inside the game board
    const squares = document.querySelectorAll("#board div");

    // Loop through each div and add the 'square' class
    squares.forEach(function(square) {
        square.classList.add("square");

    });

       // Log a message to confirm the script ran
    console.log("Tic Tac Toe board loaded!");
});
