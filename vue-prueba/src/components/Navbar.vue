<template>
  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-lg .bg-success-subtle">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">

            <router-link class="nav-link" to="/">
              Home </router-link>
          </li>
          <li class="nav-item">

            <router-link class="nav-link" to="/lector">
              Lector</router-link>
          </li>
          <li class="nav-item">

            <router-link class="nav-link" to="/libro">
              Libros</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto">
              Contacto</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">
              Admin</router-link>
          </li>

        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="js">
export default {
  name: 'src-componentes-navbar',
  props: [],
  mounted() {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped>
.navbar {
  min-width: 100px;
  background-color: rgb(191, 234, 124);
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  align-items: center; 
}

.nav-item {
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: rgb(65, 109, 25);
  padding: 10px 15px;
  border-radius: 5px;
  background-color: rgb(191, 234, 124);
  transition: background-color 0.3s ease;
  font-size: 20px;
}

.nav-link:hover {
  background-color: rgba(224, 16, 16, 0.1);
}

</style>
