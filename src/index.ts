import LText from "./components/l-text";
import LImage from "./components/l-image";
import LShape from "./components/l-shape";
import { App } from "vue";

const components = [LText, LImage, LShape];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { install, LText, LImage, LShape };

export default {
  install,
};
