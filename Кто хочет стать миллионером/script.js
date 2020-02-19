var event, ok, round, money;
var questMass = [questA, questB, questC, questD, questE, questF, questG, questH, questI, questJ];

do {
    var greeting = +prompt('Хотите сыграть в игру "Кто хочет стать миллионером?" 1 - Да. 0 - Нет.');
    if (greeting == 1) {
        round = 0; // счётчик раундов
        money = 0; // счётчик выигрыша
        while (round <= 10) {
            event = +prompt(questMass[0].q00 + '\n' + '\n' + questMass[0].q1 + '\n' + questMass[0].q2 + '\n' + questMass[0].q3 + '\n' + questMass[0].q4 + '\n\n0 - выход из игры');
            if(event==questMass[0].q0) {
                money+=100;
                round++;
                alert('Верно! Ваш выигрыш сосавляет: ' + money + 'p. Раундов пройдено: ' + round);
            } else if(event==0) {
                alert('Спасибо за игру! Ваш выигрыш: ' + money + 'p. Раундов пройдено: ' + round);
                break;
            } else if(event!=questMass[0].q0) {
                ok = isAnswer(questMass[0].q0, event);
                alert('Неверно! Раундов пройдено: ' + round);
                break;
            }
            questMass.shift();  
            
            if (round == 10) {
                money += 500;
                alert('Вы победили!  (っ´ω`)ﾉ' + ' Ваш выигрыш: ' + money);
                break;
            }
        }
    }
} while (greeting == 1);
alert('Спасибо за игру! До свидания!');

function isAnswer(q, event) {
    if (isNaN(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}