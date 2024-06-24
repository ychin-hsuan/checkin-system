// import { createApp } from 'vue'

// import App from './App.vue'
// createApp(App).mount('#app')

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import vue3GoogleLogin from "vue3-google-login";
import router from "./router";
const app = createApp(App);
app.use(vue3GoogleLogin, {
  clientId: "YOUR_GOOGLE_CLIENT_ID",
});
app.use(router);
createApp(App).use(router).mount("#app");

// app.mount("#app");
