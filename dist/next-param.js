/*!
 * name: @feizheng/next-param
 * url: https://github.com/afeiship/next-param
 * version: 1.1.4
 * date: 2020-06-10T01:38:35.118Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  var CHAR_AND = '&';
  var CHAR_EQ = '=';
  var CHAR_Q = '?';
  var RETURN_VALUE = function (inKey, inValue) {
    return encodeURIComponent(inKey) + CHAR_EQ + encodeURIComponent(inValue);
  };

  nx.param = function (inObj, inUrl, inCallback) {
    var callback = inCallback || RETURN_VALUE;
    var arr = [];
    var result;

    nx.forIn(inObj, function (key, value) {
      if (value != null) {
        var encodeValue = Array.isArray(value) ? value.join() : value;
        arr.push(callback(key, encodeValue));
      }
    })

    result = arr.join(CHAR_AND);
    if (!inUrl) return result;
    return !result ? inUrl : (inUrl + CHAR_Q + result);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.param;
  }
})();

//# sourceMappingURL=next-param.js.map
