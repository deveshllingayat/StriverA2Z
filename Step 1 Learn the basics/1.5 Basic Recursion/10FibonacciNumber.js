// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).
const fibb = (n) => {
  if (n <= 1) return n;
  return fibb(n - 1) + fibb(n - 2);
};
console.log(fibb(4));
