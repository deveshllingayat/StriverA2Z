//parameterised recursion, sum of n natural numbers
function sumOfNumbers(n, sum) {
  if (n < 1) {
    console.log(sum);
    return;
  }
  sumOfNumbers(n - 1, sum + n);
}
sumOfNumbers(3, 0);

//non parametersied recursion (by returning the value)
//Given an integer n, calculate the sum of series 13 + 23 + 33 + 43 + … till n-th term.
//below function gives TLE as its a recursive approach so T.C is O(N) and S.C will be auxillary space (stack space) O(N) because,
//N function calls are waiting in the stack space to do it in O(1) we need to use formula (n*(n+1)/2)*(n*(n+1)/2)
//which is the formula for calculating  sum of cubes of first n natural numbers
function sumOfSeries(n) {
  // if(n===1) return 1;
  // return (n*n*n + sumOfSeries(n-1)); //Gives TLE in GFG
  //   let x = (n * (n + 1)) / 2;
  //   return x * x; //This gives incorrect answer when tested for large numbers ex: n >= 26501
  const sum = (BigInt(n) * BigInt(n + 1)) / BigInt(2); //this works for all the answers
  return (sum * sum).toString();
}
console.log(sumOfSeries(5)); //now T.C is O(1) but this also gives TLE in javascript when tested for very large numbers
//so we use BigInt for calculation and then convert it back to string to return;
