<template>
  <section id="registro-lectores" class="src-componentes-lector">
    <div class="login">
      <h3>¿Ya tienes una cuenta? Ingresa con tus datos, o crea una nueva</h3>
      <div class="botones-cuenta">
        <button class="btn btn-success" @click="mostrarFormularioIngreso">Ingresar a mi cuenta</button>
        <button class="btn btn-success" @click="mostrarFormularioRegistro">Crear cuenta nueva</button>
      </div>
      <div class="formularios">
        <form class="formulario-ingreso" v-if="esUsuario" @submit.prevent="ingresarUsuario">
          <label for="email">Email:</label>
          <input type="email" v-model="datosIngreso.email" id="email" name="email" required>
          <label for="contrasena">Contraseña:</label>
          <input type="password" v-model="datosIngreso.contrasena" id="contrasena" name="contrasena" required>
          <button class="btn btn-success" type="submit">Ingresar</button>
        </form>
        <form class="formulario-registro" v-if="esNuevo" @submit.prevent="registrarUsuario">
          <label for="nombre">Nombre:</label>
          <input type="text" v-model="datosRegistro.nombre" id="nombre" name="nombre" required>
          <label for="email">Email:</label>
          <input type="email" v-model="datosRegistro.email" id="email" name="email" required>
          <label for="contrasena">Contraseña:</label>
          <input type="password" v-model="datosRegistro.contrasena" id="contrasena" name="contrasena" required>
          <button class="btn btn-success" type="submit">Crear cuenta</button>
        </form>
      </div>
      <div v-if="mensaje" class="mensaje">{{ mensaje }}</div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { api } from '../api.js';

const router = useRouter();

const esUsuario = ref(false);
const esNuevo = ref(false);
const mensaje = ref('');

const datosIngreso = ref({
  email: '',
  contrasena: ''
});

const datosRegistro = ref({
  nombre: '',
  email: '',
  contrasena: ''
});

const mostrarFormularioIngreso = () => {
  esUsuario.value = true;
  esNuevo.value = false;
  mensaje.value = ''; 
};

const mostrarFormularioRegistro = () => {
  esUsuario.value = false;
  esNuevo.value = true;
  mensaje.value = '';
};

const registrarUsuario = async () => {
  try {
    const usuarioAgregado = await api.agregarDato('https://6664cbbc932baf9032ac1b56.mockapi.io/lectores', datosRegistro.value);
    mensaje.value = `¡Bienvenido, ${usuarioAgregado.nombre}!`;
    
    datosRegistro.value = { nombre: '', email: '', contrasena: '' };
    
    
    router.push({ name: 'Libros' });
  } catch (error) {
    mensaje.value = 'Error al registrar usuario: ' + error.message;
  }
};

const ingresarUsuario = async () => {
  try {
    const usuarios = await api.obtenerDatos('https://6664cbbc932baf9032ac1b56.mockapi.io/lectores');
    const usuario = usuarios.find(user => user.email === datosIngreso.value.email && user.contrasena === datosIngreso.value.contrasena);
    if (usuario) {
      mensaje.value = `¡Bienvenido de nuevo, ${usuario.nombre}}!`;
      
      datosIngreso.value = { email: '', contrasena: '' };

      
      router.push({ name: 'Libros' });
    } else {
      mensaje.value = 'Correo electrónico o contraseña incorrectos.';
    }
  } catch (error) {
    mensaje.value = 'Error al ingresar: ' + error.message;
  }
};
</script>

<style scoped>
.btn-success {
    margin: 10px;
}
.mensaje {
    margin-top: 10px;
    color: green;
    font-weight: bold;
}
</style>
