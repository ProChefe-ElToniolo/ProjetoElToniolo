<template>
  <div class="fundo1">
    <div id="form-cat">
      <h1>Bem Vindo a Tela Cadastro Categoria</h1>
      <input
        type="text"
        placeholder="Digite o nome da Categoria"
        v-mask="'AAAAAAAAAAA'"
        id="txtCategoria"
        v-model="nome"
      />
      <span v-if="verificado">Digite algo!</span>
      <button @click="SalvarCategoria">Salvar Categoria</button>
      <!-- v-bind:aparecer="true" -->
      <div id="decidir" v-if="aparecer">
        <button @click="decisao">OK</button>
        <button @click="fechar">FECHAR</button>
      </div>

      <table border="5" style="cursor:pointer" class="tabela-st">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cat in cats" :key="cat.id" @click="SelecionarCategoria(cat.id)">
            <td>{{cat.id}}</td>
            <td>{{cat.nome}}</td>
            <td @click="Utiliza" v-if="catId == 0">
              <img id="lixo" src="../imagens/lixo.png" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data: function() {
    return {
      nome: "",
      catId: 0,
      cats: [],
      categorias: [],
      aparecer: false,
      categoriasAlterar: [],
      verificado: false,
      produtos: [],
      ingredientes: [],
      retornoId: 0,
      contador: 0,
      nomeUtilizado: false
    };
  },
  methods: {
    SalvarCategoria: function() {
      this.alterar = false;
      this.nomeUtilizado = false;
      var txtCategoria = document.getElementById("txtCategoria");
      var alterar = 0;
      this.cats.filter(u => {
        if (u.id == this.categoriasAlterar.id) {
          alterar = 1;
        }
        if (u.nome == this.nome) {
          this.nomeUtilizado = true;
        }
      });
      if (this.nomeUtilizado) {
        alert("Digita outra coisa merda");
      } else {
        if (alterar == 1) {
          axios.put(
            "http://localhost:55537/api/Categoria/" + this.categoriasAlterar.id,
            {
              nome: this.nome
            }
          );
          this.cats.filter(u => {
            if (u.id == this.categoriasAlterar.id) {
              u.nome = this.nome;
            }
          });
        } else {
          if (txtCategoria.value != "") {
            this.verificado = false;
            axios
              .post("http://localhost:55537/api/Categoria", {
                nome: this.nome
              })
              .then(resp => {
                this.cats.push({
                  id: resp.data,
                  nome: this.nome
                });
              });
          } else {
            this.verificado = true;
          }
        }
      }
    },

    SelecionarCategoria: function(id) {
      this.cats.filter(c => {
        if (c.id == id) {
          this.categoriasAlterar = c;
        }
      });
      this.nome = this.categoriasAlterar.nome;
    },

    decisao: function() {
      this.ExcluirCategoria();
      this.aparecer = false;
    },

    limpa: function() {
      this.nome = "";
    },

    Utiliza: function() {
      this.contador = 0;
      this.aparecer = false;
      let vetorProdutoIngrediente = [].concat(this.produtos, this.ingredientes);
      vetorProdutoIngrediente.filter(p => {
        if (this.categoriasAlterar.id == p.id_categoria && this.contador == 0) {
          alert("Existe um produto ou ingrediente que utiiza desta categoria");
          this.contador++;
          this.aparecer = false;
        }
      });
      if (vetorProdutoIngrediente.length == 0 || this.contador == 0) {
        this.aparecer = true;
      }
    },

    ExcluirCategoria: function() {
      axios
        .delete(
          "http://localhost:55537/api/Categoria/" + this.categoriasAlterar.id
        )
        .then(resp => console.log(resp.data));
      this.cats.splice(this.cats.indexOf(this.categoriasAlterar.id), 1);
      this.limpa();
    },

    fechar: function() {
      this.aparecer = false;
    },
    carregar: function() {
      this.cats = this.categorias;
    }
  },

  mounted() {
    axios
      .get("http://localhost:55537/api/Categoria")
      .then(
        categoria => (
          (this.categorias = categoria.data), setTimeout(this.carregar()), 500
        )
      );

    axios
      .get("http://localhost:55537/api/Produto")
      .then(produto => (this.produtos = produto.data));

    axios
      .get("http://localhost:55537/api/Ingrediente")
      .then(ingrediente => (this.ingredientes = ingrediente.data));
  }
};
</script>

<style>
#decidir {
  margin: 10px;
  width: 100px;
  height: 100px;
  background-color: cadetblue;
  border: 3px solid black;
}

#lixo {
  margin: 0px 0px 0px 0px;
}
#form-cat {
  border: 3px solid black;
  margin: 20px 5% 0px 5%;
}
#form-cat{
  border: 3px solid black;
  margin: 20px 5% 0px 5%;
  width: 85vw;
}
</style>