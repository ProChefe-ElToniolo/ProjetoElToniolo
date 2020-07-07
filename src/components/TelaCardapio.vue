<template>
  <div class="topo">
      <div class="Cats" v-if="catsPrincipal">
        <div v-for="cat in exibirCats" :key="cat" id="caixona">
          <img src="../imagens/produto.jpg" id="img-prod" @click="listar(cat)" />
          <div id="descricao">
            <label id="legenda">{{cat}}</label>
          </div>
        </div>
      </div>
      <div class="Prod" v-if="mostrarProds">
        <div v-for="prod in produtosSelecionados" :key="prod" id="prod">
          <h4>{{prod.nome}}</h4>
        </div>
    </div>
    <!-- <select class="cbx"> 
      <option >Todos Produtos</option>
      <option v-for="(prod,index) in carreProd" :key="index">{{prod[index].nome}}</option>
    </select>-->
    <!-- <div id="caixas" v-if="carregaCat">
      <div id="caixa" v-for="prod in produtos" :key="prod.id" @click="filtrar">
        <img src="../imagens/logopizza.png" id="imagemProd" />
        <label class="legenda">{{prod.nome}}</label>
      </div>
    </div>-->
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data: function() {
    return {
      categorias: [],
      produtos: [],
      produtosSelecionados: [],
      catsProds: [],
      catsPrincipal: true,
      exibirCats: [],
      mostrarProds: false,
      carregaCat: false,
      categoriasProdutos: []
    };
  },
  methods: {
    listar: function(catSelect) {
      alert("eu");
      if (this.mostrarProds == false) {
        this.mostrarProds = true;
        this.catsPrincipal = false;
      } else {
        this.mostrarProds = false;
        this.catsPrincipal = true;
      }
      this.produtosSelecionados = this.produtos.filter(p => {
        if (p.categoriaProd == catSelect) {
          return p;
        }
      });
    },
    carrega: function() {
      console.log(this.produtos);
      var aux = [];
      this.produtos.filter(u => {
        aux.push(u.categoriaProd);
      });
      this.exibirCats = [...new Set(aux)];
      console.log(this.exibirCats);
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Categoria")
      .then(categoria => (this.categorias = categoria.data));
    axios
      .get("http://localhost:55537/api/Produto")
      .then(produto => ((this.produtos = produto.data), this.carrega()));
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
#caixona {
  width: 450px;
  font-size: 11px;
  text-align: center;
  background-color: black;
  height: 500px;
  border: 1px solid white;
  color: white;
  margin: 40px 5px 0px 0px;
  text-align: center;
  cursor: pointer;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  line-height: 20px;
}
.Cats {
  position: absolute;
  margin: 0px 0px 0px 210px;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
}
#descricao {
  position: absolute;
  margin-top: 300px;
  height: 200px;
  width: 450px;
  color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: rgba(58, 58, 58, 0.575);
}
#legenda {
  margin: 50px;
  color: white;
  font-size: 60px;
}
#img-prod {
  height: 300px;
  width: 450px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
#prod {
  width: 250px;
  font-size: 11px;
  text-align: center;
  background-color: black;
  height: 300px;
  border: 1px solid white;
  color: white;
  margin: 40px 5px 0px 0px;
  text-align: center;
  cursor: pointer;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  line-height: 20px;
}
.Prod {
  position: absolute;
  margin: 0px 0px 0px 40px;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
}
</style>