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

