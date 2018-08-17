webpackJsonp([92],{2067:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n,r=i(1),s=i(842),a=i(1116),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.apply=function(e){var t=this.ruleArguments[this.ruleArguments.length-1],i=void 0===t?void 0:new RegExp(t["ignore-module"]);return this.applyWithFunction(e,l,i)},t.metadata={description:"Avoid import statements with side-effect.",optionExamples:[!0,[!0,(o={},o["ignore-module"]="(\\.html|\\.css)$",o)]],options:{items:{properties:{"ignore-module":{type:"string"}},type:"object"},maxLength:1,minLength:0,type:"array"},optionsDescription:a.Utils.dedent(n||(n=r.__makeTemplateObject(["\n            One argument may be optionally provided:\n\n            * `","` allows to specify a regex and ignore modules which it matches."],["\n            One argument may be optionally provided:\n\n            * \\`","\\` allows to specify a regex and ignore modules which it matches."])),"ignore-module"),rationale:"Imports with side effects may have behavior which is hard for static verification.",ruleName:"no-import-side-effect",type:"typescript",typescriptOnly:!1},t.FAILURE_STRING="import with explicit side-effect",t}(a.Rules.AbstractRule);function l(e){for(var t=e.options,i=0,o=e.sourceFile.statements;i<o.length;i++){var n=o[i];if(s.isImportDeclaration(n)){var r=n.importClause,a=n.moduleSpecifier;void 0===r&&s.isStringLiteral(a)&&(void 0!==t&&t.test(a.text)||e.addFailureAtNode(n,p.FAILURE_STRING))}}}t.Rule=p}});
//# sourceMappingURL=92.f6481446.chunk.js.map