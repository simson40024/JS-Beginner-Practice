/*
Видаліть n знаків оклику в пропозиції зліва направо. n – позитивне ціле число.
  Приклад коду:
   remove("Hi!",1) => "Hi"
   remove("Hi!",100) => "Hi"
   remove("Hi!!!",1) => "Hi!!"
   remove("Hi!!!",100) => "Hi"
   remove("!Hi",1) => "Hi"
   remove("!Hi!",1) => "Hi!"
   remove("!Hi!",100) => "Hi"
   remove("!!!Hi !!hi!!! !hi",1) => "!!Hi !!hi!!! !hi"
   remove("!!!Hi !!hi!!! !hi",3) => "Hi !!hi!!! !hi"
   remove("!!!Hi !!hi!!! !hi",5) => "Hi hi!!! !hi"
   remove("!!!Hi !!hi!!! !hi",100) => "Hi hi hi"
*/
function remove(str,n){ 
   let result='';
   let count = n;
   for (let i=0; i<str.length; i++){
      if (count>0 && str[i]=='!') {
         count--;
         continue;
      } else {result += str[i]}
   }
   return result;
};
    
console.log(remove("Hi!",1));
console.log(remove("Hi!",100));
console.log(remove("Hi!!!",1));
console.log(remove("!Hi!",1));
console.log(remove("!!!Hi !!hi!!! !hi",3));
console.log(remove("!!!Hi !!hi!!! !hi",100));

