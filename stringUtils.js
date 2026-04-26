function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function isPalindrome(str) {
  let reversed = reverseString(str);
  return str === reversed;
}

function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(reverseString("hello"));
console.log(isPalindrome("madam"));
console.log(countVowels("javascript"));
