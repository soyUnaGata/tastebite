import { createApp } from "vue";
import VueMobileDetection from "vue-mobile-detection";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/main.css";
import "@/assets/css/global.css";
import "@/assets/css/variables.css";

router.$store = store;

createApp(App).use(VueMobileDetection).use(store).use(router).mount("#app");
