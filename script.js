function ConverterReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico / 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em dolar é USD:" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento1 = document.getElementById("valor");
  var valor1 = valorElemento1.value;
  var valorEmEuroNumerico = parseFloat(valor1);

  var valorEmEuro = valorEmEuroNumerico / 5.51;
  var valorEmEuroFormatado = valorEmEuro.toFixed(2);
  console.log(valorEmEuroFormatado);

  var elementoValorConvertido1 = document.getElementById("valorConvertido");
  var valorConvertido1 = "O resultado em Euro é €: " + valorEmEuroFormatado;
  elementoValorConvertido1.innerHTML = valorConvertido1;
}
