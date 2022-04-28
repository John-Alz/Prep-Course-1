'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let acomu = 0;
  for (let i = 0; i < num.length; i++) {
    acomu += num[i] * 2 ** (num.length - 1 - i);
  }
  return acomu;

}

function DecimalABinario(num) {
  // tu codigo aca
  let acom = '';
  while (num > 0) {
    acom = (num % 2) + acom;
    num = Math.floor(num / 2);
  }
  return acom;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}