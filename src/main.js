import { createApp } from "vue";
import App from "./views/App.vue";
import "./index.css";
import Vue3TouchEvents from "vue3-touch-events";

createApp(App).use(Vue3TouchEvents).mount("#app");
