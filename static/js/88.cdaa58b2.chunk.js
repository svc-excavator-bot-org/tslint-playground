webpackJsonp([88],{2071:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(1),r=e(842),o=e(55),l=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(n,t),n.prototype.apply=function(t){return this.applyWithFunction(t,a)},n.metadata={ruleName:"no-invalid-template-strings",description:"Warns on use of `${` in non-template strings.",optionsDescription:"Not configurable.",options:null,optionExamples:[!0],rationale:"Interpolation will only work for template strings.",type:"functionality",typescriptOnly:!1},n.FAILURE_STRING="Interpolation will only work for template strings.",n}(e(1116).Rules.AbstractRule);function a(t){return o.forEachChild(t.sourceFile,function n(e){return r.isStringLiteral(e)&&function(n){var e=n.getText(t.sourceFile),i=/\\*\$\{/g,r=i.exec(e);for(;null!==r;){var o=r[0].length,a=o-2,s=a%2===1;if(!s){var u=n.getStart()+(r.index+a);t.addFailureAt(u,2,l.FAILURE_STRING)}r=i.exec(e)}}(e),o.forEachChild(e,n)})}n.Rule=l}});
//# sourceMappingURL=88.cdaa58b2.chunk.js.map