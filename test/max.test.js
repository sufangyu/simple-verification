import Verification from '../src';

describe('maxLength rule', () => {
  test('type=maxLength: "jest" maxLength < 6', () => {
    const verify = new Verification;
    verify.add('jest', [
      { type: 'maxLength', maxLen: 6, msg: '长度不能大于6位' },
    ]);
    const res = verify.result();
    expect(res).toEqual(true);
  });

  test('type=maxLength: "jest-test" maxLength < 6', () => {
    const verify = new Verification;
    verify.add('jest-test', [
      { type: 'maxLength', maxLen: 6, msg: '长度不能大于6位' },
    ]);
    const res = verify.result();
    expect(res).toEqual(false);
  });

  test('type=maxLength: "        " maxLength < 6', () => {
    const verify = new Verification;
    verify.add('        ', [
      { type: 'maxLength', maxLen: 6, msg: '长度不能大于6位' },
    ]);
    const res = verify.result();
    expect(res).toEqual(true);
  });
});
