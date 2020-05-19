<template>
    <div>
        <h1>Bem Vindo a Tela Cadastro Usuário</h1>
        <input type="text" placeholder="Nome" maxlength="50" v-model="nome">
        <br>
        <button @click="cadastrarTipoUsuario">Salvar Tipo Usuário</button>
        <br>
         <select>
             <option selected disabled>Tipo Usuário</option>
         </select>
         <br>
         <button>Cadastrar Usuario</button>
         <br>
         <button @click="excluirTipoUsuario" >Excluir Tipo Usuario</button>
         <br>
        <button @click="IrParaTelaMenuAdmin">IrParaTelaMenuAdmin</button>
    </div>
</template>

<script>
const axios = require('axios')
export default {
data:function(){
    return{
        nome: ''
    } 
}, methods:{
    IrParaTelaMenuAdmin:function(){
        this.$router.push("/ViewTelaMenuAdmin")
    },cadastrarTipoUsuario: function(){
      axios.post("http://localhost:55537/api/TipoUsuario",{
          nome: this.nome
      }).then(resp =>{
          console.log(resp.data)
          this.tipo_usuario.push({
              nome: this.nome
          })
      })
    }
}, mounted(){
    axios.get("http://localhost:55537/api/TipoUsuario").then(tipo_usuario => this.tipoUsuario = tipo_usuario.data)
} 
}
</script>

<style>

</style>