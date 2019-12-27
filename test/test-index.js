var should = require('should');

describe('index', function(){
  it('should export module Util.inherits', function(){
    var index = require('../lib/noble-device/index');
    (index.Util.inherits).should.be.ok;
  });
});
