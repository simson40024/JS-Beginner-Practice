/*
Необхідно реалізувати функцію, яка на вході приймає масив з різними типами даних = = gt; ['a', 1, 2, false, 'b'], 
а повертає об'єкт, у якому ці типи даних розсортовані за ключами.

Приклад коду:
{
   number: [1, 2],
   string: ['a', 'b'],
   boolean: [false]
}
*/
function arrKeysForObj(arr){
   let obj = new Object();
   for (let item of arr) {
      if (obj.hasOwnProperty(typeof(item))) continue
         else obj[typeof(item)]=arr.filter((i)=> typeof(i)==typeof(item) );
   }
   return obj;
}

console.log(arrKeysForObj(['a', 1, 2, false, 'b']));