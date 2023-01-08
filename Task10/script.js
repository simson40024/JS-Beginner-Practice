/*
Даний масив числами, наприклад: [10, 20, 30, 50, 235, 3000]. 
Виведіть на екран лише ті числа з масиву, які починаються на цифру 1, 2 чи 5.
*/
let arr = [10, 20, 30, 50, 235, 3000];
let filterArr = [1,2,5];
let resultArr =[];
arr.forEach(item => {
    if (filterArr.includes(Number(item.toString()[0]),0)) resultArr.push(item);
});
alert(resultArr);