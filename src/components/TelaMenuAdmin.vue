<template>
  <div>
      <h1>Bem Vindo a Tela Menu do Admin</h1>
      <button @click="IrParaTelaMenuPrincipal">IrParaTelaMenuPrincipal</button>
      <button @click="IrParaCadastroProdutos">IrParaCadastroProdutos</button>
      <button @click="IrParaCadastroCategoria">IrParaCadastroCategoria</button>
      <button @click="IrParaCadastroUsuario">IrParaCadastroUsuario</button>
  </div>
</template>

<script>
export default {
data:function(){
  return{

  }
}, methods:{
  IrParaTelaMenuPrincipal:function(){
    this.$router.push("/")
  }, IrParaCadastroProdutos:function(){
    this.$router.push("/ViewTelaCadastroProdutos")
  }, IrParaCadastroCategoria:function(){
    this.$router.push("/ViewTelaCadastroCategoria")
  }, IrParaCadastroUsuario:function(){
    this.$router.push("/ViewTelaCadastroUsuario")
  }
}
}
</script>

<style>

</style>