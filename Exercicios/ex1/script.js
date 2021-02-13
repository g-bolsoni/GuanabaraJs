let hora = new Date();
let tempo = hora.getHours()

let titulo = document.getElementById('titulo');
let copy = document.getElementById('copy');
let textoHoras = document.getElementById('text');
let imagem = document.getElementById('img');
let geral = document.getElementById('body');
// let tempo = 19;

//Substituir o valor na tela do user 
textoHoras.innerHTML = `Agora são ${tempo} horas`
textoHoras.style.marginTop = ' -60px';
textoHoras.style.fontSize=' 25px';
// Ta funcionando kkkkk

//Trocar o background

if(tempo <= 6){
    Madruga();
    geral.style.background = "#2F2F2F";
}else if(tempo <= 12){
    Manha()
    geral.style.background = "#5FA8D3";
}else if(tempo <= 18){
    Tarde();
    geral.style.background = "#3363aa";
}else if(tempo <= 24){
    Noite();
    geral.style.background = "#2F2F2F";
}

function Madruga(){
    //Imagem
    imagem.style.background = "url('https://static.tumblr.com/mky4cgu/WkBmcq0lw/9.jpg')";
    imagem.style.backgroundSize = '200px 200px'
    //Titulo
    titulo.style.color= "white";
    // Texto Das Horas
    textoHoras.style.color= "#2F2F2F"
    // Copy
    copy.style.color="white";
}
function Manha(){
    // Imagem
    imagem.style.background = "url('https://image.freepik.com/fotos-gratis/paisagem-do-nascer-do-sol-natureza-aguas-dom_121-73066.jpg')";
    imagem.style.backgroundSize = '200px 200px';
    // Estilos
    //Titulo
    titulo.style.color= "white";
    // Texto Das Horas
    textoHoras.style.color= "#2F2F2F"
    // Copy
    copy.style.color="white";
}
function Tarde(){
    // Imagem
    imagem.style.background = "url('https://pbs.twimg.com/media/EOFt9eRX4AMRfHs?format=png')";
    imagem.style.backgroundSize = '200px 200px';
    // Estilos
     //Titulo
     titulo.style.color= "2F2F2F";
     // Texto Das Horas
     textoHoras.style.color= "#2F2F2F"
     // Copy
     copy.style.color="2F2F2F";
}
function Noite(){
      // Imagem
      imagem.style.background = "url('https://img.ibxk.com.br/materias/77334971/65738.jpg?w=704')";
      imagem.style.backgroundSize = '200px 200px';
      // Estilos
      //Titulo
      titulo.style.color= "white";
      // Texto Das Horas
      textoHoras.style.color= "#2F2F2F"
      // Copy
      copy.style.color="white";
}