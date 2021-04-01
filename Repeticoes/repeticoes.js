let num = [1,5,6,7,9,2,3]
num.sort()

/*
for(let i =0; i<= num.length; i++) {
    console.log(`A posição ${i} tem o numero ${num[i]}`)
}

*/
/*
for(let i in num){
    console.log(`A posição ${i} tem o numero ${num[i]}`)
}
*/
/*functions

function parimp(num){
    if(num%2 ==0){
        return "PAR!"
    }else{
        return "IMPAR!"
    }

}
console.log(parimp(12121212185))
*/

let friends = [
 {
    'nome':'Giovane',
    'age':19,
    'city':'Franca-SP'
},
{
    'nome':'Guilherme',
    'age':25,
    'city':'São Paulo'

},
{
    'nome':'Gabriel',
    'age':23,
    'city':'Campinas'

}
]

for(let i = 0; i < friends.length; i++){
    console.log(`
        Olá, Eu sou o ${friends[i].nome}, tenho ${friends[i].age} anos e moro na cidade de ${friends[i].city}.
    `)

} 
