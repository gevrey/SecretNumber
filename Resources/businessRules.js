/**
 * @author Christophe
 */

var maxGuesses = 6;
var numberOfGuesses = 0;

function getRandomNumber(maxNumber) {
	return Math.floor(Math.random( ) * (maxNumber+1));
}


function verifyGuess(guessedNumber, secretNumber) {
	numberOfGuesses++;
	var result = 0;
	if (guessedNumber < secretNumber) {
		result=-1;
	}
	else if (guessedNumber > secretNumber) {
		result=1;
	}
	return result;
}


function getNumberOfGuesses(){
  var guessStatus = {
    maxGuesses:maxGuesses,
    numberOfGuesses:numberOfGuesses
  };
  return guessStatus;	
}

