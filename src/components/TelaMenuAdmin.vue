<template>
    <div id="menu-lateral">
      <div id="slogan">
        <br>
        <button id="botao-login" @click="voltarMenu">El Toniolo</button>
        <img src="../imagens/chef.png" class="img-slogan" />
      </div>
      <nav>
        <ul class="list-vertical">
          <li @click="Produtos">
            <img src="../imagens/pizzaColorida.png" class="img-li" />
            Produtos
          </li>
          <li @click="Ingredientes">
            <img src="../imagens/ingredientes.png" class="img-li" />
            Ingredientes
          </li>
          <li @click="Categorias">
            <img src="../imagens/categoria.png" class="img-li" />
            Categorias
          </li>
          <li @click="Usuario">
            <img src="../imagens/usuario.png" class="img-li" />
            Usuario
          </li>
          <li @click="Entregador">
            <img src="../imagens/entregador.png" class="img-li" />
            Entregador
          </li>
          <li @click="Pedidos">
            <img src="../imagens/pedidos.png" class="img-li" />
            Pedidos
          </li>
        </ul>
      </nav>
    <div id="fundo">
      <div v-if="produtosVisualizar">
        <TelaCadastroProdutos />
      </div>
      <div v-if="ingredientesVisualizar">
        <TelaIngredientes />
      </div>
      <div v-if="categoriasVisualizar">
        <TelaCadastroCategoria />
      </div>
      <div v-if="usuarioVisualizar">
        <TelaCadastroUsuario />
      </div>
      <div v-if="entregadorVisualizar">
        <TelaEntregador />
      </div>
      <div v-if="pedidosVisualizar">
        <TelaPedidos />
      </div>
    </div>
  </div>
</template>

<script>
import TelaCadastroCategoria from "../components/TelaCadastroCategoria.vue";
import TelaIngredientes from "../components/TelaIngredientes.vue";
import TelaCadastroProdutos from "../components/TelaCadastroProdutos.vue";
import TelaCadastroUsuario from "../components/TelaCadastroUsuario.vue";
import TelaEntregador from "../components/TelaEntregador.vue";
import TelaPedidos from "../components/TelaPedidos.vue";
export default {
  components: {
    TelaIngredientes,
    TelaCadastroProdutos,
    TelaCadastroCategoria,
    TelaCadastroUsuario,
    TelaEntregador,
    TelaPedidos
  },
  data: function() {
    return {
      produtosVisualizar: false,
      ingredientesVisualizar: false,
      categoriasVisualizar: false,
      usuarioVisualizar: false,
      entregadorVisualizar: false,
      pedidosVisualizar: false
    };
  },
  methods: {
    Produtos: function() {
      this.fechar();
      this.produtosVisualizar = true;
    },
    fechar: function() {
      this.produtosVisualizar = false;
      this.ingredientesVisualizar = false;
      this.categoriasVisualizar = false;
      this.usuarioVisualizar = false;
      this.entregadorVisualizar = false;
      this.pedidosVisualizar = false;
    },
    Ingredientes: function() {
      this.fechar();
      this.ingredientesVisualizar = true;
    },
    Categorias: function() {
      this.fechar();
      this.categoriasVisualizar = true;
    },
    Usuario: function() {
      this.fechar();
      this.usuarioVisualizar = true;
    },
    Entregador: function() {
      this.fechar();
      this.entregadorVisualizar = true;
    },
    Pedidos: function() {
      this.fechar();
      this.pedidosVisualizar = true;
    },
    voltarMenu: function(){
      this.produtosVisualizar = false;
      this.ingredientesVisualizar = false;
      this.categoriasVisualizar = false;
      this.usuarioVisualizar = false;
      this.entregadorVisualizar = false;
      this.pedidosVisualizar = false;
    }
  }
};
</script>

<style>
#botao-login{
  color: white;
  background-color: #1f2023;
  border: transparent;
  font-size: 18px;
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  cursor: pointer;
  font-weight: bold;
  outline: transparent;
}

/* #container {
  display: flex;
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  font-size: 14px;
  height: 100%;
  margin: 0px;
  width: 100%;
  padding: 0px;
  background-color: rgba(133, 131, 131, 0.76);
} */
#imgFundo {
  width: 100%;
  height: 800px;
  position: absolute;
  opacity: 0.9;
}
.img-slogan {
  transform: rotate(45deg);
  position: absolute;
  margin: -20px 0px 5px -4px;
  width: 32px;
  height: 32px;
}
.list-vertical {
  padding: 0px;
  list-style: none;
  /* line-height: 40px; */
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  color: white;
}

.list-vertical li:hover {
  background-color: rgba(116, 116, 116, 0.432);
}
.list-vertical ul {
  margin: 0px 0px 0px 0px;
}
.list-vertical li {
  display: flex;
  text-align: center;
  line-height: 45px;
  background-color: #1f2023;
  border: 1px rgba(56, 56, 56, 0.301) solid;
  margin: 1px 0px 2px 0px;
  width: 148px;
}

#slogan {
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  text-align: center;
  font-size: 20px;
  color: white;
  background-color: #1f2023;
}
.img-li {
  margin: 10px;
  cursor: pointer;
}
#logoPizza {
  position: absolute;
  margin: -40px 0px 0px 2%;
  width: 40px;
  height: 40px;
}
#fundo {
  display: flex;
  position: absolute;
  margin: 0px 0px 0px 150px;
  background-color: rgb(255, 255, 255);
}
#menu-lateral {
  position: fixed;
  width: 150px;
  height: 100%;
  background-color: #1f2023;
}
input:focus::-webkit-input-placeholder {
   color: transparent;
}
</style>