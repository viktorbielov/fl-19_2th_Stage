import {startButton,buttons,outputLogs,resetLink} from './variables.js'

const start = () => {
    startButton.classList.add('hidden');
    resetLink.classList.remove('hidden');
    outputLogs.classList.remove('hidden');
    buttons.classList.remove('hidden');
}

export default start
