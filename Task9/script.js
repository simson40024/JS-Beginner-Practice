/*
Напишіть скрипт, який приймає з клавіатури 2 числа, і якщо перше більше за друге, то виводить на екран їх суму, 
якщо ж навпаки - твір. Якщо числа однакові, виводить на екран цифри однакові.
*/
let a = prompt('Перше число');
let b = prompt('Друге число');
if (isFinite(+a)&&isFinite(+b)&&a!=''&&b!='') alert(calculate(+a,+b))
    else alert('Треба ввести два числа');

function calculate(a,b){
    if (a>b) return a+b;
    if (a<b) return a*b;
    if (a==b) return 'цифри однакові';
}