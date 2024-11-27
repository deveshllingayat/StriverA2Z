
var isPalindrome = function (s) {
  console.log(checkPalindrome(filterString(s)));
  if (s == filterString(s)) return true;
  return false;
};
function filterString(s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    let isAlphabate = /[A-Za-z]/.test(s.charAt(i));
    let isNumber = !isNaN(s.charAt(i));
    if (isAlphabate || isNumber) str += s.charAt(i).toLowerCase().trim();
  }
  return str;
}
function checkPalindrome(str,i){
    if(i>=str.length/2) return true;
    if(str[i]!==str[str.length-i-1]){
        return false;
    }
    return checkPalindrome(str,i+1);
}
isPalindrome("A man, a plan, a canal: Panama");
