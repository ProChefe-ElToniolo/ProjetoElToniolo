<template>
  <div class="topo">
    <div id="tamanho" v-if="escolherTamanho">
      <div id="caixa-tamanho">
        <div @click="mudar(0)" id="img-tamanho">
          <img src="../imagens/Exagerada.png" id="img-ings" />
        </div>
        <div @click="mudar(1)" id="img-tamanho">
          <img src="../imagens/Grande.png" id="img-ings" />
        </div>
        <div @click="mudar(2)" id="img-tamanho">
          <img src="../imagens/Media.png" id="img-ings" />
        </div>
        <div @click="mudar(3)" id="img-tamanho">
          <img src="../imagens/Pequena.png" id="img-ings"/>
        </div>
      </div>
    </div>
      <div id="carrinho">
        <h2>Acompanhe seu pedido!</h2>
        <div id="separa"></div>
        <div id="itens" v-for="item in itens" :key="item">
          {{item}}
        </div>
      </div>
    <!-- <div id="borda" v-if="escolherBorda">
      <div id="caixa-borda" v-for="(sabor, index) in medidas" :key="index">
        <button @click="mudar">
          {{sabor.nome}}
          {{sabor.qnt_sabores}}
        </button>
      </div>
    </div>-->
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
      itens: []
    };
  },
  methods: {
    mudar: function(id) {
      this.escolherTamanho = false;
      this.itens.push(id);
      console.log(id)
    },
    filtrar: function() {
      setTimeout(() => {
        this.medidas.filter(u => {
          if (u.qnt_sabores > 0) {
            return this.sabores.push(u);
          }
          console.log(this.sabores);
        });
      }, 300);
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Medida")
      .then(med => (this.medidas = med.data), this.filtrar());
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
  position: absolute;
  height: 300px;
  width: 60%;
  margin-left: 35%;
}
#caixa-tamanho {
  margin: 30px;
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
#carrinho{
  height: 500px;
  width: 275px;
  position: absolute;
  background: rgba(87, 87, 87, 0.534);
  border-radius: 15px;
  margin: 0px 0px 0px 88%;
}
#separa{
  margin: 0px 0px 0px 5%;
  width: 90%;
  height: 4px;
    background: rgba(27, 27, 27, 0.534);
}
#itens{
  margin: 10px 0px 0px 5%;
  width: 90%;
  height: 80%;
}
</style>