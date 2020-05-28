import Verification from '../src';

describe('require rule', () => {
  test('type=require: empty value', () => {
    const verify = new Verification;
    verify.add('', 'require', '值不能为空');
    const res = verify.result();
    expect(res).toEqual(false);
  });

  test('type=require: multiple spaces', () => {
    const verify = new Verification;
    verify.add('   ', 'require', '值不能为空');
    const res = verify.result();
    expect(res).toEqual(false);
  });

  test('type=require: not empty value', () => {
    const verify = new Verification;
    verify.add('not empty', 'require', '值不能为空');
    const res = verify.result();
    expect(res).toEqual(true);
  });
});
