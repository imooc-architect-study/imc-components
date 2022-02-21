import { createApp } from "vue";
import App from "./App.vue";
import LegoComponents from "./index";

const app = createApp(App);

app.use(LegoComponents);

app.mount("#app");
