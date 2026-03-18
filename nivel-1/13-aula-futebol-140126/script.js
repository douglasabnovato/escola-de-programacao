/**
 * PROJETO: Relíquia Amarela - ByteClass (Edição Colecionador)
 * FOCO: Manipulação de DOM, Arrays de Objetos e Caminhos Dinâmicos
 */

const bancoDados = {
  1970: {
    imagemHeader: "1970.jpg",
    frase:
      "A escalação clássica do Tri no México, sob o comando de Zagallo. Este time venceu todos os seis jogos disputados, marcando 19 gols.",
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
    imagemHeader: "2002.webp",
    frase:
      "A Família Scolari no esquema 3-5-2, conquistando o pentacampeonato contra a Alemanha com 100% de aproveitamento.",
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
 * Função para limpar o nome do jogador e gerar o nome do arquivo da imagem.
 * Exemplo: "Ronaldinho Gaúcho" -> "ronaldinho-gaucho.png"
 */
function gerarCaminhoImagem(nome) {
  return nome
    .toLowerCase()
    .normalize("NFD") // Remove acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-") // Substitui espaços por hífen
    .concat(".png");
}

function convocar(ano) {
  const selecao = bancoDados[ano];
  const palco = document.getElementById("palco");
  const headerBg = document.getElementById("header-bg");

  // 1. Atualiza o Banner do Header
  headerBg.style.backgroundImage = `url('${selecao.imagemHeader}')`;

  // 2. Renderiza o cabeçalho da galeria com a frase histórica
  palco.innerHTML = `
        <div class="intro-selecao" style="text-align:center; margin-bottom:40px; padding: 0 20px;">
            <h2 style="color:#FFDF00; font-size: 2.5rem; text-shadow: 2px 2px #000;">${ano}</h2>
            <p style="color: #009B3A; font-weight: bold; font-size: 1.2rem;">Técnico: ${selecao.tecnico}</p>
            <p style="color: #ccc; max-width: 600px; margin: 15px auto; font-style: italic;">${selecao.frase}</p>
        </div>
        <div class="grid-album" id="grid"></div>
    `;

  const grid = document.getElementById("grid");

  // 3. Itera sobre os jogadores para criar as figurinhas
  selecao.corpo.forEach((atleta) => {
    const nomeArquivo = gerarCaminhoImagem(atleta.nome);
    const figurinha = document.createElement("article");
    figurinha.classList.add("card-figurinha");

    figurinha.innerHTML = `
            <div class="foto-perfil">
                <img src="assets/jogadores/${nomeArquivo}" alt="${atleta.nome}" 
                     onerror="this.src='https://via.placeholder.com/150x180?text=FIGURINHA'" 
                     style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="info-atleta">
                <h3>${atleta.nome}</h3>
                <p>${atleta.posicao}</p>
                <p class="clube-label">${atleta.clube}</p>
            </div>
        `;

    grid.appendChild(figurinha);
  });
}
