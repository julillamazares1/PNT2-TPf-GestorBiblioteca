
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
        text: null,
      }
    },
    validarBotonEnvio() {
      return (
        !this.formData.nombre || 
        this.formData.nombre.length < 3 || 
        this.formData.nombre.length > 15
      ) || 
      !this.formData.apellido || 
      !this.formData.edad || 
      !this.formData.email || 
      !this.formData.text
    },
    enviar() {
  
      const datos = {...this.formData}
      console.log(datos)

      this.formData = this.getInicialData()
      this.formDirty = this.getInicialData()
    }
  }
}





