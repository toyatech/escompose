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
    var result = {}, options = options || {};
    result.type = 'Program';
    result.body = options.body || [];
    return result;
  };

  function EmptyStatement() {
    var result = {}, options;
    result.type = 'EmptyStatement';
    return result;
  };

  function BlockStatement(options) {
    var result = {}, options = options || {};
    result.type = 'BlockStatement';
    result.body = options.body || [];
    return result;
  };

  function ExpressionStatement(options) {
    var result = {}, options = options || {};
    result.type = 'ExpressionStatement';
    result.expression = options.expression || {}
    return result;
  };

  function IfStatement(options) {
    var result = {}, options = options || {};
    result.type = 'IfStatement';
    result.test = options.expression || {};
    result.consequent = options.consequent || {};
    result.alternate = options.alternate || null;
    return result;
  };

  function LabeledStatement(options) {
    var result = {}, options = options || {};
    result.type = 'LabeledStatement';
    result.label = options.label || {};
    result.body = options.body || {};
    return result;
  };

  function BreakStatement(options) {
    var result = {}, options = options || {};
    result.type = 'BreakStatement';
    result.label = options.label || null;
    return result;
  };

  function ContinueStatement(options) {
    var result = {}, options = options || {};
    result.type = 'ContinueStatement';
    result.label = options.label || null;
    return result;
  };

  function WithStatement(options) {
    var result = {}, options = options || {};
    result.type = 'WithStatement';
    result.object = options.object || {};
    result.body = options.body || {};
    return result;
  };

  function SwitchStatement(options) {
    var result = {}, options = options || {};
    result.type = 'SwitchStatement';
    result.discriminant = options.discriminant || {};
    result.cases = options.cases || [];
    result.lexical = options.lexical || false;
    return result;
  };

  function ReturnStatement(options) {
    var result = {}, options = options || {};
    result.argument = options.argument || null;
    return result;
  };

  function ThrowStatement(options) {
    var result = {}, options = options || {};
    result.type = 'ThrowStatement';
    result.argument = options.argument || {};
    return result;
  }; 
 
  function TryStatement(options) {
    var result = {}, options = options || {};
    result.type = 'TryStatemnt';
    result.block = options.block || {};
    result.handler = options.handler || null;
    result.guardedHandlers = options.guardedHandlers || [];
    result.finalizer = options.finalizer || null;
    return result;
  };

  function WhileStatement(options) {
    var result = {}, options = options || {};
    result.type = 'WhileStatement';
    result.test = options.test || {};
    result.body = options.body || {};
    return result;
  };

  function DoWhileStatement(options) {
    var result = {}, options = options || {};
    result.type = 'DoWhileStatement';
    result.body = options.body || {};
    result.test = options.test || {};
    return result;
  };

  function ForStatement(options) {
    var result = {}, options = options || {};
    result.type = 'ForStatement';
    result.init = options.init || null;
    result.test = options.test || null;
    result.update = options.update || null;
    result.body = options.body || {};
    return result;
  };

  function ForInStatement(options) {
    var result = {}, options = options || {};
    result.type = 'ForInStatment';
    result.left = options.left || {};
    result.right = options.right || {};
    result.body = options.body || {};
    result.each = options.each || false;
    return result;
  };

  function ForOfStatement(options) {
    var result = {}, options = options || {};
    result.type = 'ForOfStatement';
    result.left = options.left || {};
    result.right = options.right || {};
    result.body = options.body || {};
    return result;
  };

  function LetStatement(options) {
    var result = {}, options = options || {};
    result.type = 'LetStatement';
    result.head = options.head || [];
    result.body = options.body || {};
    return result;
  };

  function DebuggerStatement() {
    var result = {};
    result.type = 'DebuggerStatement';
    return result;
  };

  function FunctionDeclaration(options) {
    var result = {}, options = options || {};
    result.type = 'FunctionDeclaration';
    result.id = options.id || null;
    result.params = options.params || [];
    result.defaults = options.defaults || [];
    result.rest = options.rest || null;
    result.body = options.body || {};
    result.generator = options.generator || false;
    result.expression = options.expression || false;
    return result; 
  };

  function VariableDeclaration(options) {
    var result = {}, options = options || {};
    result.type = 'VariableDeclaration';
    result.declarations = options.declarations || [];
    result.kind = options.kind || 'var';
    return result;
  };

  function VariableDeclarator(options) {
    var result = {}, options = options || {};
    result.type = 'VariableDeclarator';
    result.id = options.id || {};
    result.init = options.init || null;
    return result;
  };

  function ThisExpression() {
    var result = {};
    result.type = 'ThisExpression';
    return result;
  };

  function ArrayExpression(options) {
    var result = {}, options = options || {};
    result.type = 'ArrayExpression';
    result.elements = options.elements || [];
    return result;
  };

  function ObjectExpression(options) {
    var result = {}, options = options || {};
    result.type = 'ObjectExpression';
    result.properties = options.properties || [];
    return result;
  };

  function FunctionExpression(options) {
    var result = {}, options = options || {};
    result.type = 'FunctionExpression';
    result.id = options.id || null;
    result.params = options.params || [];
    result.defaults = options.defaults || [];
    result.rest = options.rest || null;
    result.body = options.body || {};
    result.generator = options.generator || false;
    result.expression = options.expression || false;
    return result;
  };
 
  function ArrowExpression(options) {
    var result = {}, options = options || {};
    result.type = 'ArrayExpression';
    result.params = options.params || [];
    result.defaults = options.defaults || [];
    result.rest = options.rest || null;
    result.body = options.body || {};
    result.generator = options.generator || false;
    result.expression = options.expression || false;
    return result;
  };

  function SequenceExpression(options) {
    var result = {}, options = options || {};
    result.type = 'SequenceExpression';
    result.expressions = options.expressions || [];
    return result;
  };

  function UnaryExpression(options) {
    var result = {}, options = options || {};
    result.type = 'UnaryExpression';
    result.operator = options.operator || '-';
    result.prefix = options.prefix || false;
    result.argument = options.argument || {};
    return result;
  };

  function BinaryExpression(options) {
    var result = {}, options = options || {};
    result.type = 'BinaryExpression';
    result.operator = options.operator || '==';
    result.left = options.left || {};
    result.right = options.right || {};
    return result;
  };

  function AssignmentExpression(options) {
    var result = {}, options = options || {};
    result.type = 'AssignmentExpression';
    result.operator = options.operator || '=';
    result.left = options.left || {};
    result.right = options.right || {};
    return result;
  };

  function UpdateExpression(options) {
    var result = {}, options = options || {};
    result.type = 'UpdateExpression';
    result.operator = options.operator || '++';
    result.argument = options.argument || {};
    result.prefix = options.prefix || false;
    return result;
  };

  function LogicalExpression(options) {
    var result = {}, options = options || {};
    result.type = 'LogicalExpression';
    result.operator = options.operator = '||';
    result.left = options.left || {};
    result.right = options.right || {};
    return result;
  };

  function ConditionalExpression(options) {
    var result = {}, options = options || {};
    result.type = 'ConditionalExpression';
    result.test = options.test || {};
    result.alternate = options.alternate || {};
    result.consequent = options.consequent || {};
    return result;
  };

  function NewExpression(options) {
    var result = {}, options = options || {};
    result.type = 'NewExpression';
    result.callee = options.callee || {};
    result.arguments = options.arguments || [];
    return result;
  };

  function CallExpression(options) {
    var result = {}, options = options || {};
    result.type = 'CallExpression';
    result.callee = options.callee || {};
    result.arguments = options.arguments || [];
    return result;
  };

  function MemberExpression(options) {
    var result = {}, options = options || {};
    result.type = 'MemberExpression';
    result.object = options.object || {};
    result.property = options.property || {};
    result.computed = options.computed || false;
    return result;
  };

  function YieldExpression(options) {
    var result = {}, options = options || {};
    result.type = 'YieldExpression';
    result.argument = options.argument || null;
    return result;
  };

  function ComprehensionExpression(options) {
    var result = {}, options = options || {};
    result.type = 'ComprehensionExpression';
    result.body = options.body || {};
    result.blocks = options.blocks || [];
    result.filter = options.filter || null;
    return result;
  };

  function GeneratorExpression(options) {
    var result = {}, options = options || {};
    result.type = 'GeneratorExpression';
    result.body = options.body || {};
    result.blocks = options.blocks || [];
    result.filter = options.filter || null;
    return result;
  };

  function GraphExpression(options) {
    var result = {}, options = options || {};
    result.type = 'GraphExpression';
    result.body = options.body || {};
    result.blocks = options.blocks || [];
    result.filter = options.filter || null;
    return result;
  };

  function GraphIndexExpression(options) {
    var result = {}, options = options || {};
    result.type = 'GraphIndexExpression';
    result.index = options.index || 0;
    return result;
  };
  
  function LetExpression(options) {
    var result = {}, options = options || {};
    result.type = 'LetExpression';
    result.head = options.head || [];
    result.body = options.body || {};
    return result;
  };

  function ObjectPattern(options) {
    var result = {}, options = options || {};
    result.type = 'ObjectPattern';
    result.properties = options.properties || [];
    return result;
  };

  function ArrayPattern(options) {
    var result = {}, options = options || {};
    result.type = 'ArrayPattern';
    result.elements = options.elements || [];
    return result;
  };

  function SwitchCase(options) {
    var result = {}, options = options || {};
    result.type = 'SwitchCase';
    result.test = options.test || null;
    result.consequent = options.consequent || [];
    return result;
  };

  function CatchClause(options) {
    var result = {}, options = options || {};
    result.type = 'CatchClause';
    result.param = options.param || {};
    result.guard = options.guard || null;
    result.body = options.body || {};
    return result;
  };

  function ComprehensionBlock(options) {
    var result = {}, options = options || {};
    result.type = 'CompreshensionBlock';
    result.left = options.left || {};
    result.right = options.right || {};
    result.each = options.each || false;
    return result;
  };

  function Property(options) {
    var result = {}, options = options || {};
    result.type = 'Property';
    result.key = options.key || 'key';
    result.value = options.value || 'value';
    result.kind = options.kind || 'init';
    return result;
  };

  function Identifier(options) {
    var result = {}, options = options || {};
    result.type = 'Identifier';
    result.name = options.name || 'name';
    return result;
  };

  function Literal(options) {
    var result = {}, options = options || {};
    result.type = 'Literal';
    result.value = options.value || 'value';
    return result;
  };
  
  return {
    Program: Program,
    EmptyStatement: EmptyStatement,
    BlockStatement: BlockStatement,
    ExpressionStatement: ExpressionStatement,
    IfStatement: IfStatement,
    LabeledStatement: LabeledStatement,
    BreakStatement: BreakStatement,
    ContinueStatement: ContinueStatement,
    WithStatement: WithStatement,
    SwitchStatement: SwitchStatement,
    ReturnStatement: ReturnStatement,
    ThrowStatement: ThrowStatement,
    TryStatement: TryStatement,
    WhileStatement: WhileStatement,
    DoWhileStatement: DoWhileStatement,
    ForStatement: ForStatement,
    ForInStatement: ForInStatement,
    ForOfStatement: ForOfStatement,
    LetStatement: LetStatement,
    DebuggerStatement: DebuggerStatement,
    FunctionDeclaration: FunctionDeclaration,
    VariableDeclaration: VariableDeclaration,
    VariableDeclarator: VariableDeclarator,
    ThisExpression: ThisExpression,
    ArrayExpression: ArrayExpression,
    ObjectExpression: ObjectExpression,
    FunctionExpression: FunctionExpression,
    ArrowExpression: ArrowExpression,
    SequenceExpression: SequenceExpression,
    UnaryExpression: UnaryExpression,
    BinaryExpression: BinaryExpression,
    AssignmentExpression: AssignmentExpression,
    UpdateExpression: UpdateExpression,
    LogicalExpression: LogicalExpression,
    ConditionalExpression: ConditionalExpression,
    NewExpression: NewExpression,
    CallExpression: CallExpression,
    MemberExpression: MemberExpression,
    YieldExpression: YieldExpression,
    ComprehensionExpression: ComprehensionExpression,
    GeneratorExpression: GeneratorExpression,
    GraphExpression: GraphExpression,
    GraphIndexExpression: GraphIndexExpression,
    LetExpression: LetExpression,
    ObjectPattern: ObjectPattern,
    ArrayPattern: ArrayPattern,
    SwitchCase: SwitchCase,
    CatchClause: CatchClause,
    ComprehensionBlock: ComprehensionBlock,
    Property: Property,
    Identifier: Identifier,
    Literal: Literal
  }

}));
