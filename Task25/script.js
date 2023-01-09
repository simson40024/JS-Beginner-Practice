/*
Дано рядок, що складається з букв a, b, c. Ваше завдання змінити розташування літер a та b, але не чіпати c.

Приклад коду:
   switcheroo('abc') =>'bac'
   switcheroo('aaabcccbaaa') =>'bbbacccabbb'
   switcheroo('ccccc') =>'ccccc'
   switcheroo('acb') =>'bca'
   switcheroo('aabacbaa') =>'bbabcabb'
*/
let switcheroo = (str) => str.replace(/a/ig,'x').replace(/b/ig,'a').replace(/x/ig,'b');
console.log(switcheroo('abc'));
console.log(switcheroo('aaabcccbaaa'));
console.log(switcheroo('ccccc'));
console.log(switcheroo('acb'));
console.log(switcheroo('aabacbaa'));