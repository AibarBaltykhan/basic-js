const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
  let counter = 1;
  let depth = 1;
  for (let i of arr) {
    if(Array.isArray(i)) {
      counter = 1 + this.calculateDepth(i);
      if (counter > depth) {
        depth = counter;
      }
      //this.calculateDepth(i);
    }
  }
  if (counter > depth) {
    depth = counter;
  }
  counter = 1;
  return depth;
}
};