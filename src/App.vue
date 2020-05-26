<template>
  <div>
    <router-view/>
    </div>
</template>

<script>
export default {
 mounted(){
   var user = sessionStorage.getItem('usuarioLogado')
   if(this.$store.state.usuarioLogado != null){
     this.$store.state.usuarioLogado.push(JSON.parse(user))
   }
 } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
