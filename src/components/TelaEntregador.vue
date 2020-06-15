<template>
  <div>
    <div>
      <h1>Bem Vindo a Tela de Entregador</h1>
      <select v-model="nomeEntregador" @change="SelecionarPedido(nomeEntregador)">
        <option value="0" selected disabled>Selecione o ID do entregador</option>
        <option v-for="user in listarEntregador" :key="user.id">{{user.nome}}</option>
      </select>
    </div>
    <table border="5" style="cursor:pointer" class="tabela-st">
      <thead>
        <tr>
          <th>ID Entregador</th>
          <th>Pedidos</th>
          <th>Vai trabaia vagabundo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ped, index) in pedidosEntregador" :key="index">
          <td>{{entregadorSelecionado.nome}}</td>
          <td>{{ped.processamento}}</td>
          <td>
            <input type="checkbox" @click="pedidoFinalizado(ped.id)" id="cbx" />
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="IrParaTelaMenuAdmin">Voltar a Tela Menu Admin</button>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data: function() {
    return {
      usuarios: [],
      usuariosEntregador: [],
      pedidos: [],
      pedidosEntregador: [],
      nomeEntregador: "",
      entregadorSelecionado: [],
      entregaCliente: 0
    };
  },
  methods: {
    SelecionarPedido: function(nome) {
      this.pedidosEntregador.splice(0, this.pedidosEntregador.length);
      this.usuariosEntregador.filter(u => {
        if (u.nome == nome) {
          this.entregadorSelecionado = u;
        }
      });
      this.pedidos.filter(p => {
        if (
          p.id_entregador == this.entregadorSelecionado.id &&
          p.processamento == false
        ) {
          this.pedidosEntregador.push(p);
        }
      });
      console.log(this.pedidosEntregador);
    },
    pedidoFinalizado: function(id) {
      this.pedidos.filter(n => {
        if (id == n.id) {
          this.entregaCliente = n.id_cliente;
        }
      });
      console.log(this.entregaCliente);
      axios
        .put("http://localhost:55537/api/Pedidos/" + id, {
          id_cliente: this.entregaCliente,
          id_entregador: this.entregadorSelecionado.id,
          processamento: true
        })
        .then(resp => console.log(resp.data));
<<<<<<< HEAD
        this.pedidosEntregador.splice(this.pedidosEntregador.indexOf(id), 1);
    }, IrParaTelaMenuAdmin:function(){
        this.$router.push("/")
    }, 
},
mounted(){
    axios.get("http://localhost:55537/api/Usuario").then(usuario => this.usuarios = usuario.data)
    axios.get("http://localhost:55537/api/Pedidos").then(pedido => this.pedidos = pedido.data)
    }, 
    computed:{
  listarEntregador(){
=======
    },
    IrParaTelaMenuAdmin: function() {
      this.$router.push("/");
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Usuario")
      .then(usuario => (this.usuarios = usuario.data));
    axios
      .get("http://localhost:55537/api/Pedidos")
      .then(pedido => (this.pedidos = pedido.data));
  },
  computed: {
    listarEntregador() {
>>>>>>> 5a777a8fe17b7189d53657d2fb6aeb6f9cdba42b
      this.usuarios.filter(u => {
        if (u.tipo_usuario == 3) {
          this.usuariosEntregador.push(u);
        }
      });
      return this.usuariosEntregador;
    }
  }
};
</script>

<style>
</style> 