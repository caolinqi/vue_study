import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue/dist/iconify.js";
const app = createApp(App);
app.mount("#app");
app.use(Icon);
