<template>
  <div class="cadastro">
      <h1>CADASTRO</h1>
       <input type="text" placeholder="Nome" maxlength="50" v-model="nome">
       <br>
       <input type="text" onkeypress="return onlynumber()" placeholder="Telefone" max="11" v-model="telefone">
       <br>
       <input type="text" placeholder="E-mail" maxlength="50" v-model="email">
       <br>
       <input type="password" placeholder="Senha" maxlength="20" v-model="senha">
       <br>
       <input type="text" onkeypress="return onlynumber()" placeholder="CPF" max="11" v-model="cpf">
       <br>
       <input type="text" onkeypress="return onlynumber()" placeholder="CEP" max="8" v-model="cep">
       <br>
       <input type="text" placeholder="Logradouro" maxlength="50" v-model="logradouro">
       <br>
       <input type="text" placeholder="Bairro" maxlength="25" v-model="bairro">
       <br>
       <input type="text" placeholder="UF" maxlength="2" v-model="uf">
       <br>
       <input type="text" placeholder="Complemento" maxlength="50" v-model="complemento">
       <br>
       <button id="botãoCadastrar" @click="salvarCadastro">Cadastrar</button>
       <br>
       <button id="botãoVoltar" @click="voltarMenu">Voltar para o Menu Principal</button>
  </div>
  
</template>

<script>

export default {
    data:function(){
        return{
            nome: '',
            telefone: '',
            email: '',
            senha: '',
            CPF: '',
            CEP: '',
            logradouro: '',
            bairro: '',
            UF: '',
            complemento: ''
        }
    }, methods:{
        voltarMenu:function(){
            this.$router.push("/")
        }
    }, onlynumber: function(evt){
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        //var regex = /^[0-9.,]+$/;
         var regex = /^[0-9.,]+$/;
        if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
         }
    }
}
</script>

<style>
.cadastro{
    text-align: center;
}
#botãoVoltar{
  border: 2px solid white;
  color: white;
  background-color: black;
  cursor: pointer;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none; 
}
</style>