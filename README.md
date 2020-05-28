# simple-verification

简易版本表单项校验工具类

## 安装
```bash
npm install simple-verification --save 
```

## 使用
```js
import Verification from 'simple-verification';

const from = {
  user: 'zsf',
  mobile: '',
  email: '',
};
const { user, mobile, email } = from;
const verify = new Verification();
verify.add(user, 'require', '用户名不能为空');
verify.add(
  mobile,
  [
    { type: 'require', msg: '手机号不能为空' },
    { type: 'validator', msg: '手机号格式不正确', validator: (value) => /\d{11}/.test(value)},
  ]
);
verify.add(
  email,
  [
    { type: 'require', msg: '邮箱不能为空' },
    { type: 'email', msg: '手机号不能为空' },
  ]
);

const res = verify.result();
if (!res) {
  console.log(`校验失败: ${verify.message;}`);
  return;
}
```

## 方法

### 单个规则

`add(value, type, msg)`
- value 值
- type 类型. 取值: validator, require, minLength, maxLength, mobile, email
- msg 错误提示信息

## 多个规则

`add(value, rules)`
- value 值
- rules 校验规则集合


## LICENSE
MIT