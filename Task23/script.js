/*
Якщо число парне, перетворіть його на двійкове. Якщо число непарне, перетворіть його на шістнадцяткове.

Приклад коду:
   evensAndOdds(2) => '10'
   evensAndOdds(13) => 'd'
*/
let evensAndOdds = (num) =>
  Number.isInteger(num / 2) ? num.toString(2) : num.toString(16);
console.log("evensAndOdds(2) => " + evensAndOdds(2));
console.log("evensAndOdds(13) => " + evensAndOdds(13));
