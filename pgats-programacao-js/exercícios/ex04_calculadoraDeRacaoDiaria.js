/**
Calculadora de ração diária

Crie um script que receba o peso do dog em kg + estoque atual de ração em gramas. Calcule a quantidade diária de ração com base na seguinte fórmula: 

Gramas por dia = Peso x 30 gramas

Exiba:
  Nome do dog
  Peso
  Quantidade de ração recomendada por dia
  Quantos dias o estoque atual vai durar
 
 */

// ALTERNATIVA 1, simplificado sem função

// const nome = `Julie`;
// const peso = 14.5;
// // const estoque = 5000;

// const gramasPorDia = peso * 30;
// // const duracaoEstoque = estoque / gramasPorDia;

// console.log(`Nome do dog: ${nome}`);
// console.log(`Peso: ${peso}`);
// console.log(`Gramas por dia: ${gramasPorDia.toFixed(2)}`);
// console.log(`O estoque vai durar: ${duracaoEstoque}`);
// ALTERNATIVA 2, usando função com parâmetros

function calcularConsumoDeRacao(nome, peso, estoque) {
  const gramasPorDia = peso * 30;
  const idade = 1
  const duracaoEstoque = Math.floor(estoque / gramasPorDia);

  console.log(`----------------------`);
  console.log(`Nome do dog: ${nome}`);
  console.log(`Idade: ${idade} ano(s)`)
  console.log(`Peso: ${peso} kg`);
  console.log(`Gramas por dia: ${gramasPorDia.toFixed(1)} g`);
  console.log(`O estoque vai durar: ${duracaoEstoque} dias`);
  console.log(`----------------------`);
}

calcularConsumoDeRacao("Julies", 14.5, 2000);
// calcularConsumoDeRacao("Laninha", 4.2, 15000);
// calcularConsumoDeRacao("Pantera", 14.5, 5000);
