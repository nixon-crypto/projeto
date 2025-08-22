function rosa() {
    document.getElementById("avatar").style.backgroundColor = "#e91e63"
}
function azul() {
    document.getElementById("avatar").style.backgroundColor = "#2196f3"
}
function verde() {
    document.getElementById("avatar").style.backgroundColor = "#4caf50"
}
function roxo() {
    document.getElementById("avatar").style.backgroundColor = "#9c27b0"
}
function laranja() {
    document.getElementById("avatar").style.backgroundColor = "#ff9800"
}

//const meuElemento = document.getElementsByClassName("btn-rosa");
//const corSalva = window.getComputedStyle(meuElemento);
//const minhaCor = corSalva.getPropertyValue('backgroundColor')

//console.log(minhaCor)

function feliz() {
    document.getElementById("avatar").textContent = "😁"
}

function triste() {
    document.getElementById("avatar").textContent = "😔"
}
function bravo() {
    document.getElementById("avatar").textContent = "😡"
}
function surpreso() {
    document.getElementById("avatar").textContent = "😯"
}
function apaixonado() {
    document.getElementById("avatar").textContent = "🥰"
}

function nome() {
    document.getElementById("nome").textContent = prompt("Digite seu nome:")
}

function bio() {
    document.getElementById("bio").textContent = prompt("Descrição:")
}

function online(){
    document.getElementById("status").textContent = "Online 🟢"
}

function ocupado(){
    document.getElementById("status").textContent = "Ocupado 🔴"
}

function ausente(){
    document.getElementById("status").textContent = "Ausente 🟡"
}

function ocultar() {
    document.getElementById("avatar").style.display = "none"
}

function mostrar() {
    document.getElementById("avatar").style.display = "flex"
}
