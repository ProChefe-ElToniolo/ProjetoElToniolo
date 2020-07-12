<template>
  <div class="topo">
    <div id="basico">
      <div id="tamanho" v-if="escolherTamanho">
        <div id="caixa-tamanho">
          <div @click="mudar('Exagerada')" id="img-tamanho">
            <img src="../imagens/Exagerada.png" id="img-ings" />
          </div>
          <div @click="mudar('Grande')" id="img-tamanho">
            <img src="../imagens/Grande.png" id="img-ings" />
          </div>
          <div @click="mudar('Media')" id="img-tamanho">
            <img src="../imagens/Media.png" id="img-ings" />
          </div>
          <div @click="mudar('Pequena')" id="img-tamanho">
            <img src="../imagens/Pequena.png" id="img-ings" />
          </div>
        </div>
      </div>
      <div v-if="escolherSabores == false" class="scroll">
        <div v-for="sabor in sabores" :key="sabor.id" id="sab">
          <div class="cb-pizza">
            <button class="button-ex" @click="exSabor(sabor.id, sabor.nome)">-</button>
            <button class="button-add" @click="addSabor(sabor.id, sabor.nome)">+</button>
            {{sabor.nome}}
            <br />
            <br />
            R$ {{sabor.preco}}
          </div>
        </div>
        <!-- outros produtos -->
        <div v-if="outrosProdutos == false">
          <div v-for="prod in outrosProds" :key="prod.id" id="sab">
            <div class="cb-pizza">
              <button class="button-ex" @click="exProd(prod.id, prod.nome)">-</button>
              <button class="button-add" @click="addProd(prod.id, prod.nome)">+</button>
              {{prod.nome}}
              <br />
              <br />
              R$ {{prod.preco}}
            </div>
          </div>
        </div>
      </div>
      <div v-if="escolherSabores == false" id="bots">
        <button>Pedir mais pizzas</button>
        <button @click="outros()">Outros produtos</button>
        <button @click="finalizar()">Finalizar</button>
      </div>
    </div>

    <div id="carrinho">
      <h2>Acompanhe seu pedido!</h2>
      <div id="separa"></div>
      <div id="itens" v-for="item in itens" :key="item">
        <label>{{item}}</label>
        <div v-for="sabor in saboresEscolhidos" :key="sabor">
          <label>{{sabor}}</label>
        </div>
        <br />
      </div>
      <div>{{valorFinal}}</div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      medidas: [],
      sabores: [],
      escolherTamanho: true,
      imagens_tamanho: [],
      escolherSabores: true,
      outrosProdutos: true,
      aparecer: false,
      todoSabores: [],
      mesmoSabor: 0,
      outrosProds: [],
      saboresEscolhidos: [],
      todosProdutos: [],
      valorPedido: [],
      soma: 0,
      escolhidos: [],
      valorFinal: 0,
      itens: []
    };
  },
  methods: {
    mudar: function(nome) {
      this.filtrar(nome);
      this.escolherTamanho = false;
      this.itens.push(nome);
      this.escolherSabores = false;
    },
    finalizar: function() {
      this.valor();
      if (this.valorFinal != 0) {
        this.escolherSabores = true;
      }
    },
    outros: function() {
      console.log(this.escolhidos);
      if (this.escolhidos.length > 0) {
        this.valor();
        this.escolherSabores = true;
        this.outrosProdutos = false;
      }
    },
    filtrar: function(nomeCat) {
      setTimeout(() => {
        this.todoSabores.filter(u => {
          if (u.categoriaProd == "Pizzas" && u.nomeMedida == nomeCat) {
            this.sabores.push(u);
          }
        });
      }, 1000);
    },
    carregaOutros: function() {
      setTimeout(() => {
        this.todoSabores.filter(u => {
          if (u.categoriaProd != "Pizzas") {
            this.outrosProds.push(u);
          }
        });
      }, 1000);
      console.log(this.outrosProds);
    },
    valor: function() {
      var aux = 0;
      var repetido = [...new Set(this.escolhidos)];
      console.log(repetido)
      this.todoSabores.forEach(e => {
        if (e.id == repetido[aux]) {
          if (this.valorFinal < e.preco) {
            this.valorFinal = e.preco;
          }
          aux++;
        }
      });
      console.log(this.valorFinal);
    },
    addSabor: function(sabor, nome) {
      var nomeSabor = nome
        .replace("Pizza de", "")
        .replace("Pizza ", "")
        .trim();
      this.saboresEscolhidos.forEach(e => {
        if (e == nomeSabor) {
          this.mesmoSabor = 1;
        }
      });
      if (this.itens == "Exagerada") {
        if (this.saboresEscolhidos.length < 4) {
          this.saboresEscolhidos.push(nomeSabor);
          this.escolhidos.push(sabor);
          console.log(this.escolhidos);
          if (this.saboresEscolhidos.length == 4) {
            this.aparecer = true;
          }
        }
      } else if (this.itens == "Grande") {
        if (this.saboresEscolhidos.length < 3) {
          this.saboresEscolhidos.push(nomeSabor);
          this.escolhidos.push(sabor);
          if (this.saboresEscolhidos.length == 3) {
            this.aparecer = true;
          }
        }
      } else if (this.itens == "Media") {
        if (this.saboresEscolhidos.length < 2) {
          this.saboresEscolhidos.push(nomeSabor);
          this.escolhidos.push(sabor);
          if (this.saboresEscolhidos.length == 2) {
            this.aparecer = true;
          }
        }
      } else if (this.itens == "Pequena") {
        if (this.saboresEscolhidos.length < 1) {
          this.saboresEscolhidos.push(nomeSabor);
          this.escolhidos.push(sabor);
          if (this.saboresEscolhidos.length == 1) {
            this.aparecer = true;
          }
        }
      }
    },
    exSabor: function(sabor, nome) {
      this.valorFinal = 0;
      var nomeSabor = nome.replace("Pizza de", "").trim();
      if (this.saboresEscolhidos.length > 0) {
        this.escolhidos.forEach(u => {
          if (u == sabor) {
            this.escolhidos.splice(this.escolhidos.indexOf(sabor), 1);
            console.log(this.escolhidos);
          }
        });
        this.saboresEscolhidos.forEach(u => {
          if (u == nomeSabor) {
            this.saboresEscolhidos.splice(
              this.saboresEscolhidos.indexOf(nomeSabor),
              1
            );
          }
        });
      }
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Medida")
      .then(med => (this.medidas = med.data));
    axios
      .get("http://localhost:55537/api/Produto")
      .then(prod => (this.todoSabores = prod.data));
    this.carregaOutros();
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
#tamanho {
  position: relative;
  height: 300px;
  width: 60%;
}
#caixa-tamanho {
  margin-top: 140px;
  margin-left: 65%;
  width: 500px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}
#img-tamanho {
  width: 200px;
  height: 200px;
  border: 3px solid black;
  border-radius: 20px;
  margin: 10px;
}
#img-ings {
  border-radius: 15px;
}
#carrinho {
  height: 500px;
  width: 275px;
  position: fixed;
  background: rgba(87, 87, 87, 0.534);
  border-radius: 15px;
  margin: 95px 0px 0px 65%;
}
#separa {
  margin: 0px 0px 0px 5%;
  width: 90%;
  height: 4px;
  background: rgba(27, 27, 27, 0.534);
}
#itens {
  margin: 10px 0px 0px 5%;
  width: 90%;
  height: 80%;
}

.cb-pizza {
  padding: 10px;
  margin-top: 10px;
  background: rgb(0, 0, 0);
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
  color: white;
  width: 350px;
  height: 60px;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
}

.button-add {
  position: absolute;
  top: 0px;
  right: 2px;
  font-size: 24px;
  width: auto;
  height: auto;
  color: rgb(255, 255, 255);
  background: black;
  border: none;
  outline: none;
}

.button-ex {
  position: absolute;
  top: -4px;
  left: 2px;
  font-size: 30px;
  width: auto;
  height: auto;
  color: rgb(255, 255, 255);
  background: transparent;
  border: none;
  outline: none;
}
.scroll {
  margin: 90px 0px 0px 250px;
  height: 450px;
  width: 400px;
  overflow: auto;
}
#bots {
  margin: 0px 0px 0px 225px;
}
</style>