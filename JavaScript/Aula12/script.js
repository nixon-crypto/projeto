function mostrarNome() {
    // pegar o input
    // o value retorna o valor que esta dentro do input
    let nome = document.getElementById("inputNome").value
    // alterar o valor da div pelo valor do input
    document.getElementById("resultados1").innerHTML = '<p>Nome:' + nome + '</p>'
}

function mostrarIdade() {
    let idade = document.getElementById("inputIdade").value
    if (idade == "") {
        document.getElementById("resultados1").innerHTML = '<p style = "color: red">Por favor informe a idade</p>'
    } else {
        document.getElementById("resultados1").innerHTML = '<p>Idade:' + idade + '</p>'
    }
}

function mostraEmail() {
    let email = document.getElementById("inputEmail").value
    if (email.trim() == "") {
        document.getElementById("resultados1").innerHTML = '<p style ="color:red">Por favor digite seu email.</p>'
    } else {
        document.getElementById("resultados1").innerHTML = '<p>Email:' + email + '</p>'
    }
}

function mostrarData(){
    let data = document.getElementById("inputData").value
    if(data == ""){
        document.getElementById("resultados1").innerHTML = '<p style ="color:red">Por favor coloque uma data.</p>'
    }else{
        document.getElementById("resultados1").innerHTML = '<p>Data de nascimento:' + data + '</p>'
    }
}

function mostrarCor(){
    let cor = document.getElementById("inputCor").value
    let resultado = document.getElementById("body")
    // resultado.innerHTML = `<p>Cor selecionada: ${cor} </p>`
    resultado.style.backgroundColor = cor
}

function verificarCheckbox(){
    let checkbox = document.getElementById("inputCheckbox")
    if(checkbox.checked){
        document.getElementById("resultados1").innerHTML = `<p>Foi aceito os termos.</p>`
    }else{
        document.getElementById("resultados1").innerHTML = `<p>Não foi aceito os termos.`
    }
}

function pegarGenero(){
    // Retorna uma lista de tags que tem um name
    let opcoes = document.getElementsByName("genero")
    let selecionado = ""

    //criamos um for para descobrir entre todos os inputs qual esta selecionado
    for(let i = 0; i < opcoes.length; i++){
        //caso o input estive selecionado podemos alterar o valor da variavel selecionada
        if(opcoes[i].checked){
            selecionado = opcoes[i].value
        }
    }
    genero = selecionado
    document.getElementById("resultados1").innerHTML = `<p>O genero selecionado foi ` + genero + `</p>`
}