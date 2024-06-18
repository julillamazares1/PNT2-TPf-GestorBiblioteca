
<template>
    <section id="home">
      <h3>Te invitamos a conocer nuestra colección de libros y que encuentres tus próximos favoritos.</h3>
    </section>

    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/rayuelaFrase.jpg" class="d-block w-80" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/bestiario.jpg" class="d-block w-80" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/cronicamuerte2.png" class="d-block w-90" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para la página de inicio */
  </style>