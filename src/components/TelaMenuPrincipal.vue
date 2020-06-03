<template>
  <div id="container">

    <div class="scrollbar" id="style-14">
      <!-- <img src="../imagens/transferir.jpg" id="imgFundo" /> -->
      <div id="menu">
        <div id="certo">
          <nav>
            <ul class="list-menu">
              <li @click="IrParaTelaPedidos">DELIVERY</li>
              <li @click="Cardapio">CARDÁPIO</li>
              <li @click="IrParaTelaLogin">SOBRE</li>
              <li @click="IrParaTelaCadastro">PERFIL</li>
               <li @click="IrParaTelaAdmin">ADMIN</li>
            </ul>
          </nav>
          <!-- <router-link to = "ViewTelaMenuAdmin" id="botaoIrParaMenuAdmin">IrParaMenuAdmin</router-link> -->
          <div id="caixa-login" v-if="ocultarMenuLogin == false">
            <div id="menu-bar">
              <input type="text" placeholder="E-mail" class="inputs" v-model="email" />
              <input type="password" placeholder="Senha" class="inputs" v-model="senha" />
              <button id="botao-entrar" @click="entrar">Entrar</button>
              <br />
              <router-link
                to="ViewTelaCadastro"
                id="IrParaTelaCadastro"
              >Cadastre-se caso ainda não possua uma conta</router-link>
            </div>
          </div>

          <img src="../imagens/logopizza.png" id="logo" />
          <button
            id="botao-logar"
            @click="logar"
            v-if="ocultarBotaoLogin"
          >FAZER LOGIN OU CADASTRAR-SE</button>
          <button @click="sair" v-if="botaoSair" id="botaoSair">Sair</button>
          <img src="../imagens/comercial.png" id="userlogo" />
          <label id="labelLogado" v-if="logado">Logado:{{NomePessoaLogada}}</label>
        </div>
      </div>
      <div id="sombra-menu"></div>
      <div v-if="visualizarCardapio">
        <TelaCardapio />
      </div>
      <div id="menu-rodape"></div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import TelaCardapio from "../components/TelaCardapio.vue";
export default {
  components: {
    TelaCardapio
  },
  data: function() {
    return {
      email: "",
      senha: "",
      clientes: [],
      usuarios: [],
      ocultarMenuLogin: true,
      logado: false,
      NomePessoaLogada: "",
      ocultarBotaoLogin: true,
      botaoSair: false,
      visualizarCardapio: false
    };
  },
  methods: {
    logar: function() {
      return (this.ocultarMenuLogin = false);
    },
    entrar: function() {
      this.clientes.filter(c => {
        if (c.email == this.email && c.senha == this.senha) {
          alert("Logado como Cliente");
          this.logado = true;
          this.NomePessoaLogada = c.nome;
          this.ocultarMenuLogin = true;
          this.ocultarBotaoLogin = false;
          this.botaoSair = true;
          localStorage.setItem("usuarioLogado", JSON.stringify(c));
          localStorage.getItem;
        }
      });
      this.usuarios.filter(u => {
        if (u.email == this.email && u.senha == this.senha) {
          alert("Logado como Admin");
          localStorage.setItem("usuarioLogado", JSON.stringify(u));
          this.$router.push("/ViewTelaMenuAdmin");
        }
      });
    },
    sair: function() {
      this.NomePessoaLogada = "";
      this.ocultarBotaoLogin = true;
      this.logado = false;
      this.botaoSair = false;
    },
    Cardapio: function() {
      this.visualizarCardapio = true;
    },
    IrParaTelaPedidos: function() {
      this.$router.push("/ViewTelaPedidos");
    },
    IrParaTelaLogin: function() {
      this.$router.push("/ViewTelaLogin");
    },
    IrParaTelaCadastro: function() {
      this.$router.push("/ViewTelaCadastro");
    },
    IrParaTelaAdmin: function() {
      this.$router.push("/ViewTelaMenuAdmin");
    }
  },
  mounted() {
    axios
      .get("http://localhost:55537/api/Cliente")
      .then(cliente => (this.clientes = cliente.data));
    axios
      .get("http://localhost:55537/api/Usuario")
      .then(usuario => (this.usuarios = usuario.data));
  }
};
</script>

<style>
html,
body {
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  font-size: 14px;
  font-weight: 600;
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
  background-color: #f6f6f6;
  overflow: hidden;
  overflow-y: auto;
}
@media (max-width: 900px) {
  #menu {
    display: none;
  }
}
#imgFundo {
  width: 100%;
  height: 800px;
  position: absolute;
  opacity: 0.9;
}
#container {
  display: flex;
}
#menu {
  display: flex;
  position: absolute;
  padding: 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 70px;
  /* background-color: #006491; */
  background-color: #1f2023;
  -webkit-box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.77);
  -moz-box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.77);
  box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.77);
}
#certo {
  display: flex;
  position: absolute;
  height: auto;
  width: 71.72%;
  margin-left: 14.4%;
}
.list-menu {
  color: white;
  position: absolute;
  margin: 0 0 0 10%;
  padding: 0px;
  display: flex;
  list-style: none;
  line-height: 70px;
}
.list-menu li {
  text-align: center;
  padding: 0 20px 0 20px;
  /* margin: 0px 0px 0px 40px; */
  width: 120%;
  height: 70px;
}
.list-menu li:hover {
  background-color: black;
}
#botao-logar {
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  letter-spacing: 0.05rem;
  font-weight: 700;
  color: white;
  border: none;
  font-size: 14px;
  padding: 0px 14px 0px 60px;
  text-align: right;
  margin: 0px 0px 0px 60%;
  outline: none;
  width: auto;
  /* background-color: #00567e7c; */
  background-color: black;
  height: 70px;
}
#title {
  line-height: 38px;
  font-family: fantasy;
  font-size: 34px;
  color: white;
}
#userlogo {
  margin: 20px 0px 0px 61.7%;
  position: absolute;
  width: 30px;
  height: 30px;
}
#logo {
  position: absolute;
  margin: 0.2% 0px 0px 0px;
  width: 65px;
  height: 65px;
}
#menu-rodape {
  margin: 800px 0px 0px 0px;
  width: 100%;
  height: 200px;
  background-color: rgb(24, 24, 24);
}
#cadastrar {
  margin: 3px 5px 0px 0px 80px;
  outline: none;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0.568);
}
.inputs {
  margin: 40px 30px 0px 30px;
  padding: 7px;
  width: 230px;
  height: 30px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.555);
  border: 2px solid rgba(0, 0, 0, 0.671);
  outline: none;
}
#botao-entrar {
  margin: 40px 0px 10px 0px;
  width: 110px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.555);
  border: 2px solid rgba(0, 0, 0, 0.384);
  outline: none;
  cursor: pointer;
}
#menu-bar {
  text-align: center;
  position: absolute;
  margin: 17px 0px 0px 50px;
  width: 396px;
  height: 420px;
  border: 1px rgb(0, 0, 0) solid;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.877);
}
#caixa-login {
  text-align: center;
  position: absolute;
  display: flex;
  margin: 110px 0px 0px 440px;
  width: 380px;
  height: 440px;
}
#IrParaTelaCadastro {
  color: rgba(255, 255, 255, 0.555);
}
::-webkit-input-placeholder {
  color: black;
  font: 14px verdana, arial, sans-serif;
}
:-moz-placeholder {
  color: black;
  font: 14px verdana, arial, sans-serif;
}
::-moz-placeholder {
  color: black;
  font: 14px verdana, arial, sans-serif;
}
:-ms-input-placeholder {
  color: black;
  font: 14px verdana, arial, sans-serif;
}
#botaoIrParaMenuAdmin {
  color: pink;
}
#labelLogado {
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  letter-spacing: 0.05rem;
  font-weight: 700;
  position: absolute;
  color: red;
  border: none;
  font-size: 18px;
  padding-right: 4%;
  padding-left: 7%;
  text-align: right;
  margin: 25px 0px 0px 60%;
  outline: none;
  width: auto;
  height: 70px;
}
#botaoSair {
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  letter-spacing: 0.05rem;
  font-weight: 700;
  position: absolute;
  color: red;
  border: none;
  font-size: 18px;
  padding-right: 3%;
  padding-left: 3%;
  text-align: right;
  margin: 0px 0px 0px 75%;
  outline: none;
  width: auto;
  height: 70px;
  background-color: #006491;
  cursor: pointer;
}
::-webkit-scrollbar {
  width: 11px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(0, 0, 0);
}
::-webkit-scrollbar-track {
  background-color: #1f2023;
}
#menuCardapio {
  position: absolute;
  border: springgreen 5px solid;
  width: 100%;
  height: 75%;
  margin: 70px 0px 0px 0px;
}
</style>