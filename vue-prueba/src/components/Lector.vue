<template>
    <section id="registro-lectores" class="src-componentes-lector">
      <div class="login">
        <h3>¿Ya tienes una cuenta? Ingresa con tus datos, o crea una nueva</h3>
        <div class="botones-cuenta">
          <a class="btn btn-success" @click="showLoginForm">Ingresar a mi cuenta</a>
          <a class="btn btn-success" @click="showRegisterForm">Crear cuenta nueva</a>
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
  
  export default {
    name: 'src-componentes-lector',
    setup() {
      const isUser = ref(false);
      const isNew = ref(false);
  
      const showLoginForm = () => {
        isUser.value = true;
        isNew.value = false;
      };
  
      const showRegisterForm = () => {
        isUser.value = false;
        isNew.value = true;
      };
  
      return {
        isUser,
        isNew,
        showLoginForm,
        showRegisterForm
      };
    }
  };
  </script>

<style scoped>
.btn-success{
    margin: 10px;
}</style>
  