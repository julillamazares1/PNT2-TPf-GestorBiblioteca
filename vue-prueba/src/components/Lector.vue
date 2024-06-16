<template>
    <section id="registro-lectores" class="src-componentes-lector">
        <div class="login">
            <h3>¿Ya tenes una cuenta? Ingresa con tus datos, o crea una nueva</h3>
            <div class="botones-cuenta">
                <a class="btn btn-success" v-on:click="$event => isUser = !isUser">Ingresar a mi cuenta</a>
                <a class="btn btn-success" v-on:click="$event => isNew = !isNew">Crear cuenta nueva</a>
            </div>
            <div class="formularios">
                <form class="formulario-ingreso" v-if="isUser">
                    <label for="name">Nombre:</label>
                    <input type="nombre" id="nombre" name="nombre" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="contrasena">Contraseña:</label>
                    <input type="contrasena" id="contrasena" name="contrasena" required>
                    <button class="btn btn-success" type="submit">Ingresar</button>
                </form>
                <form class="formulario-registro" v-if="isNew">
                    <label for="name">Nombre:</label>
                    <input type="nombre" id="nombre" name="nombre" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="contrasena">Contraseña:</label>
                    <input type="contrasena" id="contrasena" name="contrasena" required>
                    <button class="btn btn-success" type="submit">Crear cuenta</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

export default {
    name: 'src-componentes-lector',
    mounted() {

    },
    data() {
        return {
            isUser: false,
            isNew: false
        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped></style>