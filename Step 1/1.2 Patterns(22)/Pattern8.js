// Reverse Star Triangle
/*
Problem statement
Ninja was very fond of patterns. For a given integer ‘N’, he wants to make the Reverse N-Star Triangle.

Example:
Input: ‘N’ = 3

Output: 

*****
 ***
  *

 */

 const invertedStarTriangle = (n) =>{
    for(let i = 0;i<n;i++){
        for(let space=0;space<i;space++){
            process.stdout.write(' ');
        }
        for(let star=0;star<(2*(n-i)-1);star++){
            process.stdout.write('*');
        }
        for(let space=0;space<i;space++){
            process.stdout.write(' ');
        }
        console.log();
    }
}
invertedStarTriangle(5)