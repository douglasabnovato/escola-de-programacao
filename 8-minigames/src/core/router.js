/**
 * Router.js - Orquestrador de visualizações learnTECH
 * Foco: Injeção de HTML, Importação Dinâmica de JS e Gestão de CSS.
 */

const gameContainer = document.getElementById("game-container");
const navLinks = document.querySelectorAll("[data-route]");

const routes = {
  forca: {
    html: "src/games/forca/forca.html",
    js: "./../games/forca/forca.js",
    css: "src/games/forca/forca.css",
  },
  velha: {
    html: "src/games/velha/velha.html",
    js: "./../games/velha/velha.js",
    css: "src/games/velha/velha.css",
  },
  "quebra-cabeca": {
    html: "src/games/quebra-cabeca/quebra-cabeca.html",
    js: "./../games/quebra-cabeca/quebra-cabeca.js",
    css: "src/games/quebra-cabeca/quebra-cabeca.css",
  },
};

/**
 * Principal função de navegação
 */
async function navigate(routeName) {
  const route = routes[routeName];
  if (!route) return;

  try {
    // 1. Feedback Visual e Limpeza de Estilos Anteriores
    gameContainer.style.opacity = "0.3";
    updateActiveLink(routeName);
    removeDynamicStyles();

    // 2. Carrega o CSS específico do jogo
    if (route.css) {
      loadStyle(route.css);
    }

    // 3. Carrega o template HTML do jogo
    const response = await fetch(route.html);
    if (!response.ok)
      throw new Error(`Erro ao buscar HTML: ${response.status}`);

    const html = await response.text();

    // Injeção do HTML no container principal
    gameContainer.innerHTML = html;

    // 4. Importa o módulo JS dinamicamente
    // O import() é relativo ao local deste arquivo (router.js)
    const gameModule = await import(`${route.js}`);

    // 5. Inicializa o jogo (Interface Comum: init())
    if (gameModule.init) {
      gameModule.init();
    }

    // Finaliza transição
    gameContainer.style.opacity = "1";
    console.log(`[Router]: Módulo [${routeName}] carregado e ativo.`);
  } catch (error) {
    gameContainer.innerHTML = `
            <div class="error-box" style="padding: 2rem; text-align: center; border: 3px solid var(--text-dark); background: #ffcccc;">
                <p>Erro crítico ao carregar o módulo: <strong>${routeName}</strong></p>
                <p style="font-size: 0.8rem; margin: 1rem 0;">${error.message}</p>
                <button onclick="location.reload()" class="btn-primary" style="cursor: pointer; padding: 0.5rem 1rem; background: var(--text-dark); color: white; border: none;">Recarregar Aplicação</button>
            </div>
        `;
    console.error("[Router Error]:", error);
  }
}

/**
 * Gerencia a injeção de CSS dinâmico
 */
function loadStyle(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.id = "dynamic-game-style";
  document.head.appendChild(link);
}

/**
 * Remove estilos de jogos anteriores para evitar conflitos
 */
function removeDynamicStyles() {
  const existingStyle = document.getElementById("dynamic-game-style");
  if (existingStyle) {
    existingStyle.remove();
  }
}

/**
 * Gerencia a classe .active nos itens do menu
 */
function updateActiveLink(currentRoute) {
  navLinks.forEach((link) => {
    const route = link.getAttribute("data-route");
    if (route === currentRoute) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/**
 * Inicialização Global
 */
document.addEventListener("DOMContentLoaded", () => {
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = e.currentTarget.getAttribute("data-route");
      navigate(route);
    });
  });

  // Opcional: Iniciar com um jogo padrão ou tela vazia
  // navigate("forca");
});
