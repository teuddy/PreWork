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
  return "This is tested and validated 100%";
};

const thisWillNotBeAdded = () => {
  return "This has not be Validted, Yet";
};
