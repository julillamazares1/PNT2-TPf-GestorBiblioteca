<template>
  <div>
    <h2>Listado de libros</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="libro in libros" :key="libro.id">
        <div>
          <strong>{{ libro.nombre }}</strong> por {{ libro.autor }} - {{ libro.descripcion }}
        </div>
      </li>
    </ul>
  </div>
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
/* Estilos para LectorView */
</style>
