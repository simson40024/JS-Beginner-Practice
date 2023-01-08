/*
Даний масив ['Саша', 'Петя', 'Оксана'], зробіть із нього ['Оксанa', 'Олег', 'Саша']. Реалізуйте це завдання двома способами.
У першому вихідний масив має бути змінений, у другому - не може бути змінений.
*/
//Спосіб 1 - Змінюємо ісходний масив
let inputArray = ['Саша','Петя','Оксана'];
for (let i = 0; i<inputArray.length;i++){
    if (inputArray[i]=='Петя') inputArray[i]='Олег';
};
inputArray.sort();
console.log(inputArray);

//Спосіб 2 - створюємо новий масив
inputArray = ['Саша','Петя','Оксана'];
let newArray = inputArray.map((item)=>item=='Петя' ? 'Олег':item).reverse();
console.log(newArray);