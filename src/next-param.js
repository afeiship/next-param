(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var CHAR_AND = '&';
  var CHAR_EQ = '=';

  nx.param = function (inObj) {
    var arr = [];
    var key, value, encodeValue;
    for (key in inObj) {
      value = inObj[key];
      if (value != null) {
        encodeValue = Array.isArray(value) ? value.join() : value;
        arr.push(encodeURIComponent(key) + CHAR_EQ + encodeURIComponent(encodeValue));
      }
    }
    return arr.join(CHAR_AND);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.param;
  }

}());
