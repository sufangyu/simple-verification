import rule from './rule';
export declare type name = keyof typeof rule;
export declare type value = string | boolean | any[];
export interface IRule {
    /** 值 */
    value: value;
    /** 校验类型 */
    type: name;
    /** 错误信息 */
    msg: string;
    /** 最小长度 */
    minLen?: number;
    /** 最大长度 */
    maxLen?: number;
    /** 自定义规则函数 */
    validator?: () => void;
}
