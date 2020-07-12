<template>
  <div class="fundo1">
    <div id="form-user">
      <h1>Tela Cadastro do TIPO USUARIO</h1>
      <input type="text" placeholder="Nome" maxlength="50" v-model="nome" />
      <br />
      <button @click="cadastrarTipoUsuario">Salvar Tipo Usuário</button>
      <br />
      <button>Excluir Tipo Usuario</button>
      <br />
      <button>IrParaTelaMenuAdmin</button>
      <br />
      <span v-if="mostrarCadastroTP">Tipo Usuário cadastrado com sucesso!</span>
      <span v-if="preencherCertoTP">Preencha o campo!</span>
      <br />
      <h1>Tela Cadastro Usuario</h1>
      <input
        type="text"
        placeholder="Nome"
        onkeypress="return event.charCode >96 && event.charCode <= 255 || event.charCode == 32 || event.charCode > 57 && event.charCode<=90"
        v-model="nomeUsuario"
      />
      <br />
      <input type="text" placeholder="Email" v-model="email" />
      <br />
      <input type="password" placeholder="Senha" v-model="senha" id="senha" />
      <input type="checkbox" v-model="checkbox" @change="mostrarSenha" id="checkbox" />
      <span>Exibir/Ocultar senha</span>
      <br />
      <select v-model="idTpUser">
        <option selected disabled value="0">Selecione o Tipo Usuário</option>
        <option :value="tpUser.id" v-for="tpUser in tipoUsuario" :key="tpUser.id">{{tpUser.nome}}</option>
      </select>
      <button @click="cadastrarUsuario">Cadastrar Usuario</button>
      <br />
      <span v-if="mostrarCadastroU">Usuário cadastrado com sucesso!</span>
      <span v-if="preencherCertoUsuario">Preencha corretamente!</span>
      <span v-if="utilizaNomeTipoUsuario">Esse nome de tipo de usuário já está sendo utilizado!</span>
      <span v-if="utilizaNomeUsuario">Esse nome de usuário já está sendo utilizado!</span>
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
      checkbox: false,
      utilizaNomeTipoUsuario: false,
      utilizaNomeUsuario: false
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
      this.utilizaNomeTipoUsuario = false
      this.utilizaNomeUsuario = false
      this.tipoUsuario.filter(t => {
        if(this.nome == t.nome){
            this.utilizaNomeTipoUsuario = true
        }
      })
      if(this.utilizaNome){
        this.utilizaNomeTipoUsuario = true
      }
      else if (this.nome != "" && this.utilizaNomeTipoUsuario == false) {
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
      this.utilizaNomeUsuario = false
      this.preencherCertoUsuario = false
      this.utilizaNomeTipoUsuario = false
      this.user.filter(u => {
        if(u.nome == this.nomeUsuario){
          this.utilizaNomeUsuario = true
        }
      })
      if(this.utilizaNomeUsuario){
        this.utilizaNomeUsuario = true
      }

      else if(
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
  border: 3px solid black;
  margin: 20px 5% 0px 5%;
  width: 85vw;
}
</style>