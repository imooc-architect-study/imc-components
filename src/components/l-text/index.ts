import { App } from "vue";
import LText from "./l-text.vue";

LText.install = (app: App) => {
  app.component(LText.name, LText);
};

export default LText;
