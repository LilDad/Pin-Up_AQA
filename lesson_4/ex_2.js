/*

Наступна функція повертає true, якщо параметр age більший за 18.

Інакше вона запитує підтвердження через confirm і повертає його результат:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Батьки дозволили?');
  }
}
Перепишіть функцію, щоб вона робила теж саме, але без if і в один рядок.

Зробіть два варіанти функції checkAge:

Використовуючи оператор ?
Використовуючи оператор АБО ||

*/

function checkAge(age) {
    return (age > 18) ? true : confirm('Батьки дозволили?');
}


function checkAge2(age) {
    return age > 18 || confirm('Батьки дозволили?');
}
