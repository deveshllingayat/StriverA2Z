// Star Triangle

/*
Problem statement
Ninja was very fond of patterns. For a given integer ‘N’, he wants to make the N-Star Triangle.

Example:
Input: ‘N’ = 3

Output: 
        [spaces,stars,spaces]
  *     [2,1,2]
 ***    [1,3,1]
*****   [0,5,0]

*/
//so here we have 3 inner loops for spaces ,stars and spaces
// for spaces loop will run till n-i-1 and for stars loop will run til 2*i+1
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
starTriangle(5);