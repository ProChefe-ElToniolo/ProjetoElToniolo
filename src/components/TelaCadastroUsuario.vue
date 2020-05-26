<template>
    <div class="princ">
        <h1>Tela Cadastro Usuario</h1>
        <input type="text" placeholder="Nome" v-model="nomeUsuario">
        <br>
        <input type="text" placeholder="Email" v-model="email">
        <br>

        <select v-model="idTpUser">
            <option selected disabled value="0">Selecione tpUser</option>
            <option :value="tpUser.id" v-for="tpUser in tipoUsuario" :key="tpUser.id">{{tpUser.nome}}</option>
        </select>

        <button @click="cadastrarUsuario">Cadastrar Usuario</button>
        <h1>Tela Cadastro do TIPO USUARIO</h1>
        <input type="text" placeholder="Nome" maxlength="50" v-model="nome">
        <br>
        <button @click="cadastrarTipoUsuario">Salvar Tipo Usuário</button>
        <br>
        <button>Excluir Tipo Usuario</button>
        <br>
        <button>IrParaTelaMenuAdmin</button>
    </div>
</template>

<script>
const axios = require("axios");
export default {
data:function(){
    return{
        nome: '',
        nomeUsuario: '',
        email: '',
        idTpUser: 0,
        tipoUsuario: [],
        user: []
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
            tipo_usuario: this.idTpUser
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