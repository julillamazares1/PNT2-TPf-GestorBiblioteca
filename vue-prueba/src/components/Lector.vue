<template>
    
    <section id="registro-lectores" class="src-componentes-lector">
        <div class="login">
            <!-- <div :class="backgroundClass">  ver de indicar el fondo-->
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

// export default {
//     name: 'BackgroundImageComponent',
//     data() {
//         return
//         backgroundClass: 'background-image'
//     };
// }
// }
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

<style scoped lang="css">
.background-image {
    background-image: url('.public/images/form-usuarios-libros.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
}

.src-componentes-lector {
    background-color: green;
}
</style>
