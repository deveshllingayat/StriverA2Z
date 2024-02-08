/*  N-Forest
Problem statement
Sam is making a forest visualizer. An N-dimensional forest is represented by the pattern of size NxN filled with ‘*’.

An N/2-dimensional forest is represented by the lower triangle of the pattern filled with ‘*’.

For every value of ‘N’, help sam to print the corresponding N/2-dimensional forest.

Example:
Input:  ‘N’ = 3

Output: 
* 
* *
* * *
*/
//for ith row the * is i times hence inner loop runs till i times
const nForest = (n) =>{
    for(let i=0;i<n;i++){
        for(let j=0;j<=i;j++){
            process.stdout.write('* ');
        }
        console.log();
    }
}
nForest(3);