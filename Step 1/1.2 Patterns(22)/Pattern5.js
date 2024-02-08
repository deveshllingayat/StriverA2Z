//Seeding
/*Sam is planting trees on the upper half region (separated by the left diagonal) of the square shared field.

For every value of ‘N’, print the field if the trees are represented by ‘*’.

Example:
Input: ‘N’ = 3

Output: 
* * *
* *
*

*/

//here for outer loop rows will start from 1 to n and inner loop columns will start from 0 to n-i+1
const seeding = (n) =>{
    for(let i=1;i<=n;i++){
        for(let j=0;j<n-i+1;j++){
            process.stdout.write('* ');
        }
        console.log();
    }
}
seeding(3);