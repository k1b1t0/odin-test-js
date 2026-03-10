import {add, subtract, multiply, divide} from './calculater.js';

test('add', () => {
    expect(add(100, 100)).toBe(200);
})

test('subtract', () => {
    expect(subtract(100, 100)).toBe(0);
})

test('multiply', () => {
    expect(multiply(100, 100)).toBe(10000);
})

test('divide', () => {
    expect(divide(100, 100)).toBe(1);
})