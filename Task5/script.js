/*
Створіть змінну за допомогою camelCase, snake_case та PascalCase і надайте їм значення від 0 до 2-х. 
Виведіть значення цих змінних на екран за допомогою методу alert та console.log.
Скажіть, чим кардинально відрізняється alert та console.log?
*/
let countAttempts = 2;
let succseed_attempts = 1;
let FailedAttempts = 0;
alert (`countAttempts: ${countAttempts}\n`+
    `succseed_attempts: ${succseed_attempts}\n`+
    `FailedAttempts: ${FailedAttempts}`);
console.log(`camelCase-> countAttempts: ${countAttempts}`);
console.log(`snake_case-> succseed_attempts: ${succseed_attempts}`);
console.log(`PascalCase-> FailedAttempts: ${FailedAttempts}`);
/*
Console.log - виводить результат в консоль та продовжує виконання скрипта. <br>
Alert - виводить результат в модальному вікні та "ставить скрипт на паузу" поки не наниснута кнопка ОК.
*/