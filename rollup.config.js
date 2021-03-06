// import postcss from "rollup-plugin-postcss";
// import resolve from "rollup-plugin-node-resolve";
// import { terser } from "rollup-plugin-terser";
// import serve from "rollup-plugin-serve";
// import livereload from "rollup-plugin-livereload";
// import copy from "rollup-plugin-copy";
// import AtImport from "postcss-import";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

let plugins = [
  typescript({
    target: "es6"
  }),
  resolve()
];

// let plugins = [
//   typescript({
//     target: "es6"
//   }),
//   resolve(),
//   postcss({
//     plugins: [AtImport()]
//   }),
//   copy({
//     "index.html": "dist/index.html",
//     "i18n.json": "dist/i18n.json"
//   })
// ];

// if (process.env.BUILD === "prod") {
//   plugins.splice(1, 0, terser());
// }

// if (process.env.BUILD === "dev") {
//   plugins = plugins.concat([
//     serve("dist"),
//     livereload({
//       watch: "dist"
//     })
//   ]);
// }

module.exports = [
  {
    input: "src/index.ts",
    output: {
      file: "dist/lightest-element.js",
      format: "esm"
    },
    plugins: plugins
  }
];
