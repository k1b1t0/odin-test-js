import { add } from './math';

test('cộng 1 + 2 phải bằng 3', () => {
  expect(add(1, 2)).toBe(3);
});