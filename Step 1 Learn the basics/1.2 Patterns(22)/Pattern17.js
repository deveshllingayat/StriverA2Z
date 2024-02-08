// Alpha Hill
// Problem statement
// Sam is curious about Alpha-Hills, so he decided to create Alpha-Hills of different sizes.
//
// An Alpha-hill is represented by a triangle, where alphabets are filled in palindromic order.
//
// For every value of ‘N’, help sam to return the corresponding Alpha-Hill.
//
// Example:
// Input: ‘N’ = 3
//
// Output:
//     A
//   A B A
// A B C B A

const alphaHill = (n) => {
  for (let i = 0; i < n; i++) {
    for (let spaces = 0; spaces < n - i - 1; spaces++) {
      process.stdout.write(" ");
    }

    let char = 65;

    for (let j = 1; j <= 2 * i + 1; j++) {
      process.stdout.write(String.fromCharCode(char));
      if (j <= (2 * i + 1) / 2) char++; //the pattern is symmetrical for half of 2*i+1 so if j<=2*i+1
      else char--;
    }
    for (let spaces = 0; spaces < n - i - 1; spaces++) {
      process.stdout.write(" ");
    }
    console.log();
  }
};
alphaHill(4);
