import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  }, {
    path: "/about",
    name: "about",
    component: AboutView
  }, {
    path: "/destinations",
    name: "destinations.category",
    component: () => import('@/views/destinations/CategoryView.vue')
  }, {
    path: "/destinations/:slug",
    name: "destinations.detail",
    component: () => import('@/views/destinations/DetailView.vue'),
    children: [
      {
        path: "experience/:experienceSlug",
        name: "experiences.detail",
        component: () => import('@/views/experiences/DetailView.vue')
      }
    ]
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active'
});
