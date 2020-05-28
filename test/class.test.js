import Verification from '../src';

describe('Class init', () => {
  test('instanceOf Verification', () => {
    expect(new Verification()).toBeInstanceOf(Verification);
  })

  test('message init is empty string', () => {
    expect(new Verification().message).toBe('');
  })

  test('list init is empty array', () => {
    expect(new Verification().list).toStrictEqual([]);
  })

  test('result init is true', () => {
    expect(new Verification().result()).toEqual(true);
  })
});
