import { roadmapData } from "./data.js";

/**
 * CONFIGURAÇÕES E SELETORES
 */
const roadmapContainer = document.querySelector("#roadmap-container");
const mainForm = document.querySelector("#mainForm");
const header = document.querySelector("header");

/**
 * RENDERIZAÇÃO DO ROADMAP
 * Transforma os dados do data.js em HTML estruturado
 */
function renderRoadmap(data) {
  if (!roadmapContainer) return;

  roadmapContainer.innerHTML = data
    .map(
      (secao) => `
    <div class="roadmap-fase" data-fase="${secao.slug}">
      <h3 class="fase-titulo">${secao.fase}</h3>
      <div class="cards-grid">
        ${secao.cards
          .map(
            (card) => `
          <a href="${card.link || "#"}" target="_blank" class="card-link">
            <div class="card-roadmap ${card.tipo}" id="${card.id}">
              <div class="card-content">
                <h4>${card.titulo}</h4>
                <p>${card.descricao}</p>
                ${card.status ? `<span class="badge-status">${card.status}</span>` : ""}
              </div>
            </div>
          </a>
        `,
          )
          .join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

/**
 * HANDLER DE FORMULÁRIO (UX & FEEDBACK)
 * Gerencia o envio, estados de carregamento e feedback de sucesso
 */
function initFormHandler() {
  if (!mainForm) return;

  mainForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const btn = mainForm.querySelector("button");
    const nomeInput = document.querySelector("#nome");
    const nome = nomeInput.value;
    const originalText = btn.innerText;

    // 1. Feedback Visual de Carregamento
    btn.disabled = true;
    btn.innerText = "Processando...";
    btn.style.opacity = "0.7";
    btn.style.cursor = "not-allowed";

    try {
      // Simulação de delay de rede (Backend Node.js fictício)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 2. Criar mensagem de sucesso elegante
      const successMsg = document.createElement("div");
      successMsg.className = "form-success-msg"; // Você pode estilizar no CSS
      successMsg.innerHTML = `
        <p style="color: var(--primary); font-weight: 800; margin-top: 1rem; text-align: center; animation: fadeIn 0.5s ease;">
          🚀 Parabéns, ${nome}! Sua jornada na ByteClass começou. Verifique seu e-mail.
        </p>
      `;

      mainForm.appendChild(successMsg);

      // 3. Limpar formulário
      mainForm.reset();

      // Remove a mensagem após 6 segundos
      setTimeout(() => successMsg.remove(), 6000);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Ops! Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
    } finally {
      // 4. Reset de estado do botão
      btn.disabled = false;
      btn.innerText = originalText;
      btn.style.opacity = "1";
      btn.style.cursor = "pointer";
    }
  });
}

/**
 * EFEITOS DE INTERFACE (UI)
 * Gerencia o comportamento do Header e Scroll Suave
 */
function initScrollEffects() {
  // Alteração do Header ao scrollar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });

  // Scroll Suave para links internos
  document
    .querySelectorAll("nav a, .btn-secondary, .back-to-top")
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Verifica se é um link interno (começa com #)
        if (href.startsWith("#")) {
          e.preventDefault();
          const targetSection = document.querySelector(href);

          if (targetSection) {
            const headerOffset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      });
    });
}

/**
 * INICIALIZAÇÃO ÚNICA
 * Garante que o DOM está pronto antes de executar as funções
 */
document.addEventListener("DOMContentLoaded", () => {
  console.log("ByteClass Engine Iniciada... 🚀");

  renderRoadmap(roadmapData);
  initFormHandler();
  initScrollEffects();
});
