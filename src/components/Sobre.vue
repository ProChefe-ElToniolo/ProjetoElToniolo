<template>
      <div class="topo">
        <h1>Bem-Vindo à tela sobre</h1>
        <p>Olá, nós somos El Toniolo Pizzaria</p>
        <p>História</p>
        <div id="contato">
            <p>Contato</p>
            <p>Horário de atendimento:
                <ol>Dias de semana: </ol>
                <ol>Finais de Semana e Feriados:</ol>
            </p>
            <p>Email:eltoniolopizzaria@gmail.com</p>
            <i class="fa fa-envelope-o"></i>
            <input type="text" placeholder="Mande-nos sua opinião!">
            <img id="iconeEmail" src="https://img.icons8.com/ios-filled/50/000000/send-mass-email.png"/>
            <br>
            <img id="iconeTelefone" src="https://img.icons8.com/ios-filled/50/000000/phone-not-being-used.png"/>
            <p title="Ligar!">Telefone: (47) 94865-2793</p>
            <p>Acesse nossas redes sociais:</p>
            <a href="" title="Facebook"><img id="iconeFacebook" src="https://img.icons8.com/android/24/000000/facebook.png"/></a>
            <a href="" title="Twitter"><img id="iconeTwitter" src="https://img.icons8.com/android/24/000000/twitter.png"/></a>
            <a href="" title="Instagram"><img id="iconeInstagram" src="https://img.icons8.com/android/24/000000/instagram.png"/></a>
        </div>
        <button @click="irDelivery" id="pedido">FAÇA SEU PEDIDO!</button>
        <div id="Sobre" v-if="telaPedidos">
            <TelaPedidos/>
        </div>
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
#contato{
  width: 300px;
  height: 320px;
  border: 2px solid black;
}

#pedido{
  color: black;
  background-color:rgb(203, 133, 31);
  border: none;
  border-radius: 2px;
  outline: none;
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
  margin: 5px 0 0 145px;
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