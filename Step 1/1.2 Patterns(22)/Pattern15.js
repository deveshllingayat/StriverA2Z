//  Reverse Letter Triangle

/*
Problem statement
Aryan and his friends are very fond of patterns. For a given integer ‘N’, they want to make the Reverse Letter Triangle.

You must print a matrix corresponding to the given Reverse Letter Triangle.

Example:
Input: ‘N’ = 3

Output: 

A B C
A B
A
*/
const reverseLetterTriangle = (n) => {
    for(let i=0;i<n;i++){
        for(let j=65;j<(65+n-i);j++){
            process.stdout.write(String.fromCharCode(j)+' ');//String.fromCharCode() gives character when passed an ascii code
        }
        console.log();
    }
}
reverseLetterTriangle(5);