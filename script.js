let btnAjuda = document.querySelector("botao-emergencia");
let btnFechar = document.querySelector("botao-fechar");
let modal = document.querySelector("#modal-ajuda");

btnAjuda.addEventListener("click", abreModal);
btnFechar.addEventListener("click", fechaModal);

function abreModal() {
modal.style.displays = "block";
}
function fechaModal() {
modal.style.display = "none";
 }