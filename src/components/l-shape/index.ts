import { App } from "vue";
import LShape from "./l-shape.vue";

LShape.install = (app: App) => {
  app.component(LShape.name, LShape);
};

export default LShape;
