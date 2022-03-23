import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PostView from "../views/PostView.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "PostView",
    path: "/post/:id",
    component: PostView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
