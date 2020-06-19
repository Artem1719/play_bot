'use strict';

function isNum(number) {
    return (!isNaN(parseFloat(number)) && isFinite(number));
}

const game = function() {
    const randomNum = parseInt(Math.random() * 100);
    let count = 10;

    return function repeatPlay() {
        let num = prompt('Введите число');
        if (isNum(num)) {
            let userNumber = +num;
            count -= 1;
            if (count >= 0) {
                if (userNumber < randomNum) {
                    alert('Загаданное число больше, осталось попыток: ' + count);
                    return repeatPlay();
                } else if (userNumber > randomNum) {
                    alert('Загаданное число меньше, осталось попыток: ' + count);
                    return repeatPlay();
                } else {
                    if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
                        game()();
                    } else {
                        alert('Вы завершили игру');
                    }
                }
            } else {
                if (confirm('Попытки закончились, хотите сыграть еще?')) {
                    game()();
                } else {
                    alert('Вы завершили игру');
                }
            }
        } else if (num === null) {
            alert('Вы завершили игру');
        } else {
            return repeatPlay();
        }
    };
};

/*let isNumber = function(n) {
    return !isNaN (parseFloat(n)) && isFinite(n);
};

let userNumber;

function start() {
    do {
        userNumber = prompt('Угадай число от 1 до 100');
    }
    while(!isNumber(userNumber)); 
};

start();

const game = function (){
    const guessedNumber = parseInt(Math.random() * 100);
    return function repeat() {
      if( userNumber < guessedNumber) {
        alert('Загаданное число больше');
        return repeat();
      }
    }  
}
game();
console.dir(game);
console.dir(start);

const startGame = repeat();
startGame();
console.dir(startGame);

*/
/*function guessedNumber() {
    const guessedNumber = 33;
return comparisonNumbers();
}

function start() {
    do {
        userNumber = prompt('Угадай число от 1 до 100');
    }
    while(!isNumber(userNumber)); 
};

start();

function startLess() {
    do {
        userNumber = prompt('Загаданное число меньше. Еще раз введите число');
    }
    while(!isNumber(userNumber)); 
};

function startMore() {
    do {
        userNumber = prompt('Загаданное число больше. Еще раз введите число');
    }
    while(!isNumber(userNumber)); 
};


function comparisonNumbers() {
    if (userNumber > guessedNumber) {
        startLess();
    } else if (userNumber < guessedNumber) {
        startMore();
    } else alert("Поздравляю! Вы угадали число");
};

comparisonNumbers();
*/