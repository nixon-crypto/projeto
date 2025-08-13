// let frutas = ['Maça', 'Laranja', 'Uva', 'Morango', 'Laranja']

// // Quando um elemento não é encontrado a função retorna -1
// let posicao = frutas.indexOf('Uva')
// console.log('A uva esta na posição', posicao)

// //Em casos de elementos iguais ele retorna a primeira ocorrência
// let posicaoLaranja = frutas.indexOf('Laranja')
// // Retorna a ultima ocorrência
// let ultimaPosicao = frutas.lastIndexOf('Laranja')
// console.log('A laranja esta na posição', posicaoLaranja)
// console.log(ultimaPosicao)

// let ingredientes = ['farinha', 'ovos', 'açúcar', 'leite']
// console.log('Tem chocolate?', ingredientes.includes('chocolate'))

// if(ingredientes.includes('leite')){
//     console.log('✅ Tem leite na receita!')
// }else{
//     console.log('❌ Não tem leite na receita!')
// }


// let estoque = prompt('Qual filme você quer alugar?')
// let filmes = ['Matrix', 'Vingadores', 'Titanic', 'A origem', 'Cidade de Deus']


// if (filmes.includes(estoque)){
//     alert('Filme encontrado na posição ' + filmes.indexOf(estoque))
// }else{
//     alert('Filme não encontrado '+ estoque)
// }

// lista vazia
// let pessoas = []

// console.log(pessoas)

// // Adicionando nomes na lista
// pessoas.push('Julia')
// pessoas.push('Ana')
// pessoas.push('Kaio', 'Luiz', 'Marcos', 'Gabriel')

// pessoas.sort() // Ordena alfabeticamente
// console.log('Depois', pessoas)

let livros = [
    'o pequeno principe',
    'dom casmurro',
    '1984',
    'o hobbit',
    'o alquimista',
    'cem anos de solidão'
]
livros.sort()
let contagem = 0

console.log('Livros disponiveis',livros.length)
for (let i = 0; i < livros.length; i++){
    contagem++
    console.log(contagem +' - '+livros[i])
}
let estoque = []
for (let i = 0; i < 3; i++){
    let busca = prompt('Quais livros você quer emprestado?')
    if(livros.includes(busca)){
        busca.toLowerCase
    estoque.push(busca) 
    }
}
console.log(estoque)
