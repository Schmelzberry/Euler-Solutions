// Problem #1 - Euler Archives

// QUESTION: 
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// ANSWER: 
// Find the sum of all the multiples of 3 or 5 below 1000.

const multipleCount = (num) => {
  // base case, count until 99
  if (num >= 100) {
    return;
  }
  // check if a number is divisible by 3 or 5, log to console if true
  if (num % 3 === 0 || num % 5 === 0) {
    console.log(num);
  }
  // recursive call, increment number
  multipleCount(num + 1);
};
// call function so webpack can stfu
multipleCount(20);

// Problem #1 - Euler Archives