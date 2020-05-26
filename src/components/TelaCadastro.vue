<template>
  <div class="cadastro">
<<<<<<< HEAD
    <img src="../imagens/transferir.jpg" />
    <h1>CADASTRO</h1>
    <input class="geral" type="text" placeholder="Nome" maxlength="50" v-model="nome" />
    <br />
    <input
      class="geral"
=======
    <h1>CADASTRO</h1>
    <input type="text" placeholder="Nome" maxlength="50" v-model="nome" />
    <br />
    <input
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
      type="text"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      placeholder="Telefone"
      maxlength="11"
      v-model="telefone"
    />
    <br />
<<<<<<< HEAD
    <input class="geral" type="text" placeholder="E-mail" maxlength="50" v-model="email" />
    <br />
    <input class="geral" type="password" placeholder="Senha" maxlength="20" v-model="senha" />
    <br />
    <input
      class="geral"
=======
    <input type="text" placeholder="E-mail" maxlength="50" v-model="email" />
    <br />
    <input type="password" placeholder="Senha" maxlength="20" v-model="senha" />
    <br />
    <input
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
      type="text"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      placeholder="CPF"
      maxlength="11"
      v-model="cpf"
    />
    <br />
    <input
<<<<<<< HEAD
      class="geral"
=======
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
      type="text"
      v-on:keyup.13="buscar"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      placeholder="CEP"
      maxlength="8"
      v-model="cep"
    />
    <br />
<<<<<<< HEAD
    <input class="geral" type="text" placeholder="Cidade" maxlength="20" v-model="cidade" />
    <br />
    <input class="geral" type="text" placeholder="Logradouro" maxlength="50" v-model="logradouro" />
    <br />
    <input class="geral" type="text" placeholder="Bairro" maxlength="25" v-model="bairro" />
    <br />
    <input
      class="geral"
=======
    <input type="text" placeholder="Cidade" maxlength="20" v-model="cidade" />
    <br />
    <input type="text" placeholder="Logradouro" maxlength="50" v-model="logradouro" />
    <br />
    <input type="text" placeholder="Bairro" maxlength="25" v-model="bairro" />
    <br />
    <input
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
      type="text"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      placeholder="Numero"
      maxlength="10"
      v-model="numero"
    />
    <br />
<<<<<<< HEAD
    <input class="geral" type="text" placeholder="UF" maxlength="2" v-model="uf" />
    <br />
    <input class="geral" type="text" placeholder="Complemento" maxlength="50" v-model="complemento" />
=======
    <input type="text" placeholder="UF" maxlength="2" v-model="uf" />
    <br />
    <input type="text" placeholder="Complemento" maxlength="50" v-model="complemento" />
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
    <br />
    <button id="botãoCadastrar" @click="salvarCadastro">Cadastrar</button>
    <br />
    <button id="botãoVoltar" @click="voltarMenu">Voltar para o Menu Principal</button>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      nome: "",
      telefone: "",
      email: "",
      senha: "",
      cpf: "",
      cep: "",
      cidade: "",
      logradouro: "",
      bairro: "",
      uf: "",
      complemento: "",
      numero: "",
      endereco: [],
      sla: []
    };
  },
  methods: {
    voltarMenu: function() {
      this.$router.push("/");
    },
    onlynumber: function(evt) {
      var theEvent = evt || window.event;
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
      //var regex = /^[0-9.,]+$/;
      var regex = /^[0-9.]+$/;
      if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
      }
    },
    buscar: function() {
      axios
        .get("viacep.com.br/ws/" + this.cep + "/json/")
        .then(cep => (this.sla = cep.data));
      console.log(this.sla);
    },
    salvarCadastro: function() {
      axios
        .post("http://localhost:55537/api/Cliente", {
          nome: this.nome,
          telefone: this.telefone,
          email: this.email,
          senha: this.senha,
          cpf: this.cpf,
          cep: this.cep,
          cidade: this.cidade,
          logradouro: this.logradouro,
          bairro: this.bairro,
          numero: this.numero,
          uf: this.uf,
          complemento: this.complemento
        })
        .then(resp => {
          console.log(resp.data);
          this.cliente.push({
            nome: this.nome,
            telefone: this.telefone,
            email: this.email,
            senha: this.senha,
            cpf: this.cpf,
            cep: this.cep,
            cidade: this.cidade,
            numero: this.numero,
            logradouro: this.logradouro,
            bairro: this.bairro,
            uf: this.uf,
            complemento: this.complemento
          });
        });
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Cliente")
      .then(cliente => (this.clientes = cliente.data));
  }
};
</script>

<style>
<<<<<<< HEAD
html,
body {
  background-color: #f6f6f6;
  width: 100%;
  height: 100%;
}
.cadastro {
  text-align: center;
}

.geral {
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  background-color: rgb(201, 201, 201);
  border: 2px solid black;
  padding: 5px;
  border-radius: 5px;
}

=======
.cadastro {
  text-align: center;
}
>>>>>>> 86f35e84788cd449bf0ab9ea5aa217efbfc0a783
#botãoVoltar {
  border: 2px solid white;
  color: white;
  background-color: black;
  cursor: pointer;
}
#botãoCadastrar {
  border: 2px solid white;
  color: white;
  background-color: black;
  cursor: pointer;
}
</style>