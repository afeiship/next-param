/*!
 * name: @feizheng/next-param
 * url: https://github.com/afeiship/next-param
 * version: 1.0.0
 * date: 2019-11-25T07:46:14.791Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  var CHAR_AND = '&';
  var CHAR_EQ = '=';
  var returnValue = function(inKey, inValue) {
    return encodeURIComponent(inKey) + CHAR_EQ + encodeURIComponent(inValue);
  };

  nx.param = function(inObj, inCallback) {
    var callback = inCallback || returnValue;
    var arr = [];
    var key, value, encodeValue;
    for (key in inObj) {
      value = inObj[key];
      if (value != null) {
        encodeValue = Array.isArray(value) ? value.join() : value;
        arr.push(callback(key, encodeValue));
      }
    }
    return arr.join(CHAR_AND);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.param;
  }
})();

//# sourceMappingURL=next-param.js.map
