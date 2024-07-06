<template>
  <div class="layout-container">
    <header class="header-flex">
      <img  class="imagen"alt="Cabecera Biblioteca" src="/images/cabecera.jpeg">
    </header>
    <div class="container-fluid mt-3">
      <div class="full-width-jumbotron">
        <h1>Bienvenidos a Biblioteca ORT</h1>
        <br>
        <Navbar />
      </div>
    </div>
    <br />
    <router-view></router-view>
  </div>
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

.header-flex{
  flex: 0 0 auto; /* Prevents header from shrinking with content */
  display: flex; 
  justify-content: center; 
  align-items: center; 
}
.layout-container {
  display: flex; 
  flex-direction: column; 
  min-height: 100vh; 
  width: 100%;
  margin: 0; 
  padding: 0; 
}
.header-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

.imagen {
  width: 100%;
  height: auto;
}

.full-width-jumbotron {
  width: 100%;
  background-color: rgb(10, 104, 71);
  flex: 1 1 auto; 
  display: flex; 
  justify-content: center; 
}
</style>