//Recursion : When a function calls itself until a specific condition is met
//if theres no specific condition then it will cause stackoverflow / infinte loop
//

function test(I,N) {
  if (I > N) return;
  console.log('Print');
  test(I+1,N);
}
test(1,5);

//T.C : O(N) as the function calls itslef N times
//S.C : O(N) as the function calls stays in stack space till the base condition is met i.e until N 
