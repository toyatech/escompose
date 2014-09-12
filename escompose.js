(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root = factory();
  }
}(this, function () {
  'use strict';

  function Program(options) { 
    var options = options || {};
    this.type = 'Program';
    this.body = options.body || [];
    return this;
  };

  function FunctionDeclaration(options) {
    var options = options || {};
    this.type = 'FunctionDeclaration';
    this.id = options.id || null;
    this.params = options.params || [];
    this.defaults = options.defaults || [];
    this.rest = options.rest || null;
    this.body = options.body || {};
    this.generator = options.generator || false;
    this.expression = options.expression || false;
    return this; 
  };
  
  return {
    Program: Program,
    FunctionDeclaration: FunctionDeclaration
  }

}));
