<template>
  <div>
    <h1>Bem Vindo a Tela Pedidos</h1>
    <button @click="IrParaTelaMenuPrincipal">IrParaTelaMenuPrincipal</button>
    <button @click="IrParaTelaCardapio">IrParaTelaCardápio</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    IrParaTelaMenuPrincipal: function() {
      this.$router.push("/");
    },
    IrParaTelaCardapio: function() {
      this.$router.push("/ViewTelaCardapio");
    }
  }
};
</script>

<style>
</style>