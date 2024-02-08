/* The n-th term of Fibonacci series F(n), where F(n) is a function, is calculated using the following formula -

    F(n) = F(n - 1) + F(n - 2), 
    Where, F(1) = 1, F(2) = 1

Provided 'n' you have to find out the n-th Fibonacci Number. Handle edges cases like when 'n' = 1 or 'n' = 2 by using conditionals like if else and return what's expected.

"Indexing is start from 1" */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
function fibb(n) {
    let a = 1, b = 1,ans =1;
    for (let i = 3; i <= n; i++){
        ans = a + b;
        a = b;
        b = ans;
    }
    return ans;
}
readline.question('Enter a number to find fibboncci no. at that position: ',(num)=>{
    console.log('The fibbonacci no. at position '+num+' is : ',fibb(num));
    readline.close();
})