<template>
  <div>
    <h1>Bem Vindo a Tela Pedidos</h1>
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
body {
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>