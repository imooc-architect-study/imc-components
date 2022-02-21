import baseConfig, { file } from "./rollup.config";

export default {
  ...baseConfig,
  output: {
    name: "LegoComponents",
    file: file("umd"),
    format: "umd",
    exports: "named",
    globals: {
      vue: "Vue",
      "lodash-es": "_",
    },
  },
};
