import rule from './rule';
import { name, value, IRule } from './modules';

class Verification {
  /** 校验规则列表 */
  private list: IRule[] = [];

  /** 校验结果信息 */
  public message = '';

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
   * 添加校验规则
   *
   * @param {value} value
   * @param {(Array<IRule> | name)} rules
   * @param {string} [msg]
   */
  add(value: value, rules: Array<IRule> | name, msg?: string): void {
    if (Array.isArray(rules)) {
      // 多个校验规则
      const validates = rules.map((rule) => {
        const { type, msg, minLen, maxLen, validator } = rule as IRule;
        return {
          value,
          type,
          msg,
          minLen,
          maxLen,
          validator,
        };
      });
      this.list.push(...validates);
    } else {
      this.list.push({
        value,
        type: rules,
        msg: msg ?? '',
      });
    }
  }

  /**
   * 校验结果
   *
   * @returns {boolean}
   */
  result(): boolean {
    for (let i = 0; i < this.list.length; i += 1) {
      const {
        value, type, msg, minLen, maxLen, validator,
      } = this.list[i] as IRule;

      const fn = rule[type]({
        value: value.toString().trim(),
        msg,
        minLen,
        maxLen,
        validator,
      });

      if (fn) {
        this.message = msg;
        return false;
      }
    }

    this.message = '';
    return true;
  }

}

export default Verification;
