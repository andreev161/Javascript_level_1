'use strict';
/**
 * Функция складывает переданные параметры
 * @param {number} a 
 * @param {number} b 
 * @returns {number} a + b
 */

function addition (a, b) {
    return a + b;
}

/**
 * Функция вычитает из параметра "a" параметр "b"
 * @param {number} a 
 * @param {number} b 
 * @returns {number} a - b
 */
function subtraction (a, b) {
    return a - b;
}

/**
 * Функция делит параметр "a" на параметр "b"
 * @param {number} a 
 * @param {number} b
 * @returns {number} a / b
 */
function division (a, b) {
    return a / b;
}

/**
 * Функция умножает параметр "a" на параметр "b"
 * @param {number} a 
 * @param {number} b
 * @returns {number} a * b
 */
function Multiplication (a, b) {
    return a * b;
}

/**
 * Функция получает два числа и совершает с ними математические операции.
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation может быть "+", "-", "/", "*".
 * @throws {Error} если передана не предусмотренная операция, будет выброшена ошибка.
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return Multiplication(arg1, arg2);
        default:
            throw new Error("Операция" + operation + "не предусмотрена");
    }
}
mathOperation();
/*Подсмотрел решение так как видимо не до конца понял тему функций.*/