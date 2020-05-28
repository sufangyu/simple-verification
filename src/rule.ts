export default {
  /** 必填 */
  require({ value, msg }): string {
    if (!value) {
      return msg;
    }
    return '';
  },
  /** 最小长度 */
  minLength({ value, msg, minLen }): string {
    if ((value as string).length < minLen) {
      return msg;
    }
    return '';
  },
  /** 最大长度 */
  maxLength({ value, msg, maxLen }): string {
    if ((value as string).length > maxLen) {
      return msg;
    }
    return '';
  },
  /** 手机号校验 */
  mobile({ value, msg }): string {
    if (!/\d{11}/.test((value as string))) {
      return msg;
    }
    return '';
  },
  /** 邮件校验 */
  email({ value, msg }): string {
    // eslint-disable-next-line no-useless-escape
    const reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (!reg.test((value as string))) {
      return msg;
    }
    return '';
  },
  /** 自定义校验函数 */
  validator({ value, validator, msg }): string {
    if (!validator(value)) {
      return msg;
    }
    return '';
  },
};
