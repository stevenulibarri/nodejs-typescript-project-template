import { example } from '../src/example';

describe('example', () => {
  test('example', async () => {
    const result = await example();
    expect(result).toBe(2);
  });
});
