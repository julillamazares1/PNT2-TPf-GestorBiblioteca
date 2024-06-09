
<template>
    <h2>Libros</h2>
      <RouterLink to="/form" class="btn btn-primary">Agregar nuevo libro</RouterLink>
      <ul class="list-group">
          <li class="list-group-item" v-for="libro in libros" :key="libro.id">
        <RouterLink :to="`/libro/${libro.id}`">
            {{ libro.nombre }} : {{ libro.autor}} - {{ libro.descripcion }} - {{ libro.id }}
        </RouterLink> | 
         <RouterLink :to="`/form/${libro.id}`" class="btn btn-secondary">Editar</RouterLink>
       </li>
      </ul>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  import { RouterLink } from 'vue-router';
  
  const libros = ref([])
  
  const fetchPosts = async () => {
    const response = await axios.get('https://66567c019f970b3b36c58d0e.mockapi.io/libros/')
    libros.value = response.data
  }
  
  onMounted(fetchPosts)
  
  </script>
  
  
  
  