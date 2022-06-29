/* eslint-disable no-magic-numbers */
import '../scss/styles.scss';
import {calendar,monthNode,yearNode,buttonPrev,buttonNext,monthsNames} from './variables.js'
import {fillSpacesBefore,fillThisMonthsCells,fillSpacesAfter,getDay} from './functions.js'

document.addEventListener('DOMContentLoaded', () => {

	let selectedDate = new Date();

	const renderCalendar = (element, monthNode, yearNode, currentDate) => {
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth();
		const today = new Date();
	
		let date = new Date(year, month);
		let template = `<table>
							<tr>
							<th>Mon</th>
							<th>Tue</th>
							<th>Wed</th>
							<th>Thu</th>
							<th>Fri</th>
							<th>Sat</th>
							<th>Sun</th>
							</tr><tr>`;
	
		monthNode.innerText = monthsNames[month];
		yearNode.innerText = year;
	
		template += fillSpacesBefore(date,getDay(date))
		if (today.getFullYear() === currentDate.getFullYear() && today.getMonth() === currentDate.getMonth()) {
			template += fillThisMonthsCells(date,month,today.getDate())
		}else{
			template += fillThisMonthsCells(date,month)
		}
		template += fillSpacesAfter(date,getDay(date))
		template += '</tr></table>';
	
		element.innerHTML = template;
	}
  
	selectedDate.setDate(1);
	renderCalendar(calendar, monthNode, yearNode, selectedDate);

	buttonPrev.addEventListener('click', () => {
		calendar.innerHTML = '';
		selectedDate.setMonth(selectedDate.getMonth()-1)
		renderCalendar(calendar, monthNode, yearNode, selectedDate);
	})

	buttonNext.addEventListener('click', () => {
		calendar.innerHTML = '';
		selectedDate.setMonth(selectedDate.getMonth()+1)
		renderCalendar(calendar, monthNode, yearNode, selectedDate);
	})
});
