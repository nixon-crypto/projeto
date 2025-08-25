// função para alterar o texto
// Primeiro usar a palavra function depois o nome dela
function mudarTexto() {
    document.getElementById("texto1").textContent = "O texto mudou."
}

//Chamando a função
//mudarTexto()

function mudarCor() {
    document.getElementById("texto2").style.color = "red"

}

//Display none = esconde um elemento
function esconder() {
    document.getElementById("texto3").style.display = "none"
}

function mostrar() {
    document.getElementById("texto3").style.display = "block"
}

let contador = 0

function aumentarValor() {
    contador++
    document.getElementById("texto4").textContent = contador
}

function diminuirValor() {
    if (contador == 0) {
        document.getElementById("texto4").textContent = 0
    } else {
        contador--
        document.getElementById("texto4").textContent = contador
    }
}

function zerar(){
    contador = 0
    document.getElementById("texto4").textContent = contador
}

