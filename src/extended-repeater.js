const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str === true) {
    str = 'true';
  } else if (str === false) {
    str = 'false';
  } else if (str === null) {
    str = 'null';
  }
  str.toString();
  let newStr = str;
  if (options.addition === undefined) {
    options.addition = '';
  } else {
    if (options.addition === true) {
      options.addition = 'true';
    } else if (options.addition === false) {
      options.addition = 'false';
    } else if (options.addition === null) {
      options.addition = 'null';
    }
    options.addition.toString();
    newStr += options.addition;
  }
  if (options.separator == undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = '|';
  }
  if (options.additionRepeatTimes > 1 && options.addition != '') {
    for (let i = 2; i <= options.additionRepeatTimes; i++) {
      newStr += options.additionSeparator + options.addition;
    }
  }
  let answer = newStr;
  if (options.repeatTimes > 1) {
    for (let i = 2; i <= options.repeatTimes; i++) {
      answer += options.separator + newStr;
    }
  }
  return answer;
};
  