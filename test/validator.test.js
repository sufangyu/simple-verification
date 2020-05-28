import Verification from '../src';

describe('validator rule', () => {
  test('type=validator: "test = jest"', () => {
    const verify = new Verification;
    verify.add('test', [
      {
        type: 'validator',
        msg: '值不等于 jest',
        validator: (val) => {
          return val === 'jest'
        },
      },
    ]);
    const res = verify.result();
    expect(res).toEqual(false);
  });

  test('type=validator: "jest = jest"', () => {
    const verify = new Verification;
    verify.add('jest', [
      {
        type: 'validator',
        msg: '值不等于 jest',
        validator: (val) => {
          return val === 'jest'
        },
      },
    ]);
    const res = verify.result();
    expect(res).toEqual(true);
  });

  test('type=validator: "132111 is mobile"', () => {
    const verify = new Verification;
    verify.add('132111', [
      {
        type: 'validator',
        msg: '手机号格式不正确',
        validator: (val) => {
          return /\d{11}/.test(val);
        },
      },
    ]);
    const res = verify.result();
    expect(res).toEqual(false);
  });

  test('type=validator: "13211111111 is mobile"', () => {
    const verify = new Verification;
    verify.add('13211111111', [
      {
        type: 'validator',
        msg: '手机号格式不正确',
        validator: (val) => {
          return /\d{11}/.test(val);
        },
      },
    ]);
    const res = verify.result();
    expect(res).toEqual(true);
  });
});
