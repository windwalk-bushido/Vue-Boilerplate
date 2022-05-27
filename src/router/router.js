import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";
import PageNotFound from "../views/404View.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/:pathMatch(.*)*", component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
