  <template>
    <div>
      <h4>El boton de lector llega a la View</h4>
      <p>ID del lector: {{ lectorId }}</p>
      <Lector /> 
    
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import Lector from '../components/Lector.vue';

  
  // Obtener los parámetros de la ruta
  const route = useRoute();
  const lectorId = ref(route.params.id);
  </script>
  
  <style scoped>
  /* Estilos para LectorView */

 
  </style>