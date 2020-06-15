(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['simple-verification'] = factory());
}(this, (function () { 'use strict';

  var rule = {
      /** 必填 */
      require: function (_a) {
          var value = _a.value, msg = _a.msg;
          if (!value) {
              return msg;
          }
          return '';
      },
      /** 最小长度 */
      minLength: function (_a) {
          var value = _a.value, msg = _a.msg, minLen = _a.minLen;
          if (value.length < minLen) {
              return msg;
          }
          return '';
      },
      /** 最大长度 */
      maxLength: function (_a) {
          var value = _a.value, msg = _a.msg, maxLen = _a.maxLen;
          if (value.length > maxLen) {
              return msg;
          }
          return '';
      },
      /** 手机号校验 */
      mobile: function (_a) {
          var value = _a.value, msg = _a.msg;
          if (!/^1\d{10}$/.test(value)) {
              return msg;
          }
          return '';
      },
      /** 邮件校验 */
      email: function (_a) {
          var value = _a.value, msg = _a.msg;
          // eslint-disable-next-line no-useless-escape
          var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
          if (!reg.test(value)) {
              return msg;
          }
          return '';
      },
      /** 自定义校验函数 */
      validator: function (_a) {
          var value = _a.value, validator = _a.validator, msg = _a.msg;
          if (!validator(value)) {
              return msg;
          }
          return '';
      },
  };

  var Verification = /** @class */ (function () {
      function Verification() {
          /** 校验规则列表 */
          this.list = [];
          /** 校验结果信息 */
          this.message = '';
      }
      /**
       * 添加校验规则
       *
       * @param {value} value
       * @param {(Array<IRule> | name)} rules
       * @param {string} [msg]
       */
      Verification.prototype.add = function (value, rules, msg) {
          var _a;
          if (Array.isArray(rules)) {
              // 多个校验规则
              var validates = rules.map(function (rule) {
                  var _a = rule, type = _a.type, msg = _a.msg, minLen = _a.minLen, maxLen = _a.maxLen, validator = _a.validator;
                  return {
                      value: value,
                      type: type,
                      msg: msg,
                      minLen: minLen,
                      maxLen: maxLen,
                      validator: validator,
                  };
              });
              (_a = this.list).push.apply(_a, validates);
          }
          else {
              this.list.push({
                  value: value,
                  type: rules,
                  msg: msg !== null && msg !== void 0 ? msg : '',
              });
          }
      };
      /**
       * 校验结果
       *
       * @returns {boolean}
       */
      Verification.prototype.result = function () {
          for (var i = 0; i < this.list.length; i += 1) {
              var _a = this.list[i], value = _a.value, type = _a.type, msg = _a.msg, minLen = _a.minLen, maxLen = _a.maxLen, validator = _a.validator;
              var fn = rule[type]({
                  value: value.toString().trim(),
                  msg: msg,
                  minLen: minLen,
                  maxLen: maxLen,
                  validator: validator,
              });
              if (fn) {
                  this.message = msg;
                  return false;
              }
          }
          this.message = '';
          return true;
      };
      return Verification;
  }());

  return Verification;

})));
