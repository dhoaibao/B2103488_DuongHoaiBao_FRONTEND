import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

import './assets/main.css'

createApp(App).mount('#app')

import router from "./router";
createApp(App).use(router).mount("#app");
