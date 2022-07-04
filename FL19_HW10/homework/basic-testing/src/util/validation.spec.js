import { describe, expect, test } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validate if str is empty:', () => {
    test('if argument is not empty string', () => {
        expect(validateStringNotEmpty('hgfhjKkjh ')).toBeTruthy();
    });
    test('if argument is empty string', () => {
        expect(() => validateStringNotEmpty('')).toThrowError('Invalid input - must not be empty');
    });
})

describe('validate if number not NaN:', () => {
    test('if argument is not NaN', () => {
        expect(validateNumber(57)).not.toBeNaN();
    });
    test('if argument is NaN', () => {
        expect(() => validateNumber(NaN)).toThrowError('Invalid number input.');
    });
})