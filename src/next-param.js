(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  var CHAR_AND = '&';
  var CHAR_EQ = '=';
  var returnValue = function(inKey, inValue) {
    return encodeURIComponent(inKey) + CHAR_EQ + encodeURIComponent(inValue);
  };

  nx.param = function(inObj, inUrl, inCallback) {
    var callback = inCallback || returnValue;
    var arr = [];
    var key, value, encodeValue;
    var result;
    for (key in inObj) {
      value = inObj[key];
      if (value != null) {
        encodeValue = Array.isArray(value) ? value.join() : value;
        arr.push(callback(key, encodeValue));
      }
    }

    result = arr.join(CHAR_AND);

    if (inUrl) {
      if (result) {
        return inUrl + '?' + result;
      } else {
        return inUrl;
      }
    }
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.param;
  }
})();
