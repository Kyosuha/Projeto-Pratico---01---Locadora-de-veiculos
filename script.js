document.getElementById('rentalForm').addEventListener('submit',
function(event) {
event.preventDefault();
var dataLocacao = new
Date(document.getElementById('data_locacao').value);
var dataDevolucao = new
Date(document.getElementById('data_devolucao').value);
var diffTime = Math.abs(dataDevolucao - dataLocacao);
var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
var valorLocacao =
parseFloat(document.getElementById('valor_locacao').value);
var valorTotal = diffDays * valorLocacao;
var responseElement = document.getElementById('response');
responseElement.innerHTML = "Quantidade de dias locados: " + diffDays
+ "<br>";
responseElement.innerHTML += "Valor a ser pago: R$" +
valorTotal.toFixed(2);
});