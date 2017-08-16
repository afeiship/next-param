(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var CHAR_AND = '&';
  var CHAR_EQUAL = '=';

  nx.param = function (inObj) {
    var arr = [];
    var key, value, encodeValue;
    for (key in inObj) {
      value = inObj[key];
      if (value != null) {
        encodeValue = Array.isArray(value) ? value.join() : value;
        arr.push(encodeURIComponent(key) + CHAR_EQUAL + encodeURIComponent(encodeValue));
      }
    }
    return arr.join(CHAR_AND);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.param;
  }

}());
