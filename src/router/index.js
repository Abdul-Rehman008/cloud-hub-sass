// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/layout/DefaultLayout/DefaultLayout.vue";
import Home from "../pages/homePage.vue";
// import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", name: "Home", component: Home },
    //   { path: "about", name: "About", component: AboutView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
