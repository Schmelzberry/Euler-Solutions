// Problem #1 Euler Archives

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const multipleCount = (num) => {
  if (isNaN(num)) {
    return "please enter a number";
  }

  else if (num > 30) {
    return;
  }
  else {
    console.log(num);
    return multipleCount(num + 1)
  }
}

multipleCount(20);