//Triangle
/* Sam is making a Triangular painting for a maths project.

An N-dimensional Triangle is represented by the lower triangle of the pattern filled with integers representing the row number.

For every value of ‘N’, help sam to print the corresponding Triangle.

Example:
Input: ‘N’ = 3

Output: 
1
2 2 
3 3 3
*/
//here for every ith row we are printing value of the row ith times
const Triangle = (n) =>{
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            process.stdout.write(i+' ');
        }
        console.log();
    }
}
Triangle(3);