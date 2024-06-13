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
</template>



  
  <script lang="js">
  export default  {
      name: 'src-componentes-navbar',
      props: [],
      mounted () {
  
      },
      data () {
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
  /* Estilos para la barra de navegación */
  </style>