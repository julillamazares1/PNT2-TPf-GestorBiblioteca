<template>
    <div>
      <h2>Funciones CRUD</h2>
      <div>
        <router-link to="/admin/libros" class="btn btn-success">Administrar Libros</router-link>
        <router-link to="/admin/usuarios" class="btn btn-success">Administrar Usuarios</router-link>
      </div>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Admin',
  };
  </script>
  
  <style scoped>
  .btn {
    margin: 10px;
  }
  </style>
  