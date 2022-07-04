export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    if (typeof number !== 'number' || isNaN(number)){
        throw new Error('Incorrect value in array');
    }
    sum += number;
  }
  return sum;
}
