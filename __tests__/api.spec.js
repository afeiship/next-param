const nx = require('@feizheng/next-js-core2');
require('../src/next-param');

describe('api.basic test', () => {
  test('nx.param', function() {
    // assert.equal(-1, [1,2,3].indexOf(4));
    var rs1 = nx.param({ name: 'fei_!@$', age: 123 });
    var rs2 = nx.param({ name: 'fei_!@$' }, null, (key, value) => {
      return key + '=' + value;
    });
    expect(rs1).toBe('name=fei_!%40%24&age=123');
    expect(rs2).toBe('name=fei_!@$');
  });

  test('nx.param when url && params should renturn url with querystring', () => {
    var params = { id: 123, kw: 'dashboard' };
    var url = 'https://www.baidu.com';
    var res = nx.param(params, url);
    expect(res).toBe('https://www.baidu.com?id=123&kw=dashboard');
  });

  test('nx.param when params is empty should only return url', () => {
    var params = {};
    var url = 'https://www.baidu.com';
    var res = nx.param(params, url);
    expect(res).toBe('https://www.baidu.com');
  });
});
