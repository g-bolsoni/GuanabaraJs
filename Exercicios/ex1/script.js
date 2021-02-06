let hora = new Date();
let tempo = hora.getHours()

//Substituir o valor na tela do user 
let textoHoras = document.getElementById('text');
textoHoras.innerHTML = `Agora são ${tempo} horas`
// Ta funcionando kkkkk

//Trocar o background

if(tempo > 6 && tempo < 12){
    console.log('Muda o Background 1 ')
}else if(tempo < 20){
    console.log('Muda o Background 2 ')
}else if(tempo < 01){
    console.log('Muda o Background 3 ')
}