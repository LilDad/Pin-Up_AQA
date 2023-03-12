/*

Просте число – це натуральне число, яке має два дільники (1 і саме число).

Інакше кажучи, n > 1 – просте, якщо воно більше за 1 і ділиться без остачі на 1 та n.

Наприклад, число 5 – просте, тому що воно не ділиться без остачі на 2, 3 і 4. Воно ділиться без остачі лише на 1 і на 5.

Напишіть код, який виводить всі прості числа в діапазоні від 2 до n.

Для n = 10 результат повинен бути 2,3,5,7.

P.S. Код також повинен легко модифікуватися для будь-якого числа n.

*/

let num = prompt('Введите число');

for (let i = 2; i <= num; i++) {
    primeNum = true;

    for (let j = 2; j < i; j ++) {
        if (i % j == 0) {
            primeNum = false;
            break;
        }
    }

    if (primeNum) console.log(i);
}
