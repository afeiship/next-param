/*!
 * name: @feizheng/next-param
 * url: https://github.com/afeiship/next-param
 * version: 2.0.0
 * date: 2020-06-11T00:12:25.994Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var CHAR_AND = '&';
  var CHAR_EQ = '=';
  var CHAR_Q = '?';
  var DEFAULT_OPTIONS = {
    joinKey: ',',
    encode: encodeURIComponent,
    isEmpty: function (value) { return value != null; },
    transform: function (key, value) {
      return this.encode(key) + CHAR_EQ + this.encode(value);
    }
  };

  nx.param = function (inObj, inUrl, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var arr = [];
    var result;

    nx.forIn(inObj, function (key, value) {
      if (options.isEmpty(value)) {
        var joinedValue = Array.isArray(value) ? value.join(options.joinKey) : value;
        arr.push(options.transform(key, joinedValue));
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
