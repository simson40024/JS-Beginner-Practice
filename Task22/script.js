/*
Жодних розмов. Жодних пояснень. Тільки ТЗ та результат, який має бути. Подивіться, що має вийти на виході і напишіть цю функцію.

Приклад коду:
   spacey(['kevin', 'has','no','space']) => [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']
   spacey(['this','cheese','has','no','holes']) => ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']
*/
function spacey(arr) {
  let result = [];
  while (arr.length > 0) {
    result.unshift(arr.reduce((sum, item) => sum + item, ""));
    arr.pop();
  }
  return result;
}
console.log(spacey(["kevin", "has", "no", "space"]));
console.log(spacey(["this", "cheese", "has", "no", "holes"]));
