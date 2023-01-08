/*Напишіть функцію, яка обчислює підсумкову оцінку студента в залежності від двох параметрів: оцінки за іспит та кількість виконаних проектів. 
Ваша функція повинна приймати два аргументи: іспит – оцінка за іспит (від 0 до 100); проекти – кількість реалізованих проектів (від 0 і вище); 
Ця функція має повертати число (підсумкова оцінка). Є чотири типи підсумкових оцінок:
                                100, якщо оцінка за іспит більша за 90 або кількість виконаних проектів більша за 10.
                                90, якщо оцінка за іспит більша за 75 або кількість виконаних проектів не менше ніж 5.
                                75, якщо оцінка за іспит більше 50 або кількість виконаних проектів не менше ніж 2.
                                0, в інших випадках*/
function finalGrade(examGrade,quantityOfProjects){
if (examGrade < 0 || examGrade >100 || quantityOfProjects < 0 || !isFinite(examGrade) || !isFinite(quantityOfProjects)) 
    return 'Помилка вхідних даних';
if (examGrade > 90 || quantityOfProjects > 10)
    return 100;
if (examGrade > 75 || quantityOfProjects >= 5)
    return 90;
if (examGrade > 50 || quantityOfProjects >= 2)
    return 75;
return 0;
}

console.log(finalGrade(100, 12)); // => 100
console.log(finalGrade(99, 0)); // => 100
console.log(finalGrade(10, 15)); // => 100
console.log(finalGrade(85, 5)); // =>90
console.log(finalGrade(55, 3)); // =>75
console.log(finalGrade(55, 0)); // =>0 *згідно умов завдання: АБО оцінка за іспит більше 50, тож правильна відповідь 75
console.log(finalGrade(20, 2)); // =>0 *згідно умов завдання: АБО тестів не менше ніж 2, тож правильна відповідь 75
console.log(finalGrade(20, 1));
console.log(finalGrade(53, 'sfjh'));
