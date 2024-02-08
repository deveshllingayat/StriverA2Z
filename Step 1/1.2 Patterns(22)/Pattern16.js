// Alpha-Ramp
/*
Sam is curious about Alpha-Ramp, so he decided to create Alpha-Ramp of different sizes.

An Alpha-Ramp is represented by a triangle, where alphabets are filled from the top in order.

For every value of ‘N’, help sam to return the corresponding Alpha-Ramp.

Example:
Input: ‘N’ = 3

Output: 
A
B B
C C C
*/

const increasingLetterTriangle = (n) => {
    let char = 65;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write(String.fromCharCode(char)+' ');//String.fromCharCode() gives character when passed an ascii code
        }
        char++;
        console.log();
    }
}
increasingLetterTriangle(4);