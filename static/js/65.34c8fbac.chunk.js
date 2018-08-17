webpackJsonp([65],{2096:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t,s=o(1),a=o(842),i=o(55),l=o(1116),r=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return s.__extends(e,n),e.prototype.applyWithProgram=function(n,e){return this.applyWithFunction(n,c,{ignoreStatic:-1!==this.ruleArguments.indexOf("ignore-static")},e.getTypeChecker())},e.metadata={ruleName:"no-unbound-method",description:"Warns when a method is used outside of a method call.",optionsDescription:'You may optionally pass "ignore-static" to ignore static methods.',options:{type:"string",enum:["ignore-static"]},optionExamples:[!0,[!0,"ignore-static"]],rationale:l.Utils.dedent(t||(t=s.__makeTemplateObject(["\n            Class functions don't preserve the class scope when passed as standalone variables.\n            For example, this code will log the global scope (`window`/`global`), not the class instance:\n\n            ```\n            class MyClass {\n                public log(): void {\n                    console.log(this);\n                }\n            }\n\n            const instance = new MyClass();\n            const log = instance.log;\n\n            log();\n            ```\n\n            You need to either use an arrow lambda (`() => {...}`) or call the function with the correct scope.\n\n            ```\n            class MyClass {\n                public logArrowBound = (): void => {\n                    console.log(bound);\n                };\n\n                public logManualBind(): void {\n                    console.log(this);\n                }\n            }\n\n            const instance = new MyClass();\n            const logArrowBound = instance.logArrowBound;\n            const logManualBind = instance.logManualBind.bind(instance);\n\n            logArrowBound();\n            logManualBind();\n            ```\n        "],["\n            Class functions don't preserve the class scope when passed as standalone variables.\n            For example, this code will log the global scope (\\`window\\`/\\`global\\`), not the class instance:\n\n            \\`\\`\\`\n            class MyClass {\n                public log(): void {\n                    console.log(this);\n                }\n            }\n\n            const instance = new MyClass();\n            const log = instance.log;\n\n            log();\n            \\`\\`\\`\n\n            You need to either use an arrow lambda (\\`() => {...}\\`) or call the function with the correct scope.\n\n            \\`\\`\\`\n            class MyClass {\n                public logArrowBound = (): void => {\n                    console.log(bound);\n                };\n\n                public logManualBind(): void {\n                    console.log(this);\n                }\n            }\n\n            const instance = new MyClass();\n            const logArrowBound = instance.logArrowBound;\n            const logManualBind = instance.logManualBind.bind(instance);\n\n            logArrowBound();\n            logManualBind();\n            \\`\\`\\`\n        "]))),type:"functionality",typescriptOnly:!0,requiresTypeInfo:!0},e.FAILURE_STRING="Avoid referencing unbound methods which may cause unintentional scoping of 'this'.",e}(l.Rules.TypedRule);function c(n,e){return i.forEachChild(n.sourceFile,function o(t){if(a.isPropertyAccessExpression(t)&&!function n(e){var o=e.parent;switch(o.kind){case i.SyntaxKind.CallExpression:return o.expression===e;case i.SyntaxKind.TaggedTemplateExpression:return o.tag===e;case i.SyntaxKind.PropertyAccessExpression:case i.SyntaxKind.ElementAccessExpression:return!0;case i.SyntaxKind.BinaryExpression:return o.operatorToken.kind!==i.SyntaxKind.BarBarToken;case i.SyntaxKind.NonNullExpression:case i.SyntaxKind.AsExpression:case i.SyntaxKind.TypeAssertionExpression:case i.SyntaxKind.ParenthesizedExpression:return n(o);case i.SyntaxKind.ConditionalExpression:return o.condition===e;case i.SyntaxKind.IfStatement:case i.SyntaxKind.WhileStatement:case i.SyntaxKind.DoStatement:case i.SyntaxKind.ForStatement:case i.SyntaxKind.PrefixUnaryExpression:return!0;default:return!1}}(t)){var s=e.getSymbolAtLocation(t),l=void 0===s?void 0:s.valueDeclaration;void 0!==l&&function(n,e){switch(n.kind){case i.SyntaxKind.MethodDeclaration:case i.SyntaxKind.MethodSignature:return!(e&&a.hasModifier(n.modifiers,i.SyntaxKind.StaticKeyword));default:return!1}}(l,n.options.ignoreStatic)&&n.addFailureAtNode(t,r.FAILURE_STRING)}return i.forEachChild(t,o)})}e.Rule=r}});
//# sourceMappingURL=65.34c8fbac.chunk.js.map