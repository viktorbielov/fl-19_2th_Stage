import { describe, expect, test } from 'vitest';
import { setRes, checkRes } from './app';

describe('check app result', () => {
    test('if result is right', () => {
        expect(checkRes(57)).toBe('Result: 57');
    });

    test('if setRes returns undefined', () => {
        expect(setRes([7,8])).toBeTruthy();
    });
});