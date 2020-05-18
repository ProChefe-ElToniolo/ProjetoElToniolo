<template>
    <div>
        <h1>Bem Vindo a Tela Cadastro Usuário</h1>
        <input type="text" placeholder="Nome">
        <br>
         <select>
             <option></option>
         </select>
        <button @click="IrParaTelaMenuAdmin">IrParaTelaMenuAdmin</button>
    </div>
</template>

<script>
export default {
data:function(){
    return{

    } 
}, methods:{
    IrParaTelaMenuAdmin:function(){
        this.$router.push("/ViewTelaMenuAdmin")
    }
}
}
</script>

<style>

</style>