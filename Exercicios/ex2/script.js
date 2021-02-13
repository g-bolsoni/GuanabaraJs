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
}
//-------x--------RETORNAR A MENSAGEM -------x----------
