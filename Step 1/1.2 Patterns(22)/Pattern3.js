/*  N-Triangles
Sam is making a Triangular painting for a maths project.

An N-dimensional Triangle is represented by the lower triangle of the pattern filled with integers starting from 1.

For every value of ‘N’, help sam to print the corresponding N-dimensional Triangle.

Example:
Input: ‘N’ = 3

Output: 
1
1 2 
1 2 3
*/
//for every row we are printing the inner loops incrementers values

const nTriangles = (n) =>{
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write(j+' ');
        }
        console.log();
    }
}
nTriangles(3);