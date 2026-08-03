/* ════════════════════════════════════════════
         BYTECLASS — ONE PIECE GRAND LINE PREMIUM
         Script v2 — Fases 1, 2 e 3 integradas
      ════════════════════════════════════════════ */

// ── Dados dos personagens (carrossel) ──
const PERSONAGENS = [
  {
    nome: "Roronoa Zoro",
    papel: "O Caçador de Recompensas",
    arquivo: "midia/Zoro.mp4",
  },
  {
    nome: "Monkey D. Luffy",
    papel: "O Rei dos Piratas",
    arquivo: "midia/Luffy.mp4",
  },
  {
    nome: "Sanji",
    papel: "O Cozinheiro da Tripulação",
    arquivo: "midia/Sanji.mp4",
  },
  { nome: "Buggy", papel: "O Palhaço Pirata", arquivo: "midia/Buggy.mp4" },
];

// ── Dados dos episódios ──
const EPISODIOS = [
  { codigo: "E01", nome: "O Amanhacer de uma Aventura", assistido: true },
  { codigo: "E02", nome: "O Homem do Chapéu de Palha", assistido: true },
  { codigo: "E03", nome: "O Contador de Histórias", assistido: false },
  { codigo: "E04", nome: "Os Piratas Estão Vindo", assistido: false },
  { codigo: "E05", nome: "Venha Comer no Baratie!", assistido: false },
  { codigo: "E06", nome: "O Chefe e o Faz-Tudo", assistido: false },
  {
    codigo: "E07",
    nome: "A Garota com a Tatuagem de Peixe-Serra",
    assistido: false,
  },
  { codigo: "E08", nome: "O Mais Procurado de East Blue", assistido: false },
];

// ── Avatares piratas aleatórios (Fase 3) ──
const AVATARES = ["🏴‍☠️", "⚓", "🦜", "🗡️", "🍖", "⚔️", "🌊", "🧭", "💀", "🔱"];

// ── Storage key ──
const STORAGE_KEY = "byteclass_onepiece_v2_comments";

/* ══════════════════════════════════
         MÓDULO: CARROSSEL
      ══════════════════════════════════ */
const initCarrossel = () => {
  const track = document.getElementById("carrossel");
  const videos = track.querySelectorAll("video");
  const btnAnterior = document.querySelector(".anterior");
  const btnProximo = document.querySelector(".proximo");
  const dotsContainer = document.getElementById("carrossel-dots");
  const charName = document.getElementById("char-name");
  const charRole = document.getElementById("char-role");

  let currentIndex = 0;
  let autoplayTimer;

  // Touch/swipe (Fase 2)
  let touchStartX = 0;
  let touchEndX = 0;

  // Gera dots
  PERSONAGENS.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const goToSlide = (index) => {
    const dots = dotsContainer.querySelectorAll(".dot");
    const containerWidth = track.parentElement.offsetWidth;

    videos[currentIndex].pause();
    videos[currentIndex].currentTime = 0;
    dots[currentIndex].classList.remove("active");

    currentIndex = (index + videos.length) % videos.length;

    track.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
    dots[currentIndex].classList.add("active");

    // Atualiza label do personagem
    charName.textContent = PERSONAGENS[currentIndex].nome;
    charRole.textContent = PERSONAGENS[currentIndex].papel;

    videos[currentIndex].play().catch(() => {});
    startAutoplay();
  };

  const startAutoplay = () => {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => goToSlide(currentIndex + 1), 8000);
  };

  btnAnterior.addEventListener("click", () => goToSlide(currentIndex - 1));
  btnProximo.addEventListener("click", () => goToSlide(currentIndex + 1));

  // Resize
  window.addEventListener("resize", () => {
    const prev = track.style.transition;
    track.style.transition = "none";
    const w = track.parentElement.offsetWidth;
    track.style.transform = `translateX(-${currentIndex * w}px)`;
    setTimeout(() => {
      track.style.transition = prev;
    }, 50);
  });

  // Swipe touch (Fase 2)
  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  track.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        goToSlide(diff > 0 ? currentIndex + 1 : currentIndex - 1);
      }
    },
    { passive: true },
  );

  startAutoplay();
};

/* ══════════════════════════════════
         MÓDULO: EPISÓDIOS (Grade)
      ══════════════════════════════════ */
const initEpisodios = () => {
  const grid = document.getElementById("episodios-grid");
  if (!grid) return;

  EPISODIOS.forEach((ep) => {
    const card = document.createElement("div");
    card.classList.add("ep-card");
    if (ep.assistido) card.classList.add("watched");

    card.innerHTML = `
            <div class="ep-status">
              ${
                ep.assistido
                  ? '<i class="fas fa-check-circle" aria-label="Assistido"></i>'
                  : '<i class="far fa-circle" aria-label="Não assistido"></i>'
              }
            </div>
            <span class="ep-code">${ep.codigo}</span>
            <span class="ep-name">${ep.nome}</span>
          `;

    grid.appendChild(card);
  });
};

/* ══════════════════════════════════
         MÓDULO: COMENTÁRIOS
      ══════════════════════════════════ */
const initComentarios = () => {
  const form = document.getElementById("form-comentario");
  const lista = document.getElementById("comentarios-lista");

  const getComments = () =>
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

  const saveComments = (arr) =>
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));

  // Formata timestamp (Fase 2)
  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const renderComments = () => {
    const comments = getComments();
    lista.innerHTML = "";

    if (comments.length === 0) {
      lista.innerHTML = `
              <div class="feed-empty">
                <i class="fas fa-anchor"></i>
                Nenhum nakama comentou ainda.<br/>Seja o primeiro da tripulação!
              </div>
            `;
      return;
    }

    [...comments].reverse().forEach((c, i) => {
      const div = document.createElement("div");
      div.classList.add("comentario");
      div.style.animationDelay = `${i * 0.08}s`;

      const avatar = AVATARES[Math.floor(Math.random() * AVATARES.length)];

      div.innerHTML = `
              <div class="comment-header">
                <div class="comment-avatar" aria-hidden="true">${avatar}</div>
                <div class="comment-meta">
                  <span class="comment-name">${c.nome}</span>
                  <span class="comment-time">${formatDate(c.data)}</span>
                </div>
                <button class="comment-delete" data-id="${c.id}" aria-label="Deletar comentário">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <p class="comment-text">${c.texto}</p>
            `;

      lista.appendChild(div);
    });

    // Deletar comentário (Fase 2)
    lista.querySelectorAll(".comment-delete").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const updated = getComments().filter((c) => c.id !== id);
        saveComments(updated);
        renderComments();
      });
    });
  };

  if (!form) return;
  renderComments();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const texto = document.getElementById("comentario").value.trim();

    if (!nome || !texto) {
      alert("Preencha todos os campos, nakama!");
      return;
    }

    const novo = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      nome: nome || "Pirata Anônimo",
      texto,
      data: new Date().toISOString(),
    };

    const comments = getComments();
    comments.push(novo);
    saveComments(comments);

    form.reset();
    renderComments();
  });
};

/* ══════════════════════════════════
         INIT GLOBAL
      ══════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  console.log("⚓ ByteClass | One Piece Grand Line Premium — v2");
  initCarrossel();
  initEpisodios();
  initComentarios();
});
