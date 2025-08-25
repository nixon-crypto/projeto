function novo() {
    let card = document.createElement("div")

    card.classList.add("style-card")

    let nome = prompt("Digite seu nome:")
    while (nome.trim() == "") {
        nome = prompt("Digite seu nome:")
    }
    let cargo = prompt("Digite seu cargo:")
    while (cargo.trim() == "") {
        cargo = prompt("Digite seu cargo:")
    }
    let urlFoto = prompt("Carregue uma foto sua:")
    while (urlFoto.trim() == "") {
        urlFoto = prompt("Carregue uma foto sua:")
    }

    let senioridade = prompt("Qual seu nivel de senioridade (Junior | Pleno | Senior")

    card.innerHTML = `
    <img class = "${senioridade}" src = "${urlFoto}">
    <h1>${nome}</h1>
    <h3>${cargo}</h3>
    <p>TechCorp LTDA</p>
    `
    document.getElementById("aviso").style.display = "none"
    document.getElementById("cracha").appendChild(card)
}

function limpar() {
    document.getElementById("cracha").innerHTML = ""
    document.getElementById("aviso").style.display = "block"
}
