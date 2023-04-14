import nx from '@jswork/next';

const defaults = {
  separator: ',',
  encode: encodeURIComponent,
  isEmpty: (value) => value == null,
  transform: nx.noop
};

nx.param = function (inObj, inUrl, inOptions) {
  if (!inObj && !inUrl) return '';
  if (!inObj && inUrl) return inUrl;

  const options = nx.mix(null, defaults, inOptions);
  const arr = [];
  let result;

  nx.forIn(inObj, function (key, value) {
    if (!options.isEmpty(value)) {
      const isAry = Array.isArray(value);
      const joined = isAry ? value.map(options.encode).join(options.separator) : value;
      const hasTransform = options.transform !== nx.noop;
      const suffix = isAry ? joined : options.encode(joined);
      const transformed = hasTransform
        ? options.transform(key, joined)
        : options.encode(key) + '=' + suffix;
      arr.push(transformed);
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
