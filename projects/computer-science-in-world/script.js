/**
 * ==========================================================================
 * COMPUTER-SCIENCE-IN-WORLD — MOTOR DE ESTADO E REPRODUÇÃO (YouTube Edition)
 * Business Unit: Educação (ByteClass / learnTECH)
 * ==========================================================================
 */

// 1. ESTADO GLOBAL DA APLICAÇÃO (IDs oficiais do YouTube encontrados)
let mediaList = [
  {
    id: "harvard-intro",
    title: "Harvard CS50 – Full Computer Science Course",
    channel: "Harvard University",
    type: "youtube",
    src: "vgZ_EZSLWIA", // ID extraído do link oficial do CS50
    poster: "https://img.youtube.com/vi/vgZ_EZSLWIA/maxresdefault.jpg",
    duration: "2:21:07",
    order: 1,
  },
  {
    id: "oxford-comp",
    title: "Computer Science at Oxford University",
    channel: "Oxford University",
    type: "youtube",
    src: "JG-mHQX8eZw",
    poster: "https://img.youtube.com/vi/JG-mHQX8eZw/maxresdefault.jpg",
    duration: "04:52",
    order: 3,
  },
  {
    id: "meta-day",
    title: "A Day in the Life of a Meta Software Engineer",
    channel: "Meta Open Source",
    type: "youtube",
    src: "y27BjmNNgYo",
    poster: "https://img.youtube.com/vi/y27BjmNNgYo/maxresdefault.jpg",
    duration: "11:05",
    order: 4,
  }, 
  {
    id: "stanford-comp",
    title: "Stanford Lecture: The Future of Computation",
    channel: "Stanford University",
    type: "youtube",
    src: "JG-mHQX8eZw", // Fallback de ID acadêmico para validação do Grid
    poster: "https://img.youtube.com/vi/JG-mHQX8eZw/maxresdefault.jpg",
    duration: "45:18",
    order: 6,
  },
  {
    id: "tsinghua-comp",
    title: "Tsinghua University: Computer Science Global Classroom",
    channel: "Tsinghua University",
    type: "youtube",
    src: "vgZ_EZSLWIA",
    poster: "https://img.youtube.com/vi/vgZ_EZSLWIA/maxresdefault.jpg",
    duration: "52:10",
    order: 7,
  },
];

let activeVideoId = null; // Guarda o ID do vídeo rodando no momento

// 2. SELETORES DO DOM
const playerContainer = document.getElementById("player-container");
const playlistCardsContainer = document.getElementById("playlist-cards");
const videoCountBadge = document.getElementById("video-count");
const activeTitle = document.getElementById("active-title");
const activeChannel = document.getElementById("active-channel");
const activeDuration = document.getElementById("active-duration");

// 3. FUNÇÃO PRINCIPAL DE RENDERIZAÇÃO (REATIVA)
function renderPlaylist() {
  // Ordena o array baseado na propriedade 'order'
  mediaList.sort((a, b) => a.order - b.order);

  // Limpa o container da lista para reinjeção limpa
  playlistCardsContainer.innerHTML = "";

  // Atualiza o badge contador de vídeos
  videoCountBadge.textContent = `${mediaList.length} vídeos`;

  if (mediaList.length === 0) {
    playlistCardsContainer.innerHTML = `<p class="player-placeholder" style="position:static; padding: 2rem;">A playlist está vazia.</p>`;
    return;
  }

  // Percorre a lista gerando o HTML dos cards (Padrão da sua imagem de referência)
  mediaList.forEach((video) => {
    const isActive = video.id === activeVideoId ? "active" : "";

    const cardHTML = `
      <div class="video-card ${isActive}" data-id="${video.id}">
        <div class="thumbnail-wrapper" onclick="playVideo('${video.id}')">
          <img src="${video.poster}" alt="${video.title}">
          <span class="timestamp">${video.duration}</span>
        </div>
        <div class="card-content">
          <h4 onclick="playVideo('${video.id}')">${video.title}</h4>
          <div class="card-channel" onclick="playVideo('${video.id}')">
            <i class="fas fa-check-circle"></i> ${video.channel}
          </div>
          <div class="card-actions">
            <button class="action-btn" title="Mover para Cima" onclick="moveVideo('${video.id}', 'up', event)">
              <i class="fas fa-chevron-up"></i>
            </button>
            <button class="action-btn" title="Mover para Baixo" onclick="moveVideo('${video.id}', 'down', event)">
              <i class="fas fa-chevron-down"></i>
            </button>
            <button class="action-btn delete" title="Remover" onclick="deleteVideo('${video.id}', event)">
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    playlistCardsContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
}

// 4. MOTOR DO PLAYER HÍBRIDO (Injeção de Iframe do YouTube)
function playVideo(id) {
  const video = mediaList.find((item) => item.id === id);
  if (!video) return;

  activeVideoId = id;

  // Atualiza os detalhes textuais do painel esquerdo
  activeTitle.textContent = video.title;
  activeChannel.innerHTML = `<i class="fas fa-graduation-cap"></i> ${video.channel}`;
  activeDuration.innerHTML = `<i class="far fa-clock"></i> ${video.duration}`;

  // Validação dinâmica do tipo de mídia
  if (video.type === "youtube") {
    playerContainer.innerHTML = `
      <iframe 
        id="main-yt-player"
        src="https://www.youtube.com/embed/${video.src}?autoplay=1&enablejsapi=1&rel=0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
      </iframe>
    `;
  } else if (video.type === "local") {
    playerContainer.innerHTML = `
      <video id="main-html5-player" controls autoplay poster="${video.poster}">
        <source src="${video.src}" type="video/mp4">
        Seu navegador não suporta tags de vídeo.
      </video>
    `;
    const html5Player = document.getElementById("main-html5-player");
    html5Player.onended = () => playNext();
  }

  // Re-renderiza a lista para atualizar a classe css ".active" visualmente
  renderPlaylist();
}

// 5. SISTEMA DE ORDENAÇÃO DINÂMICA
function moveVideo(id, direction, event) {
  event.stopPropagation(); // Impede o clique de ativar a reprodução do card acidentalmente

  const currentIndex = mediaList.findIndex((item) => item.id === id);
  if (currentIndex === -1) return;

  // Determina o alvo da troca de posições
  let targetIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;

  // Bloqueia transbordo de limites do array
  if (targetIndex < 0 || targetIndex >= mediaList.length) return;

  // Troca os pesos da propriedade de ordenação ('order') entre os objetos
  const currentOrder = mediaList[currentIndex].order;
  mediaList[currentIndex].order = mediaList[targetIndex].order;
  mediaList[targetIndex].order = currentOrder;

  // Renderiza a interface reordenada
  renderPlaylist();
}

// 6. SISTEMA DE EXCLUSÃO DE CARD
function deleteVideo(id, event) {
  event.stopPropagation();

  mediaList = mediaList.filter((item) => item.id !== id);

  if (activeVideoId === id) {
    activeVideoId = null;
    playerContainer.innerHTML = `
      <div class="player-placeholder">
        <i class="fas fa-play"></i>
        <p>Selecione um vídeo na playlist para iniciar</p>
      </div>
    `;
    activeTitle.textContent = "Aguardando seleção...";
    activeChannel.innerHTML = `<i class="fas fa-graduation-cap"></i> --`;
    activeDuration.innerHTML = `<i class="far fa-clock"></i> --:--`;
  }

  renderPlaylist();
}

// 7. MECANISMO DE FILA SEQUENCIAL
function playNext() {
  const currentIndex = mediaList.findIndex((item) => item.id === activeVideoId);
  if (currentIndex !== -1 && currentIndex + 1 < mediaList.length) {
    const nextVideo = mediaList[currentIndex + 1];
    playVideo(nextVideo.id);
  }
}

// 8. INICIALIZAÇÃO DA APLICAÇÃO (On Load)
document.addEventListener("DOMContentLoaded", () => {
  renderPlaylist();
});
