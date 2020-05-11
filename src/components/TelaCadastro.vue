<template>
  <div>
      <h1>Bem Vindo a Tela de Cadastro</h1>
      <button id="botãoCadastro" @click="cadastrar">Cadastrar-se</button>
  </div>
</template>

<script>
export default {
    data:function(){
        return{

        }
    }, methods:{
        cadastrar:function(){
            this.$router.push("/ViewTelaPrincipal")
        }
    }
}
</script>

<style>
#botãoCadastro{
  border: 2px solid white;
  color: white;
  background-color: black;
  cursor: pointer;
}
</style>