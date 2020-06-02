import { name, value, IRule } from './modules';
declare class Verification {
    /** 校验规则列表 */
    private list;
    /** 校验结果信息 */
    message: string;
    /**
     * 添加校验规则
     *
     * @param {value} value
     * @param {name} type
     * @param {string} msg
     */
    add(value: value, type: name, msg: string): void;
    /**
     * 添加校验规则
     *
     * @param {value} value
     * @param {Array<IRule>} rules
     */
    add(value: value, rules: Array<IRule>): void;
    /**
     * 校验结果
     *
     * @returns {boolean}
     */
    result(): boolean;
}
export default Verification;
