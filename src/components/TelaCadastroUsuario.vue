<template>
  <div class="fundo1">
    <div id="form-user">
      <h1>Cadastrar tipo usuário:</h1>
      <input class="inputz" type="text" placeholder="Nome" maxlength="50" v-model="nome" />
      <label class="label-nome">Nome</label>
      <br />
      <button class="botao" id="btn-salvar" @click="cadastrarTipoUsuario">Salvar Tipo Usuário</button>
      <button class="botao" id="btn-excluir" >Excluir Tipo Usuario</button>
      <br />
      <span v-if="mostrarCadastroTP">Tipo Usuário cadastrado com sucesso!</span>
      <span v-if="preencherCertoTP">Preencha o campo!</span>
      <br />
      <h1>Tela Cadastro Usuario</h1>
      <input
      class="inputz"
        type="text"
        placeholder="Nome"
        onkeypress="return event.charCode >96 && event.charCode <= 255 || event.charCode == 32 || event.charCode > 57 && event.charCode<=90"
        v-model="nomeUsuario"/>
      <br />
      <input class="inputz" type="text" placeholder="Email" v-model="email" />
      <br />
      <input class="inputz" type="password" placeholder="Senha" v-model="senha" id="senha" />
      <input type="checkbox" v-model="checkbox" @change="mostrarSenha" id="checkbox" />
      <span>Exibir/Ocultar senha</span>
      <br />
      <select class="cbx" v-model="idTpUser">
        <option  elected disabled value="0">Selecione o Tipo Usuário</option>
        <option :value="tpUser.id" v-for="tpUser in tipoUsuario" :key="tpUser.id">{{tpUser.nome}}</option>
      </select>
      <button class="botao" @click="cadastrarUsuario">Cadastrar Usuario</button>
      <br />
      <span v-if="mostrarCadastroU">Usuário cadastrado com sucesso!</span>
      <span v-if="preencherCertoUsuario">Preencha corretamente!</span>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data: function() {
    return {
      nome: "",
      nomeUsuario: "",
      email: "",
      senha: "",
      idTpUser: 0,
      tipoUsuario: [],
      user: [],
      mostrarCadastroU: false,
      mostrarCadastroTP: false,
      preencherCertoUsuario: false,
      preencherCertoTP: false,
      checkbox: false
    };
  },
  methods: {
    IrParaTelaMenuAdmin: function() {
      this.$router.push("/ViewTelaMenuAdmin");
    },
    mostrarSenha: function() {
      var senha = document.getElementById("senha");
      if (this.checkbox == true) {
        senha.type = "text";
      } else if (this.checkbox == false) {
        senha.type = "password";
      }
    },
    cadastrarTipoUsuario: function() {
      this.preencherCertoTP = false;
      if (this.nome != "") {
        axios
          .post("http://localhost:55537/api/TipoUsuario", {
            nome: this.nome
          })
          .then(resp => {
            console.log(resp.data);
          });
        this.mostrarCadastroTP = true;
        this.nome = "";
      } else {
        this.preencherCertoTP = true;
      }
    },
    cadastrarUsuario: function() {
      this.preencherCertoUsuario = false;
      if (
        this.nomeUsuario != "" &&
        this.email != "" &&
        this.senha != "" &&
        this.idTpUser != 0
      ) {
        axios
          .post("http://localhost:55537/api/Usuario", {
            nome: this.nomeUsuario,
            email: this.email,
            senha: this.senha,
            tipo_usuario: this.idTpUser
          })
          .then(resp => {
            console.log(resp.data);
          });
        this.nomeUsuario = "";
        this.email = "";
        this.senha = "";
        this.idTpUser = 0;
        this.mostrarCadastroU = true;
      } else {
        this.preencherCertoUsuario = true;
      }
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/TipoUsuario")
      .then(tipo_usuario => (this.tipoUsuario = tipo_usuario.data));
    axios
      .get("http://localhost:55537/api/Usuario")
      .then(usuario => (this.user = usuario.data));
  }
};
</script>
<style>
#form-user {
  margin: 20px 5% 0px 5%;
  width: 85vw;
}

.botao{
   height: 40px;
  width: fit-content;
  text-align: center;
  font-size: 14px;
  margin: 10px 0px 20px 9px;
  background-color: #1f2023;
  color: white;
  border: 3px rgba(83, 83, 83, 0.658) solid;
  -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  cursor: pointer;
}

.cbx{
  font-size: 14px;
  margin: 10px 0px 20px 9px;
  background-color: #1f2023;
  color: white;
  border: 3px rgba(83, 83, 83, 0.658) solid;
  -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  cursor: pointer;
  outline: none;
}

#senha{
  width: 250px;
}
</style>