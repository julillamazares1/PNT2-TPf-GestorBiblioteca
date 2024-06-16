<template>
    <div>
      <h1>Funciones CRUD</h1>
      <div>
        <router-link to="/admin/libros" class="btn btn-primary">Administrar Libros</router-link>
        <router-link to="/admin/usuarios" class="btn btn-primary">Administrar Usuarios</router-link>
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
  