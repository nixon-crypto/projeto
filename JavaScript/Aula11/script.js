function exemploCreateElement() {
    // passo 1 : criar um elemento
    let novoParagrafo = document.createElement("p")

    novoParagrafo.textContent = "Novo paragrafo criado com javascript"

    // passo 2 : pegar o elemento onde vai ser inserido o elemento criado
    let area1 = document.getElementById("area1")

    //passo 3 : Adicionar na pagina
    area1.appendChild(novoParagrafo)
}

function exemploCreateElement2() {

    let novoTitulo = document.createElement("h2")

    novoTitulo.textContent = "Novo titulo criado com Javascript"

    let area1 = document.getElementById("area1")

    area1.appendChild(novoTitulo)
}

function exemploCreateElement3() {
    let novoElemento = document.createElement("li")

    novoElemento.textContent = prompt("Digite o nome do item:")

    let area2 = document.getElementById("area2")

    area2.appendChild(novoElemento)
}

function alterarCorSite() {
    document.getElementById("app").classList.add("fundo-preto")

}



function criarComClasse() {
    let novoElemento = document.createElement("div")
    let area3 = document.getElementById("area3")
    novoElemento.textContent = ("Este elemento tem a classe destaque")

    novoElemento.classList.add("destaque")

    document.getElementById("area3").appendChild(novoElemento)

    area3.appendChild(novoElemento)
}

function criarTexto() {
    let novoElemento = document.createElement("div")
    let area3 = document.getElementById("area3")
    novoElemento.textContent = ("ATENÇÃO")

    novoElemento.classList.add("importante")

    document.getElementById("area3").appendChild(novoElemento)

    area3.appendChild(novoElemento)
}

function criarCard() {
    //Criar div
    let card = document.createElement("div")

    // Inserir o HTML completo na div
    card.innerHTML = `
    <h3>Card do usuario</h3>
    <p> Nome: Leandro Souza</p>
    <p> Idade: 28 anos </p>
    <button> Ver perfil </button>
    `
    document.getElementById("area4").appendChild(card)
}

function apagarTudo() {
    document.getElementById("area4").innerHTML = ""
}

function removeElemento2() {
    // para remover um elemento com o removeChild

    //Precisar selecionar o elemento pai
    let divPrincipal = document.getElementById("itensRemover")

    //Precisa selecionar o elemento filho que sera removido
    let elementoRemover = document.getElementById("item1")

    divPrincipal.removeChild(elementoRemover)
}

function removeElemento3() {
    let divPrincipal = document.getElementById("itensRemover")

    let elementoRemover = document.getElementById("item2")

    divPrincipal.removeChild(elementoRemover)
}
