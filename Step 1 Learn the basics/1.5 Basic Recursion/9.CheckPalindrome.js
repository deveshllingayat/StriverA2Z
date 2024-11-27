// Check if string is palindrome
// function f(str,i){
//     if(i>=str.length/2) return true;
//     if(str[i]!==str[str.length-i-1]){
//         return false;
//     }
//     return f(str,i+1);
// }
// console.log(f('MADAM',0))

//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
// and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.


var isPalindrome = function (s) {
  return checkPalindrome(filterString(s), 0);
};
function filterString(s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (isLetterOrDigit(s[i])) {
      str += s.charAt(i).toLowerCase().trim();
    }
  }
  return str;
}
function checkPalindrome(str, i) {
  if (i >= str.length / 2) return true;
  if (str[i] !== str[str.length - i - 1]) {
    return false;
  }
  return checkPalindrome(str, i + 1);
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
function isLetterOrDigit(char) {
  let isAlphabate = /[A-Za-z]/.test(char);
  let isNumber = !isNaN(char);
  if (isAlphabate || isNumber) true;
  return false;
}
