webpackJsonp([74],{2085:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),s=n(1116),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.apply=function(e){return this.applyWithFunction(e,l)},t.metadata={ruleName:"no-reference",description:"Disallows `/// <reference path=>` imports (use ES6-style imports instead).",rationale:s.Utils.dedent(r||(r=o.__makeTemplateObject(["\n            Using `/// <reference path=>` comments to load other files is outdated.\n            Use ES6-style imports to reference other files."],["\n            Using \\`/// <reference path=>\\` comments to load other files is outdated.\n            Use ES6-style imports to reference other files."]))),optionsDescription:"Not configurable.",options:null,optionExamples:[!0],type:"typescript",typescriptOnly:!1},t.FAILURE_STRING="<reference> is not allowed, use imports",t}(s.Rules.AbstractRule);function l(e){for(var t=0,n=e.sourceFile.referencedFiles;t<n.length;t++){var r=n[t];e.addFailure(r.pos,r.end,i.FAILURE_STRING)}}t.Rule=i}});
//# sourceMappingURL=74.c7dbf4ac.chunk.js.map