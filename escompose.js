(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    factory((root.escompose = {}));
  }
}(this, function (exports) {
  'use strict';
  
  exports.Node = function(type, def) { return Object.create({ type: type }, def); }
  exports.Program = function(options) { 
    var options = options || {};
    this.body = options.body || [];
    return Node('Program', { body: body }); 
  }
  exports.FunctionDeclaration = function(options) {
    var options = options || {};
    this.id = options.id || null;
    this.params = options.params || [];
    this.defaults = options.defaults || [];
    this.rest = options.rest || null;
    this.body = options.body || {};
    this.generator = options.generator || false;
    this.expression = options.expression || false;
    return Node('FunctionDeclaration', this); 
  }
  

}));
