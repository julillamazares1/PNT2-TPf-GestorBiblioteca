<template>
  <header class="header-flex">
    <img alt="Cabecera Biblioteca" src="/images/cabecera.jpeg">
  </header>
  <div class="container mt-3">
    <div class="jumbotron">
      <h1>Bienvenidos a Biblioteca ORT</h1>
      <br>
      <Navbar />
    </div>
  </div>
  <br />
  <router-view></router-view>
</template>

<script>
import './style.css';

import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  }
};
</script>
<style scoped>

  .jumbotron {
    background-color: rgb(10, 104, 71);
  }
</style>
