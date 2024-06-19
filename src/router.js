import { createRouter, createWebHistory } from "vue-router";
import Home from "./page/Home.vue";
import Table from "./page/Table.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/table",
      component: Table,
    },
  ],
});

export default router;
