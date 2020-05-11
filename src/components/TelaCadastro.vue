<template>
  <div class="cadastro">
      <h1>CADASTRO</h1>
       <input type="text" placeholder="Nome" maxlength="50" v-model="nome">
       <br>
       <input type="number" placeholder="Telefone" maxlength="11" v-model="telefone">
       <br>
       <input type="text" placeholder="E-mail" maxlength="50" v-model="email">
       <br>
       <input type="password" placeholder="Senha" maxlength="20" v-model="senha">
       <br>
       <input type="number" placeholder="CPF" maxlength="11" v-model="CPF">
       <br>
       <input type="number" placeholder="CEP" maxlength="50" v-model="CEP">
       <br>
       <input type="text" placeholder="Logradouro" maxlength="50" v-model="logradouro">
       <br>
       <input type="text" placeholder="Bairro" maxlength="25" v-model="bairro">
       <br>
       <input type="text" placeholder="UF" maxlength="2" v-model="UF">
       <br>
       <input type="text" placeholder="Complemento" maxlength="50" v-model="complemento">
       <br>
       <button id="botãoCadastrar" @click="salvarCadastro">Cadastrar</button>
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
</style>