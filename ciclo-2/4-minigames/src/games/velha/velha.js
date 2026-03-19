/**
 * Velha.js - Módulo de Estratégia learnTECH
 * Padrões: ES6 Modules, Encapsulamento, Clean Code.
 */

// Estado do Jogo (Privado ao módulo)
let state = {
  tabuleiro: Array(9).fill(null),
  jogadorAtual: "X",
  jogoAtivo: true,
  vitoriasPossiveis: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Horizontais
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Verticais
    [0, 4, 8],
    [2, 4, 6], // Diagonais
  ],
};

// Referências do DOM
let nodes = {};

/**
 * Inicializador do Jogo (Interface Comum: init)
 */
export function init() {
  cacheSelectors();
  bindEvents();
  resetJogo();
  console.log("[Velha]: Sistema homologado e pronto.");
}

/**
 * Mapeia os elementos do DOM para performance
 */
function cacheSelectors() {
  nodes = {
    grid: document.getElementById("tabuleiro"),
    status: document.querySelector("#vez-jogador span"),
    log: document.getElementById("historico"),
    btnReset: document.getElementById("reiniciar"),
    somVitoria: document.getElementById("som-vitoria"),
    somDerrota: document.getElementById("som-derrota"),
  };
}

/**
 * Configura os ouvintes de eventos
 */
function bindEvents() {
  if (nodes.btnReset) {
    // Usando onclick para evitar múltiplos listeners em navegação via roteador
    nodes.btnReset.onclick = () => resetJogo();
  }
}

/**
 * Reseta o estado e a UI para uma nova partida
 */
function resetJogo() {
  state.tabuleiro.fill(null);
  state.jogadorAtual = "X";
  state.jogoAtivo = true;

  // Atualização visual do status e terminal
  if (nodes.status) nodes.status.innerText = state.jogadorAtual;
  if (nodes.log) {
    nodes.log.innerHTML = `<p class="log-entry">> Sistema reiniciado. Aguardando X...</p>`;
  }

  renderTabuleiro();
}

/**
 * Gera dinamicamente o grid 3x3 no DOM
 */
function renderTabuleiro() {
  if (!nodes.grid) return;

  nodes.grid.innerHTML = "";
  state.tabuleiro.forEach((_, index) => {
    const celula = document.createElement("div");
    celula.classList.add("celula-velha");
    celula.dataset.index = index;
    celula.onclick = () => realizarJogada(index, celula);
    nodes.grid.appendChild(celula);
  });
}

/**
 * Lógica principal de clique e validação
 */
function realizarJogada(index, elemento) {
  // Impede jogada se o jogo acabou ou a casa está ocupada
  if (!state.jogoAtivo || state.tabuleiro[index]) return;

  // Atualiza Estado e UI
  state.tabuleiro[index] = state.jogadorAtual;
  elemento.innerText = state.jogadorAtual;
  elemento.classList.add(state.jogadorAtual.toLowerCase(), "ocupada");

  registrarLog(`Jogador ${state.jogadorAtual} -> Pos ${index + 1}`);
  verificarResultado();
}

/**
 * Avalia se houve vencedor ou empate
 */
function verificarResultado() {
  let venceu = false;

  for (let condicao of state.vitoriasPossiveis) {
    const [a, b, c] = condicao;
    if (
      state.tabuleiro[a] &&
      state.tabuleiro[a] === state.tabuleiro[b] &&
      state.tabuleiro[a] === state.tabuleiro[c]
    ) {
      venceu = true;
      break;
    }
  }

  if (venceu) {
    state.jogoAtivo = false;
    registrarLog(`SISTEMA ONLINE: ${state.jogadorAtual} VENCEU!`);
    tocarSom(nodes.somVitoria);
    return;
  }

  // Verifica Empate (Velha)
  if (!state.tabuleiro.includes(null)) {
    state.jogoAtivo = false;
    registrarLog("EMPATE: SISTEMA EM LOOP");
    tocarSom(nodes.somDerrota);
    return;
  }

  // Troca o turno do jogador
  state.jogadorAtual = state.jogadorAtual === "X" ? "O" : "X";
  if (nodes.status) nodes.status.innerText = state.jogadorAtual;
}

/**
 * Adiciona eventos ao histórico estilo terminal
 */
function registrarLog(msg) {
  if (!nodes.log) return;

  const p = document.createElement("p");
  p.classList.add("log-entry");
  p.innerText = `> ${msg}`;
  nodes.log.prepend(p);
}

/**
 * Gerencia o áudio com tratamento de política de browser
 */
function tocarSom(audio) {
  if (audio) {
    audio.currentTime = 0;
    audio
      .play()
      .catch(() => console.warn("[Audio]: Bloqueado pelo navegador."));
  }
}
