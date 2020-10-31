const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value == null) {
      value = 'null';
    }
    if (this.chain == []) {
      this.chain.push(value.toString())
    }
    this.chain.push(value.toString())
    return this
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.length) {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainString = '';
    for (let i = 0; i < this.chain.length; i++) {
        if (i === 0) {
            chainString += '( ' + this.chain[i] + ' )'; 
        } else {
          chainString += '~~( ' + this.chain[i] + ' )';
        }
    }
    this.chain = [];
    return chainString;
  }
};

module.exports = chainMaker;
