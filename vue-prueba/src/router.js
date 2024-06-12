import { createRouter, createWebHistory } from 'vue-router';
import Libro from './componentes/Libro.vue';
//import Home from './componentes/Home.vue';
import LectorView from './views/LectorView.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Libro',
    name: 'Libro',
    component: Libro
  },
  {
    path: '/Lector/:id',
    name: 'Lector',
    component: Lector
  },

  { path: '/posts', 
    name: 'posts', 
    component: () => import('./views/LibroView.vue') },
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;