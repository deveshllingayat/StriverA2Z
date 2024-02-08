/*
Programming languages have some conditional / decision-making statements that execute when some specific condition is fulfilled.
If-else is one of the ways to implement them.

You are given two numbers 'a' and 'b'.

Compare the numbers and print the relation.
Print “smaller”, “greater” or “equal” when ‘a’ is smaller than ‘b’, greater than ‘b’, or equal to ‘b’ respectively.
Example 
Input: ‘a’ = 5 and ‘b’ = 3

Output: greater

Explanation: Since ‘a’ (= 5) is greater than ‘b’ (= 3), we are printing “greater”.
 */
function compareIfElse(a, b) {
  // Write your code here
  let result;
  if (a < b) {
    result = "smaller";
  } else if (a > b) {
    result = "greater";
  } else {
    result = "equal";
  }
  return result;
}
console.log(compareIfElse(1, 8));
