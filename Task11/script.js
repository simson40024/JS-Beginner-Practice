/*
Вага записана у змінну weight. Рекомендацію записуй рядком у змінну recommendation. 
Якщо вага до 4 кг (не включаючи це значення), рекомендація – "Пора перекусити". 
Якщо вага від 4 кг включно до 5.5 кг включно - 'Вага в нормі'.
Якщо вага більше 5.5 кг - 'Пора на тренування'. 
Як умови, використовуй значення weight 1, 3, 4, 5, 10. Рекомендацію виводь у консоль.
*/
let weight, recommendation;
function giveRecommendation(){
    if (weight<4) return 'Пора перекусити';
    if (weight<=5.5) return 'Вага в нормі';
    return 'Пора на тренування';
};

weight = 1;
recommendation = giveRecommendation();
console.log(recommendation);
weight = 3;
recommendation = giveRecommendation();
console.log(recommendation);
weight = 4;
recommendation = giveRecommendation();
console.log(recommendation);
weight = 5;
recommendation = giveRecommendation();
console.log(recommendation);
weight = 10;
recommendation = giveRecommendation();
console.log(recommendation);
