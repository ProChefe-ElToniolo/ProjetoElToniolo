<template>
  <div class="sla">
    <div class="partes" >
    <h1 class="titulo">Cadastre-se:</h1>
  <input id="nomeI" class="geral" type="text" placeholder="Nome" maxlength="50" onkeypress="return event.charCode >96 && event.charCode <= 255 || event.charCode == 32 || event.charCode > 57 && event.charCode<=90" v-model="nome" />
    <br/>
    <input id="telefoneI" class="geral" type="text" v-mask="'(##) #####-####'" onkeypress="return event.charCode >= 48 && event.charCode <= 57" placeholder="Telefone" v-model="telefone"/>
    <input id="cpfI" class="geral" v-mask="'###.###.###-##'" type="text" onkeypress="return event.charCode >= 48 && event.charCode <= 57" placeholder="CPF"  v-model="cpf" />
    <br/>    
    <input id="emailI" class="geral" type="text" placeholder="E-mail" maxlength="50" v-model="email"/>
    <br />
    <input class="geral" type="password" placeholder="Senha" maxlength="20" v-model="senha" id="senha" />
    <input type="checkbox" v-model="checkbox" @change="mostrarSenha" id="checkbox"><span class="checkbox">Exibir/Ocultar</span>
    <br />
    <button class="butao" id="botãoCadastrar" @click="salvarCadastro">CADASTRAR</button>
    <br/>
    <span id="correto" v-if="mostrarSucesso">Cadastrado com sucesso!</span>
    <span class="span" v-if="preencherCorreto">Preencha os dados corretamente</span>
    <span class="span" v-if="mesmoNome">Esse telefone já existe!</span>
    </div>
    <div class="partes" >
    <button class="butao" id="botãoVoltar">X</button>
    <input id="cepI" class="geral" type="text" @change="buscarCep" v-mask="'#####-###'" v-on:keyup.13="buscar" placeholder="CEP" v-model="cep"/>
    <br />
    <input id="cidadeI" class="geral" type="text" placeholder="Cidade" onkeypress="return event.charCode >96 && event.charCode <= 255 || event.charCode == 32 || event.charCode > 57 && event.charCode<=90" maxlength="20" v-model="cidade" />
    <input id="ufI" class="geral" type="text" placeholder="UF" onkeypress="return event.charCode >96 && event.charCode <= 255 || event.charCode == 32 || event.charCode > 57 && event.charCode<=90" maxlength="2" v-model="uf" />
    <br />
    <input id="logradouroI" class="geral" type="text" placeholder="Logradouro" onkeypress="return event.charCode >96 && event.charCode <= 255 || event.charCode == 32 || event.charCode > 57 && event.charCode<=90" maxlength="50" v-model="logradouro" />
    <br />
    <input id="bairroI" class="geral" type="text" placeholder="Bairro" onkeypress="return event.charCode >96 && event.charCode <= 255 || event.charCode == 32 || event.charCode > 57 && event.charCode<=90" maxlength="25" v-model="bairro" />
    <input id="numeroI" class="geral" type="text" onkeypress="return event.charCode >= 48 && event.charCode <= 57" placeholder="Numero" maxlength="10" v-model="numero"/>
    <br />
    <input id="complementoI" class="geral" type="text" placeholder="Complemento" maxlength="50" v-model="complemento" />
    <br/>
    </div>
    <br>
  </div>
</template>
<script>
const axios = require("axios");
import cep from 'cep-promise'
export default {
  data: function() {
    return {
      nome: "",
      telefone: "",
      email: "",
      senha: "",
      cpf: "",
      cep: "",
      cidade: "",
      logradouro: "",
      bairro: "",
      uf: "",
      complemento: "",
      numero: "",
      checkbox: false,
      endereco: [],
      mostrarSucesso: false,
      preencherCorreto: false,
      mesmoNome: false,
      clientes: []
    };
  },
  methods: {
<<<<<<< HEAD
=======
    voltarMenu: function() {
      this.$emit('chamou')
    },
>>>>>>> 4f9c3a0205d3761f46c381408c841e7ab0a1a171
    mostrarSenha: function(){
      var senha = document.getElementById("senha")
      if(this.checkbox == true){
        senha.type = "text"
      }
      else if(this.checkbox == false){
        senha.type = "password"
      }
    },    
    buscarCep: function() {
      if(this.cep.length == 9){
        let cepLimpo = this.cep.replace(/\D/g,'');
        cep(cepLimpo).then(data =>{
        this.cidade = data.city
        this.bairro = data.neighborhood
        this.logradouro = data.street
        this.uf = data.state
        })
      }
    },
    salvarCadastro: function() {
      this.preencherCorreto = false
      var telefone = this.telefone.replace(/\D/g,'')
      this.clientes.filter(c => {
        if(c.telefone == telefone){
           this.mesmoNome = true 
           location.reload()
        }
      })
        if(this.nome != "" &&
          this.telefone != "" &&
          this.email != "" &&
          this.senha != "" &&
          this.cpf != "" &&
          this.cep != "" &&
          this.cidade != "" &&
          this.logradouro != "" &&
          this.bairro != "" &&
          this.numero != "" &&
          this.uf != "" && 
          this.mesmoNome == false){
            axios
            .post("http://localhost:55537/api/Cliente", {
              nome: this.nome,
              telefone: this.telefone.replace(/\D/g,''),
              email: this.email,
              senha: this.senha,
              cpf: this.cpf.replace(/\D/g,''),
              cep: this.cep.replace(/\D/g,''),
              cidade: this.cidade,
              logradouro: this.logradouro,
              bairro: this.bairro,
              numero: this.numero,
              uf: this.uf,
              complemento: this.complemento
            })
            .then(resp => {
              console.log(resp.data);
            });
            this.nome = "",
            this.telefone = "",
            this.email = "",
            this.senha = "",
            this.cpf = "",
            this.cep = "",
            this.cidade = "",
            this.logradouro = "",
            this.bairro = "",
            this.numero = "",
            this.uf = "",
            this.complemento = ""
            this.mostrarSucesso = true
        }
        else{
          this.preencherCorreto = true
        }
      }
    }, mounted(){
      axios
        .get("http://localhost:55537/api/Cliente")
        .then(cliente => this.clientes = cliente.data)
    }
  }
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
 .titulo{
   color: white;
   font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
    position: absolute;
    margin: 5% 0 5% 10%;
 }
 .sla{
   width: 100%;
   height: 100%;
   display: flex;
 }

 .checkbox{
   color: white;
 }

#bagu{
  color: white;
}

.span{
  margin-left: 12.5%;
  color: rgb(185, 23, 23);
  font-weight: 100;
}

#correto{
  margin-left: 12.5%;
  color: rgb(32, 148, 38);
  font-weight: 100;
}

#botãoVoltar{
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 2px;
  position: absolute;
  top: -20px;
  right: -20px;
}

.geral {
  /* font-family: One Dot Condensed Bold, Arial Narrow, Arial, Helvetica,
    sans-serif;
  background-color: rgb(201, 201, 201);
  border: 2px solid black;
  padding: 5px;
  border-radius: 5px; */
  color: white;
  padding:1.5%;
  margin: 4% 4% 4% 12.5%;
  width: 20%;
  height: 4%;
  border-radius: 5px;
  background-color: rgb(141, 141, 141);
  border: 2px solid rgba(0, 0, 0, 0.671);
  outline: none;
  font-size: 16px;
  -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
}

.geral:focus{
  transform: scale(1.07);
}

.butao{
  border-radius: 5px;
  margin: 1% 1% 1% 12.5%;
  background-color: rgb(141, 141, 141);
  border: 2px solid rgb(49, 49, 49);
  outline: none;
  cursor: pointer;
  padding: 1%;
  -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
}

.butao:hover{
  background-color: rgb(71, 71, 71);
  color: white;
  transform: scale(1.03);
}

.partes{
  width: 50%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

#nomeI{
  width: 70%;
  margin-top: 22%;
}
#telefoneI{
width: 30%;
}
#emailI{
  width: 70%;
}
#senha{
  width: 46%;
}
#cpfI{
  width: 30%;
  margin-left: 2%;
}
#cepI{
   width: 70%;
   margin-top: 22%;
}
#cidadeI{
   width: 50%;
}
#logradouroI{
  width: 70%;
}
#bairroI{
  width: 40%;
}
#numeroI{
  width: 20%;
  margin-left: 2%;
}
#ufI{
   width: 10%;
   margin-left: 2%;
}
#complementoI{
  width: 70%;
}
</style>