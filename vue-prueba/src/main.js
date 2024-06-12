import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const app = createApp(App)
  .use(router)
  .mount('#app')