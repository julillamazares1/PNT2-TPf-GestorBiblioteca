import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Contacto from './components/Contacto/index.vue';
const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: Contacto
      }, 



    { path: '/lector',
         name: 'lector', 
         component: () => import('./views/LectorView.vue') 
    },
    
    { path: '/libro',
         name: 'Libros', 
         component: () => import('./views/LibroView.vue') 
    },
     

  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;