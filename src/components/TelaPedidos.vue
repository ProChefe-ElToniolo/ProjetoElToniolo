<template>
  <div class="topo">
    <h1>Bem Vindo a Tela Pedidos</h1>
    <div>
      <select id="selectPedidos" @change="selecionaTipo()" v-model="filtrarTipo">
        <option value="0" selected disabled>Selecione algum pedido</option>
        <option value="1">Todos</option>
        <option value="2">Processados</option>
        <option value="3">Abertos</option>
      </select>

      <table>
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
          <tr v-for="ped in pedidos" :key="ped.id">
            <td>{{ped.id_cliente}}</td>
            <td>{{ped.id}}</td>
            <td>{{ped.processamento}}</td>
            <td>produto</td>
            <td><img id="lixo" src="../imagens/lixo.png"></td>
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
      clientes:[],
      processados:[],
      abertos:[],
      todos:[],
      itensPedidos:[],
    };
  },
  methods:{
    selecionaTipo:function(){        
      if(this.filtrarTipo == 2){
          this.pedidos.filter(p => {
          if(p.processamento == true){
            this.pedidos.push(p);            
          }
        })
      }
      else if(this.filtrarTipo == 3){
        this.pedidos.filter(p => {
          if(p.processamento == false){
            this.pedidos.push(p);
          }
        })
      }
      else if(this.filtrarTipo == 1){
        this.todos = [].concat(this.pedidos, this.abertos, this.processados)
        console.log(this.todos);
        this.pedidos = this.todos
      }
    }
  },
  mounted(){
    axios
      .get("http://localhost:55537/api/Produto")
      .then(produto => (this.produtos = produto.data));

    axios
      .get("http://localhost:55537/api/Pedidos")
      .then(pedido => this.pedidos = pedido.data)  
    
    axios
      .get("http://localhost:55537/api/Usuario")
      .then(cliente => this.clientes = cliente.data);  

    axios
      .get("http://localhost:55537/api/Itens_Pedido")
      .then(itensPedido => this.itensPedidos = itensPedido)  
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background-color: white;
}
#pizzas{
  background-color: black;
  color: white;
  width: 60px;
  height: 60px;
  margin: 0px 0px 0px 5px;
}
</style>