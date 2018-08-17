webpackJsonp([38],{2125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r,s,a=n(1),o=n(842),u=n(55),c=n(1116),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.apply=function(e){var t=3;0!==this.ruleArguments.length&&(t=this.ruleArguments[0]["min-cases"]);return this.applyWithFunction(e,l,t)},t.metadata={ruleName:"prefer-switch",description:"Prefer a `switch` statement to an `if` statement with simple `===` comparisons.",optionsDescription:c.Utils.dedent(s||(s=a.__makeTemplateObject(["\n            An optional object with the property '","'.\n            This is the number cases needed before a switch statement is recommended.\n            Defaults to 3."],["\n            An optional object with the property '","'.\n            This is the number cases needed before a switch statement is recommended.\n            Defaults to 3."])),"min-cases"),options:{type:"object",properties:(i={},i["min-cases"]={type:"number"},i)},optionExamples:[!0,[!0,(r={},r["min-cases"]=2,r)]],type:"style",typescriptOnly:!1},t.FAILURE_STRING="Use a switch statement instead of using multiple '===' checks.",t}(c.Rules.AbstractRule);function l(e){var t=e.options,n=e.sourceFile;return u.forEachChild(n,function i(r){if(!o.isIfStatement(r)||!function(e,t,n){var i,r=0;return function e(t,n){var i=t.expression,r=t.elseStatement;if(!function e(t,n){if(!o.isBinaryExpression(t))return!1;var i=t.operatorToken,r=t.left,s=t.right;switch(i.kind){case u.SyntaxKind.BarBarToken:return e(r,n)&&e(s,n);case u.SyntaxKind.EqualsEqualsEqualsToken:return p(r)&&p(s)&&n(r);default:return!1}}(i,n))return!1;return void 0===r||!o.isIfStatement(r)||e(r,n)}(e,function(e){return r++,void 0!==i?function(e,t,n){return e.getText(n)===t.getText(n)}(e,i,t):(i=e,!0)})&&r>=n}(r,n,t))return u.forEachChild(r,i);var s=r.expression,a=r.thenStatement,c=r.elseStatement;e.addFailureAtNode(s,d.FAILURE_STRING),u.forEachChild(s,i),u.forEachChild(a,i),void 0!==c&&u.forEachChild(c,i)})}function p(e){switch(e.kind){case u.SyntaxKind.PropertyAccessExpression:return p(e.expression);case u.SyntaxKind.PrefixUnaryExpression:switch(e.operator){case u.SyntaxKind.PlusPlusToken:case u.SyntaxKind.MinusMinusToken:return!1;default:return p(e.operand)}case u.SyntaxKind.Identifier:case u.SyntaxKind.NumericLiteral:case u.SyntaxKind.StringLiteral:case u.SyntaxKind.ThisKeyword:case u.SyntaxKind.NoSubstitutionTemplateLiteral:case u.SyntaxKind.TrueKeyword:case u.SyntaxKind.FalseKeyword:case u.SyntaxKind.NullKeyword:return!0;default:return!1}}t.Rule=d}});
//# sourceMappingURL=38.9ff85d3e.chunk.js.map