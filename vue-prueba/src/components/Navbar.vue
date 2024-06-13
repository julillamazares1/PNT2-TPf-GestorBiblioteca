<template>

  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
           <RouterLink class="navbar-brand" to="/">Inicio</RouterLink>
         </li>
<!--       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> -->
 <!--      <div class="collapse navbar-collapse" id="navbarNav"> -->
          <li class="nav-item">
            <RouterLink class="navbar-brand" to="/LibroView">Libros</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="navbar-brand" to="/LectorView">Lector</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="navbar-brand" to="/Contacto">Contacto</RouterLink>
          </li>

        </ul>
<!--       </div> -->
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