import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'jquery'


createApp(App)
  .use(router)
  .mount('#app')