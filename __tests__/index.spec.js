require('../src');

describe('api.basic test', () => {
  test('nx.param when input is null or {}', () => {
    var rs1 = nx.param(null);
    var rs2 = nx.param({});
    expect(rs1).toBe('');
    expect(rs2).toBe('');
  });

  test('nx.param', function () {
    // assert.equal(-1, [1,2,3].indexOf(4));
    var rs1 = nx.param({ name: 'fei_!@$', age: 123 });
    var rs2 = nx.param({ name: 'fei_!@$' }, null, {
      transform: (key, value) => {
        return key + '=' + value;
      }
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

  test('nx.param with array params', () => {
    var params = {
      ids: [1, 2, 3, 4],
      name: 'order001'
    };
    var url = 'https://www.baidu.com';
    var res1 = nx.param(params, url, { separator: ',' });

    expect(res1).toBe('https://www.baidu.com?ids=1,2,3,4&name=order001');
  });

  test('nx.param with array params but api with ?', () => {
    var params = {
      ids: [1, 2, 3, 4],
      name: 'order001'
    };
    var url = 'https://www.baidu.com/api.php?act=search';
    var res1 = nx.param(params, url);

    expect(res1).toBe('https://www.baidu.com/api.php?act=search&ids=1,2,3,4&name=order001');
  });

  test('obj is null ,only url', () => {
    const params = null;
    const url = 'https://dev.com';
    const res = nx.param(params, url);
    expect(res).toBe('https://dev.com');
  });

  test('special filters', () => {
    const filters = {
      f1: ['MGnify database', 'Zou, 2019']
    };
    const res = nx.param(filters, null);
    expect(res).toBe('f1=MGnify%20database,Zou%2C%202019');
  });

  test('uri/uri2 encoder', () => {
    const filters = { publications: 'Zou, 2019' };

    const res1 = nx.param(filters, null, { encode: 'uri' });
    const res2 = nx.param(filters, null, { encode: 'uri2' });
    expect(res1).toBe('publications=Zou%2C%202019');
    expect(res2).toBe('publications=Zou%252C%25202019');
  });

  test("base64 encoder",()=>{
    const filters = { publications: 'Zou, 2019' };
    const res = nx.param(filters, null, { encode: 'base64' });
    expect(res).toBe('publications=Wm91LCAyMDE5');
  })
});
