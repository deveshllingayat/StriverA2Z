// Ninja And The Number Pattern
/*
Problem statement
Ninja has been given a task to print the required pattern and he asked for your help with the same.

You must print a matrix corresponding to the given number pattern.

Example:
Input: ‘N’ = 4

Output: 

4444444
4333334
4322234
4321234
4322234
4333334
4444444
*/

const numberPattern = (n) => {
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
        let top=i,left=j,down=2*n-2-i,right=2*n-2-j;
        let value = (n-Math.min(Math.min(top,down),Math.min(left,right)));
        process.stdout.write(value.toString());
    }
    console.log();
  }
};
numberPattern(5);
