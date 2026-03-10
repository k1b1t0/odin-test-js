import {capitalize} from './capitalize';

test('a word', () => {
    expect(capitalize('hello')).toBe('Hello');
})

test('a sentence', () => {
    expect(capitalize('this is a sentence')).toBe('This is a sentence');
})