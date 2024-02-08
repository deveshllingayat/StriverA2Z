//Star Diamond
/*
Problem statement
Ninja was very fond of patterns. For a given integer ‘N’, he wants to make the N-Star Diamond.

Example:
Input: ‘N’ = 3

Output: 

  *
 ***
*****
*****
 ***
  *
  
  */
 //this pattern is combination of previous two patterns
 const starTriangle = (n) =>{
    for(let i = 0;i<n;i++){
        for(let space=0;space<n-i-1;space++){
            process.stdout.write(' ');
        }
        for(let star=0;star<(2*i+1);star++){
            process.stdout.write('*');
        }
        for(let space=0;space<n-i-1;space++){
            process.stdout.write(' ');
        }
        console.log();
    }
}
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
 const nStarDiamond = (n) =>{
    starTriangle(n)
    invertedStarTriangle(n)
 }
 nStarDiamond(5);