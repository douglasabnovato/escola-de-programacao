/**
 * DESAFIO 18 - Lógica de Números Primos
 * Nível: Intermediate
 * Objetivo: Validar se um número é primo com eficiência algorítmica.
 */

const verificaNumeroPrimo = (numero) => {
  // Casos básicos
  if (numero <= 1) return false;
  if (numero <= 3) return true;

  // Elimina pares e múltiplos de 3 rapidamente
  if (numero % 2 === 0 || numero % 3 === 0) return false;

  // Otimização: Só precisamos testar até a raiz quadrada do número
  // Padrão 6k ± 1
  for (let i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) return false;
  }

  return true;
};

window.main18 = (params) => {
  // Se params não for enviado, testamos um número padrão ou aleatório
  const numParaTeste = typeof params === "number" ? params : 29;

  console.log(
    `%c[SYSTEM] Analisando número: ${numParaTeste}`,
    "color: #7aa2f7; font-weight: bold;",
  );

  const ePrimo = verificaNumeroPrimo(numParaTeste);

  if (ePrimo) {
    console.log(
      `%c[RESULTADO] O número ${numParaTeste} é PRIMO.`,
      "color: #9ece6a; font-weight: bold;",
    );
  } else {
    console.log(
      `%c[RESULTADO] O número ${numParaTeste} NÃO é primo.`,
      "color: #f7768e; font-weight: bold;",
    );
  }

  return ePrimo;
};
