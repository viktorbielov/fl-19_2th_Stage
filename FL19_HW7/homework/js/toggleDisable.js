import {outputLogs,sign} from './variables.js';

const resetFunc = () => {
    outputLogs.innerHTML = '';
    sign.forEach(btn => {
        btn.removeAttribute('disabled');
    });
}

const disable = () => {
    sign.forEach((item) => {
        item.setAttribute('disabled', true);
    });
}

export {resetFunc,disable};
