declare const _default: {
    /** 必填 */
    require({ value, msg }: {
        value: any;
        msg: any;
    }): string;
    /** 最小长度 */
    minLength({ value, msg, minLen }: {
        value: any;
        msg: any;
        minLen: any;
    }): string;
    /** 最大长度 */
    maxLength({ value, msg, maxLen }: {
        value: any;
        msg: any;
        maxLen: any;
    }): string;
    /** 手机号校验 */
    mobile({ value, msg }: {
        value: any;
        msg: any;
    }): string;
    /** 邮件校验 */
    email({ value, msg }: {
        value: any;
        msg: any;
    }): string;
    /** 自定义校验函数 */
    validator({ value, validator, msg }: {
        value: any;
        validator: any;
        msg: any;
    }): string;
};
export default _default;
