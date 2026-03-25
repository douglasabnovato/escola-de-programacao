/* ==========================================================================
   PROJECT: learnTECH Travel Master 2.0
   AUTHOR: Douglas A B Novato (CTO)
   LOGIC: Renderização Dinâmica, Fallback de Imagem e Busca Global
   ========================================================================== */

const BANCO_DE_DADOS = {
  nacional: {
    "Rio de Janeiro": [
      {
        cidade: "Rio de Janeiro",
        destaque: "Cristo Redentor",
        img: "https://source.unsplash.com/featured/?rio-de-janeiro,statue",
      },
      {
        cidade: "Búzios",
        destaque: "Geribá Beach",
        img: "https://source.unsplash.com/featured/?buzios,beach",
      },
      {
        cidade: "Paraty",
        destaque: "Centro Histórico",
        img: "https://source.unsplash.com/featured/?paraty,brazil",
      },
    ],
    Ceará: [
      {
        cidade: "Fortaleza",
        destaque: "Praia do Futuro",
        img: "https://source.unsplash.com/featured/?fortaleza,beach",
      },
      {
        cidade: "Jericoacoara",
        destaque: "Pedra Furada",
        img: "https://source.unsplash.com/featured/?jericoacoara",
      },
      {
        cidade: "Canoa Quebrada",
        destaque: "Falésias",
        img: "https://source.unsplash.com/featured/?beach,cliffs",
      },
    ],
    Bahia: [
      {
        cidade: "Salvador",
        destaque: "Pelourinho",
        img: "https://source.unsplash.com/featured/?salvador-bahia",
      },
      {
        cidade: "Porto Seguro",
        destaque: "Axé Moi",
        img: "https://source.unsplash.com/featured/?porto-seguro,beach",
      },
      {
        cidade: "Itacaré",
        destaque: "Ecoturismo",
        img: "https://source.unsplash.com/featured/?itacare,nature",
      },
    ],
    "Santa Catarina": [
      {
        cidade: "Florianópolis",
        destaque: "Praia da Joaquina",
        img: "https://source.unsplash.com/featured/?florianopolis,island",
      },
      {
        cidade: "Balneário Camboriú",
        destaque: "Roda Gigante FG Big Wheel",
        img: "https://source.unsplash.com/featured/?camboriu,city",
      },
      {
        cidade: "Blumenau",
        destaque: "Vila Germânica",
        img: "https://source.unsplash.com/featured/?blumenau,germany",
      },
    ],
    "Minas Gerais": [
      {
        cidade: "Belo Horizonte",
        destaque: "Lagoa da Pampulha",
        img: "https://source.unsplash.com/featured/?belo-horizonte",
      },
      {
        cidade: "Ouro Preto",
        destaque: "Arquitetura Barroca",
        img: "https://source.unsplash.com/featured/?ouropreto,church",
      },
      {
        cidade: "Capitólio",
        destaque: "Canyons de Furnas",
        img: "https://source.unsplash.com/featured/?capitolio,canyon",
      },
    ],
  },
  internacional: {
    Argentina: [
      {
        cidade: "Buenos Aires",
        destaque: "Casa Rosada",
        img: "https://source.unsplash.com/featured/?buenosaires,city",
      },
      {
        cidade: "Bariloche",
        destaque: "Centro Cívico",
        img: "https://source.unsplash.com/featured/?bariloche,snow",
      },
      {
        cidade: "Ushuaia",
        destaque: "Fim do Mundo",
        img: "https://source.unsplash.com/featured/?ushuaia,mountain",
      },
    ],
    Portugal: [
      {
        cidade: "Lisboa",
        destaque: "Torre de Belém",
        img: "https://source.unsplash.com/featured/?lisbon,tower",
      },
      {
        cidade: "Porto",
        destaque: "Ribeira",
        img: "https://source.unsplash.com/featured/?porto,portugal",
      },
      {
        cidade: "Algarve",
        destaque: "Praias da Rocha",
        img: "https://source.unsplash.com/featured/?algarve,beach",
      },
    ],
    França: [
      {
        cidade: "Paris",
        destaque: "Torre Eiffel",
        img: "https://source.unsplash.com/featured/?paris,eiffel",
      },
      {
        cidade: "Nice",
        destaque: "Riviera Francesa",
        img: "https://source.unsplash.com/featured/?nice,france",
      },
      {
        cidade: "Lyon",
        destaque: "Gastronomia",
        img: "https://source.unsplash.com/featured/?lyon,food",
      },
    ],
    Chile: [
      {
        cidade: "Santiago",
        destaque: "Cordilheira dos Andes",
        img: "https://source.unsplash.com/featured/?santiago,chile",
      },
      {
        cidade: "San Pedro de Atacama",
        destaque: "Valle de la Luna",
        img: "https://source.unsplash.com/featured/?atacama,desert",
      },
      {
        cidade: "Punta Arenas",
        destaque: "Glaciares",
        img: "https://source.unsplash.com/featured/?glacier,chile",
      },
    ],
    EUA: [
      {
        cidade: "Orlando",
        destaque: "Disney World",
        img: "https://source.unsplash.com/featured/?disney,orlando",
      },
      {
        cidade: "Nova York",
        destaque: "Times Square",
        img: "https://source.unsplash.com/featured/?newyork,city",
      },
      {
        cidade: "Miami",
        destaque: "South Beach",
        img: "https://source.unsplash.com/featured/?miami,beach",
      },
    ],
  },
  aventura: {
    Peru: [
      {
        cidade: "Cusco",
        destaque: "Machu Picchu",
        img: "https://source.unsplash.com/featured/?machupicchu",
      },
      {
        cidade: "Arequipa",
        destaque: "Cânion do Colca",
        img: "https://source.unsplash.com/featured/?canyon,peru",
      },
      {
        cidade: "Huaraz",
        destaque: "Laguna 69",
        img: "https://source.unsplash.com/featured/?lake,mountain,peru",
      },
    ],
    Islândia: [
      {
        cidade: "Reykjavík",
        destaque: "Aurora Boreal",
        img: "https://source.unsplash.com/featured/?aurora,iceland",
      },
      {
        cidade: "Vik",
        destaque: "Praias Negras",
        img: "https://source.unsplash.com/featured/?blackbeach,iceland",
      },
      {
        cidade: "Akureyri",
        destaque: "Baleias",
        img: "https://source.unsplash.com/featured/?whale,iceland",
      },
    ],
    "Nova Zelândia": [
      {
        cidade: "Queenstown",
        destaque: "Bungee Jumping",
        img: "https://source.unsplash.com/featured/?queenstown,adventure",
      },
      {
        cidade: "Rotorua",
        destaque: "Geiseres",
        img: "https://source.unsplash.com/featured/?geyser,newzealand",
      },
      {
        cidade: "Wanaka",
        destaque: "Trilhas Alpinas",
        img: "https://source.unsplash.com/featured/?wanaka,hiking",
      },
    ],
    Canadá: [
      {
        cidade: "Banff",
        destaque: "Lake Louise",
        img: "https://source.unsplash.com/featured/?banff,lake",
      },
      {
        cidade: "Whistler",
        destaque: "Ski & Snowboard",
        img: "https://source.unsplash.com/featured/?whistler,ski",
      },
      {
        cidade: "Vancouver",
        destaque: "Capilano Bridge",
        img: "https://source.unsplash.com/featured/?vancouver,forest",
      },
    ],
    "Brasil Aventura": [
      {
        cidade: "Bonito - MS",
        destaque: "Flutuação Rio Sucuri",
        img: "https://source.unsplash.com/featured/?bonito,river",
      },
      {
        cidade: "Chapada Diamantina",
        destaque: "Morro do Pai Inácio",
        img: "https://source.unsplash.com/featured/?chapadadiamantina",
      },
      {
        cidade: "Jalapão - TO",
        destaque: "Fervedouros",
        img: "https://source.unsplash.com/featured/?jalapao,brazil",
      },
    ],
  },
};

// 1. COMPONENTE DE CARD COM FALLBACK
function criarCard(destino, labelTag = "Destaque") {
  const fallbackImage =
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop";

  return `
        <article class="travel-card fade-in">
            <div class="card-header">
                <span class="tag green">${labelTag}</span>
                <img src="${destino.img}" 
                     alt="${destino.cidade}" 
                     onerror="this.onerror=null;this.src='${fallbackImage}';" 
                     loading="lazy">
            </div>
            <div class="card-body">
                <p class="destaque-label">EXPERIÊNCIA: <strong>${destino.destaque}</strong></p>
                <h3>${destino.cidade}</h3>
                <button class="btn-card">Explorar Destino</button>
            </div>
        </article>
    `;
}

// 2. MOTOR DE RENDERIZAÇÃO
function renderizarCidadesPorEstado(categoria, estado) {
  const container = document.getElementById("destinations-container");
  if (!container) return;

  const cidades = BANCO_DE_DADOS[categoria][estado];
  container.innerHTML = "";

  if (cidades) {
    cidades.forEach((item) => {
      container.innerHTML += criarCard(item, estado);
    });
  }
}

// 3. LÓGICA DE BUSCA GLOBAL (Varia por Cidade ou Destaque)
/* ==========================================================================
   LOGIC: Busca Global Eficiente (Debounce & Filter)
   ========================================================================== */

function realizarBusca(termo) {
  const container = document.getElementById("destinations-container");
  const query = termo.toLowerCase().trim();

  // Se a busca estiver vazia, volta para o estado inicial (ex: Rio)
  if (query === "") {
    renderizarCidadesPorEstado("nacional", "Rio de Janeiro");
    return;
  }

  container.innerHTML = ""; // Limpa para os resultados
  let encontrados = [];

  // Varredura O(n) em todo o ecossistema de dados
  for (let categoria in BANCO_DE_DADOS) {
    for (let estado in BANCO_DE_DADOS[categoria]) {
      BANCO_DE_DADOS[categoria][estado].forEach((destino) => {
        const alvo = (destino.cidade + destino.destaque).toLowerCase();

        if (alvo.includes(query)) {
          encontrados.push({ ...destino, estado });
        }
      });
    }
  }

  // Renderização dos resultados
  if (encontrados.length > 0) {
    encontrados.forEach((res) => {
      container.innerHTML += criarCard(res, res.estado);
    });
  } else {
    container.innerHTML = `
            <div class="no-results fade-in">
                <p>Nenhum destino encontrado para "<strong>${termo}</strong>"</p>
                <small>Tente buscar por cidades como 'Ushuaia' ou termos como 'Praia'.</small>
            </div>`;
  }
}

// 4. INICIALIZAÇÃO E EVENTOS
document.addEventListener("DOMContentLoaded", () => {
  // Evento do Mega Menu
  const menuLinks = document.querySelectorAll(".dropdown a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const estadoSelecionado = link.innerText;
      const categoriaElement = link.closest(".nav-item").querySelector("a");
      const categoria = categoriaElement.innerText.toLowerCase();

      renderizarCidadesPorEstado(categoria, estadoSelecionado);
      document
        .getElementById("destinations-container")
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  // Evento da Barra de Busca 

  const searchInput = document.getElementById("main-search");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const termo = e.target.value;

      // Só começa a buscar após 2 caracteres para economizar processamento
      if (termo.length > 2) {
        realizarBusca(termo);
      } else if (termo.length === 0) {
        renderizarCidadesPorEstado("nacional", "Rio de Janeiro");
      }
    });
  }

  // Evento do Formulário de Feedback
  const feedbackForm = document.getElementById("form");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = document.getElementById("nome").value;
      alert(
        `Obrigado pelo feedback, ${nome}! A equipe learnTECH entrará em contato.`,
      );
      feedbackForm.reset();
    });
  }

  // Renderização inicial
  renderizarCidadesPorEstado("nacional", "Rio de Janeiro");
});
