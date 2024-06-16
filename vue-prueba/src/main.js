import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'
import 'popper.js'

createApp(App)
  .use(router)
  .mount('#app')