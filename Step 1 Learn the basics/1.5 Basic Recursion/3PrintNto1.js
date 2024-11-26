function printNto1(i, n) {
  if (i < 1) return;
  console.log(i);
  printNto1(i - 1, n);
}
printNto1(10, 10);

// function printNto1(n) {
//   if (n == 0) return;
//   console.log(n);
//   printNto1(n-1);
// }
// printNto1(20)
