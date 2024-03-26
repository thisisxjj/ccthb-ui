// .stylelintrc.js
module.exports = {
  // 继承的预设，这些预设包含了规则集插件
  extends: [
    // 基本 scss 规则
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    'max-line-length': [80, { ignore: ['comments'] }],

    'selector-class-pattern': null,

    'custom-property-pattern': null,
  },
};
