/**
 * функция, которая проверяет, является ли число целым используя побитовые операторы
 * @param {*} n
 */
function isInteger(number) {
    return (n | 0) == n
}

/**
 *  функция, которая возвращает массив четных чисел от 2 до 20 включительно
 */
function even() {
    const result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }
    return result;
}

/**
 * функция, считающая сумму чисел до заданного используя цикл
 * @param {number} n
 */
function sumTo(n) {
    sum = n;
    for (let i = 1; i < n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * функция, считающая сумму чисел до заданного используя рекурсию
 * @param {number} n
 */
function recSumTo(n) {
    if (n <= 0) return 0;
    return n + recSumTo(n - 1);
}

/**
 * функция, считающая факториал заданного числа
 * @param {number} n
 */
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

/**
 * функция, которая определяет, является ли число двойкой, возведенной в степень
 * @param {number} n
 */
function isBinary(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

/**
 * функция, которая находит N-е число Фибоначчи
 * @param {number} n
 */
function fibonacci(n) {
    if (n <= 0) return 0;
    let a = 0, b = 1;
    for (let i = 1; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start, step) {}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp и т.п.) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};