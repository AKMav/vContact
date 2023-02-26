/* eslint-disable no-unused-vars */
import { createApp } from "vue";
import router from "./router";
import { store } from "./store";
import "./assets/styles/main.scss";
import App from "./App.vue";
import * as bootstrap from "bootstrap";

createApp(App)
.use(router)  
.use(store)  
.mount("#app");
