webpackJsonp([75],{2084:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(842),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.FAILURE_STRING=function(e){return'No need to reference "'+e+'", since it is imported.'},t.prototype.apply=function(e){return this.applyWithFunction(e,u)},t.metadata={ruleName:"no-reference-import",description:'Don\'t `<reference types="foo" />` if you import `foo` anyway.',optionsDescription:"Not configurable.",options:null,type:"style",typescriptOnly:!0},t}(n(1116).Rules.AbstractRule);function u(e){if(0!==e.sourceFile.typeReferenceDirectives.length)for(var t=new Set(i.findImports(e.sourceFile,3).map(function(e){return e.text})),n=0,r=e.sourceFile.typeReferenceDirectives;n<r.length;n++){var u=r[n];t.has(u.fileName)&&e.addFailure(u.pos,u.end,o.FAILURE_STRING(u.fileName))}}t.Rule=o}});
//# sourceMappingURL=75.16bbaf21.chunk.js.map