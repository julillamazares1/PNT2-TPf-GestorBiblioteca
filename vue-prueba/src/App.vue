<script setup>
import HelloWorld from './components/HelloWorld.vue'
export default{
  name: 'App'
};
</script>

<template>
  <div>
    <router-link to="/">
         Home </router-link>
    <router-link to="/about"> 
       |Libros</router-link>

      <router-link to="/posts">
      | Lectores</router-link>

    <br/>
    <router-view ></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);

}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
