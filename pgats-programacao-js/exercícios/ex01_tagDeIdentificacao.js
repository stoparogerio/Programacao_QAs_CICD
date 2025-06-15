const inicio = "-----------------------";
const nome = "julie";
let idade = 12;
const raca = "sem raça definida";
let peso = 6.5;
let status = "ADOTADA";
const fim = "-----------------------";

console.log(inicio);
console.log("Nome:", nome.toUpperCase());
console.log("Idade:", idade);
console.log(
  "Raça:",
  raca.slice(0, 1).toUpperCase() + raca.slice(1, 4).toUpperCase()
);
console.log("Peso:", peso + " kilos e meio");
console.log("Status:", status);
console.log(fim);
