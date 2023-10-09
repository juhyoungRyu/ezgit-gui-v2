import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/viva-light/theme.css";
import "primeicons/primeicons.css";
import "./api/node-api";

createApp(App)
  .use(PrimeVue)
  .mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
