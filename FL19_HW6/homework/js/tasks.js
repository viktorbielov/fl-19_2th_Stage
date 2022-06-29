//1. Create a function which returns max even element in array from array of strings
const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '12', '4'];

const getMaxEvenElement = (arr) => {
    return arr.map(el => parseInt(el)).reduce((prev,curr) => curr % 2 === 0 ? Math.max(curr,prev) : prev, arr[0]);
}

console.log(getMaxEvenElement(arr))

//2. Write a code which swap variables values without a temporary variable
let a = 3;
let b = 5;

[a,b] = [b,a];

console.log(a);
console.log(b);

//3. Create a function which simply return value when there is some defined value
//passed and empty text string ‘-‘ when it is not defined .
const getValue = value => value ?? '-';

console.log(getValue(0));
console.log(getValue(4));
console.log(getValue('someText'));
console.log(getValue(null));
console.log(getValue(undefined));

//4. Create a function which return objects from array of arrays.
const arrOfArrs = [
    ['name','dan'],
    ['age','21'],
    ['city','lviv']
];

const getObjFromArray = arr => Object.fromEntries(arr);

console.log(getObjFromArray(arrOfArrs));

//5. Create function to enhance element with unique id.
const addUniqueId = (obj) => {
    return {...obj, id: Symbol()}
};

const obj1 = {name: 'nick'};

console.log(addUniqueId(obj1));
console.log(addUniqueId({name: 'buffy'}));

console.log(Object.keys(obj1).includes('id'));

//6. Write a function which regroups object properties.
const oldObj = {
    name: 'willow',
    details:  { id: 1, age: 47, university: 'LNU'}
};

function getRegroupedObject({name, details: {id,age,university}}) {
    return {university, user: {age: age, firstName: name, id: id}}
}

console.log(getRegroupedObject(oldObj));

//7. Create a function which finds unique elements in array.
const array = [2,3,4,2,4,'a','c','a'];

function getArrayWithUniqueElements(array) {
     return [...new Set(array)];
}

console.log(getArrayWithUniqueElements(array));

//8.Create a function which masks phone number, leaves only last 4 digits.
const phoneNumber = '0123456789';
const hideNumber = number => number.slice(-4).padStart(number.length, '*');

console.log(hideNumber(phoneNumber));

//9. Create function which has all parameters always required. If they are not - throw error.

const required = msg => {
    try {
        throw new Error( msg );
    } catch (e) {
        console.error(e);
    }
}

function add(a=required('a is required'), b=required('b is required')) {
    if (typeof a === 'number' && typeof b === 'number'){
        return a+b;
    }
}

console.log(add(2,3));
console.log(add(2));

//10. Use generator function to create an iterable sequence of values: 

function* genarateIterableSequence() {
    yield 'I';
    yield 'love';
    yield 'EPAM';
}

const generatorObject = genarateIterableSequence();

for (let value of generatorObject) {
    console.log(value);
}