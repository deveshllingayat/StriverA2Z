const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
//T.C is O(Sqrt(N))
const checkPrime = (num)=>{
    let res= false,count=0;
    for(let i=1;i<=Math.sqrt(num);i++){
        if(num%i===0){
            count+=1;
            if(Math.floor(num/i)!==i){
                count+=1;
            }
        }
    }
    if(count===2) res = true;

    return res;
}

  readline.question("Enter a number to check if its prime or not: ", (num) => {
    console.log(checkPrime(num)?'Prime':'Not Prime');
    readline.close();
  });