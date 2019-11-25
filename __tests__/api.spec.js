const nx = require('@feizheng/next-js-core2');
require('../src/next-param');

describe('api.basic test', () => {
  test('nx.param', function() {
    // assert.equal(-1, [1,2,3].indexOf(4));
    var rs1 = nx.param({ name: 'fei_!@$', age: 123 });
    var rs2 = nx.param({ name: 'fei_!@$' }, (key, value) => {
      return key + '=' + value;
    });
    expect(rs1).toBe('name=fei_!%40%24&age=123');
    expect(rs2).toBe('name=fei_!@$');
  });
});
