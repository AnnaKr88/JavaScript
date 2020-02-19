var event, ok, round;
var ans = [];
var roundMass = [];

do { //Выводим первый вопрос
    ok = false;
    round = works.a00;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    } else {
        ok = isAnswer(works.a0, event);
    }
    roundMass.push(round);
    if (event == 1) {
        event = works.a1;
    } else if (event == 2) {
        event = works.a2;
    }
    ans.push(event);
} while (!ok);

switch (event) {
    case works.a1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            round = works.b00;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.b0, event);
            }
            roundMass.push(round);
            if (event == 1) {
                event = works.b1;
            } else if (event == 2) {
                event = works.b2;
            }
            ans.push(event);
        } while (!ok);
        switch (event) {
            case works.b1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    round = works.d00;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                    roundMass.push(round);
                    if (event == 1) {
                        event = works.d1;
                    } else if (event == 2) {
                        event = works.d2;
                    }
                    ans.push(event);
                } while (!ok);

                break;
            case works.b2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    round = works.d00;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                    roundMass.push(round);
                    if (event == 1) {
                        event = works.d1;
                    } else if (event == 2) {
                        event = works.d2;
                    }
                    ans.push(event);
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case works.a2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            round = works.c00;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.c0, event);
            }
            roundMass.push(round);
            if (event == 1) {
                event = works.c1;
            } else if (event == 2) {
                event = works.c2;
            }
            ans.push(event);
        } while (!ok);
        switch (event) {
            case works.c1: // Второе действие
                do {
                    ok = false;
                    round = works.d00;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                    roundMass.push(round);
                    if (event == 1) {
                        event = works.d1;
                    } else if (event == 2) {
                        event = works.d2;
                    }
                    ans.push(event);
                } while (!ok);

                break;
            case works.c2: // Второе действие
                do {
                    ok = false;
                    round = works.d00;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                    roundMass.push(round);
                    if (event == 1) {
                        event = works.d1;
                    } else if (event == 2) {
                        event = works.d2;
                    }
                    ans.push(event);
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
 do {
    var okno = +prompt('Введите номер окна: 1, 2, 3.' + ' \n 0 - Выход из игры');
    switch (okno) {
        case 1:
            alert(roundMass[0] + '\nВаш ответ: ' + ans[0]);
            break;
        case 2:
            alert(roundMass[1] + '\nВаш ответ: ' + ans[1]);
            break;
        case 3: 
            alert(roundMass[2] + '\nВаш ответ: ' + ans[2]);
            break;
        case 0:
            break;
        default:
            alert('Ooops..');
    }
} while (okno != 0);
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}
