const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!';
  }
  let year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDate(),
  hour = date.getHours(),
  min = date.getMinutes(),
  sec = date.getSeconds(),
  ms = date.getMilliseconds();
let newDate = new Date(year, month, day, hour, min, sec, ms);
if (date.getDay() != newDate.getDay()) {
  throw Error;
}
if (typeof(year) != 'number' || typeof(month) != 'number' || typeof(day) != 'number') {
  throw Error;
}


if (month < 2 || month === 11) {
  return 'winter';
} else if (month < 5) {
  return 'spring';
} else if (month < 8) {
  return 'summer';
} else if (month < 11) {
  return 'autumn';
}
};
