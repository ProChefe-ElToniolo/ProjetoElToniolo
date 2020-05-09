<template>
  <div>
      <button id="botãoCadastro" @click="cadastrar">Cadastrar-se</button>
  </div>
</template>

<script>
export default {
    data:function(){
        return{

        }
    }, methods:{
        cadastrar:function(){
            this.$router.push("/ViewTelaPrincipal")
        }
    }
}
</script>

<style>
#botãoCadastro{
  border: 2px solid white;
  color: white;
  background-color: black;
  cursor: pointer;
}
</style>