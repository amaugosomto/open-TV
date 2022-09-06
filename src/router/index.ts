import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/show/:id",
      name: "Show",
      component: () => import("../views/ShowPage.vue"),
      props: true,
    },
  ],
});

export default router;
