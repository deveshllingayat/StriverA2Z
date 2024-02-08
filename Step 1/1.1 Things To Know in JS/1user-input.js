// Write a program that takes a character as input and prints 1, 0, or -1 according to the following rules.
//
// 1, if the character is an uppercase alphabet (A - Z).
// 0, if the character is a lowercase alphabet (a - z).
// -1, if the character is not an alphabet.

function characterCase(char) {
    //.match() is a string method, /[A-Z]/ or /[a-z]/ checks for uppercase/lowercase letters in array of alphabates
    // /[A-Z]/i checks if the char is alphabate or not
  if (char.match(/[A-Z]/)) return 1;
  if (char.match(/[a-z]/)) return 0;
  if (!char.match(/[A-Z]/i)) return -1; // i means case insensitive
}

let characters = [2, 3, 4, "@", "$", "d", "a", "%", "B", "D", "S", "M"];

characters.forEach((i) => {
  i += "";
  console.log(characterCase(i));
});
