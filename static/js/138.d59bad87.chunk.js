webpackJsonp([138],{2020:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(1),a=n(842),s=n(55),o=n(844),c=n(1116),p=n(56),l="check-space",m="check-lowercase",h="check-uppercase",u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.apply=function(e){return this.applyWithFunction(e,f,(n=this.ruleArguments,i.__assign({case:-1!==n.indexOf(m)?1:-1!==n.indexOf(h)?2:0,failureSuffix:"",space:-1!==n.indexOf(l)},function(e){if("object"===typeof e){var n=e["ignore-pattern"];if(void 0!==n)return{exceptions:new RegExp("^\\s*("+n+")"),failureSuffix:t.IGNORE_PATTERN_FAILURE_FACTORY(n)};var r=e["ignore-words"];return void 0!==r&&0!==r.length?{exceptions:new RegExp("^\\s*(?:"+r.map(function(e){return p.escapeRegExp(e.trim())}).join("|")+")\\b"),failureSuffix:t.IGNORE_WORDS_FAILURE_FACTORY(r)}:void 0}}(n[n.length-1]))));var n},t.metadata={ruleName:"comment-format",description:"Enforces formatting rules for single-line comments.",rationale:"Helps maintain a consistent, readable style in your codebase.",optionsDescription:c.Utils.dedent(r||(r=i.__makeTemplateObject(['\n            Three arguments may be optionally provided:\n\n            * `"check-space"` requires that all single-line comments must begin with a space, as in `// comment`\n                * note that for comments starting with multiple slashes, e.g. `///`, leading slashes are ignored\n                * TypeScript reference comments are ignored completely\n            * `"check-lowercase"` requires that the first non-whitespace character of a comment must be lowercase, if applicable.\n            * `"check-uppercase"` requires that the first non-whitespace character of a comment must be uppercase, if applicable.\n\n            Exceptions to `"check-lowercase"` or `"check-uppercase"` can be managed with object that may be passed as last argument.\n\n            One of two options can be provided in this object:\n\n                * `"ignore-words"`  - array of strings - words that will be ignored at the beginning of the comment.\n                * `"ignore-pattern"` - string - RegExp pattern that will be ignored at the beginning of the comment.\n            '],['\n            Three arguments may be optionally provided:\n\n            * \\`"check-space"\\` requires that all single-line comments must begin with a space, as in \\`// comment\\`\n                * note that for comments starting with multiple slashes, e.g. \\`///\\`, leading slashes are ignored\n                * TypeScript reference comments are ignored completely\n            * \\`"check-lowercase"\\` requires that the first non-whitespace character of a comment must be lowercase, if applicable.\n            * \\`"check-uppercase"\\` requires that the first non-whitespace character of a comment must be uppercase, if applicable.\n\n            Exceptions to \\`"check-lowercase"\\` or \\`"check-uppercase"\\` can be managed with object that may be passed as last argument.\n\n            One of two options can be provided in this object:\n\n                * \\`"ignore-words"\\`  - array of strings - words that will be ignored at the beginning of the comment.\n                * \\`"ignore-pattern"\\` - string - RegExp pattern that will be ignored at the beginning of the comment.\n            ']))),options:{type:"array",items:{anyOf:[{type:"string",enum:["check-space","check-lowercase","check-uppercase"]},{type:"object",properties:{"ignore-words":{type:"array",items:{type:"string"}},"ignore-pattern":{type:"string"}},minProperties:1,maxProperties:1}]},minLength:1,maxLength:4},optionExamples:[[!0,"check-space","check-uppercase"],[!0,"check-lowercase",{"ignore-words":["TODO","HACK"]}],[!0,"check-lowercase",{"ignore-pattern":"STD\\w{2,3}\\b"}]],type:"style",typescriptOnly:!1,hasFix:!0},t.LOWERCASE_FAILURE="comment must start with lowercase letter",t.UPPERCASE_FAILURE="comment must start with uppercase letter",t.LEADING_SPACE_FAILURE="comment must start with a space",t.IGNORE_WORDS_FAILURE_FACTORY=function(e){return" or the word(s): "+e.join(", ")},t.IGNORE_PATTERN_FAILURE_FACTORY=function(e){return' or its start must match the regex pattern "'+e+'"'},t}(c.Rules.AbstractRule);function f(e){a.forEachComment(e.sourceFile,function(t,n){var r=n.kind,i=n.pos,a=n.end,l=i+2;if(!(r!==s.SyntaxKind.SingleLineCommentTrivia||l===a||"/"===t[l]&&e.sourceFile.referencedFiles.some(function(e){return e.pos>=i&&e.end<=a}))){for(;"/"===t[l];)++l;if(l!==a){var m=t.slice(l,a);if(!/^(?:#(?:end)?region|noinspection\s)/.test(m)&&(e.options.space&&" "!==m[0]&&e.addFailure(l,a,u.LEADING_SPACE_FAILURE,[c.Replacement.appendText(l," ")]),!(0===e.options.case||void 0!==e.options.exceptions&&e.options.exceptions.test(m)||o.ENABLE_DISABLE_REGEX.test(m)))){var h=m.search(/\S/);-1!==h&&(1===e.options.case?p.isLowerCase(m[h])||e.addFailure(l,a,u.LOWERCASE_FAILURE+e.options.failureSuffix):p.isUpperCase(m[h])||e.addFailure(l,a,u.UPPERCASE_FAILURE+e.options.failureSuffix))}}}})}t.Rule=u}});
//# sourceMappingURL=138.d59bad87.chunk.js.map