/* Write a program to input an integer 'n' and print the sum of all its even digits and the sum of all its odd digits separately.

Digits mean numbers, not places! That is, if the given integer is "132456", even digits are 2, 4, and 6, and odd digits are 1, 3, and 5.*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
function even_odd_sum(num){

    let evensum = 0, oddsum = 0, digit=0;
    while (num !== 0) {
        digit = num % 10;
        if (digit % 2 === 0) {
            evensum += digit;
        } else {
            oddsum += digit;
        }
        num = Math.floor(num / 10);//as num/10 gives floating point value we need only floor value to calculate digit
    }

    return [evensum,oddsum];
}

readline.question('Enter the number: ',(num)=>{
    num = Number(num);
    const result = even_odd_sum(num);
    console.log(result);
    readline.close();
})
