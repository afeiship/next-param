/*!
 * name: @jswork/next-param
 * description: Parse and stringify URL query strings for next.
 * homepage: https://github.com/afeiship/next-param
 * version: 1.0.0
 * date: 2020-11-19 13:24:01
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
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
