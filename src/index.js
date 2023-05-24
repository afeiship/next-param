import nx from '@jswork/next';
import { Base64 } from 'js-base64';

const ENCODE_HOOKS = {
  uri: (v) => encodeURIComponent(v),
  uri2: (v) => encodeURIComponent(encodeURIComponent(v)),
  base64: (v) => Base64.encode(v)
};

const defaults = {
  separator: ',',
  encode: 'uri',
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
      const encoder = ENCODE_HOOKS[options.encode] || options.encode;
      const isAry = Array.isArray(value);
      const joined = isAry ? value.map(encoder).join(options.separator) : value;
      const hasTransform = options.transform !== nx.noop;
      const suffix = isAry ? joined : encoder(joined);
      const transformed = hasTransform ? options.transform(key, joined) : key + '=' + suffix;
      arr.push(transformed);
    }
  });

  result = arr.join('&');
  if (!inUrl) return result;
  if (!result) return inUrl;
  if (inUrl.includes('?')) return inUrl + '&' + result;
  return inUrl + '?' + result;
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.param;
}

export default nx.param;
