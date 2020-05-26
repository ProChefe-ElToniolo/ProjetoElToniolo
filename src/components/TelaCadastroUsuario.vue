<template>
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
</template>

<script>
const axios = require("axios");
export default {
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
          nome: this.nome
        })
        .then(resp => {
          console.log(resp.data);
          this.tipo_usuario.push({
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
</script>

<style>
</style>