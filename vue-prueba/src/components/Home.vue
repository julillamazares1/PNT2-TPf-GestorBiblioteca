<template>
  <div id="home-container">
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
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>

#home-container {
  width: 100%;
  max-width: 1000px; 
  margin: 0 auto;
}

.carousel-inner {
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.carousel-item {
  text-align: center;
  height: 100%;

}

.carousel-item img {
  margin: 0 auto;
  display: block;
  object-fit: cover; 
}

.carousel-control-prev,
.carousel-control-next {
  background-color: rgb(171, 199, 157);
  color: rgb(65, 109, 25); 
}
</style>