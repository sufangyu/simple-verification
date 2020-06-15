import Verification from '../src';

describe('mobile rule', () => {
  test('type=mobile: ""', () => {
    const verify = new Verification;
    verify.add('', 'mobile', '手机号码格式不正确');
    const res = verify.result();
    expect(res).toEqual(false);
  });

  test('type=mobile: "132111"', () => {
    const verify = new Verification;
    verify.add('132111', 'mobile', '手机号码格式不正确');
    const res = verify.result();
    expect(res).toEqual(false);
  });

  test('type=mobile: "13211111111"', () => {
    const verify = new Verification;
    verify.add('13211111111', 'mobile', '手机号码格式不正确');
    const res = verify.result();
    expect(res).toEqual(true);
  });

  test('type=mobile: "23211111111"', () => {
    const verify = new Verification;
    verify.add('23211111111', 'mobile', '手机号码格式不正确');
    const res = verify.result();
    expect(res).toEqual(false);
  });

  test('type=mobile: "13211111111xxx"', () => {
    const verify = new Verification;
    verify.add('13211111111xxx', 'mobile', '手机号码格式不正确');
    const res = verify.result();
    expect(res).toEqual(false);
  });
});
