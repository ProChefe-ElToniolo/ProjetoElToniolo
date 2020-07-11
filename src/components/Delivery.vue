<template>
<<<<<<< HEAD
  <div></div>
=======
  <div class="topo">
    <label>Faça seu pedido</label>
    <div id="tamanho" v-if="escolherTamanho">
      <div id="caixa-tamanho" v-for="(sabor, index) in medidas" :key="index">
        <button @click="mudar">
          {{sabor.nome}}
          {{sabor.qnt_sabores}}
        </button>
      </div>
    </div>
    <!-- <div id="borda" v-if="escolherBorda">
      <div id="caixa-borda" v-for="(sabor, index) in medidas" :key="index">
        <button @click="mudar">
          {{sabor.nome}}
          {{sabor.qnt_sabores}}
        </button>
      </div>
    </div> -->
  </div>
>>>>>>> af58690c73e30f26dcec6bdc970a3f030f763e6a
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      medidas: [],
      sabores: [],
      escolherTamanho: true
    };
  },
  methods: {
    mudar: function (){
      this.escolherTamanho = false;
    }
    // filtrar: function(){
    //   console.log(this.medidas)
    //   this.medidas.filter(u => {
    //     if(u.qnt_sabores > 0){
    //       return this.sabores.push(u)
    //     }
    //   })
    // }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Medida")
      .then(med => (this.medidas = med.data));
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
  width: 80%;
  margin-left: 20%;
}
#caixa-tamanho {
  margin: 10px;
}
</style>