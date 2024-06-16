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
    <img alt="Cabecera Biblioteca" src="/images/cabecera.jpeg">

  </header>
  <div class="container mt-3">
    <div class="jumbotron jumbotron-fluid">
      <h1>Bienvenidos a Biblioteca ORT</h1>
      <br>

      <Navbar />


    </div>
  </div>

  <br />
  <router-view></router-view>
</template>


<style scoped>

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.app-container {
  width: 100%;
  height: 100%;
}


.main-container {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgb(243, 202, 82);

}


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
}

.header-flex img {
  max-width: 100%;
  height: auto;
}
.jumbotron {
  text-align: center; /* Centra el texto */
  background-color: rgb(10, 104, 71);
  padding: 20px;
  border-radius: 5px;
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
