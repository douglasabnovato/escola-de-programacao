/**
 * DESAFIO 02 - Gerador de Fatoriais + Redução
 * Nível: Fundamental
 * Track: Fullstack (Backend Logic)
 */

// Função Recursiva
const fatorial = (n) => {
  if (n > 1) {
    return n * fatorial(n - 1);
  }
  return n;
};

window.main2 = (params) => {
  console.log(
    `%c> Iniciando ${params}...`,
    "color: #7aa2f7; font-weight: bold;",
  );

  let allFats = [];

  // Fase 1: Geração dinâmica dos fatoriais
  for (let j = 0; j < 10; j++) {
    const fat = fatorial(j);
    allFats.push(fat);
    console.log(`[RECURSÃO] Fatorial de ${j}: ${fat}`);
  }

  let initial = 500000;
  let result = initial;

  // Fase 2: Subtração
  for (let i = 0; i < allFats.length; i++) {
    const anterior = result;
    result = result - allFats[i];
    console.log(`[SUBTRAÇÃO] ${anterior} - ${allFats[i]} = ${result}`);
  }

  console.log(
    `%c[RESULTADO FINAL]: ${result}`,
    "color: #9ece6a; font-weight: bold;",
  );
  return result;
};
