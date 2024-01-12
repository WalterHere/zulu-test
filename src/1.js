const oddSumForFib = (max) => {
  // Initialize variables for the first two Fibonacci numbers
  let prev = 0,
    current = 1,
    sum = 0;

  while (current < max) {
    if (current % 2 === 1) {
      sum += current;
    }
    // Add the previous two numbers to get the next Fibonacci number
    current += prev;
    prev = current - prev;
  }

  return sum;
};

module.exports = { oddSumForFib };
