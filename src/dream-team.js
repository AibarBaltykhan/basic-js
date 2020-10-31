const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members == null) {
    return false;
  }
  let name = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string' && members[i] != null) {
      let j = 0;
      while (members[i][j] > 'z' || members[i][j] < 'A') {
        j++;
      }
      if (members[i][j] != undefined) {
        name += members[i][j].toUpperCase();
      }
    }
  }
  return name.split('').sort().join('');
};
