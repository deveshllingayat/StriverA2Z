//Reverse Number Triangle
/*
Problem statement
Aryan and his friends are very fond of the pattern. For a given integer ‘N’, they want to make the Reverse N-Number Triangle.

Example:
Input: ‘N’ = 3

Output: 

1 2 3
1 2
1

*/

//here we have to print numbers instead of stars i.e incrementer values of inner loop from 1 to n-i+1
const nNumberTriangle = (n) =>{
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n-i+1;j++){
            process.stdout.write(j+' ');
        }
        console.log();
    }
}
nNumberTriangle(3);