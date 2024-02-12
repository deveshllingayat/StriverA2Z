/*Problem statement
You are given a number ’n’.



Find the number of digits of ‘n’ that evenly divide ‘n’.



Note:
A digit evenly divides ‘n’ if it leaves no remainder when dividing ‘n’.


Example:
Input: ‘n’ = 336

Output: 3

Explanation:
336 is divisible by both ‘3’ and ‘6’. Since ‘3’ occurs twice it is counted two times.
*/

// const countDigitsEvnlyDivideNum = (n)=>{
//     let count = 0;
// 
//     // Iterate through each digit of the number
//     while(n>0) {
//         // Convert digit back to number
//         let digit = n%10;
// 
//         // Check if digit evenly divides n
//         if (digit !== 0 && n % digit === 0) {
//             count++;
//         }
//         n = Math.floor(n/10);
//     }
// 
//     console.log(count);
// }
// countDigitsEvnlyDivideNum(2468);
//Time complexity will be log10(n) because in case of division it is simply how many no. of times that no. is getting divided i.e log10(n)

//this is the program to count only total no. of digits in a number using log10()
const countDigits=(n)=>{
    let count = Math.floor(Math.log10(n))+1;
    console.log(count);
}
countDigits(123);
