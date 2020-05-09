<template>
  <div>
      <button id="teste" @click="IrParaTelaPedidos">IrParaTelaPedidos</button>
      <button id="teste1" @click="IrParaTelaMenuPrincipal">IrParaTelaMenuPrincipal</button>
  </div>
</template>

<script>
export default {
data:function(){
  return{

  }
}, methods:{
  IrParaTelaPedidos:function(){
    this.$router.push('/ViewTelaPedidos')
  }, IrParaTelaMenuPrincipal:function(){
    this.$router.push('/')
  }
}
}
</script>

<style>
#body,html{
    background-color: rgb(64, 186, 131);
}

#teste{
  border: 2px solid black;
  color: red;
  background-color: black ;
}

#teste1{
  border: 2px solid white;
  color: white;
  background-color: green;
  cursor: pointer;
}
</style>