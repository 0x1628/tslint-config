/**
 * Default rules
 */

module.exports = {
  rules: {
    // TypeScript-specific
    'adjacent-overload-signatures': true,
    'ban-types': true,
    'member-access': [true, 'no-public'],
    'member-ordering': [true, {order: [
      'static-field',
      'static-method',
      'instance-field',
      'constroctor',
      'instance-method'
    ]}],
    'no-empty-interface': true,
    'no-import-side-effect': true,
    'no-inferrable-types': true,
    'no-internal-module': true,
    'no-magic-numbers': false, // by default it will find too many false positives
    'no-namespace': false, // do use namespace
    'no-non-null-assertion': false, // make developer decide
    'no-parameter-reassignment': false, // some situation is useful
    'no-reference': true,
    'no-unnecessary-type-assertion': true,
    'no-var-requires': true,
    'only-arrow-funtions': false, // many situation need to declare a function
    'prefer-for-of': true,
    'promise-function-async': false,
    // arrow param disabled for parens disabled
    'typedef': false, // many time def can be done by type assertion
    'typedef-whitespace': true,
    'unified-signatures': true,

    // Functionality
    'await-promise': true,
    'ban-comma-operator': true,
    'ban': false, // nothing to ban now
    'curly': [true, 'ignore-same-line'],
    'forin': true,
    'import-blacklist': false, // nothing to ban now
    'label-position': true,
    'no-arg': true,
    'no-bitwise': true,
    'no-conditional-assignment': true,
    'no-console': [true, 'debug', 'info', 'log', 'time', 'timeEnd', 'trace'],
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-super': true,
    'no-duplicate-switch-case': true,
    'no-duplicate-variable': true,
    'no-dynamic-delete': true,
    'no-empty': true,
    'no-eval': true,
    'no-floating-promises': true,
    'no-for-in-array': true,
    'no-implicit-dependencies': [true, 'dev'],
    'no-inferred-empty-object-type': true,
    'no-invalid-template-strings': true,
    'no-invalid-this': true,
    'no-misused-new': true,
    'no-null-keyword': false, // use null instead of undefined
    'no-object-literal-type-assertion': false, // useful for object init
    'no-return-await': true,
    'no-shadowed-variable': true,
    'no-sparse-arrays': true,
    'no-string-literal': true,
    'no-string-throw': true,
    'no-submodule-imports': false, // submodule import is useful
    'no-switch-case-fall-through': true,
    'no-this-assignment': true,
    'no-unbound-method': true,
    'no-unnecessary-class': true,
    'no-unsafe-any': false,
    'no-unsafe-finally': true,
    'no-unused-expression': true,
    'no-use-before-declare': true,
    'no-var-keyword': true,
    'no-void-expression': false,
    'prefer-conditional-expression': false, // unnecessary strict
    'prefer-object-spread': true,
    'radix': true,
    'restrict-plus-operands': true,
    'strict-boolean-expressions': false, // for more flexible
    'strict-type-predicates': true,
    'switch-default': true,
    'triple-equals': true,
    'use-default-type-parameter': true,
    'use-isnan': true,

    // Maintainability
    'cyclomatic-complexity': true,
    'deprecation': false, // deprecated APIs are sometimes unavoidable
    'eofline': false, // no need
    'indent': [true, 'spaces'],
    'linebreak-style': [true, 'LF'],
    'max-classes-per-file': [true, 3], // recommend making one public class per file
    'max-file-line-count': [true, 500],
    'max-line-length': [true, 120],
    'no-default-export': false, // default export is useful
    'no-duplicate-imports': true,
    'no-mergeable-namespace': false, // mergeable namespace is useful
    'no-require-imports': true,
    'object-literal-sort-keys': false, // sort keys in a meaningful manner
    'prefer-const': true,
    'prefer-readonly': true,
    'trailing-comma': [true, {'multiline': 'always', 'singleline': 'never'}],

    // Style
    'align': [true, 'parameters', 'statements'],
    'array-type': [true, 'array'],
    'arrow-parens': false, // for simple functions the parens on arrow functions are not needed
    'arrow-return-shorthand': true,
    'binary-expression-operand-order': true,
    'callable-types': true,
    'class-name': true,
    'comment-format': [true, 'check-space'],
    'completed-docs': false, // can enable in future
    'encoding': true,
    'file-header': false, // can enable in future
    'file-name-casing': false, // can enable in future
    'import-spacing': false, // disable import spacing for more compact
    'interface-name': [true, 'never-prefix'],
    'interface-over-type-literal': false, // plenty reasons to use type literal
    'jsdoc-format': true,
    'match-default-export-name': true,
    'newline-before-return': false, // no need
    'newline-per-chained-call': false, // no need
    'new-parens': true,
    'no-angle-bracket-type-assertion': false, // pick either type-case format and use it consistently
    'no-boolean-literal-compare': true,
    'no-consecutive-blank-lines': true,
    'no-irregular-whitespace': true,
    'no-parameter-properties': false, // clean and useful
    'no-redundant-jsdoc': true,
    'no-reference-import': true,
    'no-trailing-whitespace': [true, 'ignore-template-strings'],
    'no-unnecessary-callback-wrapper': true,
    'no-unnecessary-initializer': true,
    'no-unnecessary-qualifier': true,
    'number-literal-format': true,
    'object-literal-key-quotes': [true, 'as-needed'],
    'object-literal-shorthand': true,
    'one-line': true,
    'one-variable-per-declaration': true,
    'ordered-imports': false, // no need
    'prefer-function-over-method': [true, 'allow-public', 'allow-protected'],
    'prefer-method-signature': true,
    'prefer-switch': false, // more of a style preference
    'prefer-template': true,
    'prefer-while': true,
    'quotemark': [true, 'single', 'jsx-double'],
    'return-undefined': false, // this actually affect the readability of the code
    'semicolon': [true, 'never'],
    'space-before-function-paren': false, // can be turn on if really your coding standard
    'switch-final-break': true,
    'type-literal-delimiter': false, // cause we don't use semicolons
    'variable-name': [true, 'ban-keywords'],
    'whitespace': [true, 'check-branch', 'check-decl', 'check-operator', 'check-separator', 'check-rest-spread', 'check-type'],
  },
}
