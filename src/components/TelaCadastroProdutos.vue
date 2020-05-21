<template>
  <div id="containerProd">
    <div id="princ">
      <h4>Cadastro Produtos</h4>
      <button @click="IrParaTelaMenuAdmin">IrParaTelaMenuAdmin</button>
      <br />
      <img id="img" src="cadastrarProd.png" alt />
      <br />
      <label>Nome</label>
      <br />
      <input type="text" v-model="nome" />
      <br />
      <label>Descrição</label>
      <br />
      <textarea id="inputMulti" rows="10" cols="38" v-model="descricao" maxlength="200"></textarea>
      <br />
      <label>Preço</label>
      <br />
      <input type="text" v-model="preco" />
      <br />
      <label>Imagens</label>
      <br />
      <label>Categorias</label>
      <br />
      <select v-model="idCat" id="cbx">
        <option value="0" selected disabled>Categoria desejada</option>
        <option :value="cat.id" v-for="cat in categorias" :key="cat.id">{{cat.nome}}</option>
      </select>
      <br />
      <label>Medidas</label>
      <br />
      <select v-model="medida" id="cbx">
        <option value="0" selected disabled>Unidade de Medida</option>
        <option>Kg</option>
        <option>L</option>
        <option>g</option>
        <option>Familia</option>
        <option>Exagerada</option>
        <option>Média</option>
        <option>Broto</option>
        <option>Grande</option>
      </select>
      <br />
      <table class="produtos">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prod, index) in prods" :key="index" @click="selecionar(prod.id)">
            <td>{{prod.nome}}</td>
            <td>{{prod.descricao}}</td>
            <td>{{prod.preco}}</td>
          </tr>
        </tbody>
      </table>
      <button @click="salvar">Salvar</button>
      <button @click="excluir">Excluir</button>
      <button @click="ingredientes">Ingredientes</button>
      <div v-if="visivel" v-show="true" id="ingredientes">
        <TelaIngredientes />
      </div>
    </div>
  </div>
</template>

<script>
import TelaIngredientes from "../components/TelaIngredientes.vue";
const axios = require("axios");
export default {
  components: {
    TelaIngredientes
  },
  data: function() {
    return {
      categorias: [],
      nome: "",
      descricao: "",
      preco: "",
      idCat: 0,
      imagem: "",
      medida: "",
      prods: [],
      ProdSelecionado: [],
      existe: false,
      visivel: false
    };
  },
  methods: {
    IrParaTelaMenuAdmin: function() {
      this.$router.push("/ViewTelaMenuAdmin");
    },
    salvar: function() {
      this.prods.filter(e => {
        if (e.id == this.ProdSelecionado.id) {
          this.existe = true;
        }
      });
      if (this.existe) {
        alert("entrouAlterar");
        axios.put(
          "http://localhost:55537/api/Produto/" + this.ProdSelecionado.id,
          {
            nome: this.nome,
            descricao: this.descricao,
            preco: this.preco,
            medida_tamanho: this.medida,
            id_categoria: this.idCat,
            imagem: this.imagem
          }
        );
      } else {
        alert("entrouSalvar");
        console.log(this.idCat);
        axios.post("http://localhost:55537/api/Produto", {
          nome: this.nome,
          descricao: this.descricao,
          preco: this.preco,
          medida: this.medida,
          id_categoria: this.idCat,
          imagem: this.imagem
        });
      }
      this.existe = false;
    },
    selecionar: function(id) {
      this.selecionado = id;
      this.prods.filter(f => {
        if (f.id == id) {
          this.ProdSelecionado = f;
        }
      });
      this.nome = this.ProdSelecionado.nome;
      this.descricao = this.ProdSelecionado.descricao;
      this.preco = this.ProdSelecionado.preco;
      this.medida = this.ProdSelecionado.medida_tamanho;
      this.idCat = this.ProdSelecionado.id_categoria;
      this.imagem = this.ProdSelecionado.imagem;
    },
    excluir: function() {
      axios.delete(
        "http://localhost:55537/api/Produto/" + this.ProdSelecionado.id
      );
    },
    ingredientes: function() {
      this.visivel = true;
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Categoria")
      .then(categoria => (this.categorias = categoria.data));
    axios
      .get("http://localhost:55537/api/Produto")
      .then(produto => (this.prods = produto.data));
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
#containerProd {
  width: 100%;
  height: 100%;
  display: flex;
}
#princ {
  position: absolute;
  width: auto;
  height: auto;
  margin: 10px 0px 0px 1%;
  padding: 0px;
}

#imgProd {
  width: 80px;
  height: 80px;
}
#output {
  width: 80px;
  height: 80px;
}
#inputMulti {
  word-wrap: break-word;
  height: 90px;
  resize: none;
}
.produtos {
  border-collapse: collapse;
}
.produtos, th, td{
  border: 1px solid black;
}
.produtos th{
  text-align: left;
  padding: 10px;
}
.produtos td{
  padding: 5px;
}
.produtos tr:hover {
  background: rgb(109, 235, 224);
  color: #ffffff;
}
.produtos tr {
  cursor: pointer;
}
#ingredientes {
  position: absolute;
  margin: -123% 0px 0px 180%;
}
#cbx{
  border: 1px solid black;
  height: 20px;
  color: rgba(0, 0, 0, 0.788);
  border-radius: 6px;
}
</style>