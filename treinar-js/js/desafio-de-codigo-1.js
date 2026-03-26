/**
 * DESAFIO 01 - Redução de Montante (Fatoriais)
 * Nível: Básico
 * Objetivo: Subtrair uma série de fatoriais pré-calculados de um valor inicial.
 */

window.main1 = (params) => {
  const fatoriais = [0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  const valorInicial = 500000;

  console.log("Iniciando subtração de fatoriais...");

  const resultado = fatoriais.reduce((acc, atual) => {
    const novoValor = acc - atual;
    console.log(`Subtraindo ${atual}: ${acc} -> ${novoValor}`);
    return novoValor;
  }, valorInicial);

  return resultado;
};
