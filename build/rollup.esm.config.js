import baseConfig, { file } from "./rollup.config";

export default {
  ...baseConfig,
  output: {
    name: "LegoComponents",
    file: file("esm"),
    format: "esm",
  },
};
