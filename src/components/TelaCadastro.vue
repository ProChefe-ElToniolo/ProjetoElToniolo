<template>
  <div class="cadastro">
    <h1>CADASTRO</h1>
    <input class="geral" type="text" placeholder="Nome" maxlength="50" v-model="nome" />
    <br />
    <input
      class="geral"
      type="text"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      placeholder="Telefone"
      maxlength="11"
      v-model="telefone"
    />
    <br />
    <input class="geral" type="text" placeholder="E-mail" maxlength="50" v-model="email" />
    <br />
    <input class="geral" type="password" placeholder="Senha" maxlength="20" v-model="senha" />
    <br />
    <input
      class="geral"
      type="text"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      placeholder="CPF"
      maxlength="11"
      v-model="cpf"
    />
    <br />
    <input
      class="geral"
      type="text"
      v-on:keyup.13="buscar"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      placeholder="CEP"
      maxlength="8"
      v-model="cep"
    />
    <br />
    <input class="geral" type="text" placeholder="Cidade" maxlength="20" v-model="cidade" />
    <br />
    <input class="geral" type="text" placeholder="Logradouro" maxlength="50" v-model="logradouro" />
    <br />
    <input class="geral" type="text" placeholder="Bairro" maxlength="25" v-model="bairro" />
    <br />
    <input
      class="geral"
      type="text"
      onkeypress="return event.charCode >= 48 && event.charCode <= 57"
      placeholder="Numero"
      maxlength="10"
      v-model="numero"
    />
    <br />
    <input class="geral" type="text" placeholder="UF" maxlength="2" v-model="uf" />
    <br />
    <input class="geral" type="text" placeholder="Complemento" maxlength="50" v-model="complemento" />
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
      sla: [],
      existe: false
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
      // axios
      //   .get("viacep.com.br/ws/" + this.cep + "/json/")
      //   .then(cep => (this.sla = cep.data));
      // console.log(this.sla);
    },
    salvarCadastro: function() {
        if (
          this.nome != "" &&
          this.telefone != "" &&
          this.email != "" &&
          this.senha != "" &&
          this.cpf != "" &&
          this.cep != "" &&
          this.cidade != "" &&
          this.logradouro != "" &&
          this.bairro != "" &&
          this.numero != "" &&
          this.uf != "" &&
          this.complemento != ""
        ) {
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
            });
        }
      }
    }
  }
</script>

<style>
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