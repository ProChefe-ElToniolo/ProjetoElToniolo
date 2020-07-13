<template>
  <div id="cima">
    <div id="form-entregador">
      <h1>Entregador:</h1>
      <select v-model="nomeEntregador" @change="SelecionarPedido(nomeEntregador)" class="cbx">
        <option value="0" selected disabled>Entregador</option>
        <option v-for="user in listarEntregador" :key="user.id">{{user.nome}}</option>
      </select>
      <label v-if="semPedidos">Esse entregador não possui pedidos!</label>
    <table border="5" style="cursor:pointer" class="tabela-st">
      <thead>
        <tr>
          <th>ID Entregador</th>
          <th>Pedidos</th>
          <th>Processamento</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ped, index) in pedidosEntregador" :key="index">
          <td>{{entregadorSelecionado.nome}}</td>
          <td>{{ped.processamento}}</td>
          <td @click="pedidoFinalizado(ped.id)">
            <img src="../imagens/lixo.png" id="botaoLixo">
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
      usuarios: [],
      usuariosEntregador: [],
      pedidos: [],
      pedidosEntregador: [],
      nomeEntregador: 0,
      entregadorSelecionado: [],
      entregaCliente: 0,
      semPedidos: false
    };
  },
  methods: {
    SelecionarPedido: function(nome) {
      // this.pedidosEntregador.splice(0, this.pedidosEntregador.length);
      this.pedidosEntregador = []
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
          console.log(this.pedidosEntregador);
          this.semPedidos = false
        }
      });

      if (this.pedidosEntregador == 0) {
        this.semPedidos = true
      }
    },

    pedidoFinalizado: function(id) {
      this.pedidos.filter(n => {
        if (id == n.id) {
          this.entregaCliente = n.id_cliente;
        }
      });
      axios
        .put("http://localhost:55537/api/Pedidos/" + id, {
          id_cliente: this.entregaCliente,
          id_entregador: this.entregadorSelecionado.id,
          processamento: true
        })
        .then(resp => console.log(resp.data));
      this.pedidosEntregador.splice(this.pedidosEntregador.indexOf(id, 1));
      console.log(this.pedidosEntregador);
      this.semPedidos = false
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
#cima {
  width: 100%;
  height: 100%;
  background-color: rgb(133, 131, 131);
  display: flex;
}
#form-entregador {
  margin: 20px 5% 0px 5%;
  width: 85vw;
}
#botaoLixo{
  margin: 0 0 0 0;
}
</style> 