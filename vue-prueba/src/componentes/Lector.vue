<template lang="html">
<section id="registro-lectores" class="src-componentes-lector">
    <h1>Aca deberia ir el login del lector</h1>
    
                <h2>Registro de Lectores</h2>
                <form>
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required>

                    <label for="apellido">Apellido:</label>
                    <input type="text" id="apellido" name="apellido" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" required>

                    <button type="submit">Registrar</button>
                </form>
            </section>
</template>

<script lang="js">

export default  {
    name: 'src-componentes-lector',
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang ="css">
.src-componentes-lector{
    background-color: aliceblue;

}
</style>
