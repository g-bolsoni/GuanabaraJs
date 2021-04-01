/* Habilitar e desabilitar o botão*/
document.getElementById("btn").disabled = true;

//cria um event listener que escuta mudanças no input
document.getElementById("dataNascimento").addEventListener("input", function(event){

  //busca conteúdo do input
    var conteudo = document.getElementById("dataNascimento").value;

    //valida conteudo do input 
    if (conteudo !== null && conteudo !== '') {
      //habilita o botão
      document.getElementById("btn").disabled = false;
    } else {
      //desabilita o botão se o conteúdo do input ficar em branco
      document.getElementById("btn").disabled = true;
    }
});
// ------X------- BOTÂO VERIFICAR ----------X------

let resu = document.getElementById('resultado')
let nascimento = document.getElementById('dataNascimento');
//-------------CALCULAR IDADE-----------------
function calcularIdade(){
//calcular a idade
let date = new Date
let dateAtual = date.getFullYear()
console.log(dateAtual+ '  atual')
console.log(nascimento+ '  nascimento')

let idade = dateAtual - nascimento.value

return idade;


}
//-------x------CALCULAR IDADE-------X----------
//--------------VERIFICAR QUAL SEXO -----------------
function SexoType(){
  let res = '';
  const items = document.getElementsByName('sexo');
  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      res = items[i].value
      break;
    }
  }  
  return res;
}
//------x--------VERIFICAR QUAL SEXO -------x----------
//---------------RETORNAR A MENSAGEM -----------------
function Mensagem(){
  const idade = calcularIdade()
  const sexo = SexoType();
  if (sexo === '') {
    alert('nenhum item foi selecionado');
    return false;
  }
  resu.innerHTML = `Seu sexo é ${sexo}, e tem ${idade} anos`
  ExibeImagem()
}
//-------x--------RETORNAR A MENSAGEM -------x----------
//----------------MOSTRAR A IMAGEM-----------------------
function ExibeImagem(){
  let imagem = document.getElementById('img');
  let sexo = SexoType();
  

  let idade = calcularIdade()
  if( sexo== 'masculino'){
    console.log('Funcionou Masculino')
    if(idade<=0){
      alert('Data inválida! \nTente novamente')
    }else
    if(idade<=10 ){ 
      tela()
      imagem.style.background = "url('https://i.pinimg.com/originals/f7/df/be/f7dfbe487fee7bf7bc86546f2872d60f.jpg')"
      imagem.style.backgroundSize = '200px 300px';  
    }else
    if(idade<=20){
      alert('Funcionou adolecente')
    }else
    if(idade<=65){
      alert('Funcionou adulto')
    }else
    if(idade<=70){
      alert('Funcionou pré-idoso')
    }else
    if(idade<=100){
      alert('Funcionou idoso')
    }else
    if(idade>100){
      alert('ERROR \n VERFIQUE OS DADOS E TENTE NOVAMENTE')
    }
  
  }
  
  if(sexo == 'feminino'){
    console.log('Funcionou Feminino')
    if(idade<=0){
      alert('Data inválida! \nTente novamente')
    }else
    if(idade<=10 ){
      alert('Funcionou criança')
    }else
    if(idade<=20){
      alert('Funcionou adolecente')
    }else
    if(idade<=65){
      alert('Funcionou adulta')
    }else
    if(idade<=80){
      alert('Funcionou pré-idosa')
    }else
    if(idade<=100){
      alert('Funcionou idosa')
    }else
    if(idade>100){
      alert('ERROR \n VERFIQUE OS DADOS E TENTE NOVAMENTE')
    }
  
  }
 
}


//-------x--------MOSTRAR A IMAGEM-----------x-----------
