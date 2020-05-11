<template>
  <div>
      <h1>Bem Vindo a Tela Cadastro Categoria</h1>
      <button @click="IrParaTelaMenuAdmin">IrParaTelaMenuAdmin</button>
      <input type="text" placeholder="Digite o nome da Categoria" id="txtCategoria">
      <input type="file">  
      <img src="" alt="" id="output">
  </div>
</template>

<script>

export default {
data:function(){
    return{

    }
}, methods:{
    IrParaTelaMenuAdmin:function(){
        this.$router.push("/ViewTelaMenuAdmin")
    }
}, 
}
</script>

<style>
</style>