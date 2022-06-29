import '../scss/styles.scss';
import {startButton,outputLogs,sign,signsArray,resetLink} from './variables.js'
import start from './start.js'
import {resetFunc,disable} from './toggleDisable.js'

document.addEventListener('DOMContentLoaded', () => {
    let round = 1;
    let playerPoints = 0;
    let opponentPoints = 0;

    startButton.addEventListener('click', start);

    sign.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            const player = i;
            const opponent = Math.floor(Math.random() * 3);
            const log = document.createElement('div');
            const result = document.createElement('div');
            const output = `Round ${round}, ${signsArray[player]} vs. ${signsArray[opponent]},`;
            if (player === 1 && opponent === 2) {
                log.innerText = `${output} You've WON!`;
                playerPoints++;
            } else if (player === 2 && opponent === 0) {
                log.innerText = `${output} You've WON!`;
                playerPoints++;
            } else if (player === 0 && opponent === 1) {
                log.innerText = `${output} You've WON!`;
                playerPoints++;
            } else if (player === opponent) {
                log.innerText = `${output} DRAW!`;
            } else {
                log.innerText = `${output} You've LOST!`;
                opponentPoints++;
            }
            if (playerPoints === 3) {
                result.innerText = `You are winner!`;
                log.append(result);
                disable();
            } else if (opponentPoints === 3) {
                result.innerText = `Opponent is winner!`;
                log.append(result);
                disable();
            }
            outputLogs.append(log);
            round++;
        });
    });
    resetLink.addEventListener('click', () => {
        resetFunc();
        round = 1;
        playerPoints = 0;
        opponentPoints = 0;
    });
});

