/**
 * @author Christophe
 */


function getRandomNumber(maxNumber) {
	return Math.floor(Math.random( ) * (maxNumber+1));
}


function verifyGuess(guessedNumber, secretNumber) {
	var result = 0;
	if (guessedNumber < secretNumber) {
		result=-1;
	}
	else if (guessedNumber > secretNumber) {
		result=1;
	}
	return result;

}
