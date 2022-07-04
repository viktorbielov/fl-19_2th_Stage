import { describe, expect, test } from 'vitest';
import { User } from './hooks';

describe('check if class User works properly:', () => {
    test('if creates User', () => {
        const userOne = new User('jdkhfsjkh@test.com');
        expect(userOne.email).toBe('jdkhfsjkh@test.com')
    });
    test('if User updateEmail works', () => {
        const userOne = new User('jdkhfsjkh@test.com');
        userOne.updateEmail('bldkjs@mail.com')
        expect(userOne.email).toBe('bldkjs@mail.com')
    });
    test('if User removeEmail works', () => {
        const userOne = new User('jdkhfsjkh@test.com');
        userOne.removeEmail()
        expect(userOne.email).toBe('');
    });
});