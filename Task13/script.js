/*
Напишіть функцію, яка приймає масив, а повертає добуток елементів масиву, помножених по порядку один на одного.
Приклад коду:
   example([1, 2, 3, 4]) => 1 * 2 * 3 * 4 = 24
*/
function multipleArrayItems(arr){
    return arr.reduce((multiple,item)=> multiple*item,1);
}
    console.log(multipleArrayItems([1,2,3,4]));