import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = "https://car-magazine-f0a44-default-rtdb.firebaseio.com/"


createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
