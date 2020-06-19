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
game()();