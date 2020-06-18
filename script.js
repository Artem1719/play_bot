'use strict';

let isNumber = function(n) {
    return !isNaN (parseFloat(n)) && isFinite(n);
};

function guessedNumber() {
    const guessedNumber = 33;

}

let enteredNumber;

function start() {
    do {
        enteredNumber = prompt('Угадай число от 1 до 100');
    }
    while(!isNumber(enteredNumber)); 
};

start();

function startLess() {
    do {
        enteredNumber = prompt('Загаданное число меньше. Еще раз введите число');
    }
    while(!isNumber(enteredNumber)); 
};

function startMore() {
    do {
        enteredNumber = prompt('Загаданное число больше. Еще раз введите число');
    }
    while(!isNumber(enteredNumber)); 
};


function comparisonNumbers() {
    if (enteredNumber > guessedNumber) {
        startLess();
    } else if (enteredNumber < guessedNumber) {
        startMore();
    } else alert("Поздравляю! Вы угадали число");
};

comparisonNumbers();