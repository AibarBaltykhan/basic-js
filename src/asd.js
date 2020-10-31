class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw Error;
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';
    let k = 0;
    for (let i = 0; i < message.length; i++) {
      if (message[i] >= 'A' && message[i] <= 'Z') {
        k = k % key.length;
        encryptedMessage += String.fromCharCode('A'.charCodeAt(0) + (message.charCodeAt(i) + key.charCodeAt(k) - 'A'.charCodeAt(0) - 'A'.charCodeAt(0))%26);
        k++;
      } else {
        encryptedMessage += message[i];
      }
    }
    if (this.mode === true) {
      return encryptedMessage;
    } else {
      return encryptedMessage.split('').reverse().join('');
    }
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) {
      throw Error;
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let message = '';
    let k = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i] >= 'A' && encryptedMessage[i] <= 'Z') {
        k = k % key.length;
        message += String.fromCharCode('A'.charCodeAt(0) + (encryptedMessage.charCodeAt(i) - key.charCodeAt(k) + 26)%26);
        k++;
      } else {
        message += encryptedMessage[i];
      }
    }
    if (this.mode === true) {
      return message;
    } else {
      return message.split('').reverse().join('');
    }
  }
}

const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);

console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));