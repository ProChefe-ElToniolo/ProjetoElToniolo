<template>
  <div id="fundo1">
    <div id="formulario">
      <div class="meu-box">
        <input type="text" class="inputz" placeholder="Nome do Produto" v-model="nome" />
        <label for="nomeCompleto" class="label-nome">Nome do Produto</label>
      </div>

      <textarea
        id="inputMulti"
        rows="10"
        cols="38"
        v-model="descricao"
        maxlength="200"
        placeholder="Descrição"
      ></textarea>

      <div class="meu-box">
        <input type="number" class="inputz"  v-model="preco" placeholder="Preço" />
        <label for="nomeCompleto" class="label-preco">Preço</label>
      </div>

      <select v-model="idCat" class="cbx">
        <option value="0" selected disabled>Categoria desejada</option>
        <option :value="cat.id" v-for="cat in categorias" :key="cat.id">{{cat.nome}}</option>
      </select>
      <select v-model="medida" class="cbx">
        <option value="0" selected disabled>Unidade de Medida</option>
        <option :value="med.id" v-for="med in medidas" :key="med.id">{{med.nome}}</option>
      </select>
      <br />
      <button class="button" @click="salvar">Salvar</button>
      <br />
      <label id="fil">FILTROS</label>
      <select id="cbxFiltro" @change="filtro(filtrarCat)" v-model="filtrarCat">
        <option value="0">Todos Produtos</option>
        <option :value="cat.id" v-for="cat in categorias" :key="cat.id">{{cat.nome}}</option>
      </select>
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
            <td @click="excluir(prod.id)">
              <img id="lixo" src="../imagens/lixo.png" alt />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="listIng">
      <div class="cb" :value="ing.id" v-for="ing in ingredientes" :key="ing.id">
        <input type="checkbox" id="cbIng" @change="addIng(ing.id)" />
        <label id="ing">{{ing.nome}}</label>
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
      nome: "",
      descricao: "",
      preco: "",
      idCat: 0,
      filtrarCat: 0,
      imagem: "",
      medida: 0,
      prods: [],
      ProdSelecionado: [],
      ingSelecionados: [],
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
        axios
          .post("http://localhost:55537/api/Produto", {
            nome: this.nome,
            descricao: this.descricao,
            preco: this.preco,
            medida_tamanho: this.medida,
            id_categoria: this.idCat,
            imagem: this.imagem
          })
          .then(res => (this.idExcluir = res.data));
        setTimeout(function() {
          alert("Cadastrado com sucesso!");
          console.log(this.prods)
          this.prods.push({
            id: this.idExcluir,
            nome: this.nome,
            descricao: this.descricao,
            preco: this.preco,
            medida_tamanho: this.medida,
            id_categoria: this.idCat,
            categoriaProd: this.categorias.filter(u => u.id == this.idCat)[0]
              .nome,
            imagem: this.imagem
          });
          console.log(this.prods);
          this.ingSelecionados.forEach(e => {
            alert(this.idExcluir);
            axios.post("http://localhost:55537/api/Produto_Ingrediente", {
              id_produto: this.idExcluir,
              id_ingrediente: e
            });
          });
        }, 2000);
      } else {
        alert("Preencha todos os campos!");
      }
      this.existe = false;
      this.limpa();
    },
    addIng: function(ingId) {
      alert(ingId);
      var cb = document.getElementById("cbIng");
      var ja = this.ingSelecionados.indexOf(ingId);
      alert(ja);
      if (cb.checked && ja == -1) {
        this.ingSelecionados.push(ingId);
      } else {
        this.ingSelecionados.splice(this.ingSelecionados.indexOf(ingId), 1);
      }
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
        axios.delete("http://localhost:55537/api/Produto/" + id);
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
body,
html {
  width: 100%;
  height: 100%;
  background-color: rgba(133, 131, 131, 0.76);
  overflow: auto;
}
#formulario {
  border-radius: 3px solid black;
  margin: 20px 5% 0px 5%;
}
#fundo1 {
  background-color: rgba(133, 131, 131, 0.76);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
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
  padding: 10px;
  color: white;
  background-color: #1f2023;
  word-wrap: break-word;
  height: 90px;
  margin: 0px 0px 0px 10px;
  resize: none;
}
.tabela-st {
  position: absolute;
  margin: 30px 0px 40px 10px;
  width: 77%;
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
  color: white;
  background-color: rgba(0, 0, 0, 0.445);
  height: auto;
  cursor: pointer;
}
#ingredientes {
  position: absolute;
}
.cbx {
  position: relative;
  margin: 10px 0px 0px 10px;
  border: 2px rgba(83, 83, 83, 0.658) solid;
  height: auto;
  background: rgb(34, 34, 34);
  color: rgba(255, 255, 255, 0.822);
  border-radius: 6px;
}
#cbxFiltro {
  position: absolute;
  margin: 0px 0px 15px 20px;
  border: 2px rgba(83, 83, 83, 0.658) solid;
  height: auto;
  color: white;
  background: rgb(34, 34, 34);
  border-radius: 6px;
}
.inputFormulario {
  margin: 10px 0px 0px 0px;
}
.button {
  height: 40px;
  width: 120px;
  text-align: center;
  font-size: 14px;
  margin: 30px 0px 20px 96px;
  background-color: #1f2023;
  color: white;
  border: 3px rgba(83, 83, 83, 0.658) solid;
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
  color: #ffffff;
  border: 1px rgba(83, 83, 83, 0.658) solid;
  margin: 10px;
  background-color: #1f2023;
  padding: 10px 10px 10px 15px;
  box-sizing: content-box;
  z-index: 2;
}

.label-nome {
  text-align: center;
  border-radius: 2px;
  width: 110px;
  height: 14px;
  margin: 0px 0px 0px 5px;
  position: absolute;
  background-color: #1f2023;
  color: rgb(255, 255, 255);
  font-weight: bold;
  top: 17%;
  bottom: 0;
  left: 3%;
  right: 0;
  transition: 0.5s;
}
.label-preco {
  text-align: center;
  border-radius: 2px;
  width: 50px;
  height: 14px;
  margin: 0px 0px 0px 5px;
  position: absolute;
  background-color: #1f2023;
  color: rgb(255, 255, 255);
  font-weight: bold;
  top: 16%;
  bottom: 0;
  left: 3%;
  right: 0;
  transition: 0.5s;
}
/*DESATIVA AS SETAS DE NÚMERO*/
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.inputz:focus + .label-nome {
  /* margin: 10px; */
  z-index: 3;
  color: rgb(255, 255, 255);
  top: -0%;
  left: 3%;
  transition: 0.2s;
}
.inputz:focus + .label-preco {
  /* margin: 10px; */
  z-index: 3;
  color: rgb(255, 255, 255);
  top: -0%;
  left: 3%;
  transition: 0.2s;
}
#cbIng {
  width: auto;
  font-size: 14px;
  margin: 8px 0px 0px 10px;
}
#lixo {
  margin: 0px 15px 0px 20px;
}

#fil {
  margin: 0px 0px 0px 10px;
  font-size: 15px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgb(0, 0, 0);
}
/*TROCA A COR DA PLACEHOLDER*/
::-webkit-input-placeholder {
  color: white;
}
#listIng {
  margin: 30px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.664);
  border-radius: 5px;
  color: rgb(255, 255, 255);
  width: 300px;
  height: 300px;
  overflow: auto;
  background-color: #1f2023;
}
#ing {
  margin: 0px 0px 0px 5px;
  font-size: 14px;
  font-weight: inherit;
}
</style>