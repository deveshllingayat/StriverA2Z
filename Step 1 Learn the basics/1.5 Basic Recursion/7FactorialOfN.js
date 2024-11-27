
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(3));

//A number n is called a factorial number if it is the factorial of a positive integer. For example, the first few factorial numbers are 1, 2, 6, 24, 120,
// Given a number n, the task is to return the list/vector of the factorial numbers smaller than or equal to n.

function factorialNumbers(n) {
    let result = [];
    for(let i=1;i<=n;i++){
        if(factorial(i)>n){
            break;
        }
        result.push(factorial(i));
    }
    return result;
}
console.log(factorialNumbers(6))