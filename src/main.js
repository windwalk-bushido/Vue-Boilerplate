import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";
import router from "./router/router";

import "./assets/index.css";
import "./assets/global.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
library.add(faMoon, faSun);

createApp(App).use(createPinia()).use(router).component("Icon", FontAwesomeIcon).mount("#app");
