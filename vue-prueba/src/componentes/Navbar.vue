<template>

  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <RouterLink class="navbar-brand" to="/">Inicio</RouterLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Home">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/LibroView">Libros</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/LectorView">Lector</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/Contacto">Contacto</RouterLink>
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