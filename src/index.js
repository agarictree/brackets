module.exports = function check(str, bracketsConfig) {
  let obj = {};
  bracketsConfig.map(elem => obj[elem[1]] = elem[0]);
  
  console.log(str, bracketsConfig);
  let stack = [];
  let splittedStr = str.split("");
  
  let keys = Object.keys(obj);
  for(let i = 0; i < splittedStr.length; i++) {
    if(keys.includes(splittedStr[i])) {  
      if(obj[splittedStr[i]] !== stack.pop() && stack.pop() != undefined) return false;
    } else {
      stack.push(splittedStr[i]);
    }
  }
  return stack.length == 0;
}
