/* BYTECLASS ELITE - Justice League Project
   Lógica: Programação Orientada a Dados e Manipulação de DOM
*/

const heroesData = {
  Home: {
    title: "Justice League",
    desc: "A primeira linha de defesa da Terra contra as maiores ameaças do universo. Reúna os maiores heróis do mundo.",
    images: ["liga.jpg", "liga1.jpg", "liga2.jpg", "liga3.jpg", "liga4.jpg"],
  },
  Batman: {
    title: "Batman",
    desc: "O Cavaleiro das Trevas de Gotham City, mestre estrategista e o maior detetive do mundo.",
    images: ["batman.jpg", "batman1.jpg"],
  },
  Superman: {
    title: "Superman",
    desc: "O Homem de Aço, símbolo de esperança e protetor de Metrópolis com poderes divinos.",
    images: ["superman.jpg", "superman1.jpg"],
  },
  Flash: {
    title: "Flash",
    desc: "Barry Allen, o homem mais rápido do mundo, capaz de quebrar as barreiras do tempo e espaço.",
    images: ["flash.jpg", "flash1.jpg"],
  },
  "Mulher Maravilha": {
    title: "Mulher Maravilha",
    desc: "Diana Prince, a princesa amazona de Themyscira, guerreira imortal e embaixadora da paz.",
    images: ["mulherMaravilha.jpg", "mulherMaravilha1.jpg"],
  },
  "Lanterna Verde": {
    title: "Lanterna Verde",
    desc: "Dotado de um anel de poder alimentado pela força de vontade para proteger o setor 2814.",
    images: ["lanternaVerde.jpg", "lanternaVerde1.jpg"],
  },
  "Arqueiro Verde": {
    title: "Arqueiro Verde",
    desc: "Oliver Queen, o arqueiro esmeralda que utiliza sua precisão e fortuna para combater o crime.",
    images: ["arqueiroVerde.jpg", "arqueiroVerde1.jpg"],
  },
  Aquaman: {
    title: "Aquaman",
    desc: "Arthur Curry, o Rei de Atlântida e mestre dos sete mares, protegendo o mundo terrestre e subaquático.",
    images: ["aquaman.jpg", "aquaman1.jpg"],
  },
  Ciborgue: {
    title: "Ciborgue",
    desc: "Victor Stone, metade homem, metade máquina, conectado a todas as redes de dados do planeta.",
    images: ["ciborgue.jpg", "ciborgue1.jpg"],
  },
  Shazam: {
    title: "Shazam",
    desc: "O jovem Billy Batson que, ao dizer uma palavra mágica, adquire os poderes de seis deuses antigos.",
    images: ["shazam.png", "shazam1.jpg"],
  },
};

// Variáveis de Estado do Sistema
let currentHero = "Home";
let slideIndex = 0;
let slideInterval;

/**
 * Renderiza o conteúdo do herói selecionado
 */
function renderHero(heroKey) {
  const data = heroesData[heroKey];
  const content = document.getElementById("content");
  if (!data) return;

  // Gerar HTML das imagens (Background)
  const imagesHTML = data.images
    .map(
      (img, i) =>
        `<img src="imagens/${img}" class="${i === 0 ? "active" : ""}" alt="${heroKey}">`,
    )
    .join("");

  // Gerar HTML dos indicadores (Dots)
  const dotsHTML = data.images
    .map(
      (_, i) =>
        `<div class="dot ${i === 0 ? "active" : ""}" onclick="setSlide(${i})"></div>`,
    )
    .join("");

  // Injeção de conteúdo no DOM
  content.innerHTML = `
        <div class="carousel-bg">${imagesHTML}</div>
        <div class="hero-info">
            <h1>${data.title}</h1>
            <p>${data.desc}</p>
            <div class="indicators">${dotsHTML}</div>
        </div>
    `;

  // Reset de estado para o novo herói
  slideIndex = 0;
  currentHero = heroKey;
  startCarousel();
}

/**
 * Gerencia a troca automática de slides
 */
function startCarousel() {
  clearInterval(slideInterval);
  const imgs = document.querySelectorAll(".carousel-bg img");
  const dots = document.querySelectorAll(".dot");

  if (imgs.length <= 1) return;

  slideInterval = setInterval(() => {
    changeSlide(imgs, dots, (slideIndex + 1) % imgs.length);
  }, 5000); // Troca a cada 5 segundos
}

/**
 * Função auxiliar para mudar o slide (usada pelo timer e pelo clique manual)
 */
function changeSlide(imgs, dots, nextIndex) {
  imgs[slideIndex].classList.remove("active");
  dots[slideIndex].classList.remove("active");

  slideIndex = nextIndex;

  imgs[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

/**
 * Função chamada pelo HTML (onclick) nos indicadores
 */
function setSlide(index) {
  const imgs = document.querySelectorAll(".carousel-bg img");
  const dots = document.querySelectorAll(".dot");

  changeSlide(imgs, dots, index);
  startCarousel(); // Reinicia o timer para evitar trocas imediatas após o clique
}

/**
 * Inicialização e Event Listeners
 */
function init() {
  const menuItems = document.querySelectorAll(".menu-item");
  const nav = document.getElementById("menu");

  menuItems.forEach((item) => {
    const heroName = item.getAttribute("data-hero");

    // Adiciona label dinamicamente para o menu lateral (Desktop)
    if (!item.querySelector(".hero-label")) {
      const label = document.createElement("span");
      label.className = "hero-label";
      label.textContent = heroName;
      item.appendChild(label);
    }

    item.addEventListener("click", () => {
      // Lógica do botão Hambúrguer (Home)
      if (heroName === "Home") {
        nav.classList.toggle("open");
      }

      // Atualiza classe 'active' no menu
      menuItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      // Renderiza o novo herói
      renderHero(heroName);

      // No Mobile: fecha o menu ao selecionar (se não for a home)
      if (window.innerWidth <= 768 && heroName !== "Home") {
        nav.classList.remove("open");
      }
    });
  });

  // Inicia na Home
  renderHero("Home");
}

// Executa ao carregar a página
document.addEventListener("DOMContentLoaded", init);
