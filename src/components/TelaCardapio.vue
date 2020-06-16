<template>
  <div class="topo">
    <h1>Bem-Vindo à tela de Cardapio</h1>
    <button @click="carrega">sla</button>

    <div id="Cats" v-if="catsPrincipal">
      <div v-for="cat in categoriasProdutos" :key="cat" id="caixona">
        <label class="legenda">{{cat}}</label>
      </div>
    </div>
    <div id="caixas" v-if="carregaCat">
      <div id="caixa" v-for="prod in produtos" :key="prod.id" @click="filtrar">
        <img src="../imagens/logopizza.png" id="imagemProd" />
        <label class="legenda">{{prod.nome}}</label>
      </div>
    </div>
    </div>
</template>

<script>
const axios = require("axios");

export default {
  data: function() {
    return {
      categorias: [],
      catId: 0,
      produtos: [],
      produtosSelecionados: [],
      catsProds: [],
      catsPrincipal: true,
      carregaCat: false,
      categoriasProdutos: []
    };
  },
  methods: {
    listar: function() {
      this.produtos = this.produtosSelecionados;
      if (this.catId != 0) {
        this.produtos = this.produtos.filter(p => {
          if (p.id_categoria == this.catId) {
            return p;
          }
        });
        console.log(this.produtos);
      }
    },
    categoriaa: function() {
      this.catsProds = this.produtosSelecionados.filter(u => {
        this.categorias.filter(e => {
          if (e.id == u.id_categoria) {
            return e;
          }
        });
      });
      console.log(this.catsProds);
    },
    carrega: function() {
      this.categoriasProdutos = this.produtos.reduce((init, current) => {
        if (init.length === 0 || init[init.length - 1] !== current.categoriaProd) {
          init.push(current.categoriaProd);
        }
        return init;
      }, []);
      console.log(this.categoriasProdutos)
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Categoria")
      .then(categoria => (this.categorias = categoria.data));
    axios
      .get("http://localhost:55537/api/Produto")
      .then(produto => (this.produtos = produto.data));
    axios
      .get("http://localhost:55537/api/Produto")
      .then(produto => (this.produtosSelecionados = produto.data));
  }
};
</script>

<style>
#teste {
  border: 2px solid black;
  color: red;
  background-color: black;
  margin: 150px 0 0 0;
}

.meio {
  display: flex;
  position: absolute;
  height: auto;
  width: 71.72%;
  margin-left: 14.4%;
  z-index: 1000;
}

#teste1 {
  border: 2px solid black;
  color: black;
  background-color: green;
  cursor: pointer;
}

.topo {
  margin: 72px 0 0 0;
  height: auto;
  width: 100%;
}

#caixa {
  width: 190px;
  font-size: 11px;
  text-align: center;
  background-color: black;
  height: 135px;
  border: 1px solid white;
  color: white;
  margin: 15px 5px 0px 30px;
  text-align: center;
  cursor: pointer;
  display: flex;
  line-height: 20px;
}
#caixas {
  margin: 20px 0px 0px 60px;
  display: flex;
  width: auto;
  overflow: auto;
  height: auto;
  flex-wrap: wrap;
}
#imagemProd {
  position: absolute;
  margin: 0px 0px 0px 35px;
  width: 120px;
  height: 80px;
}
.legenda {
  margin-top: 81px;
}
#caixona {
  width: 450px;
  font-size: 11px;
  text-align: center;
  background-color: black;
  height: 500px;
  border: 1px solid white;
  color: white;
  margin: 10px 5px 0px 30px;
  text-align: center;
  cursor: pointer;
  display: flex;
  line-height: 20px;
}
#Cats{
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
}
</style>