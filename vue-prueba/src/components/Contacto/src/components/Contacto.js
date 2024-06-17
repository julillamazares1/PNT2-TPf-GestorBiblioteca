
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData()
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: null,
        apellido: null,
        edad: null,
        email: null,
        password: null
      }
    },
    validarBotonEnvio() {
      return (
        !this.formData.nombre || 
        this.formData.nombre.length < 3 || 
        this.formData.nombre.length > 10 
      ) || 
      !this.formData.apellido || 
      !this.formData.email || 
      !this.formData.consulta
    },
    enviar() {
      //console.log('enviar form')
      // SPREAD OPERATOR -> ... -> Clon de un objeto ó array
      // let obj = { a: 1, b: 2 } -> { ...obj } -> { ...{ a: 1, b: 2 } } -> { a: 1, b: 2 } -> Clon
      const datos = {...this.formData}
      console.log(datos)

      this.formData = this.getInicialData()
      this.formDirty = this.getInicialData()
    }
  }
}



