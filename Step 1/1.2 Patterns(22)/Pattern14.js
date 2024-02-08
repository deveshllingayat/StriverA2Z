// Increasing Letter Triangle
/*
Problem statement
Aryan and his friends are very fond of patterns. For a given integer ‘N’, they want to make the Increasing Letter Triangle.

Example:
Input: ‘N’ = 3

Output: 

A
A B
A B C
*/
const increasingLetterTriangle = (n) => {
    for(let i=0;i<n;i++){
        for(let j=65;j<=(65+i);j++){
            process.stdout.write(String.fromCharCode(j)+' ');//String.fromCharCode() gives character when passed an ascii code
        }
        console.log();
    }
}
increasingLetterTriangle(4);