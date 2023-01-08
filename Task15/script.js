/*
У цій вправі повинні написати програму, яка прийматиме як параметри два масиви цілих чисел. 
Необхідно знайти твір кожного масиву, після чого знайти різницю двох масивів, незалежно від того, який з них більше. 
Якщо напишіть рішення в один рядок, будете молодці.

Приклад коду:
 example([3, 2, 5], [1, 4, 4]) => 14
   example([9, 7, 2], [5, 2, 2]) => 106
   example([11, 2, 5], [1, 10, 8]) => 30
   example([4, 4, 7], [3, 9, 3]) => 31
   example([15, 20, 25], [10, 30, 25]) => 0
*/
let difference = function (arr1, arr2){ return Math.abs(arr1.reduce((res,i)=> res*i,1) - arr2.reduce((res,i)=> res*i,1))};
    
    console.log(difference([3, 2, 5], [1, 4, 4]));
    console.log(difference([1, 4, 4], [3, 2, 5]));
    console.log(difference([11, 2, 5], [1, 10, 8]));
    console.log(difference([15, 20, 25], [10, 30, 25]));