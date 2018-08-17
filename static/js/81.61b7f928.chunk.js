webpackJsonp([81],{2078:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=e(1),o=e(55),c=e(1116),a=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return s.__extends(t,n),t.prototype.apply=function(n){return this.applyWithFunction(n,r)},t.metadata={ruleName:"no-non-null-assertion",description:"Disallows non-null assertions using the `!` postfix operator.",rationale:c.Utils.dedent(i||(i=s.__makeTemplateObject(["\n            Using non-null assertion cancels the benefits of the strict null checking mode.\n\n            Instead of assuming objects exist:\n\n            ```\n            function foo(instance: MyClass | undefined) {\n                instance!.doWork();\n            }\n            ```\n\n            Either inform the strict type system that the object must exist:\n\n            ```\n            function foo(instance: MyClass) {\n                instance.doWork();\n            }\n            ```\n\n            Or verify that the instance exists, which will inform the type checker:\n\n            ```\n            function foo(instance: MyClass | undefined) {\n                if (instance !== undefined) {\n                    instance.doWork();\n                }\n            }\n            ```\n        "],["\n            Using non-null assertion cancels the benefits of the strict null checking mode.\n\n            Instead of assuming objects exist:\n\n            \\`\\`\\`\n            function foo(instance: MyClass | undefined) {\n                instance!.doWork();\n            }\n            \\`\\`\\`\n\n            Either inform the strict type system that the object must exist:\n\n            \\`\\`\\`\n            function foo(instance: MyClass) {\n                instance.doWork();\n            }\n            \\`\\`\\`\n\n            Or verify that the instance exists, which will inform the type checker:\n\n            \\`\\`\\`\n            function foo(instance: MyClass | undefined) {\n                if (instance !== undefined) {\n                    instance.doWork();\n                }\n            }\n            \\`\\`\\`\n        "]))),optionsDescription:"Not configurable.",options:null,optionExamples:[!0],type:"typescript",typescriptOnly:!0},t.FAILURE_STRING="Forbidden non null assertion",t}(c.Rules.AbstractRule);function r(n){return o.forEachChild(n.sourceFile,function t(e){return e.kind===o.SyntaxKind.NonNullExpression&&n.addFailureAtNode(e,a.FAILURE_STRING),o.forEachChild(e,t)})}t.Rule=a}});
//# sourceMappingURL=81.61b7f928.chunk.js.map