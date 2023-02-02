/*
Напишіть функцію, яка перетворює шістнадцяткове число (задане у вигляді рядка) на десяткове число.

  Приклад коду:
   hexToDec('1') => 1
   hexToDec('a') => 10
   hexToDec('10') => 16
   hexToDec('FF') => 255
   hexToDec('-C') => 12
*/
function hexToDec(hex) {
  return parseInt(hex, 16);
}

console.log("hexToDec('1') => " + hexToDec("1"));
console.log("hexToDec('a') => " + hexToDec("a"));
console.log("hexToDec('10') => " + hexToDec("10"));
console.log("hexToDec('FF') => " + hexToDec("FF"));
console.log("hexToDec('-C') => " + hexToDec("-C"));
