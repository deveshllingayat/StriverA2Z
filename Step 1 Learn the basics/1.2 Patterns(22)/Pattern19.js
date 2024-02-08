// Symmetric Void
/*
Problem statement
Sam is curious about symmetric patterns, so he decided to create one.

For every value of ‘N’, return the symmetry as shown in the example.

Example:
Input: ‘N’ = 3

Output:         [stars,space,stars]
* * * * * *     [3,0,3]
* *     * *     [2,2,2]
*         *     [1,4,1]
*         *     [1,4,1]
* *     * *     [2,2,2] 
* * * * * *     [3,0,3]
*/
//divide the pattern in half in the middle & just use the logic of stars ,spaces,stars mentioned in video to bulid half patterns
const symmetricVoid = (n)=>{
    for(let i = 0;i<n;i++){
        for(let star=1;star<=n-i;star++){
            process.stdout.write('*');
        }
        for(let space=0;space<(2*i);space++){
            process.stdout.write(' ');
        }
        for(let star=1;star<=n-i;star++){
            process.stdout.write('*');
        }
        console.log();
    }

    for(let i = 0;i<n;i++){
        for(let star=1;star<=i+1;star++){
            process.stdout.write('*');
        }
        for(let space=0;space<(2*(n-i-1));space++){
            process.stdout.write(' ');
        }
        for(let star=1;star<=i+1;star++){
            process.stdout.write('*');
        }
        console.log();
    }
}
symmetricVoid(5);