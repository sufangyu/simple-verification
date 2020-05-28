import Verification from '../src';

describe('minLength rule', () => {
  test('type=minLength: "jest" minLength > 6', () => {
    const verify = new Verification;
    verify.add('jest', [
      { type: 'minLength', minLen: 6, msg: '长度不能小于6位' },
    ]);
    const res = verify.result();
    expect(res).toEqual(false);
  });

  test('type=minLength: "jest-test" minLength > 6', () => {
    const verify = new Verification;
    verify.add('jest-test', [
      { type: 'minLength', minLen: 6, msg: '长度不能小于6位' },
    ]);
    const res = verify.result();
    expect(res).toEqual(true);
  });

  test('type=minLength: "        " minLength > 6', () => {
    const verify = new Verification;
    verify.add('        ', [
      { type: 'minLength', minLen: 6, msg: '长度不能小于6位' },
    ]);
    const res = verify.result();
    expect(res).toEqual(false);
  });
});
