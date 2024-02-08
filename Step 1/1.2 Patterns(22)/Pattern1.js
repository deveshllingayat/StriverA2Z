//Most of the patterns will have two loops rows and columns for outer&inner loops
//Pattern means nested loops
//for outer loop count no. of rows
//for inner loop focus on columns and connect them somehow to rows
//print * inside the inner for loop
//observe symmetry in case of some patterns

// Question 
/* 
Sam is making a forest visualizer. An N-dimensional forest is represented by the pattern of size NxN filled with ‘*’.
For every value of ‘N’, help sam to print the corresponding N-dimensional forest. 
Example:
Input: ‘N’ = 3

Output: 
* * *
* * *
* * *
*/
// const NbyNpattern = (n)=>{
//     for(let i=0;i<n;i++){
//         let row = '';
//         for(let j=0;j<n;j++){
//             row += '* ';
//         }
//         console.log(row);
//     }
// }

//*after executing console.log() the next output starts from a new line and not in the same line hence we use a variable to store the patterns row and then output at end of inner loop

//*we can also use process.stdout.write() which is standard output which works similar to cout<< or system.out.print();
const NbyNpattern = (n)=>{
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            process.stdout.write('* ');
        }
        console.log();
    }
}
NbyNpattern(5);
