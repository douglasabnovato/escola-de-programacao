/**
 * PROJETO: Relíquia Amarela - ByteClass (Edição Colecionador)
 * FOCO: Manipulação de DOM, Gestão de Estado e UX Responsiva
 */

const bancoDados = {
  1970: {
    imagemHeader: "./assets/banners/selecao-1970.jpg",
    alinhamento: "top center", // Resolve o corte das cabeças dos jogadores
    frase:
      "A escalação clássica do Tri no México. Este time venceu todos os seis jogos disputados, marcando 19 gols.",
    tecnico: "Mário Jorge Lobo Zagallo",
    corpo: [
      { nome: "Félix", posicao: "Goleiro", clube: "Fluminense" },
      { nome: "Carlos Alberto", posicao: "Lat. Direito (C)", clube: "Santos" },
      { nome: "Brito", posicao: "Zagueiro", clube: "Cruzeiro" },
      { nome: "Piazza", posicao: "Zagueiro", clube: "Cruzeiro" },
      { nome: "Everaldo", posicao: "Lat. Esquerdo", clube: "Grêmio" },
      { nome: "Clodoaldo", posicao: "Volante", clube: "Santos" },
      { nome: "Gérson", posicao: "Meia", clube: "São Paulo" },
      { nome: "Jairzinho", posicao: "Ponta Direita", clube: "Botafogo" },
      { nome: "Tostão", posicao: "Atacante", clube: "Cruzeiro" },
      { nome: "Pelé", posicao: "Ponta de Lança", clube: "Santos" },
      { nome: "Rivellino", posicao: "Ponta Esquerda", clube: "Corinthians" },
    ],
  },
  2002: {
    imagemHeader: "./assets/banners/selecao-2002.jpg",
    alinhamento: "center center",
    frase:
      "A Família Scolari no esquema 3-5-2, conquistando o penta com 100% de aproveitamento.",
    tecnico: "Luiz Felipe Scolari (Felipão)",
    corpo: [
      { nome: "Marcos", posicao: "Goleiro", clube: "Palmeiras" },
      { nome: "Lúcio", posicao: "Zagueiro", clube: "Bayer Leverkusen" },
      { nome: "Edmílson", posicao: "Zagueiro", clube: "Lyon" },
      { nome: "Roque Júnior", posicao: "Zagueiro", clube: "Milan" },
      { nome: "Cafu", posicao: "Ala Direito (C)", clube: "Roma" },
      { nome: "Gilberto Silva", posicao: "Volante", clube: "Atlético-MG" },
      { nome: "Kléberson", posicao: "Volante", clube: "Atlético-PR" },
      { nome: "Ronaldinho Gaúcho", posicao: "Meia-Atacante", clube: "PSG" },
      { nome: "Roberto Carlos", posicao: "Ala Esquerdo", clube: "Real Madrid" },
      { nome: "Rivaldo", posicao: "Atacante", clube: "Barcelona" },
      { nome: "Ronaldo", posicao: "Centroavante", clube: "Inter de Milão" },
    ],
  },
};

/**
 * Normaliza nomes para caminhos de arquivo (ex: "Pelé" -> "pele.jpg")
 */
function gerarCaminhoImagem(nome) {
  return nome
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .concat(".jpg");
}

/**
 * Renderiza a seleção escolhida no "palco"
 */
function convocar(ano) {
  const selecao = bancoDados[ano];
  const palco = document.getElementById("palco");
  const headerBg = document.getElementById("header-bg");

  // 1. Atualiza Banner e Alinhamento Dinâmico
  headerBg.style.backgroundImage = `url('${selecao.imagemHeader}')`;
  headerBg.style.backgroundPosition = selecao.alinhamento;

  // 2. Limpa o palco e prepara o Grid
  palco.innerHTML = `
        <div class="intro-selecao" style="text-align:center; margin-bottom:40px; padding: 0 20px; animation: fadeIn 0.5s;">
            <h2 style="color: var(--cbf-amarelo); font-size: 2.5rem; text-shadow: 2px 2px #000;">${ano}</h2>
            <p style="color: var(--cbf-verde); font-weight: bold; font-size: 1.2rem;">Técnico: ${selecao.tecnico}</p>
            <p style="color: #ccc; max-width: 600px; margin: 15px auto; font-style: italic;">${selecao.frase}</p>
        </div>
        <div class="grid-album" id="grid"></div>
    `;

  const grid = document.getElementById("grid");

  // 3. Renderização das Figurinhas
  selecao.corpo.forEach((atleta) => {
    const nomeArquivo = gerarCaminhoImagem(atleta.nome);
    const figurinha = document.createElement("article");
    figurinha.classList.add("card-figurinha");

    figurinha.innerHTML = `
            <div class="foto-perfil">
                <img src="./assets/jogadores/${nomeArquivo}" alt="${atleta.nome}" 
                     onerror="this.src='https://via.placeholder.com/150x210?text=CRAQUE'">
            </div>
            <div class="info-atleta">
                <h3>${atleta.nome}</h3>
                <p>${atleta.posicao}</p>
                <p style="font-size: 0.75rem; color: #777;">${atleta.clube}</p>
            </div>
        `;
    grid.appendChild(figurinha);
  });

  // 4. Botão de Retorno
  const btnHome = document.createElement("button");
  btnHome.innerText = "← Voltar ao Início";
  btnHome.className = "btn-voltar-home";
  btnHome.onclick = voltarHome;
  palco.appendChild(btnHome);

  // 5. UX: Scroll suave para o conteúdo (ajustado para mobile)
  const offset = window.innerWidth < 600 ? 200 : 300;
  window.scrollTo({ top: offset, behavior: "smooth" });
}

/**
 * Restaura a interface inicial (Home)
 */
function voltarHome() {
  const palco = document.getElementById("palco");
  const headerBg = document.getElementById("header-bg");

  // Reset do Banner
  headerBg.style.backgroundImage = `url('./assets/banners/selecoes-1970-2002.jpg')`;
  headerBg.style.backgroundPosition = "center center";

  // Reinjeta a Home
  // IMPORTANTE: Manter as classes slot-1 a slot-4 para o CSS ocultar as fotos extras no mobile
  palco.innerHTML = `
        <div id="grade-boas-vindas">
          <div class="mensagem-inicial">
            <h2>Abra o seu álbum...</h2>
            <p>Selecione uma era para colar as figurinhas dos campeões e reviver as conquistas históricas.</p>
            <nav class="menu-selecao">
              <button onclick="convocar('1970')">Esquadrão de 1970</button>
              <button onclick="convocar('2002')">Família Scolari 2002</button>
            </nav>
          </div>
          <div class="carrossel-coringa">
            <div class="slot-coringa slot-1"><img src="./assets/banners/album-caricatura-1970.jpg" alt="1970"></div>
            <div class="slot-coringa slot-2"><img src="./assets/banners/album-caricatura-2002.jpg" alt="2002"></div>
            <div class="slot-coringa slot-3"><img src="./assets/banners/jogadores-1970-2002.jpg" alt="Jogadores"></div>
            <div class="slot-coringa slot-4"><img src="./assets/banners/selecoes-1970-2002.jpg" alt="Lendas"></div>
          </div>
        </div>
    `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}
