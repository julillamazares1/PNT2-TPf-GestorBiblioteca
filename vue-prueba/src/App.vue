<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,

  }
}
</script>
<template>
   <header class="header-flex">
    <img alt="Cabecera Biblioteca" src="/images/cabecera.webp">

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


<style scoped>
h1 {
  font-family:Verdana;
  font-weight: bold;
  font-size: 3em;
  color: rgb(0, 0, 0);
  text-shadow: 2px 2px 5px rgb(74, 73, 73);
}

.header-flex {
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100%;
  height: auto;
}

.header-flex img {
  max-width: 100%;
  height: auto;
}
.jumbotron {
  text-justify: inherit;
}

.nav-links {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.nav-link {
  color: #333;
  text-decoration: none;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
}

.nav-link:hover {
  background-color: #949494;
  color: #555;
}

.router-view {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
}
</style>
