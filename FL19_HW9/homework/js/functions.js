/* eslint-disable no-magic-numbers */
const fillSpacesBefore = (date, dayOfWeek) => {
    let tempDate = new Date(date);
    const tableCellsArray = [];
    for (let i = 0; i < dayOfWeek; i++) {
        tempDate.setDate(tempDate.getDate()-1)
        tableCellsArray.unshift(`<td class="muted">${tempDate.getDate()}</td>`)
    }
    return tableCellsArray.join('');
}

const fillThisMonthsCells = (date, month, today=null) => {
    const tableCellsArray = [];
    while (date.getMonth() === month) {
        if (date.getDate() === today) {
            tableCellsArray.push(`<td class="highlighted">${date.getDate()}</td>`);
        } else {
            tableCellsArray.push(`<td>${date.getDate()}</td>`);
        }
        if (getDay(date) % 7 === 6) { //check if sunday, then draw a newline
            tableCellsArray.push('</tr><tr>');
        }
        date.setDate(date.getDate() + 1);
    }
    return tableCellsArray.join('');
}

const fillSpacesAfter = (date, dayOfWeek) => {
    let tempDate = new Date(date);
    const tableCellsArray = [];
    if (dayOfWeek !== 0) {
        for (let i = dayOfWeek; i < 7; i++) {
            tableCellsArray.push(`<td class="muted">${tempDate.getDate()}</td>`)
            tempDate.setDate(tempDate.getDate()+1)
        }
    }
    return tableCellsArray.join('');
}

const getDay = (date) => { 
    let weekDay = date.getDay();
    if (weekDay === 0) {
        weekDay = 7; 
    }
    return weekDay-1;
}

export {fillSpacesBefore,fillThisMonthsCells,fillSpacesAfter,getDay};
