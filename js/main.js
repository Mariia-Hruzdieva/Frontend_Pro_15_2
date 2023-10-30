// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let x = +prompt('Введіть числове значення x: ');
let znak = prompt('Введіть математичну дію +, -, *, /, %, ^ ');
let y = +prompt('Введіть числове значення y: ');
let result;

function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '%':
            return x % y;
        case '^':
            return x ** y;
    }
}


let mathResult = doMath(x, znak, y);
console.log(mathResult);
