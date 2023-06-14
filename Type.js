function calcularArea() {
  var comprimento = parseFloat(document.getElementById('comprimento').value);
  var largura = parseFloat(document.getElementById('largura').value);

  var area = comprimento * largura;

  document.getElementById('resultado').innerHTML = "Área do terreno: " + area;
}



function calculateShoes() {
    var numHorses = parseInt(document.getElementById('numHorses').value);
    var numShoes = numHorses * 4; // Cada cavalo precisa de 4 ferraduras

    document.getElementById('result').innerHTML = "Total de Ferraduras Necessárias: " + numShoes;
}

function calcularVendas() {
  var quantidadePaes = parseInt(document.getElementById('quantidadePaes').value);
  var quantidadeBroas = parseInt(document.getElementById('quantidadeBroas').value);

  var valorPaes = quantidadePaes * 0.12;
  var valorBroas = quantidadeBroas * 1.50;

  var totalArrecadado = valorPaes + valorBroas;
  var poupanca = totalArrecadado * 0.1;

  document.getElementById('resultadoArrecadado').innerHTML = "Valor arrecadado: R$" + totalArrecadado.toFixed(2);
  document.getElementById('resultadoPoupanca').innerHTML = "Valor a guardar na poupança: R$" + poupanca.toFixed(2);
}
function calcularDiasDeVida() {
  var nome = document.getElementById('nome').value;
  var idade = parseInt(document.getElementById('idade').value);

  var diasDeVida = idade * 365;

  document.getElementById('resultado').innerHTML = nome.toUpperCase() + ", você já viveu " + diasDeVida + " dias.";
}


  function calculate() {
    var price = parseFloat(document.getElementById("price").value);
    var payment = parseFloat(document.getElementById("payment").value);

    var liters = payment / price;

    document.getElementById("result").innerHTML = "You can fill your tank with " + liters.toFixed(2) + " liters of gasoline.";
  }
 function calcularValor() {
    var peso = parseFloat(document.getElementById("peso").value);
    var valorPagar = peso * 12;
    document.getElementById("valorPagar").innerHTML = "Valor a pagar: R$" + valorPagar.toFixed(2);
  }
function calcularDias() {
  var dia = parseInt(document.getElementById('dia').value);
  var mes = parseInt(document.getElementById('mes').value);

  var diasPassados = (mes - 1) * 30 + dia;

  document.getElementById('resultado').innerHTML = "Dias passados desde o início do ano: " + diasPassados;
}
document.getElementById('resultado').innerHTML = "Dias passados desde o início do ano: " + diasPassados;
}
function calcularValor() {
  var quantidadePequenas = parseInt(document.getElementById('quantidadePequenas').value);
  var quantidadeMedias = parseInt(document.getElementById('quantidadeMedias').value);
  var quantidadeGrandes = parseInt(document.getElementById('quantidadeGrandes').value);

  var valorArrecadado = quantidadePequenas * 10 + quantidadeMedias * 12 + quantidadeGrandes * 15;

  document.getElementById('resultado').innerHTML = "Valor arrecadado: R$" + valorArrecadado;
}
function calcularDistancia() {
  var x1 = parseFloat(document.getElementById('x1').value);
  var y1 = parseFloat(document.getElementById('y1').value);
  var x2 = parseFloat(document.getElementById('x2').value);
  var y2 = parseFloat(document.getElementById('y2').value);

  var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

  document.getElementById('resultado').innerHTML = "Distância entre os pontos: " + distancia;
}
function converterTempo() {
  var totalDias = parseInt(document.getElementById("totalDias").value);
  
  var anos = Math.floor(totalDias / 365);
  var meses = Math.floor((totalDias % 365) / 30);
  var dias = (totalDias % 365) % 30;
  
  document.getElementById("anos").innerHTML = anos;
  document.getElementById("meses").innerHTML = meses;
  document.getElementById("dias").innerHTML = dias;
  
}
function calcularSalario() {
  var salarioInicial = parseFloat(document.getElementById("salarioInicial").value);
  
  var aumento = salarioInicial * 0.15;
  var salarioComAumento = salarioInicial + aumento;
  var descontoImpostos = salarioComAumento * 0.08;
  var salarioFinal = salarioComAumento - descontoImpostos;
  
  document.getElementById("salarioInicialOutput").innerHTML = salarioInicial.toFixed(2);
  document.getElementById("salarioComAumentoOutput").innerHTML = salarioComAumento.toFixed(2);
  document.getElementById("salarioFinalOutput").innerHTML = salarioFinal.toFixed(2);
}
function imprimirNumero() {
  // Obtém o valor digitado pelo usuário
  var numero = parseInt(document.getElementById("numero").value);

  // Verifica se o número é válido
  if (isNaN(numero) || numero < 0 || numero > 999) {
    alert("Por favor, insira um número inteiro de até três dígitos.");
    return;
  }

  // Extrai os dígitos do número
  var centena = Math.floor(numero / 100);
  var dezena = Math.floor((numero % 100) / 10);
  var unidade = numero % 10;

  // Imprime a saída formatada
  document.getElementById("saida").innerHTML = "CENTENA = " + centena + "<br>" +
                                               "DEZENA = " + dezena + "<br>" +
                                               "UNIDADE = " + unidade;
}
function calcularArea() {
  // Obtém o valor do raio digitado pelo usuário
  var raio = parseFloat(document.getElementById("raio").value);

  // Verifica se o raio é válido
  if (isNaN(raio) || raio <= 0) {
    alert("Por favor, insira um valor numérico positivo para o raio.");
    return;
  }

  // Calcula a área da pizza
  var area = 3.14 * raio * raio;

  // Imprime a área na página
  document.getElementById("saida").innerHTML = "A área da pizza é: " + area.toFixed(2) + " unidades de área.";
}
function dividirConta() {
  // Obtém o valor total da conta digitado pelo usuário
  var valorTotal = parseFloat(document.getElementById("valorTotal").value);

  // Verifica se o valor total da conta é válido
  if (isNaN(valorTotal) || valorTotal <= 0) {
    alert("Por favor, insira um valor numérico positivo para o valor total da conta.");
    return;
  }

  // Calcula o valor que cada um deve pagar
  var valorPorPessoa = Math.floor(valorTotal / 3); // Valor inteiro igualitário
  var resto = valorTotal % 3; // Resto da divisão

  // Verifica se o valor do resto é maior ou igual a 0.5
  if (resto >= 0.5) {
    valorPorPessoa++; // Arredonda para cima se o resto for maior ou igual a 0.5
  }

  // Imprime o valor que cada um deve pagar na página
  document.getElementById("saida").innerHTML = "Carlos: R$ " + valorPorPessoa.toFixed(2) + "<br>" +
                                               "André: R$ " + valorPorPessoa.toFixed(2) + "<br>" +
                                               "Felipe: R$ " + (valorPorPessoa + resto).toFixed(2);
}
