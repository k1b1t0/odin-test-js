import {reverseString} from './reverseString.js';

test('a word', () => {
    expect(reverseString('abcde')).toBe('edcba');
})

test('a sentence', () => {
    expect(reverseString('abcde abcde')).toBe('edcba edcba');
})