<template>
        <div id="meiuca">
      <div class="topo">
        <!-- <h1>Olá, nós somos ElToniolo Pizzaria</h1> -->
        <br>
        <!-- <p>História</p> -->
        <div id="contato">
            <p class="texto" id="titulo">Contato</p>
            <p class="texto" >Horário de atendimento: 14:00 as 22:00
                <ol class="texto" >Dias de semana: Terça a Domingo </ol>
                <ol class="texto" >Finais de semana e Feriados</ol>
            </p>
            <p class="texto" >Email: eltoniolopizzaria@gmail.com</p>
            <i class="fa fa-envelope-o"></i>
            <input type="text" placeholder="Mande-nos sua opinião!">
            <img id="iconeEmail" src="https://img.icons8.com/ios-filled/50/000000/send-mass-email.png"/>
            <br>
            <img id="iconeTelefone" src="https://img.icons8.com/ios-filled/50/000000/phone-not-being-used.png"/>
            <p title="Ligar!" class="texto" >Telefone: (47) 94865-2793</p>
            <p class="texto" >Acesse nossas redes sociais:</p>
            <a href="https://www.facebook.com/Pizzaria-El-Toniolo-111382537306668/" title="Facebook"><img id="iconeFacebook" src="https://img.icons8.com/android/24/000000/facebook.png"/></a>
            <a href="https://twitter.com/ElToniolo" title="Twitter"><img id="iconeTwitter" src="https://img.icons8.com/android/24/000000/twitter.png"/></a>
            <a href="https://www.instagram.com/pizzariaeltoniolo/" title="Instagram"><img id="iconeInstagram" src="https://img.icons8.com/android/24/000000/instagram.png"/></a>
        </div>
        <div id="Sobre" v-if="telaPedidos">
            <TelaPedidos/>
        </div>
        </div>
        <button id="pedido">FAÇA SEU PEDIDO NA<br>TELA DELIVERY!</button>
      </div>
</template>
<script>
import TelaPedidos from "../components/TelaPedidos.vue";
export default {
  components:{
    TelaPedidos
  },
  data:function(){
    return{
      telaPedidos: false
    }
  }, methods:{
    irDelivery:function(){
      this.telaPedidos=true
    }
  }
}
</script>

<style>
html, body{
  width: 100%;
  height: 100%;
}

#contato{
  margin: 150px 0px 0px 0px;
  width: 60%;
  height: 100%;
  text-align: center;
  border: 2px solid black;
}

.texto{
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
   'Open Sans', 'Helvetica Neue', sans-serif;    
}

#titulo{
  font-size: 21px;
  margin: 0px;
  padding: 0px;
}

#meiuca{
  display: flex;
  position: absolute;
  height: auto;
  width: 71.72%;
  margin-left: 14.4%;
}

#pedido{
  position: absolute;
  margin: 150px 0px 0px 566px;
  width: 200px;
  height: 305px;
  color: black;
  background-color:rgb(203, 133, 31);
  border: none;
  border-radius: 2px;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

#iconeEmail{
  height: 30px;
  margin: 0 0 0 10px;
  position: absolute;
  cursor: pointer;
}

#iconeTelefone{
  height: 30px;
  margin: 5px 0 0 98px;
  position:fixed;
}

#iconeFacebook{
  margin: 0 0 0 10px;
}

#iconeTwitter{
  margin: 0 0 0 38px;
}

#iconeInstagram{
  margin: 0 0 0 40px;
}
</style>