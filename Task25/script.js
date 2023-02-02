/*
Дано рядок, що складається з букв a, b, c. Ваше завдання змінити розташування літер a та b, але не чіпати c.

Приклад коду:
   switcheroo('abc') =>'bac'
   switcheroo('aaabcccbaaa') =>'bbbacccabbb'
   switcheroo('ccccc') =>'ccccc'
   switcheroo('acb') =>'bca'
   switcheroo('aabacbaa') =>'bbabcabb'
*/
let switcheroo = (str) =>
  str.replace(/a/gi, "x").replace(/b/gi, "a").replace(/x/gi, "b");
console.log("switcheroo('abc') =>" + switcheroo("abc"));
console.log("switcheroo('aaabcccbaaa') =>" + switcheroo("aaabcccbaaa"));
console.log("switcheroo('ccccc') =>" + switcheroo("ccccc"));
console.log("switcheroo('acb') =>" + switcheroo("acb"));
console.log("switcheroo('aabacbaa') =>" + switcheroo("aabacbaa"));
