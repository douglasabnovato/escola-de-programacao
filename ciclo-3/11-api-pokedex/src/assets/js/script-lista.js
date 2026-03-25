/**
 * Padrão de Governança ByteClass - Ciclo 2
 * Projeto: Pokédex - Explorador de Base
 * Descrição: Filtragem de 1º estágio e lógica de "Reveal" com animação.
 */

const gridPokebolas = document.querySelector("#grid-pokebolas");
const contadorStatus = document.querySelector("#contador-pokemon");

// Configuração: Quantos Pokémon carregar para o teste (Ex: Primeiros 151)
const LIMITE_POKEMON = 151;
let pokemonEncontrados = 0;

/**
 * 1. Função para verificar se é Primeiro Estágio
 */
const verificarSeEhBase = async (id) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`,
    );
    const data = await response.json();
    // Se não evolui de ninguém, é base (estágio 1)
    return data.evolves_from_species === null;
  } catch (error) {
    return false;
  }
};

/**
 * 2. Função para buscar dados básicos do Pokémon
 */
const buscarDadosPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return await response.json();
};

/**
 * 3. Criação do Card com Estado "Selado"
 */
const criarCardPokebola = (pokemon) => {
  const card = document.createElement("div");
  card.classList.add("pokemon-card-lista");

  // HTML inicial com a Pokébola (assets/images/pokeball.png)
  card.innerHTML = `
        <div class="pokebola-container">
            <img src="./assets/images/pokeball.png" class="img-reveal" alt="Pokébola">
        </div>
        <div class="info-reveal hiden">
            <p class="id-reveal">#${pokemon.id.toString().padStart(3, "0")}</p>
            <h3 class="nome-reveal">${pokemon.name}</h3>
        </div>
    `;

  // 4. Lógica de Revelação (O "Reveal")
  card.addEventListener("click", () => {
    const imgElement = card.querySelector(".img-reveal");
    const infoElement = card.querySelector(".info-reveal");

    // Só executa se ainda não foi revelado
    if (!card.classList.contains("revelado")) {
      card.classList.add("animando");

      // Timing da animação: Troca a imagem no auge do "brilho" (300ms)
      setTimeout(() => {
        imgElement.src = pokemon.sprites.front_default;
        imgElement.classList.add("pokemon-sprite");
        infoElement.classList.remove("hiden");
        card.classList.remove("animando");
        card.classList.add("revelado");
      }, 300);
    }
  });

  return card;
};

/**
 * 5. Inicialização do Grid
 */
const inicializarExplorador = async () => {
  gridPokebolas.innerHTML = ""; // Limpa o loading

  for (let i = 1; i <= LIMITE_POKEMON; i++) {
    const ehBase = await verificarSeEhBase(i);

    if (ehBase) {
      const dados = await buscarDadosPokemon(i);
      const card = criarCardPokebola(dados);
      gridPokebolas.appendChild(card);
      pokemonEncontrados++;
      contadorStatus.innerText = `${pokemonEncontrados} Pokémon de estágio inicial encontrados.`;
    }
  }
};

// Boot do Explorador
inicializarExplorador();
