<template>
  <div class="fundo1">
    <div id="form-pedidos">
      <h1>Bem Vindo a Tela Pedidos</h1>
      <select class="cbx" @change="selecionaTipo()" v-model="filtrarTipo">
        <option value="0" selected disabled>Selecione algum pedido</option>
        <option value="1">Todos</option>
        <option value="2">Processados</option>
        <option value="3">Abertos</option>
      </select>

      <table cellpadding="5" id="tabelaPedidos">
        <thead>
          <tr>
            <th>Nome Cliente</th>
            <th>ID Pedido</th>
            <th>Processamento</th>
            <th>Produto</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ped, index) in pedSelected" :key="index">
            <td>{{ped.id_cliente}}</td>
            <td>{{ped.id}}</td>
            <td>{{ped.processamento}}</td>
            <td>produto</td>
            <td @click="Excluir(ped.id, index)" style="cursor:pointer" align="center">
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
      produtos: [],
      pedidos: [],
      filtrarTipo: 0,
      clientes: [],
      pedSelected: [],
      pedSelectTable: [],
      itensPedidos: []
    };
  },
  methods: {
    selecionaTipo: function() {
      if (this.filtrarTipo == 2) {
        this.pedSelected = [];
        this.pedidos.filter(p => {
          if (p.processamento == true) {
            this.pedSelected.push(p);
          }
        });
      } else if (this.filtrarTipo == 3) {
        this.pedSelected = [];
        this.pedidos.filter(p => {
          if (p.processamento == false) {
            this.pedSelected.push(p);
          }
        });
      } else if (this.filtrarTipo == 1) {
        this.pedSelected = [];
        this.pedSelected = this.pedidos;
      }
    },

    Excluir: function(id, index) {
      axios
        .delete("http://localhost:55537/api/Pedidos/" + id)
        .then(resp => console.log(resp.data));
      this.pedSelected.splice(index, 1);
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Produto")
      .then(produto => (this.produtos = produto.data));

    axios
      .get("http://localhost:55537/api/Pedidos")
      .then(pedido => (this.pedidos = pedido.data));

    axios
      .get("http://localhost:55537/api/Usuario")
      .then(cliente => (this.clientes = cliente.data));

    axios
      .get("http://localhost:55537/api/Itens_Pedido")
      .then(itensPedido => (this.itensPedidos = itensPedido));
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background-color: rgba(133, 131, 131, 0.76);
}
#pizzas {
  background-color: black;
  color: white;
  width: 60px;
  height: 60px;
  margin: 0px 0px 0px 5px;
}

#form-pedidos{
  border: 3px solid black;
  margin: 20px 5% 0px 5%;
}
</style>