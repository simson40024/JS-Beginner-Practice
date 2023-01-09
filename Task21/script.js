/*
Виверт, який я вивчив у початковій школі, щоб визначити, чи ділиться число на три, полягає в тому, щоб скласти всі цілі числа в
числі і розділити отриману суму на три. Якщо від поділу суми на три немає залишку, то вихідне число також поділяється на три. 
Враховуючи серію цифр у вигляді рядка, визначте, чи число, подане рядком, ділиться на три. 
Примітка: Уникайте використання оператора % (залишок від поділу). Число, яке прийматиме функція - завжди буде рядок.

Приклад коду:
   divisibleByThree('123') => true
   divisibleByThree('19254') => true
   divisibleByThree('88') => false
   divisibleByThree('1') => false
*/
function divisibleByThree(str){ 
   let arr = str.split('');
   return Number.isInteger(arr.reduce((sum,i) => sum + Number(i),0)/3);
};
  
console.log(divisibleByThree('123'));
console.log(divisibleByThree('19254'));
console.log(divisibleByThree('88'));
console.log(divisibleByThree('1'));




