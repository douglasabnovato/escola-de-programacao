/**
 * quebra-cabeca.js - Módulo de Lógica de Deslocamento
 */

let state = {
  pecas: [1, 2, 3, 4, 5, 6, 7, 8, null], // null é o espaço vazio
  movimentos: 0,
  jogoAtivo: false,
};

let nodes = {};

export function init() {
  cacheSelectors();
  bindEvents();
  renderizar();
  console.log("[Puzzle]: Módulo inicializado.");
}

function cacheSelectors() {
  nodes = {
    grid: document.getElementById("puzzle-grid"),
    contador: document.querySelector("#movimentos span"),
    btnShuffle: document.getElementById("embaralhar"),
    somVitoria: document.getElementById("som-vitoria"),
  };
}

function bindEvents() {
  nodes.btnShuffle.onclick = novoJogo;
}

function novoJogo() {
  state.movimentos = 0;
  state.jogoAtivo = true;
  nodes.contador.innerText = state.movimentos;

  // Algoritmo de Embaralhamento Fisher-Yates
  for (let i = state.pecas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.pecas[i], state.pecas[j]] = [state.pecas[j], state.pecas[i]];
  }

  renderizar();
}

function renderizar() {
  nodes.grid.innerHTML = "";
  state.pecas.forEach((valor, index) => {
    const div = document.createElement("div");
    div.classList.add("peca-puzzle");
    if (valor === null) div.classList.add("vazio");

    div.innerText = valor || "";
    div.onclick = () => moverPeca(index);
    nodes.grid.appendChild(div);
  });
}

function moverPeca(index) {
  if (!state.jogoAtivo) return;

  const vazioIndex = state.pecas.indexOf(null);
  const possiveisMovimentos = [
    index - 1,
    index + 1, // Lados
    index - 3,
    index + 3, // Cima/Baixo
  ];

  // Verifica se o clique é adjacente ao vazio e não quebra a linha do grid
  if (possiveisMovimentos.includes(vazioIndex)) {
    // Correção para não pular de linha nas bordas
    const clicadoLinha = Math.floor(index / 3);
    const vazioLinha = Math.floor(vazioIndex / 3);

    if (Math.abs(index - vazioIndex) === 1 && clicadoLinha !== vazioLinha)
      return;

    // Troca de posição (Swap)
    [state.pecas[index], state.pecas[vazioIndex]] = [
      state.pecas[vazioIndex],
      state.pecas[index],
    ];
    state.movimentos++;
    nodes.contador.innerText = state.movimentos;

    renderizar();
    verificarVitoria();
  }
}

function verificarVitoria() {
  const vitoria = state.pecas.every((valor, i) => {
    if (i === 8) return valor === null;
    return valor === i + 1;
  });

  if (vitoria && state.movimentos > 0) {
    state.jogoAtivo = false;
    nodes.somVitoria.play();
    setTimeout(
      () => alert(`Incrível! Você resolveu em ${state.movimentos} movimentos!`),
      200,
    );
  }
}
