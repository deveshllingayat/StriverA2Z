//backtracking me recursion tree ke end se return ate vakt print horha hai 
function printNto1(i, n) {
  if (i > n) return;
  printNto1(i + 1, n);
  console.log(i);
}
printNto1(1, 10);
