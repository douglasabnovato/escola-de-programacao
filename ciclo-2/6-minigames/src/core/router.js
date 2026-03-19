/**
 * Router.js - Orquestrador de visualizações learnTECH
 * Foco: Eficiência de memória e Clean Code.
 */

const gameContainer = document.getElementById("game-container");
let currentGameInstance = null;

const routes = {
  forca: {
    html: "src/games/forca/forca.html",
    js: "../games/forca/forca.js",
  },
  velha: {
    html: "src/games/velha/velha.html",
    js: "../games/velha/velha.js",
  },
  "quebra-cabeca": {
    html: "src/games/quebra-cabeca/quebra-cabeca.html",
    js: "../games/quebra-cabeca/quebra-cabeca.js",
  },
};

async function navigate(routeName) {
  const route = routes[routeName];
  if (!route) return;

  try {
    // 1. Efeito de transição (UX)
    gameContainer.style.opacity = "0.5";

    // 2. Carrega o template HTML do jogo
    const response = await fetch(route.html);
    const html = await response.text();
    gameContainer.innerHTML = html;

    // 3. Importa o módulo JS dinamicamente
    // O sufixo ?t= ajuda a evitar cache durante o desenvolvimento (opcional)
    const gameModule = await import(`${route.js}`);

    // 4. Inicializa o jogo (Interface Comum: init())
    if (gameModule.init) {
      gameModule.init();
    }

    gameContainer.style.opacity = "1";
    console.log(`[Router]: Jogo ${routeName} carregado com sucesso.`);
  } catch (error) {
    gameContainer.innerHTML = `<p class="error">Erro ao carregar o módulo: ${routeName}</p>`;
    console.error("[Router Error]:", error);
  }
}

// Inicialização e Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("[data-route]");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = e.currentTarget.getAttribute("data-route");
      navigate(route);
    });
  });
});
