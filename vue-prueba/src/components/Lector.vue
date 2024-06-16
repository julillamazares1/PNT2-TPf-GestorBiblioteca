<template>
<section id="registro-lectores" class="src-componentes-lector">   
    <div class="login">
        <h3>¿Ya tenes una cuenta? Ingresa con tus datos, o crea una nueva</h3>
        <div class = "botones-cuenta">
            <a class="boton-ingresar" v-on:click="$event => isUser = !isUser"> Ingresar a mi cuenta</a>
            <a class="boton-registrar" v-on:click="$event => isNew = !isNew"> Crear cuenta nueva</a>
        </div>
        <div class="formularios">
            <form class="formulario-ingreso" v-if="isUser">
                    <label for="name">Nombre:</label>
                    <input type="nombre" id="nombre" name="nombre" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="contrasena">Contraseña:</label>
                    <input type="contrasena" id="contrasena" name="contrasena" required>
                    <button type="submit">Ingresar</button>
            </form>
            <form class="formulario-registro" v-if="isNew">
                <label for="name">Nombre:</label>
                <input type="nombre" id="nombre" name="nombre" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="contrasena">Contraseña:</label>
                    <input type="contrasena" id="contrasena" name="contrasena" required>
                    <button type="submit">Crear cuenta</button>
            </form>
        </div>
            
    </div>               
</section>
</template>

<script lang="js">

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

 export default  {
    name: 'src-componentes-lector',
    mounted () {

    },
    data () {
      return {
        isUser:false,
        isNew: false

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang ="css">
 /* por algun motivo no levanta las variables definidas aca  */
:root {
    --color-botones:#1b7c83;
    --color-font-botones:#ffffff;
}

h3{
    margin-bottom: 2.5rem;
}
a{
    text-decoration: none;
    color:black;
}

.boton-ingresar , .boton-registrar {
    font-size: 1.5rem;
    color:#ffffff;
    font-weight: lighter;
    border: solid 2px #115156;
    border-radius: 5px;
    padding:0.7rem;
    background-color:#1b7c83;

}
.botones-cuenta{
    display: flex;
    justify-content: space-evenly;
    
}
.formularios{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
}
.formulario-ingreso , .formulario-registro{
    display: flex;
    flex-direction: column;
    margin-top:2rem;
}
form label{
    font-size:1.2rem;
}
form input{
    border:solid 1px;
    border-radius: 5px;
    padding:0.5rem;
}
form button {
    font-size: 1.2rem;
    color:#ffffff;
    font-weight: lighter;
    background-color: #1b7c83;
    margin-top: 0.5rem;
    border: solid 2px #115156;
    border-radius: 5px;
    padding:0.7rem;
  
}


</style>
