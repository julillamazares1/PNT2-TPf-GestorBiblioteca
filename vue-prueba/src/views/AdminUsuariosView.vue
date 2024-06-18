<template>
  <div>
      <h1>Lista de usuarios</h1>
      <button @click="mostrarFormularioAgregar = true">Agregar Usuario</button>
      <ul>
          <li v-for="usuario in usuarios" :key="usuario.id">
              {{ usuario.id }} - {{ usuario.nombre }} - {{ usuario.email }} - {{ usuario.contrasena }}
              <button @click="editarUsuario(usuario)">Editar</button>
              <button @click="borrarUsuario(usuario.id)">Borrar</button>
          </li>
      </ul>

      <div v-if="mostrarFormularioAgregar" class="modal">
          <div class="modal-content">
              <span class="close" @click="mostrarFormularioAgregar = false">&times;</span>
              <h2>Agregar Usuario</h2>
              <form @submit.prevent="agregarUsuario">
                  <label>Nombre:</label>
                  <input v-model="nuevoUsuario.nombre" required />
                  <label>Email:</label>
                  <input v-model="nuevoUsuario.email" required />
                  <label>Contraseña:</label>
                  <input v-model="nuevoUsuario.contrasena" required />
                  <button type="submit">Guardar</button>
                  <button type="button" @click="mostrarFormularioAgregar = false">Cancelar</button>
              </form>
          </div>
      </div>

      <div v-if="mostrarFormularioEditar" class="modal">
          <div class="modal-content">
              <span class="close" @click="mostrarFormularioEditar = false">&times;</span>
              <h2>Editar Usuario</h2>
              <form @submit.prevent="actualizarUsuario">
                  <label>Nombre:</label>
                  <input v-model="usuarioActual.nombre" required />
                  <label>Email:</label>
                  <input v-model="usuarioActual.email" required />
                  <label>Contraseña:</label>
                  <input v-model="usuarioActual.contrasena" required />
                  <button type="submit">Guardar</button>
                  <button type="button" @click="mostrarFormularioEditar = false">Cancelar</button>
              </form>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { api } from '../api.js';

const usuariosUrl = 'https://6664cbbc932baf9032ac1b56.mockapi.io/lectores';

const usuarios = ref([]);
const mostrarFormularioAgregar = ref(false);
const mostrarFormularioEditar = ref(false);
const nuevoUsuario = ref({ nombre: '', email: '', contrasena: '' });
const usuarioActual = ref({ id: '', nombre: '', email: '', contrasena: '' });

const obtenerUsuarios = async () => {
  try {
    usuarios.value = await api.obtenerDatos(usuariosUrl);
  } catch (error) {
    console.error('Error al obtener usuarios:', error.message);
  }
};

const agregarUsuario = async () => {
  try {
    const usuarioAgregado = await api.agregarDato(usuariosUrl, nuevoUsuario.value);
    usuarios.value.push(usuarioAgregado);
    mostrarFormularioAgregar.value = false;
    nuevoUsuario.value = { nombre: '', email: '', contrasena: '' };
  } catch (error) {
    console.error('Error al agregar usuario:', error.message);
  }
};

const editarUsuario = (usuario) => {
  usuarioActual.value = { ...usuario };
  mostrarFormularioEditar.value = true;
};

const actualizarUsuario = async () => {
  try {
    const usuarioActualizado = await api.actualizarDato(usuariosUrl, usuarioActual.value);
    const indice = usuarios.value.findIndex(user => user.id === usuarioActualizado.id);
    usuarios.value[indice] = usuarioActualizado;
    mostrarFormularioEditar.value = false;
    usuarioActual.value = { id: '', nombre: '', email: '', contrasena: '' };
  } catch (error) {
    console.error('Error al actualizar usuario:', error.message);
  }
};

const borrarUsuario = async (id) => {
  try {
    await api.borrarDato(usuariosUrl, id);
    usuarios.value = usuarios.value.filter(usuario => usuario.id !== id);
  } catch (error) {
    console.error('Error al borrar usuario:', error.message);
  }
};

onMounted(obtenerUsuarios);
</script>

<style scoped>
button {
    margin-left: 10px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 10px;
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
    border-radius: 10px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
</style>
