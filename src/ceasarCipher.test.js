import {ceasarCipher} from './ceasarCipher.js';

test('lowercase', () => {
    expect(ceasarCipher('xyz', 3)).toBe('abc');
})

test('has uppercase', () => {
    expect(ceasarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('punctuation', () => {
    expect(ceasarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

