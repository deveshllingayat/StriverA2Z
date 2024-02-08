//Symmetry
/*
Problem statement
Sam is curious about symmetric patterns, so he decided to create one.

For every value of ‘N’, return the symmetry as shown in the example.

Example:
Input: ‘N’ = 3

Output:         [stars,spaces,stars]
*         *     [1,8,1]
* *     * *     [2,6,2]
* * * * * *     [0,8,0]
* *     * *     [2,6,2]
*         *     [1,8,1]

*/

const symmetry = (n) => {
  let spaces = 2 * n - 2;

  for (let i = 1; i <= 2 * n - 1; i++) {
    //stars
    let stars = i;
    if (i > n) stars = 2 * n - i;
    for (let j = 1; j <= stars; j++) {
      process.stdout.write("*");
    }
    //spaces
    for (let k = 1; k <= spaces; k++) {
      process.stdout.write(" ");
    }

    //stars
    for (let j = 1; j <= stars; j++) {
      process.stdout.write("*");
    }
    if (i < n) spaces -= 2;
    else spaces += 2;
    console.log();
  }
};
symmetry(5);
