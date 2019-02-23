var wins = 0;
var losses = 0;
var guessesLeft = 9;

// All possible guesses.
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// All typed by user.
var guessed = [];

// // // THE GAME STARTS HERE // // //
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesText = document.getElementById("guesses");
var guessedText = document.getElementById("guessed");


document.onkeyup = function (event) {
    
    // Let the computer pick a random item
    // from the 'letter' variable.
    var randomIndex = Math.floor(Math.random() * alphabet.length);
    var compGuess = alphabet[randomIndex];
    console.log("compGuess: ", compGuess);

    // Get user guess.
    var userGuess = String.fromCharCode(event.keyCode);
    console.log("userGuess: ", userGuess);


    guessed.push(userGuess);

    if (userGuess == compGuess) {
        
        wins = wins + 1;

    } else { // otherwise:
        
        losses = losses + 1;
        guessesLeft = guessesLeft - 1;

    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses Left: " + guessesLeft;
    guessedText.textContent = "Your Guesses So Far: " + guessed;

    if (guessesLeft == 0) {
        // End of game. Reset everything.
        wins = 0;
        losses = 0;
        guessesLeft = 9;
        guessed = [];
    }
}

