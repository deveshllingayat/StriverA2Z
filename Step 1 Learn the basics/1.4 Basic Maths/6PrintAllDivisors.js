const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const printDivisors = (num) => {
  let divisors = [];
  //naive T.C O(N) approach
  //for(i=1;i<=num;i++){
  //     if(num%i===0) divisors.push(i);
  // }

  //optimal approach : Loop till 1 to sqrt(n) and push if n%i==0 and if i!== n/i then push n/i also
  let sqrtN = Math.sqrt(num);
  for (i = 1; i <= sqrtN; ++i) {
    if (num % i === 0) {
      divisors.push(i);
      if (i !== num / i) divisors.push(num / i);
    }
  }
  return divisors.sort((a,b)=>a-b);
};

readline.question("Enter a number to find its divisors: ", (num) => {
  console.log(printDivisors(num));
  readline.close();
});
