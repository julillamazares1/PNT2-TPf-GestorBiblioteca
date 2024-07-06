html
Copiar código
<template>
  <div>
    <h1>Lista de Usuarios</h1>
    <button @click="mostrarFormularioAgregar = true" class="btn btn-primary">Agregar Usuario</button>
    <div class="jumbotron">
      <table class="table mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Contraseña</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.email }}</td>
            <td>********</td> <!-- Se muestra un texto genérico para la contraseña por seguridad -->
            <td>
              <button @click="editarUsuario(usuario)" class="btn btn-warning btn-sm">Editar</button>
              <button @click="borrarUsuario(usuario.id)" class="btn btn-danger btn-sm">Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

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
          <button type="submit" class="btn btn-primary">Guardar</button>
          <button type="button" @click="mostrarFormularioAgregar = false" class="btn btn-secondary">Cancelar</button>
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
          <button type="submit" class="btn btn-primary">Guardar</button>
          <button type="button" @click="mostrarFormularioEditar = false" class="btn btn-secondary">Cancelar</button>
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
  background-color:rgb(239, 156, 102);
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

.jumbotron {
  background-color: rgb(122, 186, 120);
  color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 1000px;
  margin: auto; /* Ajusta el margen para centrar */
  margin-top: 20px; /* Ajusta el margen superior según sea necesario */
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
}
</style>