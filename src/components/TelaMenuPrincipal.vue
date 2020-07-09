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
                <li @click="Cardapio">CARDÁPIO</li>
                <li @click="Pedidos">DELIVERY</li>
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
          <!-- CLICAR ABRE O PERFIL -->
          <button id="perfil" v-if="logado">
            <img src="../imagens/comercial.png" id="userlogo" @click="Perfil" />
            <label id="labelLogado">{{NomePessoaLogada}}</label>
          </button>
          <button @click="sair" v-if="botaoSair" id="botaoSair">Sair</button>
        </div>
            <transition name="bounce">         
          <div id="modal-login"  v-if="ocultarMenuLogin == false">
            <div id="menu-bar" v-if="ocultarMenuLogin == false">
              <button id="fecharLogin" @click="logar">x</button>
              <input type="text" placeholder="E-mail" class="inputs" v-model="email" />
              <input type="password" placeholder="Senha" class="inputs" v-model="senha" id="senha" />
              <br>
              <input type="checkbox" v-model="checkbox" @change="mostrarSenha" id="checkbox" />
              <br>
              <button id="botao-entrar" @click="entrar">Entrar</button>
              <br />
              <button @click="Cadastro" id="cadastrarse" >Cadastre-se caso ainda não possua uma conta</button>
            </div>  
          </div>        
            </transition>
      </div>
      <!-- <div id="sombra-menu"></div> -->
      
      <div v-if="visualizarCardapio">
        <TelaCardapio />
      </div>
      <div v-if="visualizarPedidos">
        <Delivery />
      </div>
      <div v-if="visualizarCadastro">
        <TelaCadastro />
      </div>
      <div v-if="visualizarSobre">
        <TelaSobre />
      </div>
    </div>
    <!-- <div id="menu-rodape"></div> -->
  </div>
</template>

<script>
const axios = require("axios");
import TelaCardapio from "../components/TelaCardapio.vue";
import TelaCadastro from "../components/TelaCadastro.vue";
import TelaSobre from "../components/Sobre.vue";
import Delivery from "../components/Delivery.vue"

export default {
  components: {
    TelaCardapio,
    TelaCadastro,
    TelaSobre,
    Delivery
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
      logCorreto: false,
      senhaIncorreta: false
    };
  },
  methods: {
    logar: function() {
      if(this.ocultarMenuLogin == true){
      return (this.ocultarMenuLogin = false);
      }else{
        return (this.ocultarMenuLogin = true);
      }
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
          this.logCorreto = true;
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
      if(this.senha == "" || this.email == ""){
        alert("Digite algo!")
        }
      else{
        this.senhaIncorreta = true        
        this.email = "",
        this.senha = ""
      }
      console.log(this.senhaIncorreta);
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
      this.open = false;
    },
    Pedidos: function() {
      this.trocar();
      this.visualizarPedidos = true;
      this.open = false;
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
      this.open = false;
    },
    op: function() {
      if (this.open == false) {
        this.open = true;
      } else {
        this.open = false;
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
body,html {
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
  background-color: rgba(133, 131, 131, 0.76);
  font-size: 14px;
  font-weight: 600;
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  overflow: hidden;
  overflow-y: scroll;
  
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

#container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(133, 131, 131, 0.76);
}

/* #tlgd{
  margin-top: 72px;
  width: 71.72%;
  margin-left: 14.4%;
} */

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
@media (min-width: 899px) {
  #vertical {
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

#caixaV {
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

#vertical ul {
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

#vertical ul li:hover {
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
  position: absolute;
  margin: -15px 0px 0px -80px;
  width: 30px;
  height: 30px;
}

#logo {
  position: absolute;
  margin: 0.2% 0px 0px 0px;
  width: 65px;
  height: 65px;
}
/* #menu-rodape {
  margin: 872px 0px 0px 0px;
  width: 100%;
  height: 200px;
  background-color: rgb(24, 24, 24);
  position: absolute;
<<<<<<< HEAD
} */

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
  background-color: rgb(141, 141, 141);
  border: 2px solid rgba(0, 0, 0, 0.671);
  outline: none;
}

#botao-entrar {
  margin: 10% 0px 4% 0px;
  width: 25%;
  height: 10%;
  border-radius: 10px;
  background-color: rgb(141, 141, 141);
  border: 2px solid rgba(0, 0, 0, 0.384);
  outline: none;
  cursor: pointer;
}

#modal-login{
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  right: 0px;
}

#fecharLogin{
  background-color: rgb(141, 141, 141);
  font-size: 18px;
  width: 40px;
  height: 40px;
  position: absolute;
  top: -15px;
  right: -15px;
  border-radius: 50%;
  border: none;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,.4);
  cursor: pointer;
  outline: none;
}

#cadastrarse{
  background-color: rgb(15, 15, 15);
  border: none;
  outline: none;
  color: white;
}

#menu-bar {
  border: 10px solid rgb(32, 32, 32);
  border-radius: 20px;  
  text-align: center;
  position: relative;
  width: 30%;
  height: 50%;
  background-color: rgb(15, 15, 15);
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

#labelLogado {
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  letter-spacing: 0.05rem;
  font-weight: 700;
  position: absolute;
  color: rgb(255, 255, 255);
  border: none;
  font-size: 18px;
  padding-right: 4%;
  padding-left: 7%;
  text-align: right;
  margin: -9px 0px 0px -105px;
  outline: none;
  width: auto;
  height: 70px;
}
#perfil {
  width: 200px;
  height: 70px;
  background-color: black;
  margin: 0px 0px 0px 65%;
  border: none;
  outline: none;
}

#botaoSair {
  font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  letter-spacing: 0.05rem;
  font-weight: 700;
  position: absolute;
  border: none;
  outline: none;
  color: white;
  font-size: 18px;
  padding-right: 3%;
  padding-left: 3%;
  text-align: right;
  background-color: black;
  margin: 0px 0px 0px 90%;
  outline: none;
  width: auto;
  height: 70px;
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

#labelSenhaIncorreta {
  color: red;
  background-color: green;
  cursor: pointer;
  position: absolute;
  width: 130px;
  border: 2px solid yellow;
  margin: 10px 0 0 40px;
  }
</style>