webpackJsonp([129],{2030:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(1),s=i(842),a=i(55),o=i(1116),_=/\r?\n/,n=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.apply=function(t){return this.applyWithWalker(new A(t,this.ruleName,void 0))},e.metadata={ruleName:"import-spacing",description:"Ensures proper spacing between import statement keywords",optionsDescription:"Not configurable.",options:null,optionExamples:[!0],type:"style",typescriptOnly:!1},e.ADD_SPACE_AFTER_IMPORT="Add space after 'import'",e.TOO_MANY_SPACES_AFTER_IMPORT="Too many spaces after 'import'",e.ADD_SPACE_AFTER_STAR="Add space after '*'",e.TOO_MANY_SPACES_AFTER_STAR="Too many spaces after '*'",e.ADD_SPACE_AFTER_FROM="Add space after 'from'",e.TOO_MANY_SPACES_AFTER_FROM="Too many spaces after 'from'",e.ADD_SPACE_BEFORE_FROM="Add space before 'from'",e.TOO_MANY_SPACES_BEFORE_FROM="Too many spaces before 'from'",e.NO_LINE_BREAKS="Line breaks are not allowed in import declaration",e}(o.Rules.AbstractRule);e.Rule=n;var A=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.walk=function(t){for(var e=0,i=t.statements;e<i.length;e++){var r=i[e];if(s.isImportDeclaration(r)){var a=r.importClause;if(void 0===a)this.checkModuleWithSideEffect(r);else{this.checkImportClause(r,a);var o=a.namedBindings;void 0!==o&&s.isNamespaceImport(o)&&this.checkNamespaceImport(o)}}}},e.prototype.checkImportClause=function(t,e){var i=t.getText(this.sourceFile),r=t.getStart(this.sourceFile),s=r+"import".length,a=t.moduleSpecifier.getStart(this.sourceFile),o=e.getEnd(),A=e.getStart(this.sourceFile);s===A?this.addFailureAt(r,"import".length,n.ADD_SPACE_AFTER_IMPORT):A>s+1&&this.addFailure(r,A,n.TOO_MANY_SPACES_AFTER_IMPORT);var d=i.substring(o-r,a-r);/from$/.test(d)?this.addFailureAt(o,d.length,n.ADD_SPACE_AFTER_FROM):/from\s{2,}$/.test(d)&&this.addFailureAt(o,d.length,n.TOO_MANY_SPACES_AFTER_FROM),/^\s{2,}from/.test(d)?this.addFailureAt(o,d.length,n.TOO_MANY_SPACES_BEFORE_FROM):/^from/.test(d)&&this.addFailureAt(o,d.length,n.ADD_SPACE_BEFORE_FROM);var l=i.substring(0,A-r),p=i.substring(o-r);_.test(l)&&this.addFailure(r,A-1,n.NO_LINE_BREAKS),_.test(p)&&this.addFailure(o,t.getEnd(),n.NO_LINE_BREAKS)},e.prototype.checkNamespaceImport=function(t){var e=t.getText(this.sourceFile);e.indexOf("*as")>-1?this.addFailureAtNode(t,n.ADD_SPACE_AFTER_STAR):/\*\s{2,}as/.test(e)?this.addFailureAtNode(t,n.TOO_MANY_SPACES_AFTER_STAR):_.test(e)&&this.addFailureAtNode(t,n.NO_LINE_BREAKS)},e.prototype.checkModuleWithSideEffect=function(t){var e=t.getStart(this.sourceFile),i=t.moduleSpecifier.getStart(this.sourceFile);e+"import".length+1<i?this.addFailure(e,i,n.TOO_MANY_SPACES_AFTER_IMPORT):e+"import".length===i&&this.addFailureAtNode(s.getChildOfKind(t,a.SyntaxKind.ImportKeyword,this.sourceFile),n.ADD_SPACE_AFTER_IMPORT),_.test(t.getText())&&this.addFailureAtNode(t,n.NO_LINE_BREAKS)},e}(o.AbstractWalker)}});
//# sourceMappingURL=129.3c28e47b.chunk.js.map