<template>
  <div>
    <nav>
      <ul class="list-vertical">
        <li id="slogan">El Toniolo</li>
        <img src="../imagens/logopizza.png" id="logoPizza"/>
        <li @click="IrParaTelaMenuPrincipal">IrParaTelaMenuPrincipal</li>
        <li @click="IrParaCadastroProdutos">IrParaCadastroProdutos</li>
        <li @click="IrParaCadastroCategoria">IrParaCadastroCategoria</li>
        <li @click="IrParaCadastroUsuario">IrParaCadastroUsuario</li>
        <li @click="IrParaTelaEntregador">IrParaTelaEntregador</li>
          <li @click="IrParaGerenciarPedidos">Gerenciar Pedidos</li>
      </ul>
    </nav>
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
    IrParaCadastroProdutos: function() {
      this.$router.push("/ViewTelaCadastroProdutos");
    },
    IrParaCadastroCategoria: function() {
      this.$router.push("/ViewTelaCadastroCategoria");
    },
    IrParaCadastroUsuario: function() {
      this.$router.push("/ViewTelaCadastroUsuario");
    },
    IrParaTelaEntregador: function() {
      this.$router.push("/ViewTelaEntregador");
    },
    IrParaGerenciarPedidos: function(){
      this.$router.push("/GerenciamentoPedidos")
    }
  }
};
</script>

<style>
html,
body {
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 600;
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
  background-color: #f6f6f6;
}
#imgFundo {
  width: 100%;
  height: 800px;
  position: absolute;
  opacity: 0.9;
}

.list-vertical {
  position: absolute;
  height: 100%;
  background-color: rgb(0, 0, 0);
  margin: 0px 0px 0px 0px;
  padding: 0px;
  list-style: none;
  line-height: 40px;
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica, sans-serif;
  margin: 0px 0px 0px 0px;
  color: white;
}

.list-vertical li:hover {
  color: rgb(197, 199, 84);
}
#slogan {
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica, sans-serif;
  margin: 2% 0px 0px 25%;
  color: white;
  background-color: rgb(0, 0, 0);
}

#logoPizza {
  position: absolute;
  margin: 0px 0px 0px 0px;
  width: 40px;
  height: 40px;
}

</style>