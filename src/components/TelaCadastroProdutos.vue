<template>
  <div>
      <h1>Bem Vindo a Tela Cadastro Produtos</h1>
        <button @click="IrParaTelaMenuAdmin">IrParaTelaMenuAdmin</button><br>
        
        <img id="img" src="cadastrarProd.png" alt=""><br>
        <button type="text" @click="pegarImagem()">Imagem</button><br>
        <label>Nome</label><br>
        <input type="text"><br>
        <label>Descrição</label><br>
        <input type="text"><br>
        <label>Preço</label><br>
        <input type="number"><br>
        <label>Quantidade</label><br>
           <select>
                <option value="0" selected disabled>Unidade de Medida</option>
                <option >Kg</option>  
                <option>g</option> 
                <option>L</option> 
           </select><br>

    <table border="1">
          <thead>
              <tr>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Preço</th>
               </tr>
          </thead>
          <tbody>
              <tr v-for="func in funcionarios" :key="func.id" @click="selecionar(func.id)">
                  <td>{{func.nome}}</td>
            </tr>
          </tbody>
      </table>
        <!-- <img id='imgProd' src="../imagens/cadastrarProd.png"><br>
        <input type='file' accept='image/*' onchange='openFile()'> -->
  </div>



</template>

<script>
export default {
data:function(){
    return{
        listarFunc: ''
    }
}, methods:{
    IrParaTelaMenuAdmin:function(){
        this.$router.push('/ViewTelaMenuAdmin')
        }
    }, computed:{
        listarFunc: function(){
            return this.$store.state.Produtos;
        }
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
</style>