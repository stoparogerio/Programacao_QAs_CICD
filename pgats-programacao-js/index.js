/**
 * Console API
 */

console.log("Aula inicial JS");
console.error("Falha na execução");
console.warn("Atenção!");
console.table([
  {
    nome: "Stopinha",
    turma: "02",
    disciplina: "Prog JS",
  },
]);

/**
 * Console API
 */

console.log("Aula inicial JS");
console.error("Falha na execução");
console.warn("Atenção");
console.table([
  {
    nome: "Samuel",
    turma: "02",
    disciplina: "Prog JS",
  },
  {
    nome: "Lucas",
    turma: "02",
    disciplina: "Prog JS",
  },
]);

/**
 * Constantes e Variáveis
 */

// const - para informações que nunca mudam
// var ou let - para informações que podem mudar

// informacoes de um dog que nao mudam
const nome = "Loki";
const raca = "SRD / vira lata";
const sexo = "Macho";
const cor = "Caramelo";
const dataDeNascimento = "01/01/2020";
const porte = "M";

// informacoes que mudam
let idade = 5;
let peso = 10.5;
let vacinado = true;
let castrado = false;
let tamanho = "M";

const turma = "02";
console.log("Aula 03 da Turma " + turma + " no Sábado dia 05 de Abril");

//**
// Interpolação
//  */

// Tem que ser crase.

console.log(`Aula 03 da Turma ${turma} no Sábado dia 05 de Abril`);
console.log(dataDeNascimento.length);

// split - separar a string

const nomesDeAlunos = "Rogério Gisele Julie";
const nomesDeAlunosSplit = nomesDeAlunos.split(" ");
console.log(nomesDeAlunosSplit);

console.log(nomesDeAlunos.toLowerCase());
console.log(nomesDeAlunos.toUpperCase());

// boolean
console.log(nomesDeAlunos.includes("Qualquer"));
console.log(nomesDeAlunos.toLowerCase().includes("julie"));

console.log(nomesDeAlunos.replaceAll("i", "A"));

//trim remove os espaços

const conceitosLogica =
  "            inteiro real cadeia de caracteres .........           ";
console.log(conceitosLogica.trim());

let dataParaCortar = "05 de Abril";
console.log(dataParaCortar.slice(0, 5));
//slice and substring pode variar, mas tem o mesmo propósito
