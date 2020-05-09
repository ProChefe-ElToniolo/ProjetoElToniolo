<template>
  <div>
      <button id="botãoLogin" @click="logar">Login</button>
  </div>
</template>

<script>
export default {
data:function(){
    return{

    }
}, methods:{
    logar:function(){
        this.$router.push("/")
    }
}
}
</script>

<style>
#botãoLogin{
  border: 2px solid black;
  color: red;
  background-color: black;
  cursor: pointer;
}
</style>