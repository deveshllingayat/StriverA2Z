// Alpha-Triangle
/*
Problem statement
Sam is researching on Alpha-Triangles. So, he needs to create them for different integers ‘N’.

An Alpha-Triangle is represented by the triangular pattern of alphabets in reverse order.

For every value of ‘N’, help sam to print the corresponding Alpha-Triangle.

Example:
Input: ‘N’ = 3

Output: 
C
C B 
C B A

*/

const alphaTriangle = (n)=>{
    for(let i=0;i<n;i++){
    let char = 69;
        for(let j=char-i;j<=char;j++){
            process.stdout.write(String.fromCharCode(j));
        }
        console.log();
    }
}
alphaTriangle(5);