<template>
  <div id="container">
        <div id="menu">
            <div class="list-menu"> 
                <ul>
                    <li @click="IrParaTelaPedidos">DELIVERY</li>
                    <li @click="IrParaTelaCardapio">CARDÁPIO</li>
                    <li @click="IrParaTelaLogin">SOBRE</li>
                    <li @click="IrParaTelaCadastro">PERFIL</li>
                </ul>
            </div>
            <router-link to = "ViewTelaMenuAdmin" id="botaoIrParaMenuAdmin">IrParaMenuAdmin</router-link>
              <div id="caixa-login" v-if="ocultar == false">
                <div id="menu-bar">
                <input type="text" placeholder="E-mail" class="inputs" v-model="email">
                <input type="password" placeholder="Senha" class="inputs" v-model="senha">
                <button id="botao-entrar" @click="entrar">Entrar</button><br>
                </div>
            </div>
            <img src="../imagens/logo.png" id="logo"> 
            <button id="botao-logar" @click="logar">LOGAR</button>
<<<<<<< HEAD
            <router-link to = "ViewTelaCadastro" id="cadastrar">Cadastre-se</router-link> 
=======
                <router-link to="ViewTelaCadastro" id="cadastrar">Cadastre-se</router-link> 
>>>>>>> ce643e98d9bc180c988cb9fb8adcad50be60cb0f
        </div>
        <div id="sombra-menu"></div>
            <div id="menu-rodape"></div>
    </div>
</template>

<script>
export default {
data:function(){
          return{
            email: '',
            senha: '',
            ocultar: true
          } 
        }, methods:{
            logar: function(){
                return this.ocultar = false;
            },entrar: function(){
                return this.ocultar = true;
            },
            IrParaTelaCardapio:function(){
              this.$router.push("/ViewTelaCardapio")
            },IrParaTelaPedidos:function(){
              this.$router.push("/ViewTelaPedidos")
            }, IrParaTelaLogin:function(){
              this.$router.push("/ViewTelaLogin")
            }, IrParaTelaCadastro:function(){
              this.$router.push("/ViewTelaCadastro")
            }
          }
        }
</script>

<style>
  html, body{
        height: 100%;
        width: 100%;
        padding: 0px;
        margin: 0px;
        background-color: white;
    }

    #container{
        display: flex; 
    }

    #menu{
        display: flex;
        position: absolute;
        padding: 0px;
        margin: 0px 0px 0px 0px;
        width: 100%;
        height: 80px;
        background-color: rgb(0, 81, 119);
       -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
        -moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
        box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77);
    }
    #botao-logar{
        font-weight: bold;
        color: white;
        border: none;
        font-size: 14px;
        margin: 0px 0px 0px 15%;
        outline: none;
        width: 160px;
        background-color: rgba(0, 0, 0, 0.233);
        height: 80px;
    }
 
    #title{
        line-height: 38px;
        font-family: fantasy;
        font-size: 34px;
        color: white;
    }

    #logo{
        margin: 20px 0px 0px 45%;
        width: 180px;
        height: 165px;
    }
    #menu-rodape{
        margin: 800px 0px 0px 0px;
        width: 100%;
        height: 200px;
        background-color:  rgb(0, 81, 119);
    }
    #cadastrar{
        margin: 3px 5px 0px 0px 80px;
        outline: none;
        font-weight: bold;
        color: rgb(0, 0, 0);
        text-decoration-color: rgba(0, 0, 0, 0.568);
    }
    .inputs{
        margin: 40px 0px 0px 0px;
        padding: 7px;
        width: 230px;
        height: 30px; 
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.555);
        border: 2px solid rgba(0, 0, 0, 0.671);
        outline: none;
    }
    #botao-entrar{
        margin: 80px 0px 0px 39px;
        width: 110px;
        height: 40px;        
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.555);
        border: 2px solid rgba(0, 0, 0, 0.384);
        outline: none;
    }
    #menu-bar{
        position: absolute;
        margin: 17px 0px 0px 50px;
        width: 396px;
        height: 420px;
        border: 1px rgba(209, 49, 49, 0.103) solid;
        border-radius: 10px;
        background-color: rgba(187, 63, 31, 0.295);
    }
    #caixa-login{
        position: absolute; 
        /* display: flex; */
        margin: 110px 0px 0px 440px;
        width: 380px;
        height: 440px;
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

    #botaoIrParaMenuAdmin{
        color: pink;
    }
</style>