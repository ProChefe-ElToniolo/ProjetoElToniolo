<template>
  <div class="cadastro">
      <h1>CADASTRO</h1>
      <!-- VERIFICAR SE USAR OU NÃO PLACEHOLDER OU SÓ OS LABEL >-->
        <label>Nome:</label>
       <input type="text" placeholder="Digite seu nome Completo:" maxlength="50" v-model="nome">
       <br>
       <label>Telefone:</label>
       <input type="text" onkeypress="return event.charCode >= 48 && event.charCode <= 57" placeholder="Digite seu Telefone:" maxlength="11" v-model="telefone">
       <br>
       <label>E-mail:</label>
       <input type="text" placeholder="Digite seu e-mail:" maxlength="50" v-model="email">
       <br>
       <label>Senha:</label>
       <input type="password" placeholder="Digite uma senha:" maxlength="20" v-model="senha">
       <br>
       <label>CPF:</label>
       <input type="text" onkeypress="return event.charCode >= 48 && event.charCode <= 57" placeholder="Digite seu CPF:" maxlength="11" v-model="cpf">
       <br>
       <label>CEP:</label>
       <input type="text" onkeypress="return event.charCode >= 48 && event.charCode <= 57" placeholder="Digite seu CEP:" maxlength="8" v-model="cep">
       <br>
       <label>Cidade:</label>
       <input type="text" placeholder="Cidade" maxlength="20" v-model="cidade"> 
       <br>
       <label>Logradouro:</label>
       <input type="text" placeholder="Logradouro" maxlength="50" v-model="logradouro">
       <br>
       <label>Bairro:</label>
       <input type="text" placeholder="Bairro" maxlength="25" v-model="bairro" >
       <br>
       <label>Número</label>
       <input type="text" onkeypress="return event.charCode >= 48 && event.charCode <= 57" placeholder="Número" maxlength="5" v-model="numero">
       <br>
       <label>UF::</label>
       <input type="text" placeholder="UF" maxlength="2" v-model="uf">
       <br>
       <label>Complemento:</label>
       <input type="text" placeholder="Complemento" maxlength="50" v-model="complemento"> 
       <br>
       <button id="botãoCadastrar" @click="salvarCadastro">Cadastrar</button>
       <br>
       <button id="botãoVoltar" @click="voltarMenu">Voltar para o Menu Principal</button>
        
       <!-- VERIFICAR SE USAR OU NÃO PLACEHOLDER OU SÓ OS LABEL >-->
  </div>
  
</template>

<script>
const axios = require('axios')
export default {
    data:function(){
        return{
        nome: '',
        telefone: '',
        email: '',
        senha: '',
        cpf: '',
        cep: '',
        cidade: '',
        logradouro: '',
        bairro: '',
        numero: '',
        uf: '',
        complemento: ''
        }
    }, methods:{
        voltarMenu:function(){
            this.$router.push("/")
        }, 
            onlynumber: function(evt){
            var theEvent = evt || window.event;
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode( key );
            //var regex = /^[0-9.,]+$/;
            var regex = /^[0-9.]+$/;
            if( !regex.test(key) ) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
            }
        }, 
            salvarCadastro: function(){
            axios.post("http://localhost:55537/api/Cliente",{
            nome: this.nome,
            telefone: this.telefone,
            email: this.email,
            senha: this.senha,
            cpf: this.cpf,
            cep: this.cep,
            cidade: this.cidade,
            logradouro: this.logradouro,
            bairro: this.bairro,
            numero: this.numero,
            uf: this.uf,
            complemento: this.complemento
        }).then(resp =>{
            console.log(resp.data)
            this.cliente.push({
            nome: this.nome,
            telefone: this.telefone,
            email: this.email,
            senha: this.senha,
            cpf: this.cpf,
            cep: this.cep,
            cidade: this.cidade,
            logradouro: this.logradouro,
            bairro: this.bairro,
            numero: this.numero,
            uf: this.uf,
            complemento: this.complemento
                })
            })
        }
    }, 
    mounted(){
        axios.get("http://localhost:55537/api/Cliente").then(cliente => this.clientes = cliente.data)
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
#botãoCadastrar{
  border: 2px solid white;
  color: white;
  background-color: black;
  cursor: pointer;
}
</style>