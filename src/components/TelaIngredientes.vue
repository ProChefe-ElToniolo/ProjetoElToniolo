<template>
   <div>
       <h4>INGREDIENTES</h4>
        <label>Nome</label><br>
        <input type="text" v-model="nome"><br>
        <label>Estoque</label><br>
        <input type="number" v-model="estoque"><br>
        <label>Categoria</label><br>
       <select v-model="idCatIng">
           <option value="0" select disabled>Escolhan a categoria</option>
           <option :value="cat.id" v-for="cat in categorias" :key="cat.id">
            {{cat.nome}}</option>
       </select><br>
       <button>Excluir</button>
       <button>Salvar</button>
   </div>
</template>

<script>
const axios = require('axios')
export default {
   data:function(){
       return{
            ingredientes: [],
            categorias: [],
            nome: '',
            estoque: 0,
            idCatIng: 0
       } 
   },
   mounted(){
    axios.get("http://localhost:55537/api/Ingrediente/").then(ingrediente => this.ingredientes = ingrediente.data)
    axios.get("htpp://localhost:55537/api/Categoria/").then(categoria => this.categorias = categoria.data)
   }
}
</script>

<style>

</style>