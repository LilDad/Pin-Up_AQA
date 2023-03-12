/* 

Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.

Має так працювати:
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "Вставай";

alert( isEmpty(schedule) ); // false

*/

function isEmpty(obj) {
    i = 0;
    for (key in obj) {
        i++
    }
    
    return i > 0 ? true : false;
}

// или

function isEmpty2(obj) {
    return Object.keys(obj).length > 0 ? true : false;
}
