/**
 * Padrão de Governança ByteClass - Ciclo 2
 * Projeto: Pokédex Dinâmica
 * Descrição: Consumo de PokéAPI com manipulação de DOM, estados de UX e Animações.
 */

// 1. Referências dos Elementos do DOM
const pokemonNome = document.querySelector("#pokemon-nome");
const pokemonId = document.querySelector("#pokemon-id");
const pokemonImagem = document.querySelector("#pokemon-imagem");
const pokemonTipos = document.querySelector("#pokemon-tipos");

const inputBusca = document.querySelector("#input-pesquisar");
const btnAnterior = document.querySelector("#btn-anterior");
const btnProximo = document.querySelector("#btn-proximo");

const loading = document.querySelector("#mensagem-loading");
const pokemonInfo = document.querySelector("#pokemon-info");
const mensagemErro = document.querySelector("#mensagem-erro");

// 2. Estado da Aplicação
let pokemonAtual = 1;

// 3. Função de Consumo da API (Core)
const fetchPokemon = async (pokemon) => {
  // Gestão de Estado: Mostrar Loading e esconder o resto antes da requisição
  loading.classList.remove("hiden");
  pokemonInfo.classList.add("hiden");
  mensagemErro.classList.add("hiden");

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.toString().toLowerCase()}`
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return null;
  } catch (error) {
    console.error("Erro na busca:", error);
    return null;
  }
};

// 4. Função de Renderização (UI)
const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);

  // Esconde o loading após a resposta (sucesso ou erro)
  loading.classList.add("hiden");

  if (data) {
    // Injeção de Dados no HTML
    pokemonNome.innerHTML = data.name;
    pokemonId.innerHTML = `#${data.id.toString().padStart(3, "0")}`;
    
    // Prioriza o GIF animado (Gen V), se não houver, usa o sprite estático default
    const animatedSprite = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
    pokemonImagem.src = animatedSprite || data["sprites"]["front_default"];

    // Renderizar Tipos (Lógica de Array)
    pokemonTipos.innerHTML = ""; // Limpa os tipos anteriores
    data.types.forEach((item) => {
      const span = document.createElement("span");
      span.classList.add("type-badge");
      span.innerHTML = item.type.name;
      pokemonTipos.appendChild(span);
    });

    // Atualizar estado global e limpar campo
    pokemonAtual = data.id;
    inputBusca.value = "";
    
    // Exibe a informação com a animação CSS (definida no style.css)
    pokemonInfo.classList.remove("hiden");
  } else {
    // Caso o Pokémon não exista ou erro de rede
    pokemonInfo.classList.add("hiden");
    mensagemErro.classList.remove("hiden");
  }
};

// 5. Event Listeners (Interatividade)

// Gatilho de Busca
document.querySelector("#btn-pesquisar").addEventListener("click", () => {
  if (inputBusca.value) {
    renderPokemon(inputBusca.value);
  }
});

// Busca ao pressionar Enter
inputBusca.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    renderPokemon(inputBusca.value);
  }
});

// Navegação entre IDs
btnAnterior.addEventListener("click", () => {
  if (pokemonAtual > 1) {
    pokemonAtual -= 1;
    renderPokemon(pokemonAtual);
  }
});

btnProximo.addEventListener("click", () => {
  pokemonAtual += 1;
  renderPokemon(pokemonAtual);
});

// 6. Inicialização (Boot do App)
// Inicia sempre no Pokémon 1 (Bulbasaur) ou no estado salvo
renderPokemon(pokemonAtual);