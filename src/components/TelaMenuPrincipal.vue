<template>
  <div id="container">
    <div class="scrollbar" id="style-14">
      <!-- <img src="../imagens/transferir.jpg" id="imgFundo" /> -->
      <div id="menu">
        <div id="certo">
          <img src="../imagens/sinais.png" alt id="hamb" @click="op" />
          <div v-if="open" id="caixaV">
            <nav id="vertical">
              <ul>
                <li @click="Pedidos">DELIVERY</li>
                <li @click="Cardapio">CARDÁPIO</li>
                <li @click="Sobre">SOBRE</li>
                <li @click="Admin">ADMIN</li>
              </ul>
            </nav>
          </div>
          <nav id="some">
            <ul class="list-menu">
              <li @click="Pedidos">DELIVERY</li>
              <li @click="Cardapio">CARDÁPIO</li>
              <li @click="Sobre">SOBRE</li>
              <li @click="Admin">ADMIN</li>
            </ul>
          </nav>
          <!-- <router-link to = "ViewTelaMenuAdmin" id="botaoIrParaMenuAdmin">IrParaMenuAdmin</router-link> -->

          <img src="../imagens/logopizza.png" id="logo" @click="Reset" />
          <button
            id="botao-logar"
            @click="logar"
            v-if="ocultarBotaoLogin"
          >FAZER LOGIN OU CADASTRAR-SE</button>
          <button @click="sair" v-if="botaoSair" id="botaoSair">Sair</button>
          <img src="../imagens/comercial.png" id="userlogo" @click="Perfil" />
          <label id="labelLogado" v-if="logado">Logado:{{NomePessoaLogada}}</label>
        </div>
         
            <div id="menu-bar" v-if="ocultarMenuLogin == false">
              <input type="text" placeholder="E-mail" class="inputs" v-model="email" />
              <input type="password" placeholder="Senha" class="inputs" v-model="senha" id="senha" />
              <button id="botao-entrar" @click="entrar">Entrar</button>
              <input type="checkbox" v-model="checkbox" @change="mostrarSenha" id="checkbox" />
              <br />
              <button @click="Cadastro">Cadastre-se caso ainda não possua uma conta</button>
            </div>
          
      </div>
      <div id="sombra-menu"></div>
      <div v-if="visualizarCardapio">
        <TelaCardapio />
      </div>
      <div v-if="visualizarPedidos">
        <TelaPedidos />
      </div>
      <div v-if="visualizarCadastro">
        <TelaCadastro />
      </div>
      <div v-if="visualizarSobre">
        <TelaSobre />
      </div>
    </div>
    <div id="menu-rodape"></div>
  </div>
</template>

<script>
const axios = require("axios");
import TelaCardapio from "../components/TelaCardapio.vue";
import TelaPedidos from "../components/TelaPedidos.vue";
import TelaCadastro from "../components/TelaCadastro.vue";
import TelaSobre from "../components/Sobre.vue";

export default {
  components: {
    TelaCardapio,
    TelaPedidos,
    TelaCadastro,
    TelaSobre
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
      visualizarCardapio: false,
      visualizarPedidos: false,
      visualizarSobre: false,
      visualizarCadastro: false,
      categorias: [],
      open: false,
      checkbox: false,
      logCorreto: false
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
          sessionStorage.setItem("usuarioLogado", JSON.stringify(c));
          console.log(sessionStorage.getItem("usuarioLogado"));
        }
      });
      this.usuarios.filter(u => {
        if (u.email == this.email && u.senha.trim() == this.senha.trim()) {
          alert("Logado como Admin");
          sessionStorage.setItem("usuarioLogado", JSON.stringify(u));
          this.$router.push("/ViewTelaMenuAdmin");
          this.logCorreto = true;
        }
      });
      if (this.senha == "" || this.email == "") {
        alert("Digite algo!");
      } else {
        alert("erou");
      }
    },
    mostrarSenha: function() {
      var senha = document.getElementById("senha");
      if (this.checkbox == true) {
        senha.type = "text";
      } else if (this.checkbox == false) {
        senha.type = "password";
      }
    },
    trocar: function() {
      this.visualizarSobre = false;
      this.visualizarCardapio = false;
      this.visualizarPedidos = false;
    },
    sair: function() {
      this.NomePessoaLogada = "";
      this.ocultarBotaoLogin = true;
      this.logado = false;
      this.botaoSair = false;
      this.visualizarSobre = false;
    },
    Cardapio: function() {
      this.trocar();
      this.visualizarCardapio = true;
      this.open=false
    },
    Pedidos: function() {
      this.trocar();
      this.visualizarPedidos = true;
      this.open=false
    },
    Perfil: function() {
      // if(){
      // }
    },
    Login: function() {
      this.$router.push("/ViewTelaLogin");
    },
    Cadastro: function() {
      this.$router.push("/ViewTelaCadastro");
    },
    Admin: function() {
      this.$router.push("/ViewTelaMenuAdmin");
    },
    Reset: function() {
      window.location.reload();
    },
    Sobre: function() {
      this.trocar();
      this.visualizarSobre = true;
      this.open=false
    },
    op: function() {
      if(this.open==false){
        this.open = true;
      }else{
        this.open=false
      }
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
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
  background-color: #f6f6f6;
  font-size: 14px;
  font-weight: 600;
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  overflow: hidden;
  overflow-y: scroll;
}

#container {
  display: flex;
}

#imgFundo {
  width: 100%;
  height: 800px;
  position: absolute;
  opacity: 0.9;
}

#hamb {
  display: none;
  position: absolute;
  margin: 17px 0px 0px 0px;
  width: 35px;
  height: 35px;
  margin-left: 80px;
  cursor: pointer;
}

@media (max-width: 899px) {
  #some {
    display: none;
  }
  #hamb {
    display: inline;
  }
}
@media (min-width: 900px) and (max-width: 1000px) {
  .list-menu li {
    padding: 0px 15px 0px 15px !important;
  }
}
@media (min-width:899px){
  #vertical{
    display: none;
  }
}

#menu {
  display: flex;
  position: absolute;
  padding: 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 70px;
  z-index: 1001;
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

#caixaV{
  z-index: 1005;
  height: 100px;  
  margin: 0px 0px 0px 125px;
  background-color: #1f2023;
  width: 80px;
  border: 2px solid black;
  border-radius: 5px;
  position: absolute;
  text-align: center;
}

#vertical {
  color: white;
  position: absolute;
  padding: 0;
  margin: 0;

}

#vertical ul{
  padding: 0;
  margin: 0;
  width: 80px;
}

#vertical ul li {
  list-style: none;  
  height: 25px;
  line-height: 25px;
  cursor: pointer;
}

#vertical ul li:hover{
  background-color: black;
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
  margin: 872px 0px 0px 0px;
  width: 100%;
  height: 200px;
  background-color: rgb(24, 24, 24);
  position: absolute;
}

#cadastrar {
  margin: 3px 5px 0px 0px 80px;
  outline: none;
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0.568);
}

.inputs {
  margin: 10% 7% 0px 7%;
  padding: 7px;
  width: 60%;
  height: 8.5%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.555);
  border: 2px solid rgba(0, 0, 0, 0.671);
  outline: none;
}

#botao-entrar {
  margin: 10% 0px 4% 0px;
  width: 25%;
  height: 10%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.555);
  border: 2px solid rgba(0, 0, 0, 0.384);
  outline: none;
  cursor: pointer;
}

#menu-bar {
  text-align: center;
  position: absolute;
  margin: 10% 0px 0px 40%;
  width: 25%;
  height: 450%;
  border: 1px rgb(0, 0, 0) solid;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.877);
}

/* #caixa-login {
  text-align: center;
  position: absolute;
  display: flex;
  margin: 10% 0px 0px 40%;
  width: 50%;
  height: 50%;
} */

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
</style>