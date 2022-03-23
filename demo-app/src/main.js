import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import VueAxios from "vue-axios";
import axios from "axios";

const app = createApp(App).use(store).use(router);
app.mount("#app");
app.use(VueAxios, axios);
