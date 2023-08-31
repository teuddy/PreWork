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
  return "This has not be Validted, Yet. at all";
};

const thiBad = () => {
  return "This is really bad code";
};

const thisGood = () => {
  return "This is really good code";
};
