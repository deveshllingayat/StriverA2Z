//Number Crown
/*
Problem statement
Aryan and his friends are very fond of the pattern. They want to make the Reverse N-Number Crown for a given integer' N'.

Given 'N', print the corresponding pattern.

Example:
Input: ‘N’ = 3

Output: 
            [num,space,num]
1         1     [1,4,1]
1 2     2 1     [2,2,2]
1 2 3 3 2 1     [3,0,3]

*/
//it is similar to the pattern7 which is having space stars and space
const numberCrown = (n) =>{
    for(let i=1;i<=n;i++){
        for(let num=1;num<=i;num++){
            process.stdout.write(String(num));
        }
        for(let spaces=1;spaces<=2*(n-i);spaces++){
            process.stdout.write(' ');
        }
        for(let num=i;num>=1;num--){
            process.stdout.write(String(num));
        }
        console.log();
    }
}
numberCrown(3);