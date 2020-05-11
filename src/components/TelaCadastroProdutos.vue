<template>
  <div>
      <h1>Bem Vindo a Tela Cadastro Produtos</h1>
      <button @click="IrParaTelaMenuAdmin">IrParaTelaMenuAdmin</button>
  </div>
</template>

<script>
export default {
data:function(){
    return{

    }
}, methods:{
    IrParaTelaMenuAdmin:function(){
        this.$router.push('/ViewTelaMenuAdmin')
    }
}
}
</script>

<style>

</style>