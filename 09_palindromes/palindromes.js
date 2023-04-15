const palindromes = function (str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z]/g, ""); // Remove all non-alphanumeric characters and convert to lower case.
  
    return cleanStr.split("").reverse().join("") == cleanStr;

}
// Do not edit below this line
module.exports = palindromes;
