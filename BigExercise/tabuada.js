let number = Number(prompt('Qual tabuada deseja saber ?')); 
//let number = 2
let resu = []

for (let i = 0; i<= 10; i++) {
        resu.push(number*i)
}

//Styles da paginado

let title = document.getElementById('title');
let tabu = document.getElementById('tabuada');


title.innerHTML = `<p>A Tabuada do ${number} é:</p>`
tabu.innerHTML = `
    <li>${number} X 0 = ${resu[0]}</li>
    <li>${number} X 1 = ${resu[1]}</li>
    <li>${number} X 2 = ${resu[2]}</li>
    <li>${number} X 3 = ${resu[3]}</li>
    <li>${number} X 4 = ${resu[4]}</li>
    <li>${number} X 5 = ${resu[5]}</li>
    <li>${number} X 6 = ${resu[6]}</li>
    <li>${number} X 7 = ${resu[7]}</li>
    <li>${number} X 8= ${resu[8]}</li>
    <li>${number} X 9 = ${resu[9]}</li>
    <li>${number} X 10 = ${resu[10]}</li>

`


function gerar(){
    window.location.reload()
}

