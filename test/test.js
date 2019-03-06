var assert = require('assert');
var nx = require('next-js-core2');
var nxParam = require('../src/next-param');

describe('parms1', function() {
  it('basic test', function() {
    // assert.equal(-1, [1,2,3].indexOf(4));
    var rs1 = nx.param({ name: 'fei_!@$', age: 123 });
    var rs2 = nx.param({ name: 'fei_!@$' }, (key, value) => {
      return key + '=' + value;
    });
    assert.equal(rs1, 'name=fei_!%40%24&age=123');
    assert.equal(rs2, 'name=fei_!@$');
  });
});
