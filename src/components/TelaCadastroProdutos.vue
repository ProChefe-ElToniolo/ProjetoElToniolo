<template>
  <div>
      <h1>Bem Vindo a Tela Cadastro Produtos</h1>
        <button @click="IrParaTelaMenuAdmin">IrParaTelaMenuAdmin</button><br>
        <img id="img" src="cadastrarProd.png" alt=""><br>
        <!-- <button type="text" @click="pegarImagem()">Imagem</button><br> -->
        <!-- <div v-for="(produto, index) in carregar" :key="index"> -->
        <label>Nome</label><br>
        <input type="text" v-model="nome"><br>
        <label>Descrição</label><br>
        <textarea id="inputMulti" rows="10" cols="38" v-model="descricao" maxlength="200"></textarea><br>
        <label>Preço</label><br>
        <input type="text" v-model="preco"><br>
        <label>Imagens</label><br>
        <label>Categorias</label><br>
        <select v-model="idCat">
            <option value="0" selected disabled>Categoria desejada</option>
            <option :value="cat.id" v-for="cat in categorias" :key="cat.id">{{cat.nome}}</option>  
        </select><br>
        <label>Medidas</label><br>
           <select v-model="medida">
                <option value="0" selected disabled>Unidade de Medida</option>
                <option>Kg</option>  
                <option>L</option>
                <option>g</option> 
                <option>Familia</option> 
                <option>Exagerada</option> 
                <option>Média</option> 
                <option>Broto</option> 
                <option>Grande</option> 
           </select><br>
    <table border="1" class="produtos">
          <thead>
              <tr>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Preço</th>
               </tr>
          </thead>
          <tbody>
              <tr v-for="(prod, index) in prods" :key="index" @click="selecionar(prod.id)">
                  <td>{{prod.nome}}</td>
                  <td>{{prod.descricao}}</td>
                  <td>{{prod.preco}}</td>
            </tr>
          </tbody>
      </table>
      <button @click="salvar">Salvar</button>
      <button @click="excluir">Excluir</button>
      <button @click="ingredientes">Ingredientes</button>
      <div v-if="visivel" v-show="true">
        <TelaIngredientes/>
      </div>
  </div>
</template>

<script>
import TelaIngredientes from '../components/TelaIngredientes.vue'
const axios = require('axios')
export default {
    components:{
        TelaIngredientes
    },
    data:function(){
        return{
            categorias: [],
            nome: '',
            descricao: '',
            preco: '',
            idCat: 0,
            imagem: '',
            medida: '',
            prods: [],
            ProdSelecionado: [],
            existe: false,
            visivel: false
        }
    }, methods:{
        IrParaTelaMenuAdmin:function(){
            this.$router.push('/ViewTelaMenuAdmin')
            console.log(this.$store.state.prods)
        },
        salvar:function(){
            this.prods.filter( e => {
                if(e.id == this.ProdSelecionado.id){
                    this.existe = true;
                }
            })
            if(this.existe){
                alert("entrouAlterar")
                axios.put("http://localhost:55537/api/Produto/"+this.ProdSelecionado.id, {
                    nome: this.nome,
                    descricao: this.descricao,
                    preco: this.preco,
                    medida_tamanho: this.medida,
                    id_categoria: this.idCat,
                    imagem: this.imagem
                })
            }
            else{
                alert("entrouSalvar")
                console.log(this.idCat)
                axios.post("http://localhost:55537/api/Produto", {
                    nome: this.nome,
                    descricao: this.descricao,
                    preco: this.preco,
                    medida: this.medida,
                    id_categoria: this.idCat,
                    imagem: this.imagem
                })
            }
            this.existe = false;
        },
        selecionar: function(id){
            this.selecionado = id
            this.prods.filter(f => {
                if(f.id == id){
                    this.ProdSelecionado = f
                }
            })
            this.nome = this.ProdSelecionado.nome
            this.descricao = this.ProdSelecionado.descricao
            this.preco = this.ProdSelecionado.preco
            this.medida = this.ProdSelecionado.medida_tamanho
            this.idCat = this.ProdSelecionado.id_categoria
            this.imagem = this.ProdSelecionado.imagem
        },
        excluir: function(){
            axios.delete("http://localhost:55537/api/Produto/"+this.ProdSelecionado.id)
        }, ingredientes: function(){
            this.visivel = true;
        }
    },
    mounted(){
        axios.get("http://localhost:55537/api/Categoria").then(categoria => this.categorias = categoria.data)
        axios.get("http://localhost:55537/api/Produto").then(produto => this.prods = produto.data)
    }
}
</script>

<style>
 #imgProd{
     width: 80px;
     height: 80px;
 }
 #output{
      width: 80px;
     height: 80px;
 }
 #inputMulti{
    word-wrap: break-word;
    height: 90px;
 }
.produtos tr:hover{
    background: rgb(109, 235, 224);
    color: #ffffff;
}
.produtos tr{
    cursor: pointer;
}
</style>