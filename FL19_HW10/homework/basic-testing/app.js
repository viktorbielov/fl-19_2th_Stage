import { extractNumbers } from './src/parser.js';
import {
  validateStringNotEmpty,
  validateNumber
} from './src/util/validation.js';
import { add } from './src/math.js';
import { transformToNumber } from './src/util/numbers.js';

let form;
let output;

if (typeof document !== 'undefined') {
  form = document.querySelector('form');
  output = document.getElementById('result');
  form.addEventListener('submit', formSubmitHandler);
}

export function formSubmitHandler(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);

  output.textContent = checkRes(setRes(numberInputs));
}

export function setRes(numberInp) {
  try {
    const numbers = [];
    for (const numberInput of numberInp) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
    }
    return add(numbers).toString();
  } catch (error) {
      return error.message;
  }
}

export function checkRes(result) {
  let resultText = '';
  if (result === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    resultText = 'Result: ' + result;
  }
  return resultText;
}
