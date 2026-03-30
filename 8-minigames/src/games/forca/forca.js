/**
 * Forca.js - Módulo de Jogo learnTECH
 * Padrões: ES6 Modules, Encapsulamento, Clean Code.
 */

import { wordList } from "./word-list.js";

// Estado do Jogo (Privado ao módulo)
let state = {
  palavraAtual: "",
  dica: "",
  letrasCorretas: [],
  contadorErros: 0,
  maxErros: 6,
};

// Referências do DOM
let nodes = {};

/**
 * Inicializador do Jogo
 */
export function init() {
  cacheSelectors();
  bindEvents();
  novoJogo();
  console.log("[Forca]: Interface Neo-Brutalista Ativa.");
}

function cacheSelectors() {
  nodes = {
    exibicao: document.querySelector(".exibicao-palavra"),
    erros: document.querySelector(".error-counter b"),
    dica: document.querySelector(".texto-dica b"),
    teclado: document.querySelector(".teclado"),
    imagem: document.querySelector(".caixa-forca img"),
    caixaImagem: document.querySelector(".caixa-forca"),
    modal: document.querySelector(".modal-jogo"),
    btnReset: document.querySelector(".jogar-novamente"),
    somVitoria: document.getElementById("som-vitoria"),
    somDerrota: document.getElementById("som-derrota"),
  };
}

function bindEvents() {
  nodes.btnReset.onclick = () => novoJogo();
}

/**
 * Reseta o jogo e seleciona nova palavra
 */
function novoJogo() {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];

  state.palavraAtual = word.toLowerCase();
  state.dica = hint;
  state.letrasCorretas = [];
  state.contadorErros = 0;

  // UI Reset
  nodes.modal.classList.remove("mostrar");
  nodes.dica.innerText = state.dica;
  nodes.erros.innerText = `0 / ${state.maxErros}`;
  nodes.imagem.src = `src/assets/img/games/forca/hangman-0.svg`;

  // Renderiza slots (Lidando com espaços se houver)
  nodes.exibicao.innerHTML = state.palavraAtual
    .split("")
    .map((char) => `<li class="letra ${char === " " ? "espaco" : ""}"></li>`)
    .join("");

  renderTeclado();
}

/**
 * Cria o teclado virtual
 */
function renderTeclado() {
  nodes.teclado.innerHTML = "";
  const letras = "qwertyuiopasdfghjklzxcvbnm".split("");

  letras.forEach((letra) => {
    const btn = document.createElement("button");
    btn.innerText = letra.toUpperCase();
    btn.classList.add("btn-teclado");
    btn.onclick = (e) => validarJogada(e.target, letra);
    nodes.teclado.appendChild(btn);
  });
}

/**
 * Lógica de Validação
 */
function validarJogada(botao, letra) {
  botao.disabled = true;

  if (state.palavraAtual.includes(letra)) {
    botao.classList.add("correto"); // Classe para CSS (ex: fundo verde/neon)

    [...state.palavraAtual].forEach((char, index) => {
      if (char === letra) {
        state.letrasCorretas.push(char);
        const li = nodes.exibicao.querySelectorAll("li")[index];
        li.innerText = char.toUpperCase();
        li.classList.add("adivinhada");
      }
    });
  } else {
    // ERRO: Ativa animação 'shake' definida no CSS
    state.contadorErros++;
    botao.classList.add("errado"); // Classe para CSS (ex: fundo cinza/riscado)

    nodes.caixaImagem.classList.add("erro-shake");
    setTimeout(() => nodes.caixaImagem.classList.remove("erro-shake"), 400);

    nodes.imagem.src = `src/assets/img/games/forca/hangman-${state.contadorErros}.svg`;
    nodes.erros.innerText = `${state.contadorErros} / ${state.maxErros}`;
  }

  verificarFim();
}

function verificarFim() {
  // Ignora espaços na contagem de vitória
  const letrasUnicas = [...new Set(state.palavraAtual.replace(/\s/g, ""))];
  const venceu = letrasUnicas.every((l) => state.letrasCorretas.includes(l));
  const perdeu = state.contadorErros >= state.maxErros;

  if (venceu || perdeu) {
    exibirResultado(venceu);
  }
}

function exibirResultado(vitoria) {
  const modalMsg = nodes.modal.querySelector(".modal-message b");
  const modalTitle = nodes.modal.querySelector(".modal-title");
  const modalImg = nodes.modal.querySelector(".modal-img");

  modalTitle.innerText = vitoria ? "SISTEMA ONLINE!" : "CRITICAL ERROR!";
  modalImg.src = vitoria
    ? "src/assets/img/shared/victory.gif"
    : "src/assets/img/shared/lost.gif";

  modalMsg.innerText = state.palavraAtual.toUpperCase();
  nodes.modal.classList.add("mostrar");

  const som = vitoria ? nodes.somVitoria : nodes.somDerrota;
  if (som) {
    som.currentTime = 0;
    som.play().catch(() => console.warn("Audio autoplay blocked."));
  }
}
