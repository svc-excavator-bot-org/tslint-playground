webpackJsonp([99],{2060:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(1),i=t(843),r=t(55),s=t(1117),o=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(a,e),a.FAILURE_STRING=function(e){return"Duplicate variable: '"+e+"'"},a.prototype.apply=function(e){return this.applyWithWalker(new d(e,this.ruleName,{parameters:-1!==this.ruleArguments.indexOf("check-parameters")}))},a.metadata={ruleName:"no-duplicate-variable",description:"Disallows duplicate variable declarations in the same block scope.",descriptionDetails:s.Utils.dedent(l||(l=n.__makeTemplateObject(["\n            This rule is only useful when using the `var` keyword -\n            the compiler will detect redeclarations of `let` and `const` variables."],["\n            This rule is only useful when using the \\`var\\` keyword -\n            the compiler will detect redeclarations of \\`let\\` and \\`const\\` variables."]))),rationale:s.Utils.dedent(c||(c=n.__makeTemplateObject(["\n            A variable can be reassigned if necessary -\n            there's no good reason to have a duplicate variable declaration."],["\n            A variable can be reassigned if necessary -\n            there's no good reason to have a duplicate variable declaration."]))),optionsDescription:'You can specify `"check-parameters"` to check for variables with the same name as a parameter.',options:{type:"string",enum:["check-parameters"]},optionExamples:[!0,[!0,"check-parameters"]],type:"functionality",typescriptOnly:!1},a}(s.Rules.AbstractRule);a.Rule=o;var l,c,d=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a.scope=new Set,a}return n.__extends(a,e),a.prototype.walk=function(e){var a=this;this.scope=new Set;var t=function(e){if(i.isFunctionScopeBoundary(e)){var n=a.scope;return a.scope=new Set,r.forEachChild(e,t),void(a.scope=n)}if(a.options.parameters&&i.isParameterDeclaration(e))a.handleBindingName(e.name,!1);else if(i.isVariableDeclarationList(e)&&!i.isBlockScopedVariableDeclarationList(e))for(var s=0,o=e.declarations;s<o.length;s++){var l=o[s];a.handleBindingName(l.name,!0)}return r.forEachChild(e,t)};return r.forEachChild(e,t)},a.prototype.handleBindingName=function(e,a){if(e.kind===r.SyntaxKind.Identifier)a&&this.scope.has(e.text)?this.addFailureAtNode(e,o.FAILURE_STRING(e.text)):this.scope.add(e.text);else for(var t=0,n=e.elements;t<n.length;t++){var i=n[t];i.kind!==r.SyntaxKind.OmittedExpression&&this.handleBindingName(i.name,a)}},a}(s.AbstractWalker)}});
//# sourceMappingURL=99.aff7266a.chunk.js.map