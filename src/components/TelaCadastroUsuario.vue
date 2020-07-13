<template>
  <div class="fundo1">
    <div id="form-user">
      <div>

      <h1>Cadastrar tipo usuário:</h1>
      <div class="meu-box">
      <input class="inputz" type="text" placeholder="Nome" maxlength="50" v-model="nome" />
      <label class="label-nomeu">Nome</label>
      </div>
      <br />
      <button class="botao" id="btn-salvar" @click="cadastrarTipoUsuario">Salvar Tipo Usuário</button>
      <button class="botao" id="btn-excluir" >Excluir Tipo Usuario</button>
      <br />
      <span v-if="mostrarCadastroTP">Tipo Usuário cadastrado com sucesso!</span>
      <span v-if="preencherCertoTP">Preencha o campo!</span>
      </div>
      <div class="bagulho2">

      <h1>Cadastro Usuario</h1>
      <div class="meu-box">
      <input
      class="inputz"
        type="text"
        placeholder="Nome"
        onkeypress="return event.charCode >96 && event.charCode <= 255 || event.charCode == 32 || event.charCode > 57 && event.charCode<=90"
        v-model="nomeUsuario"/>
        <label class="label-nomeu">Nome</label>
        </div>
      <br />
      <div class="meu-box">
      <input class="inputz" type="text" placeholder="Email" v-model="email" />
      <label class="label-nomeu">Email</label>
      </div>
      <br />
      <div class="meu-box">
      <input class="inputz" type="password" placeholder="Senha" v-model="senha" id="senha" />
      <label class="label-nomeu">Senha</label>
      </div>
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
      <span v-if="utilizaNomeTipoUsuario">Esse nome de tipo de usuário já está sendo utilizado!</span>
      <span v-if="utilizaNomeUsuario">Esse nome de usuário já está sendo utilizado!</span>
      <span v-if="mesmoEmail">Esse e-mail já é utilizado!</span>
      </div>
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
      utilizaNomeUsuario: false,
      mesmoEmail: false
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
      this.mesmoEmail = false
      this.utilizaNomeUsuario = false
      this.preencherCertoUsuario = false
      this.utilizaNomeTipoUsuario = false
      this.mostrarCadastroU = false
      var email = this.email
      this.user.filter(u => {
        if(u.nome == this.nomeUsuario){
          this.utilizaNomeUsuario = true
        }
        if(u.email == email){
          this.mesmoEmail = true
        }
      })
      // if(this.utilizaNomeUsuario){
        // this.utilizaNomeUsuario = true
      // } 
      if(
        this.nomeUsuario != "" &&
        this.email != "" &&
        this.senha != "" &&
        this.idTpUser != 0 &&
        this.mesmoEmail == false &&
        this.utilizaNomeUsuario == false
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
        if(this.mesmoEmail == false && this.utilizaNomeUsuario == false){
          this.preencherCertoUsuario = true;
        }
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
  margin: 15px 5% 0px 5%;
  width: 85vw;
  display: flex;
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

.label-nomeu{
  text-align: center;
  border-radius: 2px;
  width: 60px;
  height: 14px;
  margin: 0px 0px 0px 5px;
  position: absolute;
  background-color: #1f2023;
  color: rgb(255, 255, 255);
  font-weight: bold;
  top: 17%;
  bottom: 0;
  left: 3%;
  right: 0;
  transition: 0.5s;
  opacity: 0.5;
}

.inputz:focus + .label-nomeu {
  /* margin: 10px; */
  z-index: 3;
  color: rgb(255, 255, 255);
  top: -0%;
  left: 3%;
  transition: 0.5s;
  opacity: 1;
}

.bagulho2{
  margin-left: 100px;
}
</style>