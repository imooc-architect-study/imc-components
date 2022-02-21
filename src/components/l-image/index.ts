import { App } from "vue";
import LImage from "./l-image.vue";

LImage.install = (app: App) => {
  app.component(LImage.name, LImage);
};

export default LImage;
