const isPalindrome = function(x) {
    let str = x.toString()
    for(let i=0;i<str.length;i++){
        if(str[i]!=str[str.length-i-1]) {
            console.log('False')
            return false;
        }
    }
    console.log('True');
};
isPalindrome(1231);
