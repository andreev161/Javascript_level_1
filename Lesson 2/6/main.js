"use strict";
let deposit = parseInt(prompt("Введите сумму которую желаете положить на счет в банк!"));
let lastSymbol = deposit.toString().split('').pop();
switch(lastSymbol) {
    case "1":
    alert("Вы положили на счет " + deposit + " рубль.");
    break;
    case "2": case "3": case "4":
    alert("Вы положили на счет " + deposit + " рубля.");
    break;
    case "0": case "5": case "6": case "7": case "8": case "9":
    alert("Вы положили на счет " + deposit + " рублей.");
    break;
}