/**
 * Forca.js - Módulo de Jogo learnTECH
 * Padrões: ES6 Modules, Encapsulamento, Clean Code.
 */

// Importação da lista de palavras (Agora como módulo também)
import { wordList } from "./word-list.js";

// Estado do Jogo (Privado ao módulo)
let state = {
  palavraAtual: "",
  dica: "",
  letrasCorretas: [],
  contadorErros: 0,
  maxErros: 6,
};

// Referências do DOM (Iniciadas no init)
let nodes = {};

/**
 * Inicializador do Jogo (Chamado pelo Router)
 */
export function init() {
  cacheSelectors();
  bindEvents();
  novoJogo();
  console.log("[Forca]: Módulo inicializado.");
}

/**
 * Mapeia os elementos do DOM para evitar buscas repetitivas (Performance)
 */
function cacheSelectors() {
  nodes = {
    exibicao: document.querySelector(".exibicao-palavra"),
    erros: document.querySelector(".texto-erros b"),
    dica: document.querySelector(".texto-dica b"),
    teclado: document.querySelector(".teclado"),
    imagem: document.querySelector(".caixa-forca img"),
    modal: document.querySelector(".modal-jogo"),
    btnReset: document.querySelector(".jogar-novamente"),
    somVitoria: document.getElementById("som-vitoria"),
    somDerrota: document.getElementById("som-derrota"),
  };
}

function bindEvents() {
  nodes.btnReset.addEventListener("click", novoJogo);
}

function novoJogo() {
  // Reset de Estado
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  state.palavraAtual = word.toLowerCase();
  state.dica = hint;
  state.letrasCorretas = [];
  state.contadorErros = 0;

  // Atualização de UI
  nodes.modal.classList.remove("mostrar");
  nodes.dica.innerText = state.dica;
  nodes.erros.innerText = `0 / ${state.maxErros}`;
  nodes.imagem.src = `src/games/forca/assets/hangman-0.svg`;

  // Renderiza placeholders das letras
  nodes.exibicao.innerHTML = state.palavraAtual
    .split("")
    .map(() => `<li class="letra"></li>`)
    .join("");

  renderTeclado();
}

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

function validarJogada(botao, letra) {
  botao.disabled = true;
  botao.classList.add("clicado");

  if (state.palavraAtual.includes(letra)) {
    // Acerto: Atualiza letras no DOM
    [...state.palavraAtual].forEach((char, index) => {
      if (char === letra) {
        state.letrasCorretas.push(char);
        const li = nodes.exibicao.querySelectorAll("li")[index];
        li.innerText = char.toUpperCase();
        li.classList.add("adivinhada");
      }
    });
  } else {
    // Erro: Atualiza imagem e contador
    state.contadorErros++;
    nodes.imagem.src = `src/games/forca/assets/hangman-${state.contadorErros}.svg`;
    nodes.erros.innerText = `${state.contadorErros} / ${state.maxErros}`;
  }

  verificarFimDeJogo();
}

function verificarFimDeJogo() {
  const venceu = state.palavraAtual
    .split("")
    .every((l) => state.letrasCorretas.includes(l));

  const perdeu = state.contadorErros >= state.maxErros;

  if (venceu || perdeu) {
    exibirModal(venceu);
  }
}

function exibirModal(vitoria) {
  const titulo = nodes.modal.querySelector("h4");
  const mensagem = nodes.modal.querySelector("p");
  const img = nodes.modal.querySelector("img");

  titulo.innerText = vitoria ? "Parabéns!" : "Fim de Jogo!";
  img.src = vitoria
    ? "src/assets/img/shared/victory.gif"
    : "src/assets/img/shared/lost.gif";
  mensagem.innerHTML = vitoria
    ? `Você descobriu a palavra: <b>${state.palavraAtual.toUpperCase()}</b>`
    : `A palavra correta era: <b>${state.palavraAtual.toUpperCase()}</b>`;

  nodes.modal.classList.add("mostrar");

  // Play Audio (Tratamento de erro para navegadores que bloqueiam autoplay)
  const som = vitoria ? nodes.somVitoria : nodes.somDerrota;
  som.currentTime = 0;
  som
    .play()
    .catch(() => console.log("Áudio bloqueado pelo navegador até interação."));
}
