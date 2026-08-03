/**
 * DESAFIO 19 - Lógica de Múltiplos (3 ou 5)
 * Nível: Intermediate / Advanced
 * Objetivo: Modularização e Gerenciamento de Listas
 */

// Estado global do desafio (Solução C)
let listaMult = [];

// Função auxiliar de verificação (Solução B)
const verificarMultiplo3ou5 = (numero) => {
  return numero % 3 === 0 || numero % 5 === 0;
};

// Função para popular a lista (Solução C)
const registrarMultiplo = (umMultiplo) => {
  listaMult.push(umMultiplo);
};

// Função principal de processamento
const processarDesafioMultiplos = (limite = 1000) => {
  listaMult = []; // Reset da lista a cada execução
  let soma = 0;

  for (let i = 1; i < limite; i++) {
    if (verificarMultiplo3ou5(i)) {
      soma += i;
      registrarMultiplo(i);
    }
  }
  return soma;
};

window.main19 = (params) => {
  const limite = typeof params === "number" ? params : 1000;

  console.log(
    `%c[SYSTEM] Calculando múltiplos de 3 ou 5 abaixo de: ${limite}`,
    "color: #7aa2f7; font-weight: bold;",
  );

  const resultadoSoma = processarDesafioMultiplos(limite);

  // Logs detalhados no Terminal NEXUS
  console.log(
    `%c[SOLUÇÃO A/B] Soma total: ${resultadoSoma}`,
    "color: #9ece6a; font-weight: bold;",
  );

  console.log(
    `%c[SOLUÇÃO C] Lista de múltiplos capturada (${listaMult.length} itens):`,
    "color: #e0af68",
  );

  // Exibindo apenas os primeiros 10 para não inundar o terminal,
  // mas o aluno pode ver o array completo no log abaixo.
  console.log(listaMult);

  return {
    soma: resultadoSoma,
    lista: listaMult,
  };
};
