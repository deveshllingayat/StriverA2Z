// Ninja And The Star Pattern I
/*
Problem statement
Ninja has been given a task to print the required star pattern and he asked your help for the same.

You must return an ‘N’*’N’ matrix corresponding to the given star pattern.

Example:
Input: ‘N’ = 4

Output: 

****    for i=0 print  stars i.e 0 to n
*  *    for j=0 and j=n-1 print stars
*  *    the void that is created here are the values of i and j which are neither  0 nor n-1
****    for i=n print  stars i.e 0 to n

*/
const square = (n)=>{
    for(let i=0;i<n;i++)
    {
        for(let j=0;j<n;j++)
        {
            if(i==0||i==n-1||j==0||j==n-1){
                process.stdout.write('*');
            }else process.stdout.write(' ');
        }
        console.log();
    }
}
square(5);