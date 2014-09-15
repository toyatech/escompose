var assert = require('assert')
  , fs = require('fs')
  , esprima = require('esprima')
  , escompose = require('../escompose');

function assertMatch(node, object, done) {
  var data = esprima.parse(fs.readFileSync('./test/fixtures/' + node + '.js'));
  assert.deepEqual(object, data);
  done();
}

describe('A Program node', function() {
  it('should match', function(done) {
    assertMatch('Program', escompose.Program(), done);
  });
});
describe('An EmptySatement node', function() {
  it('should match', function(done) {
    assertMatch('EmptyStatement', escompose.Program({
     body: [escompose.EmptyStatement()]}
    ), done);
  });
});
