/*
Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
Example 1:
Input:N = 153
Output:True
Explanation: 1^3+5^3+3^3 = 1 + 125 + 27 = 153
*/
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
function getCube(n){
    return Math.pow(n,3);
}
function armstrong(n) {
    let ans=0,num = n;

    
    while(n>0){
        ans = ans + getCube(n%10);
        n = Math.floor(n/10);
    }
    console.log(ans)
    if(num==ans) return 'an Armstrong Number';


    return 'Not an Armstrong Number';
}
readline.question('Enter a number to find if its armstrong or not: ',(num)=>{
    console.log('The  number '+num+' is ',armstrong(num));
    readline.close();
})