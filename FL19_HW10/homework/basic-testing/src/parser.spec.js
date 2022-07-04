import { describe, expect, test } from 'vitest';
import { extractNumbers } from './parser';

describe('proper numbers extraction:', () => {
    const object = {
        num1: 7,
        num2: 8,
        get: function(item) {
            return this[item];
        }
    }
    test('if returning keys', () => {
        expect(extractNumbers(object)).toStrictEqual([7,8]);
    });
})