<template lang="html">

  <section class="vue-prueba-src-componentes-libro">
    <h1>Formulario de alta de libros</h1>
  </section>

  <div v-if="posts.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Autor</th>
          <th>Descripción</th>
        </tr>
        <tr v-for="(post, index) in posts" :key="index">
          <td>{{ post.userId }}</td>
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </table>    
    </div>
</template>

<script lang="js">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();


/* 
  export default  {
    name: 'vue-prueba-src-componentes-libro',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    } */



</script>

<style scoped lang="css">
  .vue-prueba-src-componentes-libro {

  }
</style>
