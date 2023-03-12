/*
У нас є об’єкт для зберігання заробітної плати нашої команди:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum. У наведеному вище прикладі має бути 390.

Якщо об’єкт salaries порожній, то результат має бути 0.

*/


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalary(obj) {
    let sum = 0;

    for (key in obj) {
        sum += obj[key];
    }

    return sum;
}

console.log(sumSalary(salaries));
