<template>
   <div>
        <button @click="mostrarFormularioAgregar = true">Agregar Libro</button>
        <ul class="list-group">
            <li v-for="libro in libros" :key="libro.id" class="list-group-item">
                <strong>{{ libro.id }} - {{ libro.nombre }}</strong>
                <span>{{ libro.autor }}</span>
                <span>{{ libro.descripcion }}</span>
                <div class="actions">
                    <button @click="editarLibro(libro)">Editar</button>
                    <button @click="borrarLibro(libro.id)">Borrar</button>
                </div>
            </li>
        </ul>

        <div v-if="mostrarFormularioAgregar" class="modal">
            <div class="modal-content">
                <span class="close" @click="mostrarFormularioAgregar = false">&times;</span>
                <h2>Agregar Libro</h2>
                <form @submit.prevent="agregarLibro">
                    <label>Nombre:</label>
                    <input v-model="nuevoLibro.nombre" required />
                    <label>Autor:</label>
                    <input v-model="nuevoLibro.autor" required />
                    <label>Descripción:</label>
                    <input v-model="nuevoLibro.descripcion" required />
                    <button type="submit">Guardar</button>
                    <button type="button" @click="mostrarFormularioAgregar = false">Cancelar</button>
                </form>
            </div>
        </div>

        <div v-if="mostrarFormularioEditar" class="modal">
            <div class="modal-content">
                <span class="close" @click="mostrarFormularioEditar = false">&times;</span>
                <h2>Editar Libro</h2>
                <form @submit.prevent="actualizarLibro">
                    <label>Nombre:</label>
                    <input v-model="libroActual.nombre" required />
                    <label>Autor:</label>
                    <input v-model="libroActual.autor" required />
                    <label>Descripción:</label>
                    <input v-model="libroActual.descripcion" required />
                    <button type="submit">Guardar</button>
                    <button type="button" @click="mostrarFormularioEditar = false">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { api } from '../api.js'

const librosUrl = 'https://66567c019f970b3b36c58d0e.mockapi.io/libros';

const libros = ref([]);
const mostrarFormularioAgregar = ref(false);
const mostrarFormularioEditar = ref(false);
const nuevoLibro = ref({ nombre: '', autor: '', descripcion: '' });
const libroActual = ref({ id: '', nombre: '', autor: '', descripcion: '' });

const obtenerLibros = async () => {
    libros.value = await api.obtenerDatos(librosUrl);
};

const agregarLibro = async () => {
    const libroAgregado = await api.agregarDato(librosUrl, nuevoLibro.value);
    libros.value.push(libroAgregado);
    mostrarFormularioAgregar.value = false;
    nuevoLibro.value = { nombre: '', autor: '', descripcion: '' };
};

const editarLibro = (libro) => {
    libroActual.value = { ...libro };
    mostrarFormularioEditar.value = true;
};

const actualizarLibro = async () => {
    await api.actualizarDato(librosUrl, libroActual.value);
    const indice = libros.value.findIndex(lib => lib.id === libroActual.value.id);
    if (indice !== -1) {
        libros.value[indice] = libroActual.value;
    }
    mostrarFormularioEditar.value = false;
    libroActual.value = { id: '', nombre: '', autor: '', descripcion: '' };
};

const borrarLibro = async (id) => {
    await api.borrarDato(librosUrl, id);
    libros.value = libros.value.filter(libro => libro.id !== id);
};

onMounted(obtenerLibros);

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

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.list-group {
  padding: 0;
}

.list-group-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.list-group-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.actions {
  display: flex;
  gap: 10px;
}

strong {
  font-size: 20px;
  color: #333;
}

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
