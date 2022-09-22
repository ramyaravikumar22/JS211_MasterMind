'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
const solution = 'abcd'; //hard coding now and will be changed to let later on
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min; //pulling rnadom numbers
}

const generateHint = (guess) =>  {
  // your code here
  let solutionArray = solution.split('') //'abcd' => ['a', 'b', 'c', 'd']
  let guessArray = guess.split('')  // 'dddd' => ['d', 'd', 'd', 'd']
  let correctLetterLocations = 0
  let correctLetters = 0
  //let targetIndex
  for (let i = 0; i < solutionArray.length; i++) {
    //console.log(solutionArray[i]);
    if(solutionArray[i] === guessArray[i]) {
      correctLetterLocations++
      solutionArray[i] = null
    }
    }

    for (let i = 0; i < solutionArray.length; i++) {
      if (guessArray.indexOf(solutionArray[i] != -1)){
        correctLetters++
        solutionArray[i]
      }
    }
  }

const mastermind = (guess) => {

  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here

  if(guess === solution) {
  console.log('You guessed it!')
} else {
  generateHint (guess)
}
}


const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}