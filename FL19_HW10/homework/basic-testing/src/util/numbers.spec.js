import { describe, expect, test } from 'vitest';
import { transformToNumber } from './numbers';

describe('proper transform to number:', () => {
    test('if argument is number', () => {
        expect(transformToNumber('12')).toBeTypeOf('number');
    });
})