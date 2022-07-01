import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import DestinationsCategoryView from "@/views/destinations/CategoryView.vue";
import DestinationsDetailView from "@/views/destinations/DetailView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },{
    path: "/about",
    name: "About",
    component: AboutView
  },{
    path: "/destinations",
    name: "DestinationsCategory",
    component: DestinationsCategoryView
  },{
    path: "/destinations/:slug",
    name: "DestinationsDetail",
    component: DestinationsDetailView
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
