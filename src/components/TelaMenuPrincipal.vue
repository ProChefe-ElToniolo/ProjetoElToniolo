<template>
  <div id="container">
      <img src="../imagens/transferir.jpg" id="imgFundo">
        <div id="menu">
            <div id="certo">
                <nav> 
                    <ul class="list-menu">
                        <li @click="IrParaTelaPedidos">DELIVERY</li>
                        <li @click="IrParaTelaCardapio">CARDÁPIO</li>
                        <li @click="IrParaTelaLogin">SOBRE</li>
                        <li @click="IrParaTelaCadastro">PERFIL</li>
                    </ul>                
                </nav>
                <!-- <router-link to = "ViewTelaMenuAdmin" id="botaoIrParaMenuAdmin">IrParaMenuAdmin</router-link> -->
                <div id="caixa-login" v-if="ocultar == false">
                    <div id="menu-bar">
                    <input type="text" placeholder="E-mail" class="inputs" v-model="email">
                    <input type="password" placeholder="Senha" class="inputs" v-model="senha">
                    <button id="botao-entrar" @click="entrar">Entrar</button><br>
                    <router-link to = "ViewTelaCadastro" id="IrParaTelaCadastro">Cadastre-se caso ainda não possua uma conta</router-link>
                    </div>
        </div>
                <img src="../imagens/logopizza.png" id="logo"> 
                <button id="botao-logar" @click="logar">FAZER LOGIN OU CADSTRA-SE</button>
                <img src="../imagens/comercial.png" id="userlogo">
                
            </div>
                <router-link to = "/ViewTelaCadastroProdutos">Produtos</router-link>
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
                if(this.email == "1" && this.senha == ""){
                    this.$router.push("/ViewTelaMenuAdmin")
                }
                else{
                    return this.ocultar = true;
                }
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
        font-family: One Dot Condensed Bold,Arial Narrow,Arial,Helvetica,sans-serif;
        font-size: 14px;
        font-weight: 600;
        height: 100%;
        width: 100%;
        padding: 0px;
        margin: 0px;
        background-color: #f6f6f6;        
    }

    @media (max-width: 900px){
    #menu{
        display: none;
    }
}

    #imgFundo{
        width: 100%;
        height: 800px;
        position:absolute;
        opacity: 0.9;
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
        height: 70px;
        /* background-color: #006491; */
        background-color: #1f2023;
       -webkit-box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.77);
        -moz-box-shadow:    0px 7px 5px rgba(0, 0, 0, 0.77);
        box-shadow:         0px 7px 5px rgba(0, 0, 0, 0.77);
    }

    #certo{
        display: flex;
        position: absolute;
        height: auto;
        width: 71.72%;
        margin-left: 14.4%;
    }

    .list-menu{
        color: white;        
        position: absolute;
        margin: 0 0 0 10%;
        padding: 0px;
        display: flex;
        list-style: none;
        line-height: 70px;
    }

    .list-menu li{
        text-align: center;
        padding: 0 8% 0 8%;
        width: 120%;
        height: 70px;
    }

    .list-menu li:hover{            
        /* background-color: #00567e7c; */
        background-color: black;
    }

    #botao-logar{
        font-family: One Dot Condensed Bold,Arial Narrow,Arial,Helvetica,sans-serif;
        letter-spacing: .05rem;
        font-weight: 700;
        color: white;
        border: none;
        font-size: 14px;
        padding-right: 4%;
        padding-left: 7%;
        text-align: right;
        margin: 0px 0px 0px 60%;
        outline: none;
        width: auto;
        /* background-color: #00567e7c; */
        background-color: black;
        height: 70px;
    }
 
    #title{
        line-height: 38px;
        font-family: fantasy;
        font-size: 34px;
        color: white;
    }

    #userlogo{
        margin: 20px 0px 0px 61.7%;
        position: absolute;
        width: 30px;
        height: 30px;
    }

    #logo{
        position: absolute;
        margin: 0.2% 0px 0px 0px;
        width: 65px;
        height: 65px;
    }
    #menu-rodape{
        margin: 800px 0px 0px 0px;
        width: 100%;
        height: 200px;
        /* background-color:  rgb(0, 81, 119); */
        background-color: rgb(24, 24, 24);
    }
    #cadastrar{
        margin: 3px 5px 0px 0px 80px;
        outline: none;
        font-weight: bold;
        color: rgb(0, 0, 0);
        text-decoration-color: rgba(0, 0, 0, 0.568);
    }
    .inputs{
        margin: 40px 30px 0px 30px;
        padding: 7px;
        width: 230px;
        height: 30px; 
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.555);
        border: 2px solid rgba(0, 0, 0, 0.671);
        outline: none;
    }
    #botao-entrar{
        margin: 40px 0px 10px 0px ;
        width: 110px;
        height: 40px;        
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.555);
        border: 2px solid rgba(0, 0, 0, 0.384);
        outline: none;
    }
    #menu-bar{
        text-align: center;
        position: absolute;
        margin: 17px 0px 0px 50px;
        width: 396px;
        height: 420px;
        border: 1px rgb(0, 0, 0) solid;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.877);
    }
    #caixa-login{
        text-align: center;
        position: absolute; 
        display: flex; 
        margin: 110px 0px 0px 440px;
        width: 380px;
        height: 440px;
    }

    #IrParaTelaCadastro{
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

    #botaoIrParaMenuAdmin{
        color: pink;
    }
</style>