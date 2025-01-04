import React, { useState } from 'react';
import '../Game/Game.css';
import Confetti from 'react-confetti';

function NumberGuessingGame() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 10;

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleInputChange(event) {
    setGuess(parseInt(event.target.value));
  }

  function handleGuess(event) {
    event.preventDefault();
    if (guess < 1 || guess > 100) {
      setMessage('Please enter a number between 1 and 100.');
    }
    else{
      if (guess === randomNumber) {
        setMessage('Congrats, your guess is correct');
      } else if (guess < randomNumber) {
        setMessage('Sorry, your guess is  low. Try again');
      } else {
        setMessage('Sorry, your guess is  high. Try again');
      }
    }

    setAttempts(attempts + 1);
    setGuess('');
  }

  function handlePlayAgain() {
    setRandomNumber(generateRandomNumber());
    setMessage('');
    setAttempts(0);
  }

  function handlePlayAgain1() {
    setMessage('');
  }

  return (
    <div className="center">
      
       {message === 'Wow! Congrats, your guess is correct' && <Confetti />}
      {message && <p>{message}</p>}
      {attempts < maxAttempts && !message && (
       <center> <form onSubmit={handleGuess} className='formgam'>
      <label>
         <h1>Welcome! Start the game</h1>
         <br />
         Enter a random number from 1 to 100:
         <div className="textInputWrapper">
           <br />
           <input
             placeholder="Type Here"
             type="number"
             value={guess}
             onChange={handleInputChange}
             className="textInput"
             required
           />
         </div>
       </label>
       <br></br>
       <button type="submit">Submit Guess</button>
       <br></br>
       <br></br>

       <p className="attempt">Your Attempt:{attempts}</p>
     </form></center>
    
      )}
      {attempts === maxAttempts && !message && (
        <p>
          Sorry, you have reached your limit. Better luck next time
          <br />
         <center> <button onClick={handlePlayAgain} className="gabut">
            Start new Game
          </button></center>
        </p>
      )}
      <div className="msg">
        {message === 'Wow! Congrats, your guess is correct' && (
          <center><button onClick={handlePlayAgain} className="gabut">
          Start new Game
        </button></center>
        )}
        {(message === 'Sorry, your guess is  low. Try again' ||
          message === 'Sorry, your guess is  high. Try again') && (
          <center><button onClick={handlePlayAgain1} className="gabut">
            Continue Guessing
          </button></center>
        )}
      </div>
    </div>
  );
}

export default NumberGuessingGame;



