<template>
  <div>
    <h1>Bem Vindo a Tela de Entregador</h1>
    <select>
      <option value="0" selected disabled>Selecione o ID do entregador</option>
      <option
        v-for="user in usuarios"
        :key="user.id"
      >{{user.id}} - {{user.nome}} - {{user.tipo_usuario}}</option>
    </select>

    <table border="5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Tipo Usuário</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in usuarios" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.nome}}</td>
          <td>{{user.tipo_usuario}}</td>
        </tr>
      </tbody>
    </table>

    <table border="2">
      <thead>
        <tr>
          <th>ID</th>
          <th>Entregador</th>
          <th>Processamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ped in pedidos" :key="ped.id">
          <td>{{ped.id}}</td>
          <td>{{ped.id_entregador}}</td>
          <td>{{ped.processamento}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data: function() {
    return {
      usuarios: [],
      pedidos: []
    };
  },
  methods: {},
  mounted() {
    axios
      .get("http://localhost:55537/api/Usuario")
      .then(usuario => (this.usuarios = usuario.data));
    axios
      .get("http://localhost:55537/api/Pedidos")
      .then(pedido => (this.pedidos = pedido.data));
  }
};
</script>

<style>
</style>