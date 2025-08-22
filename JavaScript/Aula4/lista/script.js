//lista de texto
let listaDeCompras = ['Pão','Leite','Açúcar','Café']
let amigos = ['Marina','Pedro','Carlos','João','Renato']
// posição       0       1        2       3       4

//lista de números
let notas = [8.7, 9.5, 10, 9.1, 6.2]

console.log('amigos', amigos)
console.log('Meu melhor amigo é:', amigos[2])
console.log('Eu gosto muito da:', amigos[0])

let cidades = ['Arraial do cabo','Cabo frio','Bonito','Porto de galinhas','Porto seguro']

console.log(cidades)
console.log(cidades[0])
console.log(cidades[4])

let animais = ['😺','🐶','🐰','🐷','🦊','🐯']
console.log(animais[4])
console.log(animais[0])
console.log(animais[2])


//-----------------------------------------
let carros = ['Civic','Uno','Gol','Corolla']
console.log('antes', carros)

carros[1] = 'HB20' // troca Uno por HB20

console.log('Depois',carros)

// push - adiciona um elemento no final da lista

carros.push('Vectra') // Adiciona só um
carros.push('Renegade','Celta','Passat') // Adiciona varios elementos

console.log('agora',carros)

//-------------------------------------------------
carros.pop() //Remove o ultimo o elemento
carros.shift() //Remove o primeiro elemento
carros.unshift('Urus','Mobi') //Adiciona elemento no começo da lista

console.log('Depois da atualização',carros)

//----------------------------------------------------

let playlist = ['Evidencias','Funk do pão de queijo','Oh mãe compra bob goods', 
    'Bohemian Rhapsody','Trem-bala','Aquarela']

playlist.shift()
playlist.shift()
playlist.shift()
playlist.unshift('Evidencias')
console.log(playlist)

playlist.pop()
playlist.pop()
playlist.pop()
playlist.unshift('Bohemian Rhapsody')

console.log(playlist)

playlist.unshift("I'm good","Summer")
playlist.push("We love rock 'n'roll","Iron man","Sweet child o'mine")
console.log(playlist)