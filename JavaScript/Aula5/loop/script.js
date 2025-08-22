// let numeros = [10,20,30,40,50]

// for (let i = 0; i < 5; i++){
//     console.log(numeros[i])
// }

// let notas = [8.5, 8, 5.5, 7, 9, 10, 8, 2]
// soma = 0
// for(let i = 0; i < notas.length; i++){
//     soma = soma + notas[i]
// }
// let media = soma / notas.length
// console.log(media)

// //-------------------------------------------

// for(let i = 1; i <= 200; i = i + 5){
//     console.log('somando valor mais 2', i + 2)
// }

// for (let i = 1; i <= 10; i++)
//     console.log('2 x',i,"=",i*2)
// '-----------------------------------'


// let tarefa1 = prompt('Digite a primeira tarefa:')
// let tarefa2 = prompt('Digite a segunda tarefa:')
// let tarefa3 = prompt('Digite a terceira tarefa:')

// let number1 = prompt('Digite o primeiro numero:')
//  for (let i = 1; i <= 10; i++)
//     console.log(number1,"x",i,"=",i*number1)


// let animais =['gato', 'cachorro', 'papagaio', 'cachorro', 'leão', 'peixe', 'cachorro']
// let contador = 0

// for (let i = 0; i < animais.length; i++)
//     if (animais[i] =='cachorro'){
//         contador = contador + 1
//     }
// console.log('No petshop tem', contador, 'cachorrinhos')


// let idade = [15, 27, 18, 13, 23, 19, 12, 16]
// let contador = 0

// for (let i = 0; i < idade.length; i++)
//     if (idade[i] < 18){
//         contador ++
//     }
// console.log('Passaram',contador,'menor de idade.')

let despesas = [45, 100, 233, 95, 300, 200, 220, 999];
pequena = 0
media = 0
grande = 0

for (let i = 0; i < despesas.length; i++){
    if(despesas[i] < 100){
        pequena++
    }
    else if(despesas[i] <= 500){
        media++
    }else{
        grande++
    }
}
    console.log('Despesas pequenas',pequena)
    console.log('Despesas média',media)
    console.log('Despesas grande',grande)