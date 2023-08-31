// amd workign on palindrome word

// tested and validated
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

const getPalindrome = (str) => {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  return reverseString(lowRegStr) === lowRegStr;
};

const thisWillBeAdded = () => {
  return "pretty";
};

const thisWillNotBeAdded = () => {
  return "fei";
};
