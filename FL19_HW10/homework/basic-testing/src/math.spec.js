import { describe, expect, test } from 'vitest';
import { add } from './math';

describe('proper add numbers:', () => {
    test('if argument is array', () => {
        expect(add([1,2,3,4,5,6,7,8])).equal(36);
    });
    test('if array and includes NaN', () => {
        expect(() => add([1,2,3,4,5,NaN,7,8])).toThrowError('Incorrect value in array');
    });
    test('if array and includes string', () => {
        expect(() => add([1,2,3,4,'5',6,7,8])).toThrowError('Incorrect value in array');
    });
})