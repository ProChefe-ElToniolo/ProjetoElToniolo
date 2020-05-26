<template>
<<<<<<< HEAD
  <div>
    <h1>Bem Vindo a Tela Cadastro Usuário</h1>
    <input type="text" placeholder="Nome" maxlength="50" v-model="nome" />
    <br />
    <button @click="cadastrarTipoUsuario">Salvar Tipo Usuário</button>
    <br />
    <select>
      <option selected disabled>Tipo Usuário</option>
    </select>
    <br />
    <button>Cadastrar Usuario</button>
    <br />
    <button @click="excluirTipoUsuario">Excluir Tipo Usuario</button>
    <br />
    <button @click="IrParaTelaMenuAdmin">IrParaTelaMenuAdmin</button>
  </div>
=======
    <div class="princ">
        <h1>Tela Cadastro do TIPO USUARIO</h1>
        <input type="text" placeholder="Nome" maxlength="50" v-model="nome">
        <br>
        <button @click="cadastrarTipoUsuario">Salvar Tipo Usuário</button>
        <br>
        <button>Excluir Tipo Usuario</button>
        <br>
        <button>IrParaTelaMenuAdmin</button>
        <h1>Tela Cadastro Usuario</h1>
        <input type="text" placeholder="Nome" v-model="nomeUsuario">
        <br>
        <input type="text" placeholder="Email" v-model="email">
        <br>
        <button @click="cadastrarUsuario">Cadastrar Usuario</button>
    </div>
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
</template>

<script>
const axios = require("axios");
export default {
<<<<<<< HEAD
  data: function() {
    return {
      nome: ""
    };
  },
  methods: {
    IrParaTelaMenuAdmin: function() {
      this.$router.push("/ViewTelaMenuAdmin");
    },
    cadastrarTipoUsuario: function() {
      axios
        .post("http://localhost:55537/api/TipoUsuario", {
=======
data:function(){
    return{
        nome: '',
        nomeUsuario: '',
        email: ''
    } 
}, methods:{
    IrParaTelaMenuAdmin:function(){
        this.$router.push("/ViewTelaMenuAdmin")
    },cadastrarTipoUsuario: function(){
      axios.post("http://localhost:55537/api/TipoUsuario",{
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
          nome: this.nome
        })
        .then(resp => {
          console.log(resp.data);
          this.tipo_usuario.push({
<<<<<<< HEAD
            nome: this.nome
          });
        });
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/TipoUsuario")
      .then(tipo_usuario => (this.tipoUsuario = tipo_usuario.data));
  }
};
=======
              nome: this.nome
          })
      })
    },cadastrarUsuario: function(){
        axios.post("http://localhost:55537/api/TipoUsuario",{
            nome: this.nome,
            email: this.email,
            senha: this.senha,
            tipo_usuario: this.tipo_usuario
        }).then(resp =>{
            console.log(resp.data)
            this.usuario.push({
                nome: this.nome,
                email: this.email,
                senha: this.senha,
                tipo_usuario: this.tipo_usuario
            })
        })
    }
}, mounted(){
    axios.get("http://localhost:55537/api/TipoUsuario").then(tipo_usuario => this.tipoUsuario = tipo_usuario.data)
    axios.get("http://localhost:55537/api/Usuario").then(usuario => this.user = usuario.data)
} 
}
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
</script>

<style>
</style>