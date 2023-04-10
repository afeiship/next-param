import nx from '@jswork/next';

const defaults = {
  separator: ',',
  encode: encodeURIComponent,
  isEmpty: function (value) {
    return value == null;
  },
  transform: function (key, value) {
    return this.encode(key) + '=' + this.encode(value);
  }
};

nx.param = function (inObj, inUrl, inOptions) {
  if (!inObj) return '';

  const options = nx.mix(null, defaults, inOptions);
  const arr = [];
  let result;

  nx.forIn(inObj, function (key, value) {
    if (!options.isEmpty(value)) {
      const joinedValue = Array.isArray(value) ? value.join(options.separator) : value;
      arr.push(options.transform(key, joinedValue));
    }
  });

  result = arr.join('&');
  if (!inUrl) return result;
  if (!result) return inUrl;
  if (inUrl.includes('?')) return inUrl + '&' + result;
  return inUrl + '?' + result;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.param;
}

export default nx.param;
