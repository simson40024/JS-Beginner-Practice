/*
Завершіть функцію, яка приймає два цілих числа ( a, b, де a <  b) і повертає масив усіх цілих чисел 
між вхідними параметрами, включаючи їх.

Приклад коду:
   between(1, 4) => [1, 2, 3, 4]
   between(-2, 2) => [-2, -1, 0, 1, 2]
   between(20, 25) => [20, 21, 22, 23, 24, 25]
*/
function between(a, b){ 
   let result = [];
   for (let i=a; i<=b; i++) {result.push(i)}
   return result
};
    
console.log(between(1,4));
console.log(between(-2,2));
console.log(between(20,25));
