webpackJsonp([102],{2056:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o,a=n(1),l=n(842),r=n(55),s=n(1116),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.FAILURE_STRING=function(e){return"Multiple imports from '"+e+"' can be combined into one."},t.prototype.apply=function(e){return this.applyWithFunction(e,u)},t.metadata={ruleName:"no-duplicate-imports",description:s.Utils.dedent(i||(i=a.__makeTemplateObject(["\n            Disallows multiple import statements from the same module."],["\n            Disallows multiple import statements from the same module."]))),rationale:s.Utils.dedent(o||(o=a.__makeTemplateObject(["\n            Using a single import statement per module will make the code clearer because you can see everything being imported\n            from that module on one line."],["\n            Using a single import statement per module will make the code clearer because you can see everything being imported\n            from that module on one line."]))),optionsDescription:"Not configurable",options:null,optionExamples:[!0],type:"maintainability",typescriptOnly:!1},t}(s.Rules.AbstractRule);function u(e){!function e(t,n,i){for(var o=0,a=n;o<a.length;o++){var s=a[o];if(l.isImportDeclaration(s)&&l.isLiteralExpression(s.moduleSpecifier)){var u=s.moduleSpecifier.text;i.has(u)&&t.addFailureAtNode(s,m.FAILURE_STRING(u)),i.add(u)}l.isModuleDeclaration(s)&&void 0!==s.body&&s.name.kind===r.SyntaxKind.StringLiteral&&e(t,s.body.statements,r.isExternalModule(t.sourceFile)?i:new Set)}}(e,e.sourceFile.statements,new Set)}t.Rule=m}});
//# sourceMappingURL=102.7e9e996a.chunk.js.map