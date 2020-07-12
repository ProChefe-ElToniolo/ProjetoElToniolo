<template>
  <div class="fundo1">
    <div id="form-ing">
      <div class="divs">
        <div class="meu-box">
          <input type="text" class="inputz" placeholder="Nome do Ingrediente" v-model="nome" />
          <label id="label-Ing">Nome do Ingrediente</label>
        </div>
        <div class="meu-box">
          <input type="text" class="inputz" placeholder="Quantidade" v-model="estoque" />
          <label id="label-qtd">Quantidade</label>
        </div>

        <label class="label">Categoria</label>
        <br />
        <select v-model="idCatIng" class="cbx">
          <option value="0" select disabled>Escolha a categoria</option>
          <option :value="cat.id" v-for="cat in categorias" :key="cat.id">{{cat.nome}}</option>
        </select>
        <br />
        <button @click="salvar" class="button">Salvar</button>
      </div>
      <div class="divs">
        <table border="1" class="tabela-st" id="tabelinha">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Estoque</th>
              <th class="lixoo"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ing, index) in ings" :key="index" @click="selecionar(ing.id)">
              <td>{{ing.nome}}</td>
              <td>{{ing.nomeCategoria}}</td>
              <td>{{ing.estoque}}</td>
              <td @click="excluir(ing.id)">
                <img id="imgLixo" src="../imagens/lixo.png" alt />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      ingredientes: [],
      ings: [],
      categorias: [],
      nome: "",
      estoque: "",
      idCatIng: 0,
      idExclur: "",
      ingEscolhido: [],
      existe: false,
      nomeUtilizado: false
    };
  },
  methods: {
    salvar: function() {
      this.ings.filter(e => {
        if (e.id == this.ingEscolhido.id) {
          this.existe = true;
        }
        if (this.nome == e.nome) {
          this.nomeUtilizado = true;
        }
      });
      if (this.nomeUtilizado) {
        alert("Preenche tudo");
      } else {
        if (this.nome != "" && this.estoque != "" && this.idCatIng != 0) {
          if (this.existe) {
            axios.put(
              "http://localhost:55537/api/Ingrediente/" + this.ingEscolhido.id,
              {
                nome: this.nome,
                id_categoria: this.idCatIng,
                estoque: this.estoque
              }
            );
            this.ings.filter(u => {
              if (u.id == this.ingEscolhido.id) {
                (u.nome = this.nome),
                  (u.id_categoria = this.idCatIng),
                  (u.estoque = this.estoque);
              }
            });
          } else {
            axios
              .post("http://localhost:55537/api/Ingrediente", {
                nome: this.nome,
                id_categoria: this.ingEscolhido.nomeCategoria,
                estoque: this.estoque
              })
              .then(resp => {
                this.ings.push({
                  id: resp.data,
                  nome: this.nome,
                  nomeCategoria: this.nomeCategoria,
                  estoque: this.estoque
                });
              });
          }
        } else {
          alert("Preenche tudo");
        }
        this.existe = false;
      }
    },
    selecionar: function(id) {
      this.ings.filter(u => {
        if (u.id == id) {
          this.ingEscolhido = u;
        }
      });
      console.log(this.ingEscolhido);
      this.nome = this.ingEscolhido.nome;
      this.idCatIng = this.ingEscolhido.id_categoria;
      this.estoque = this.ingEscolhido.estoque;
    },
    limpar: function() {
      this.nome = "";
      this.idCatIng = 0;
      this.estoque = "";
    },
    excluir: function(idIng) {
      axios.delete("http://localhost:55537/api/Ingrediente/" + idIng);
      this.ings.splice(this.ings.indexOf(idIng), 1);
      this.limpa();
    },
    carregaVetor: function() {
      setTimeout(() => {
        console.log(this.ingredientes);
        this.ings = this.ingredientes;
      }, 100);
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Ingrediente")
      .then(
        ingrediente => (this.ingredientes = ingrediente.data),
        this.carregaVetor()
      );
    axios
      .get("http://localhost:55537/api/Categoria")
      .then(cat => (this.categorias = cat.data));
  }
};
</script>

<style>
.ingredientes tr:hover {
  background: rgb(109, 235, 224);
  color: #ffffff;
}
.ingredientes tr {
  color: white;
  background-color: rgba(0, 0, 0, 0.445);
  height: auto;
  cursor: pointer;
}
.ingredientes td {
  padding: 5px;
}
.ingredientes {
  position: absolute;
  margin: 30px 0px 40px 10px;
  width: 40%;
}

#tabelinha {
  width: 60%;
  margin: 10px;
}

#label-Ing {
  text-align: center;
  font-weight: 700;
  border-radius: 2px;
  border: none;
  width: 130px;
  height: 14px;
  margin: 0px 0px 0px 5px;
  position: absolute;
  background-color: #1f2023;
  color: rgb(255, 255, 255);
  top: 17%;
  bottom: 0;
  left: 3%;
  right: 0;
  transition: 0.5s;
  opacity: 0.5;
}

.inputz:focus + #label-Ing {
  /* margin: 10px; */
  z-index: 3;
  color: rgb(255, 255, 255);
  top: -2%;
  left: 3%;
  transition: 0.5s;
  opacity: 1;
}

#label-qtd {
  text-align: center;
  font-weight: 700;
  border-radius: 2px;
  border: none;
  width: 70px;
  height: 14px;
  margin: 0px 0px 0px 5px;
  position: absolute;
  background-color: #1f2023;
  color: rgb(255, 255, 255);
  top: 17%;
  bottom: 0;
  left: 3%;
  right: 0;
  transition: 0.5s;
  opacity: 0.5;
}

.inputz:focus + #label-qtd {
  /* margin: 10px; */
  z-index: 3;
  color: rgb(255, 255, 255);
  top: -2%;
  left: 3%;
  transition: 0.5s;
  opacity: 1;
}

#imgLixo {
  padding: 2px;
}

#form-ing {
  margin: 20px 5% 0px 5%;
  width: 85vw;
  display: flex;
}

.label {
  font-size: 18px;
}
</style>