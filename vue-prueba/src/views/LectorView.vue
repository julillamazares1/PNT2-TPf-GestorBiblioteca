<template>
    <Lector />
    <h4>Hola Que tal</h4>
  </template>
  
  <script setup>
  import Lector from '../componentes/Lector.vue'; // Ruta corregida
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  // Obtener los parámetros de la ruta
  const route = useRoute();
  const postId = ref(route.params.id);
  </script>
  
  <style>
  /* Estilos para LectorView */
  </style>
  