<!-- <template>
    <Lector />
    <h4>Hola Que tal</h4>
  </template>
  
  <script setup>
  import Lector from '../components/Lector.vue'; // Ruta corregida
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  // Obtener los parámetros de la ruta
  const route = useRoute();
  const postId = ref(route.params.id);
  </script>
  
  <style>
  /* Estilos para LectorView */
  </style> -->
  <template>
    <div>
      <h4>El boton de lector llega a la View</h4>
      <p>ID del lector: {{ lectorId }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  // Obtener los parámetros de la ruta
  const route = useRoute();
  const lectorId = ref(route.params.id);
  </script>
  
  <style scoped>
  /* Estilos para LectorView */
  </style>