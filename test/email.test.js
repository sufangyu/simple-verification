import Verification from '../src';

describe('email rule', () => {
  test('type=email: ""', () => {
    const verify = new Verification;
    verify.add('', 'email', '邮箱格式不正确');
    const res = verify.result();
    expect(res).toEqual(false);
  });

  test('type=email: "test"', () => {
    const verify = new Verification;
    verify.add('test', 'email', '邮箱格式不正确');
    const res = verify.result();
    expect(res).toEqual(false);
  });

  test('type=email: "test@"', () => {
    const verify = new Verification;
    verify.add('test@', 'email', '邮箱格式不正确');
    const res = verify.result();
    expect(res).toEqual(false);
  });

  test('type=email: "test@qq.com"', () => {
    const verify = new Verification;
    verify.add('test@qq.com', 'email', '邮箱格式不正确');
    const res = verify.result();
    expect(res).toEqual(true);
  });

  test('type=email: "test@126.com"', () => {
    const verify = new Verification;
    verify.add('test@126.com', 'email', '邮箱格式不正确');
    const res = verify.result();
    expect(res).toEqual(true);
  });

  test('type=email: "test@gmail.com"', () => {
    const verify = new Verification;
    verify.add('test@gmail.com', 'email', '邮箱格式不正确');
    const res = verify.result();
    expect(res).toEqual(true);
  });
});
