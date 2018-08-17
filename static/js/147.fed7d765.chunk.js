webpackJsonp([147],{2011:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,i=t(1),a=t(842),o=t(55),s=t(1116),p=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(n,e),n.prototype.apply=function(e){return this.applyWithFunction(e,l,{banSingleArgParens:-1!==this.ruleArguments.indexOf("ban-single-arg-parens")})},n.metadata={ruleName:"arrow-parens",description:"Requires parentheses around the parameters of arrow function definitions.",hasFix:!0,rationale:"Maintains stylistic consistency with other arrow function definitions.",optionsDescription:s.Utils.dedent(r||(r=i.__makeTemplateObject(["\n            If `","` is specified, then arrow functions with one parameter\n            must not have parentheses if removing them is allowed by TypeScript."],["\n            If \\`","\\` is specified, then arrow functions with one parameter\n            must not have parentheses if removing them is allowed by TypeScript."])),"ban-single-arg-parens"),options:{type:"string",enum:["ban-single-arg-parens"]},optionExamples:[!0,[!0,"ban-single-arg-parens"]],type:"style",typescriptOnly:!1},n.FAILURE_STRING_MISSING="Parentheses are required around the parameters of an arrow function definition",n.FAILURE_STRING_EXISTS="Parentheses are prohibited around the parameter in this single parameter arrow function",n}(s.Rules.AbstractRule);function l(e){return o.forEachChild(e.sourceFile,function n(t){if(a.isArrowFunction(t)&&function(e){return 1===e.parameters.length&&void 0===e.typeParameters&&void 0===e.type&&((n=e.parameters[0]).name.kind===o.SyntaxKind.Identifier&&void 0===n.dotDotDotToken&&void 0===n.initializer&&void 0===n.questionToken&&void 0===n.type);var n}(t)){var r=a.getChildOfKind(t,o.SyntaxKind.OpenParenToken);if(void 0===r){if(!e.options.banSingleArgParens){var i=t.parameters[0],l=i.getStart(e.sourceFile),d=i.end;e.addFailure(l,d,p.FAILURE_STRING_MISSING,[s.Replacement.appendText(l,"("),s.Replacement.appendText(d,")")])}}else if(e.options.banSingleArgParens){var u=a.getChildOfKind(t,o.SyntaxKind.CloseParenToken),c=null!==e.sourceFile.text.substring(r.pos-1,r.pos).match(/[a-z]/i)?" ":"";e.addFailureAtNode(t.parameters[0],p.FAILURE_STRING_EXISTS,[s.Replacement.replaceFromTo(r.pos,t.parameters[0].getStart(e.sourceFile),c),s.Replacement.deleteFromTo(t.parameters[0].end,u.end)])}}return o.forEachChild(t,n)})}n.Rule=p}});
//# sourceMappingURL=147.fed7d765.chunk.js.map