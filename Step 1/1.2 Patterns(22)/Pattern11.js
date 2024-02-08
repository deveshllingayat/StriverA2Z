// Binary Number Triangle
/*
Problem statement
Aryan and his friends are very fond of the pattern. For a given integer ‘N’, they want to make the N-Binary Number Triangle.

You are required to print the pattern as shown in the examples below.

Example:
Input: ‘N’ = 3

Output: 

1
0 1
1 0 1


*/
//basically for every even row start from 0 we print 1 and for odd rows we start with 0 and toggle it while printing

const binaryTriangle = (n) => {
    let start = 1;//initially start is 1
  for (let i = 0; i < n; i++) {
    if(i%2===0) start = 1;
    else start = 0;
    for(let j=0;j<=i;j++){
        process.stdout.write(`${start}`);
        start = 1-start;//toggle value of start
    }
    console.log();
  }
};
binaryTriangle(5);
