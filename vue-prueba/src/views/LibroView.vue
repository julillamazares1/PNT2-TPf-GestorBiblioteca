<template>
  <section class="src-componentes-formulario">

    <div class="jumbotron">
      <h2>Listado de libros</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="libro in libros" :key="libro.id">
          <div>
            <strong>{{ libro.nombre }}</strong> por {{ libro.autor }} - {{ libro.descripcion }}
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>



<script setup>
import { ref, onMounted } from 'vue';
import { api } from '../api.js';

const librosUrl = 'https://66567c019f970b3b36c58d0e.mockapi.io/libros';
const libros = ref([]);

const obtenerLibros = async () => {
  try {
    libros.value = await api.obtenerDatos(librosUrl);
  } catch (error) {
    console.error('Error al obtener los libros:', error);
  }
};

onMounted(obtenerLibros);
</script>



<style scoped>
.src-componentes-formulario {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  background-color: #f8f9fa;
}


.jumbotron {
  background-color: rgb(122, 186, 120);
  color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 1000px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.list-group {
  padding: 0;
}

.list-group-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.list-group-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}


strong {
  font-size: 20px;
  color: #333;
}
</style>