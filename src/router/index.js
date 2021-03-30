import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignUpPage from "../views/SignUpPage.vue";
import AlbumsPage from "../views/AlbumsPage.vue";
import AlbumsDetailPage from "../views/AlbumsDetailPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "SignUpPage",
    component: SignUpPage,
  },
  {
    // adding the `:id` makes it dynamic
    path: "/album/:id",
    name: "AlbumsDetailPage",
    component: AlbumsDetailPage,
    meta: { requiresAuth: true }, // prevents a user from seeing the page unless they're signed in
  },
  {
    path: "/albums/",
    name: "AlbumsPage",
    component: AlbumsPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
