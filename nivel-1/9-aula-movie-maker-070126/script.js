// script.js

// URL da API (Simulando uma lista de produtos/ativos)
const API_URL = "https://jsonplaceholder.typicode.com/photos?_limit=12";

const galleryContainer = document.getElementById("gallery");

// 1. Função que busca os dados (O Pedido)
async function fetchImages() {
  try {
    const response = await fetch(API_URL); // Faz a requisição
    const data = await response.json(); // Converte para JSON (objeto JS)

    renderGallery(data); // Passa os dados para a função de desenho
  } catch (error) {
    galleryContainer.innerHTML = "<p>Erro ao carregar carga da API.</p>";
    console.error("Erro na requisição:", error);
  }
}

// 2. Função que desenha na tela (A Entrega)
function renderGallery(items) {
  galleryContainer.innerHTML = ""; // Limpa o "Carregando..."

  items.forEach((item) => {
    // Criando o elemento do card
    const card = document.createElement("div");
    card.classList.add("card");

    // Simulando categorias de logística para o aluno
    const categorias = ["Caminhão", "Armazém", "Navio", "Entrega"];
    const catAleatoria =
      categorias[Math.floor(Math.random() * categorias.length)];

    card.innerHTML = `
            <img src="https://picsum.photos/id/${item.id + 10}/400/300" alt="${item.title}">
            <div class="card-content">
                <span class="category-badge">${catAleatoria}</span>
                <h3 class="card-title">${item.title.substring(0, 20)}...</h3>
            </div>
        `;

    galleryContainer.appendChild(card);
  });
}

// Inicia o processo
fetchImages();
