export function geradorDeTagsDeIdentificacao(nomeDoPet) {
  return nomeDoPet.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  const idadeMinima = 1;
  const ehPortePequeno = porte.toUpperCase() === "M";

  return idade >= idadeMinima && ehPortePequeno;
}

export function calcularConsumoDeRacao(nome, idade, peso) {
  const gramasPorDia = peso * 300;

  return gramasPorDia;
}

export function decidirTipoDeAtividadePorPorte(porte) {
  const atividadesPorPorte = {
    pequeno: "brincar dentro de casa",
    medio: "caminhada no parque",
    grande: "correr ao ar livre",
  };

  return atividadesPorPorte[porte] || "porte inválido";
}

export async function buscarDadoAsync() {
  return 'Julie';
}
