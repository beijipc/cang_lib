export default {
  cjs: 'rollup', // CommonJS, ES5 for Node.js
  esm: 'rollup', // ES Module, ES6 for 浏览器和Node.js
  umd: {  // 把项目打包成一个文件， ES6 for 浏览器和Node.js
    globals: {
      react: 'React'
    },
    name: 'cang-lib',
    // minFile: true
  },
}
