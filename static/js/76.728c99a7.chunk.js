webpackJsonp([76],{2083:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),i=a(842),o=a(55),r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.FAILURE_STRING_REDUNDANT_TAG=function(e){return"JSDoc tag '@"+e+"' is redundant in TypeScript code."},t.FAILURE_STRING_NO_COMMENT=function(e){return"'@"+e+"' is redundant in TypeScript code if it has no description."},t.prototype.apply=function(e){return this.applyWithFunction(e,c)},t.metadata={ruleName:"no-redundant-jsdoc",description:"Forbids JSDoc which duplicates TypeScript functionality.",optionsDescription:"Not configurable.",options:null,optionExamples:[!0],type:"style",typescriptOnly:!0},t.FAILURE_STRING_REDUNDANT_TYPE="Type annotation in JSDoc is redundant in TypeScript code.",t}(a(1116).Rules.AbstractRule);function c(e){var t=e.sourceFile;return t.statements.forEach(function e(n){if(i.canHaveJsDoc(n))for(var r=0,c=i.getJsDoc(n,t);r<c.length;r++){var s=c[r].tags;if(void 0!==s)for(var d=0,u=s;d<u.length;d++){a(u[d])}}return o.forEachChild(n,e)});function a(t){switch(t.kind){case o.SyntaxKind.JSDocTag:s.has(t.tagName.text)&&e.addFailureAtNode(t.tagName,r.FAILURE_STRING_REDUNDANT_TAG(t.tagName.text));break;case o.SyntaxKind.JSDocAugmentsTag:break;case o.SyntaxKind.JSDocClassTag:case o.SyntaxKind.JSDocTypeTag:case o.SyntaxKind.JSDocTypedefTag:case o.SyntaxKind.JSDocPropertyTag:e.addFailureAtNode(t.tagName,r.FAILURE_STRING_REDUNDANT_TAG(t.tagName.text));break;case o.SyntaxKind.JSDocTemplateTag:void 0!==t.comment&&""!==t.comment||e.addFailureAtNode(t.tagName,r.FAILURE_STRING_NO_COMMENT(t.tagName.text));break;case o.SyntaxKind.JSDocReturnTag:case o.SyntaxKind.JSDocParameterTag:var a=t,n=a.typeExpression,i=a.comment;void 0!==n&&e.addFailureAtNode(n,r.FAILURE_STRING_REDUNDANT_TYPE),void 0!==i&&""!==i||e.addFailureAtNode(t.tagName,r.FAILURE_STRING_NO_COMMENT(t.tagName.text));break;default:throw new Error("Unexpected tag kind: "+o.SyntaxKind[t.kind])}}}t.Rule=r;var s=new Set(["abstract","access","class","constant","constructs","default","enum","exports","function","global","implements","interface","instance","member","memberof","mixes","mixin","module","name","namespace","override","private","property","protected","public","readonly","requires","static","this"])}});
//# sourceMappingURL=76.728c99a7.chunk.js.map