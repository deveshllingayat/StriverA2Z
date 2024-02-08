//Increasing Number Triangle
/*
Problem statement
Aryan and his friends are very fond of patterns. For a given integer ‘N’, they want to make the Increasing Number Triangle.

Example:
Input: ‘N’ = 3

Output: 

1
2 3
4 5 6

*/
const increasingTriangle = (n) => {
    let num=1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=i; j++) {
        process.stdout.write(String(num));
        num++;
    }
    console.log();
  }
};
increasingTriangle(3)
