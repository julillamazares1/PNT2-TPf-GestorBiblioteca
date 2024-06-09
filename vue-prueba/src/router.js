import { createRouter, createWebHistory } from "vue-router";
import Lector from "./componentes/Lector.vue";
import LectorView from "./views/LectorView.vue";

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

const routes = [
  {
    path: "/lector",
    name: "lector",
    component: LectorView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
