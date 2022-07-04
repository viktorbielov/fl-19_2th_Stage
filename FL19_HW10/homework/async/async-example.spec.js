import { describe, expect, test } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';
import { User } from './hooks/hooks';


describe('check if async generateTokenPromise works correct:', () => {
    test('if returns promise', async () => {
        const userOne = new User('jdkhfsjkh@test.com');
        await expect(generateTokenPromise(userOne.email)).resolves.toBeTruthy();
    });
    test('if generateToken returns undefined ', () => {
        const userOne = new User('jdkhfsjkh@test.com');
        expect(generateToken(userOne.email, (err, token) => {
            return token;
          })).toBeFalsy();
    });
});