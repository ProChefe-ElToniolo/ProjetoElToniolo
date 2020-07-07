<template>
  <div id="fundo1">
    <div id="formulario">
      <br />
      <div class="meu-box">
        <input type="text" class="inputz" placeholder="Nome Completo" v-model="nome" />
        <label for="nomeCompleto" class="label-nome">Nome Completo</label>
      </div>
      <br />
      <textarea
        id="inputMulti"
        rows="10"
        cols="38"
        v-model="descricao"
        maxlength="200"
        placeholder="Descrição"
      ></textarea>
      <br />
      <div class="meu-box">
        <input type="Number" class="inputz" v-model="preco" placeholder="Preço" />
        <label for="nomeCompleto" class="label-nome">Preço</label>
      </div>
      <br />
      <select v-model="idCat" class="cbx">
        <option value="0" selected disabled>Categoria desejada</option>
        <option :value="cat.id" v-for="cat in categorias" :key="cat.id">{{cat.nome}}</option>
      </select>
      <br />
      <select v-model="medida" class="cbx">
        <option value="0" selected disabled>Unidade de Medida</option>
        <option :value="med.id" v-for="med in medidas" :key="med.id">{{med.nome}}</option>
      </select>
      <br />
      <button class="button" @click="salvar">Salvar</button>
    </div>
    <select class="cbx" @change="filtro(filtrarCat)" v-model="filtrarCat">
      <option value="0">Todos Produtos</option>
      <option :value="cat.id" v-for="cat in categorias" :key="cat.id">{{cat.nome}}</option>
    </select>
    <div class="pos-tabel">
      <table class="tabela-st">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(prod, index) in prods" :key="index" @click="selecionar(prod.id)">
            <td>{{prod.nome}}</td>
            <td>{{prod.categoriaProd}}</td>
            <td>{{prod.descricao}}</td>
            <td>{{"R$ " + (prod.preco)}}</td>
            <td @click="excluir(prod.id)"><img id="lixo" src="../imagens/lixo.png" alt=""></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="cb" :value="ing.id" v-for="ing in ingredientes" :key="ing.id">
      <input type="checkbox" id="cbIng" unchecked />
      {{ing.nome}}
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      categorias: [],
      nome: "",
      descricao: "",
      preco: "",
      idCat: 0,
      filtrarCat: 0,
      imagem: "",
      medida: 0,
      prods: [],
      ProdSelecionado: [],
      existe: false,
      invalido: false,
      todosProds: [],
      medidas: [],
      ingredientes: [],
      idExcluir: ""
    };
  },
  methods: {
    IrParaTelaMenuAdmin: function() {
      this.$router.push("/ViewTelaMenuAdmin");
    },
    salvar: function() {
      this.prods.filter(e => {
        console.log("e");
        if (e.id == this.ProdSelecionado.id && this.ProdSelecionado[1] != "") {
          this.existe = true;
        }
      });
      if (this.existe) {
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
      } else if (
        this.nome != null &&
        this.preco != null &&
        this.medida != 0 &&
        this.idCat != 0
      ) {
        alert("entrouPra salvar");
        axios.post("http://localhost:55537/api/Produto", {
          nome: this.nome,
          descricao: this.descricao,
          preco: this.preco,
          medida_tamanho: this.medida,
          id_categoria: this.idCat,
          imagem: this.imagem
        }).then(res => (this.idExcluir = res.data));
        this.prods.push({
          id: this.idExcluir,
          nome: this.nome,
          descricao: this.descricao,
          preco: this.preco,
          medida_tamanho: this.medida,
          id_categoria: this.idCat,
          categoriaProd: this.categorias.filter(u => u.id == this.idCat)[0].nome,
          imagem: this.imagem
        });
      } else {
        alert("Preencha todos os campos!");
      }
      this.existe = false;
      this.limpa();
    },
    selecionar: function(id) {
      this.selecionado = id;
      this.prods.filter(f => {
        if (f.id == id) {
          this.ProdSelecionado = f;
        }
      });
      console.log(this.ProdSelecionado);
      this.nome = this.ProdSelecionado.nome;
      this.descricao = this.ProdSelecionado.descricao;
      this.preco = this.ProdSelecionado.preco;
      this.medida = this.ProdSelecionado.medida_tamanho;
      this.idCat = this.ProdSelecionado.id_categoria;
      this.imagem = this.ProdSelecionado.imagem;
    },
    excluir: function(id) {
      if (id != null) {
        axios.delete(
          "http://localhost:55537/api/Produto/" + id
        );
        alert(this.prods.indexOf(id));
        this.prods.splice(this.prods.indexOf(id), 1);
        this.invalido = false;
      } else {
        this.invalido = true;
      }
      this.limpa();
    },
    limpa: function() {
      this.nome = "";
      this.descricao = "";
      this.preco = "";
      this.medida = 0;
      this.idCat = 0;
      this.imagem = "";
    },
    filtro: function() {
      this.prods = this.todosProds;
      if (this.filtrarCat != 0) {
        this.prods = this.prods.filter(i => {
          if (i.id_categoria == this.filtrarCat) {
            return i;
          }
        });
      }
      console.log(this.prods);
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Categoria")
      .then(categoria => (this.categorias = categoria.data));
    axios
      .get("http://localhost:55537/api/Produto")
      .then(produto => (this.prods = produto.data));
    axios
      .get("http://localhost:55537/api/Medida")
      .then(medida => (this.medidas = medida.data));
    axios
      .get("http://localhost:55537/api/Ingrediente")
      .then(ing => (this.ingredientes = ing.data));
    console.log(this.ingredientes);
        axios
      .get("http://localhost:55537/api/Produto")
      .then(produto => (this.todosProds = produto.data));
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
}
#formulario {
  margin: 20px 5% 0px 5%;
}
#fundo1 {
  display: relative;
}
#imgProd {
  width: 80px;
  height: 80px;
}
.pos-tabel {
  margin: 20px 0px 0px 8%;
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
.tabela-st {
  width: 500px;
  border-collapse: collapse;
}
.tabela-st tr:focus-within {
  background: rgba(214, 62, 62, 0.644);
  color: #ffffff;
}
.tabela-st,
th,
td {
  border: 1px solid black;
}
.tabela-st th {
  color: white;
  background: rgb(34, 34, 34);
  text-align: left;
  padding: 10px;
}
.tabela-st td {
  padding: 5px;
}
.tabela-st tr:hover {
  background: rgba(73, 73, 73, 0.644);
  color: #ffffff;
}
.tabela-st tr {
  height: auto;
  cursor: pointer;
}
#ingredientes {
  position: absolute;
}
.cbx {
  margin: 10px 0px 0px 0px;
  border: 1px solid black;
  height: 20px;
  color: rgba(0, 0, 0, 0.788);
  border-radius: 6px;
}
.inputFormulario {
  margin: 10px 0px 0px 0px;
}
.button {
  margin: 10px 0px 0px 0px;
}

/* d */
.conteudo {
  width: 600px;
  margin: 0 auto;
  padding-top: 40px;
}

.meu-box {
  position: relative;
}

.inputz {
  width: 250px;
  position: relative;
  font-size: 16px;
  color: #5b5b5b;
  border: 1px rgba(83, 83, 83, 0.658) solid;
  padding: 10px 10px 10px 15px;
  box-sizing: content-box;
  z-index: 2;
}

.label-nome {
  width: 200px;
  height: 14px;
  margin-left: 5px;
  position: absolute;
  background: white;
  color: rgb(90, 90, 90);
  font-weight: bold;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 0.5s;
}

.inputz:focus + .label-nome {
  z-index: 3;
  color: rgb(90, 90, 90);
  top: -20%;
  transition: 0.2s;
}
.cb {
  width: auto;
  height: auto;
  margin: 0px;
}
#cbIng {
  width: auto;
  margin: 0px;
}
#lixo{
  margin: 0px 0px 0px 18px;
}
</style>