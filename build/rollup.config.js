import { nodeResolve } from "@rollup/plugin-node-resolve";

import typescript from "rollup-plugin-typescript2";

import vue from "rollup-plugin-vue";

import css from "rollup-plugin-css-only";

import path from "path";

const file = (type) => `dist/index.${type}.js`;

let overrides = {
  compilerOptions: { declaration: true },
  // exclude: [
  //   "node_modules",
  //   "src/App.vue",
  //   "src/main.ts"
  // ]
};

export { file };

export default {
  input: path.resolve(__dirname, "../src/index.ts"),
  output: {
    name: "LegoComponents",
    file: file("esm"),
    format: "esm",
  },
  external: ["vue", "lodash-es"],
  plugins: [
    nodeResolve(),
    vue(),
    typescript({ tsconfigOverride: overrides }),
    css({ output: "style.css" }),
  ],
};
