/**
 * BYTECLASS PROJECT: ONE PIECE - MODERN UX
 * Desenvolvedor: Douglas A B Novato
 * Foco: Modularidade, Performance e Persistência
 */

// --- MÓDULO DO CARROSSEL ---
const initCarrossel = () => {
  const track = document.getElementById("carrossel");
  const videos = track.querySelectorAll("video");
  const btnAnterior = document.querySelector(".anterior");
  const btnProximo = document.querySelector(".proximo");
  const dotsContainer = document.getElementById("carrossel-dots");

  let currentIndex = 0;
  let autoplayTimer;

  // 1. Gera os indicadores (dots) dinamicamente baseados na quantidade de vídeos
  const setupDots = () => {
    videos.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
  };

  // 2. Lógica de movimentação e controle de mídia
  const goToSlide = (index) => {
    const dots = dotsContainer.querySelectorAll(".dot");
    const containerWidth = track.parentElement.offsetWidth;

    // Pausa o vídeo anterior e reseta o tempo
    videos[currentIndex].pause();
    videos[currentIndex].currentTime = 0;
    dots[currentIndex].classList.remove("active");

    // Atualiza o índice (lógica circular)
    currentIndex = (index + videos.length) % videos.length;

    // Move a track de mídia
    track.style.transform = `translateX(-${currentIndex * containerWidth}px)`;

    // Ativa o novo vídeo e o indicador
    dots[currentIndex].classList.add("active");
    videos[currentIndex].play().catch(() => {
      console.log("Autoplay bloqueado pelo navegador. Aguardando interação.");
    });

    // Reinicia o timer de autoplay para evitar pulos imediatos após clique manual
    startAutoplay();
  };

  const startAutoplay = () => {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 8000); // Troca a cada 8 segundos
  };

  // Inicialização do módulo
  if (track && videos.length > 0) {
    setupDots();
    btnAnterior.addEventListener("click", () => goToSlide(currentIndex - 1));
    btnProximo.addEventListener("click", () => goToSlide(currentIndex + 1));

    // Ajusta o carrossel se a janela for redimensionada (Responsividade)
    window.addEventListener("resize", () => {
      track.style.transition = "none"; // Remove animação durante o resize para evitar bugs visuais
      goToSlide(currentIndex);
      setTimeout(() => (track.style.transition = ""), 50);
    });

    startAutoplay();
  }
};

// --- MÓDULO DE COMENTÁRIOS (localStorage) ---
const initComentarios = () => {
  const form = document.getElementById("form-comentario");
  const lista = document.getElementById("comentarios-lista");
  const STORAGE_KEY = "byteclass_onepiece_comments";

  const renderComments = () => {
    const comments = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    lista.innerHTML = "";

    // Exibe do mais recente para o mais antigo
    comments.reverse().forEach((c, index) => {
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comentario");
      commentDiv.style.animationDelay = `${index * 0.1}s`; // Efeito cascata na aparição

      commentDiv.innerHTML = `
                <strong><i class="fas fa-anchor"></i> ${c.nome}</strong>
                <p>${c.texto}</p>
            `;
      lista.appendChild(commentDiv);
    });
  };

  if (form) {
    renderComments();

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nomeInput = document.getElementById("nome");
      const textoInput = document.getElementById("comentario");

      const novoComentario = {
        nome: nomeInput.value.trim() || "Pirata Anônimo",
        texto: textoInput.value.trim(),
        data: new Date().toISOString(),
      };

      const comments = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      comments.push(novoComentario);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));

      form.reset();
      renderComments();
    });
  }
};

// --- INICIALIZAÇÃO GLOBAL ---
document.addEventListener("DOMContentLoaded", () => {
  console.log("⚓ ByteClass: Projeto One Piece Carregado!");
  initCarrossel();
  initComentarios();
});
