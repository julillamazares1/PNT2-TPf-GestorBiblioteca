<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/Libro">Libros</router-link>
      <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/lector">Lector</RouterLink>
            </li>
        </ul>    
<!--      <router-link :to="{ name: 'LectorView', params: { id: 1 } }">Lector</router-link>
      <router-link to="/posts">Lectores</router-link> -->
    </nav>
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