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
        <input type='file' accept='image/*' onchange='openFile(event)'><br>
        <img id='output'>
  </div>



</template>

<script>
export default {
data:function(){
    return{
        link: "../imagens/cadastrarProd.png"
    }
}, methods:{
    IrParaTelaMenuAdmin:function(){
        this.$router.push('/ViewTelaMenuAdmin')
    }, pegarImagem(){
        alert('entrou')
        this.link= this.getAttribute('src')
        document.getElementById("img").src = this.link;
    },  
    openFile: function(event) {
    var input = event.target;
    alert(input);
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    }
       alert(input);
        reader.readAsDataURL(input.files[0])
        }
    }
}
</script>

<style>
 #img{
     width: 80px;
     height: 80px;
 }
 #output{
      width: 80px;
     height: 80px;
 }
</style>