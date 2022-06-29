const calendar = document.querySelector('.calendar-dates');
const monthNode = document.querySelector('.month');
const yearNode = document.querySelector('.year');
const buttonPrev = document.querySelector(`[data-control="prev"]`);
const buttonNext = document.querySelector(`[data-control="next"]`);
const monthsNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export {calendar,monthNode,yearNode,buttonPrev,buttonNext,monthsNames};
