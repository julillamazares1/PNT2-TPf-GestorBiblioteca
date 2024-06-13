<script setup>
</script>

<template>
  <section class="src-componentes-navbar">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="nav-links">
        <ul class="navbar-nav">
          <li class="nav-item">

            <router-link to="/">
              Home </router-link>
          </li>
          <li class="nav-item">

            <router-link to="/lector">
              | Lector</router-link>
          </li>
          <li class="nav-item">

            <router-link to="/libro">
              | Libros</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/contacto">
              | Contacto</router-link>
          </li>
        </ul>
      </div>

    </nav>
  </section>


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
