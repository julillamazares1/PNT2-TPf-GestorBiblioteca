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
  background-color: #e0e0e0;
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
