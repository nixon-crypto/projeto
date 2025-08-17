function pare() {
  document.getElementById("pare").style.backgroundColor = "red";
  document.getElementById("atencao").style.backgroundColor = " rgb(64, 64, 64)";
  document.getElementById("seguir").style.backgroundColor = " rgb(64, 64, 64)";
  document.getElementById("legenda").textContent = "❌ Pare";
}

function atencao() {
  document.getElementById("pare").style.backgroundColor = "rgb(64, 64, 64)";
  document.getElementById("atencao").style.backgroundColor = "yellow";
  document.getElementById("seguir").style.backgroundColor = " rgb(64, 64, 64)";
  document.getElementById("legenda").textContent = "⚠️ Atenção";
}

function seguir() {
  document.getElementById("pare").style.backgroundColor = "rgb(64, 64, 64)";
  document.getElementById("atencao").style.backgroundColor = "rgb(64, 64, 64)";
  document.getElementById("seguir").style.backgroundColor = "green";
  document.getElementById("legenda").textContent = "⬆️ Seguir";
}

function desligar() {
  document.getElementById("pare").style.backgroundColor = "rgb(64, 64, 64)";
  document.getElementById("atencao").style.backgroundColor = "rgb(64, 64, 64)";
  document.getElementById("seguir").style.backgroundColor = "rgb(64, 64, 64)";
  document.getElementById("legenda").textContent = "";
}