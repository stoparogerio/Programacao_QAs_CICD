/**

Classificador de porte automático

Muitos tutores não fazem ideia do porte de seu Dog. 
Crie um script que classifique o porte com base no peso de forma simplificada, sendo:

Até 10kg -> Pequeno; acima disso -> Médio

Use o operador ternário para determinar o porte. Exiba:
Nome
Peso
Porte classificado

Extra: transforme a lógica em uma função (da forma que conseguir)
Extra: adicionar mais condições exemplo: >= 50 -> porte grande

 */

// const nome = `Ada`;
// const peso = 11;

// const porte = peso <= 10 ? "pequeno" : "médio";

// console.log(`------`);
// console.log(`Nome: ${nome}`);
// console.log(`Peso: ${peso}`);
// console.log(`Porte: ${porte}`);
// console.log(`------`);

// ALTERNATIVA com a função (Extra)
function classificarPortePorPeso(nome, peso) {
  const porte = peso <= 10 ? "pequeno" : "médio";

  console.log(`------`);
  console.log(`Nome: ${nome}`);
  console.log(`Peso: ${peso}`);
  console.log(`Porte: ${porte}`);
  console.log(`------`);
}
classificarPortePorPeso("Pantera", 14.5);
// classificarPortePorPeso("Bandite", 35);
// classificarPortePorPeso("Rex", 8);
