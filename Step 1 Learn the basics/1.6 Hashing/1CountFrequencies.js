//In hashing we pre calculate the occurrence in an array of max size given + 1 and fill it with 0 , then we store occurrences for all
//queries in the first step and just use the hash array every other time we need it

//Number hashing
const hashArray = new Array(12).fill(0);

function frequency(len, arr, queryLength, queries) {
  for (let i = 0; i < len; i++) {
    hashArray[arr[i]] += 1;
  }
  while (queryLength--) {
    console.log(hashArray[queries[queryLength]]);
  }
}
// frequency(5, [1, 2, 5, 2, 3], 4, [1, 2, 3, 4]);

//Character hashing -> we can visualize array indexes as a-z considering lowercase alphabates
//so max array size will be 26
const hashCharArray = new Array(26).fill(0);
const charFreq = (charArray, str) => {
  for (let i = 0; i < str.length; i++) {
    hashCharArray[str[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }
  //   for (let i = 0; i < charArray.length; i++) {
  //     console.log(charArray[i], hashCharArray[charArray[i].charCodeAt(0) - 97]);
  //   }
  //if use use for in loop u will get char as index and in for of loop you will get the actual element of the array
  for (let char of charArray) {
    console.log(char, hashCharArray[char.charCodeAt(0) - "a".charCodeAt(0)]);
  }
};
charFreq(["a", "b", "c", "d"], "aaabbdbbccdd");
