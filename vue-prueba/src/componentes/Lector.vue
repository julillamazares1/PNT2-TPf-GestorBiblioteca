<template>
<section id="registro-lectores" class="src-componentes-lector">   
    <div class="login">
        <h2>Login de Lectores</h2>
            <form>
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required>
                    <label for="apellido">Apellido:</label>
                    <input type="text" id="apellido" name="apellido" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <button type="submit">Ingresar</button>
            </form>
    </div>               
</section>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

/* export default  {
    name: 'src-componentes-lector',
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
} */
</script>

<style scoped lang ="css">
.src-componentes-lector{
    background-color: aliceblue;

}
</style>
