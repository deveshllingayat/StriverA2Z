//Rotated Triangle
/*
Problem statement
Ninja was very fond of patterns. For a given integer ‘N’, he wants to make the N-Star Rotated Triangle.

Example:
Input: ‘N’ = 3

Output: 

*
**
***
**
*

*/
const rotatedTriangle = (n) =>{
    for(let i = 1;i<=2*n-1;i++){
        let stars = i;
        if(i>n){
             stars = 2*n-i;    
        }
        for(let j=1;j<=stars;j++){
            process.stdout.write('*');
            
        }
        console.log();
    }
}

rotatedTriangle(5);