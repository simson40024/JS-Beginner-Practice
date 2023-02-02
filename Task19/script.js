/*
Ви повинні реалізувати функцію, яка повертає різницю між найбільшим та найменшим значенням у списку , отриманому як аргумент функції. 
Масив, який отримує функція як аргумент, може містити позитивні та негативні числа. Якщо масив порожній або має значення, поверніть нуль.
Спочатку масив буде поданий у невідсортованому вигляді. Приклад: maxDiff([1, 2, 3, -4]); // Поверне 7, тому що: 3 - (-4) == 7

Приклад коду:
   maxDiff([0, 1, 2, 3, 4, 5, 6]) => 6
   maxDiff([-0, 1, 2, -3, 4, 5, -6]) => 11
   maxDiff([0, 1, 2, 3, 4, 5, 16]) => 16
   maxDiff([16]) => 0
   maxDiff([]) => 0
*/
function maxDiff(arr) {
  if (arr.length < 2) return 0;
  arr.sort(compareNumeric);
  return arr[arr.length - 1] - arr[0];
}
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

console.log(
  "maxDiff([0, 1, 2, 3, 4, 5, 6]) => " + maxDiff([0, 1, 2, 3, 4, 5, 6])
);
console.log(
  "maxDiff([-0, 1, 2, -3, 4, 5, -6]) => " + maxDiff([-0, 1, 2, -3, 4, 5, -6])
);
console.log(
  "maxDiff([0, 1, 2, 3, 4, 5, 16]) => " + maxDiff([0, 1, 2, 3, 4, 5, 16])
);
console.log("maxDiff([16]) => " + maxDiff([16]));
console.log("maxDiff([]) => " + maxDiff([]));
