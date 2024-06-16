<template>
    <div>
        <h1>Lista de usuarios</h1>
        <button @click="mostrarFormularioAgregar = true">Agregar Usuario</button>
        <ul>
            <li v-for="usuario in usuarios" :key="usuario.id">
                {{ usuario.id }} - {{ usuario.usuario }} - {{ usuario.contrasena }}
                <button @click="editarUsuario(usuario)">Editar</button>
                <button @click="borrarUsuario(usuario.id)">Borrar</button>
            </li>
        </ul>

        <div v-if="mostrarFormularioAgregar">
            <h2>Agregar Usuario</h2>
            <form @submit.prevent="agregarUsuario">
                <label>Usuario:</label>
                <input v-model="nuevoUsuario.usuario" required />
                <label>Contraseña:</label>
                <input v-model="nuevoUsuario.contrasena" required />
                <button type="submit">Guardar</button>
                <button type="button" @click="mostrarFormularioAgregar = false">Cancelar</button>
            </form>
        </div>

        <div v-if="mostrarFormularioEditar">
            <h2>Editar Usuario</h2>
            <form @submit.prevent="actualizarUsuario">
                <label>Usuario:</label>
                <input v-model="usuarioActual.usuario" required />
                <label>Contraseña:</label>
                <input v-model="usuarioActual.contrasena" required />
                <button type="submit">Guardar</button>
                <button type="button" @click="mostrarFormularioEditar = false">Cancelar</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { api } from '../api.js'

const usuariosUrl = 'https://6664cbbc932baf9032ac1b56.mockapi.io/lectores';

const usuarios = ref([]);
const mostrarFormularioAgregar = ref(false);
const mostrarFormularioEditar = ref(false);
const nuevoUsuario = ref({ usuario: '', contrasena: '' });
const usuarioActual = ref({ id: '', usuario: '', contrasena: '' });

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
    nuevoUsuario.value = { usuario: '', contrasena: '' };
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
    usuarioActual.value = { id: '', usuario: '', contrasena: '' };
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
</style>
