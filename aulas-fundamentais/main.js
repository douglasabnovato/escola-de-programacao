/**
 * NEXUS Engine - v1.1
 * Core System para a ByteClass - learnTECH
 * Gestão de Desafios, Terminal e Visualização de Código
 */

const nexusState = {
  currentChallenge: null,
  isExecuting: false,
  bu: "EDUCATION", // Mantendo o filtro de Business Unit
};

// --- 1. Inicialização e Listeners ---
document.addEventListener("DOMContentLoaded", () => {
  console.log(`[SYSTEM] NEXUS Online. BU: ${nexusState.bu}`);
  const btnRun = document.getElementById("btn-run");
  if (btnRun) btnRun.disabled = true;
});

// --- 2. Motor de Carregamento e Interface ---
// --- 2. Motor de Carregamento e Interface (Ajustado para Aulas Fundamentos) ---
async function carregarDesafio(id) {
  if (nexusState.isExecuting) return;

  // Ajuste do path conforme sua estrutura de pastas visualizada na imagem
  const path = `aulas/aula${id}/index.html`;
  nexusState.currentChallenge = id;

  // A. Feedback Visual na Sidebar
  document
    .querySelectorAll(".nav-item")
    .forEach((el) => el.classList.remove("active"));
  const item = document.getElementById(`menu-desafio-${id}`);
  if (item) item.classList.add("active");

  // B. Atualização do Breadcrumb e Títulos
  document.getElementById("source-name").innerText = `aula-${id}/index.html`;
  document.getElementById("view-title").innerText =
    `AULA ${id.toString().padStart(2, "0")}`;

  // C. Carregamento do Código-Fonte (Visualização Superior)
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error("Arquivo não encontrado");

    const code = await response.text();
    // Injetamos o texto puro no visualizador superior
    document.getElementById("code-content").innerText = code;

    // D. EXECUÇÃO VIA IFRAME (Visualização Inferior)
    // Primeiro, limpamos o container de output
    const outputDisplay = document.getElementById("output-display");
    outputDisplay.innerHTML = "";

    // Criamos o Iframe de execução
    const iframe = document.createElement("iframe");
    iframe.id = "dynamic-lesson-frame";
    iframe.src = path;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.backgroundColor = "white"; // Opcional: para destacar a área da aula

    outputDisplay.appendChild(iframe);

    // E. Sincronização e Finalização
    iframe.onload = () => {
      imprimirNoTerminal(`// Aula ${id} carregada e pronta.`, "system-msg");
      document.getElementById("btn-run").disabled = true; // No modo HTML, a execução é automática no carregamento
      atualizarInspector(id);
    };
  } catch (err) {
    console.error(err);
    document.getElementById("code-content").innerText =
      `// Erro ao carregar fonte: ${path}`;
    imprimirNoTerminal(`[ERRO] ${err.message}: ${path}`, "error");
  }
}

// --- 3. Controle de Execução (Botão RUN) ---
document.getElementById("btn-run").addEventListener("click", () => {
  const id = nexusState.currentChallenge;
  const funcName = `main${id}`;

  // Verifica se a função existe no escopo global (window)
  const targetFunction = window[funcName];

  if (typeof targetFunction === "function") {
    limparTerminal();
    imprimirNoTerminal(`> Iniciando ${funcName}()...`, "system-msg");

    nexusState.isExecuting = true;
    try {
      // O retorno da função é capturado e exibido
      const result = targetFunction(`Execução Desafio ${id}`);
      imprimirNoTerminal(
        `[SISTEMA] Processo finalizado com retorno: ${result}`,
        "system-msg",
      );
    } catch (err) {
      imprimirNoTerminal(`[RUNTIME ERROR] ${err.message}`, "error");
    } finally {
      nexusState.isExecuting = false;
    }
  } else {
    imprimirNoTerminal(
      `[ERRO] Função ${funcName}() não definida no arquivo.`,
      "error",
    );
  }
});

// --- 4. Terminal e Interceptação de Logs ---
function imprimirNoTerminal(msg, tipo = "") {
  const display = document.getElementById("output-display");
  if (!display) return;

  const p = document.createElement("p");
  p.className = `prompt-line ${tipo}`;

  // Define o símbolo do prompt baseado no tipo de mensagem
  const symbol = tipo === "error" ? "!" : tipo === "system-msg" ? "#" : ">";
  p.innerHTML = `<span class="symbol">${symbol}</span> ${msg}`;

  display.appendChild(p);
  display.scrollTop = display.scrollHeight; // Auto-scroll
}

function limparTerminal() {
  document.getElementById("output-display").innerHTML = "";
}

// Redireciona console.log para o Terminal visual do NEXUS
const originalLog = console.log;
console.log = function (...args) {
  originalLog(...args); // Mantém no console do navegador (F12) para debug
  const mensagem = args
    .map((a) => (typeof a === "object" ? JSON.stringify(a) : a))
    .join(" ");
  imprimirNoTerminal(mensagem);
};

// --- 5. Inspector e Documentação Dinâmica ---
function atualizarInspector(id) {
  const docContent = document.getElementById("explanation-text");
  const metaLevel = document.getElementById("meta-level");
  const docTitle = document.getElementById("view-title"); // Atualiza o título no inspector

  // Limpeza inicial para novos carregamentos
  docContent.innerHTML = "";

  switch (id) {
    case 1:
      metaLevel.innerText = "BASIC / INFRA";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 01: O NASCIMENTO DA WEB E ARQUITETURA CLIENTE-SERVIDOR</label>
                <p><strong>Foco do Instrutor:</strong> Desmistificar a "mágica" da internet. O aluno deve entender que o browser é apenas um tradutor de texto.</p>
                
                <label class="sub-label">PILARES TÉCNICOS:</label>
                <ul>
                    <li><strong>Protocolos (HTTP/S):</strong> A conversa entre cliente e servidor. Explique que o 'S' é o aperto de mão criptografado que protege os dados da <strong>Volta Express</strong>.</li>
                    <li><strong>DNS (O Catálogo):</strong> Como o IP <code>192.0.2.1</code> vira <code>learntech.com.br</code>.</li>
                    <li><strong>Ciclo de Request/Response:</strong> O caminho do dado desde o clique no botão até a renderização do HTML.</li>
                </ul>

                <label class="sub-label">ANALOGIA DE NEGÓCIO:</label>
                <p>O <strong>Cliente</strong> é o caminhoneiro pedindo carga; o <strong>Servidor</strong> é a central de logística processando o pedido; o <strong>Protocolo</strong> é o rádio comunicador garantindo que ambos falem a mesma língua.</p>
                
                <hr>
                <p><small>💡 Insight: Entender infraestrutura separa o "digitador de código" do "engenheiro de software". Sem entender o ciclo de vida da requisição, o debug se torna impossível.</small></p>
            </div>`;
      break;

    case 2:
      metaLevel.innerText = "BASIC / SEO";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 02: SEMÂNTICA, ACESSIBILIDADE E SEO</label>
                <p><strong>Foco do Instrutor:</strong> Parar de usar <code>&lt;div&gt;</code> para tudo. Código limpo é código legível por máquinas e humanos.</p>
                
                <label class="sub-label">POR QUE IMPORTA?</label>
                <ul>
                    <li><strong>SEO:</strong> Como o Google indexa a <strong>learnTECH</strong>. Tags semânticas são "pistas" para o algoritmo.</li>
                    <li><strong>Acessibilidade (A11y):</strong> O uso de leitores de tela por deficientes visuais. Um site inacessível é um mercado ignorado.</li>
                </ul>

                <label class="sub-label">BOAS PRÁTICAS:</label>
                <p>Substituir o caos de divs por: <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> e <code>&lt;footer&gt;</code>.</p>
                
                <hr>
                <p><small>🚩 Alerta de Carreira: Desenvolvedores Sêniores são obcecados por semântica. É a base da manutenção de longo prazo em projetos Fullstack.</small></p>
            </div>`;
      break;

    case 3:
      metaLevel.innerText = "BASIC / DESIGN";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 03: BOX MODEL E A FÍSICA DOS ELEMENTOS</label>
                <p><strong>Foco do Instrutor:</strong> Todo elemento na web é um retângulo. Entender as camadas desse retângulo é vital para o layout.</p>
                
                <label class="sub-label">A ANATOMIA DO BOX:</label>
                <ul>
                    <li><strong>Content:</strong> Onde mora o texto ou imagem.</li>
                    <li><strong>Padding:</strong> O respiro interno (conforto visual).</li>
                    <li><strong>Border:</strong> A fronteira do elemento.</li>
                    <li><strong>Margin:</strong> O respeito ao vizinho (espaço externo).</li>
                </ul>

                <label class="sub-label">DICA DE OURO:</label>
                <p>Introdução ao <code>box-sizing: border-box;</code>. Explique como isso evita que o elemento "exploda" de tamanho ao adicionar padding, facilitando a vida do dev.</p>
                
                <hr>
                <p><small>📦 Analogia Logística: O <strong>Conteúdo</strong> é a mercadoria; o <strong>Padding</strong> é o plástico bolha; a <strong>Borda</strong> é a caixa de papelão; a <strong>Margem</strong> é a distância entre as caixas no caminhão.</small></p>
            </div>`;
      break;

    case 4:
      metaLevel.innerText = "BASIC / LAYOUT";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 04: POSICIONAMENTO E FLUXO DOCUMENTAL</label>
                <p><strong>Foco do Instrutor:</strong> Dominar o eixo Z e a quebra do fluxo natural do HTML.</p>
                
                <label class="sub-label">ESTRATÉGIAS DE POSIÇÃO:</label>
                <ul>
                    <li><strong>Static/Relative:</strong> O comportamento padrão e ajustes finos.</li>
                    <li><strong>Absolute:</strong> Elementos flutuantes dentro de contextos específicos (ex: ícone de notificação sobre o sino).</li>
                    <li><strong>Fixed/Sticky:</strong> Criando menus que acompanham o usuário na rolagem da página da <strong>ByteClass</strong>.</li>
                </ul>

                <label class="sub-label">Z-INDEX:</label>
                <p>A gestão de camadas. Quem fica em cima de quem? (O conceito de camadas no Photoshop aplicado ao código).</p>
            </div>`;
      break;

    case 5:
      metaLevel.innerText = "BASIC / FLEXBOX";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 05: FLEXBOX I - O EIXO PRINCIPAL (MAIN AXIS)</label>
                <p><strong>Foco do Instrutor:</strong> O fim do <code>float: left</code>. Alinhamento unidimensional moderno.</p>
                
                <label class="sub-label">CONCEITOS CHAVE:</label>
                <ul>
                    <li><strong>display: flex;</strong> O comando que ativa os superpoderes do container.</li>
                    <li><strong>justify-content:</strong> Como distribuir o espaço (<code>space-between</code> para menus, <code>center</code> para heros).</li>
                    <li><strong>flex-direction:</strong> Mudando de linha para coluna instantaneamente.</li>
                </ul>

                <hr>
                <p><small>🚀 Desafio Prático: Alinhar os cards de cursos da <strong>learnTECH</strong> em uma linha perfeita que se distribui conforme a largura da tela.</small></p>
            </div>`;
      break;

    case 6:
      metaLevel.innerText = "BASIC / FLEXBOX";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 06: FLEXBOX II - ALINHAMENTO E QUEBRA</label>
                <p><strong>Foco do Instrutor:</strong> O controle total do espaço transversal e a adaptabilidade de conteúdo.</p>
                
                <label class="sub-label">PROPRIEDADES AVANÇADAS:</label>
                <ul>
                    <li><strong>align-items:</strong> Alinhamento vertical perfeito (o pesadelo dos devs antigos resolvido).</li>
                    <li><strong>flex-wrap:</strong> Como fazer os elementos "pularem" para a linha de baixo em vez de esmagarem.</li>
                    <li><strong>gap:</strong> A forma moderna de criar espaçamento entre itens sem usar margens individuais.</li>
                </ul>
                
                <p><strong>Aplicação:</strong> Ideal para criar a vitrine de caminhões disponíveis na <strong>Volta Express</strong>.</p>
            </div>`;
      break;

    case 7:
      metaLevel.innerText = "FUNDAMENTAL / GRID";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 07: CSS GRID LAYOUT - O PODER BI-DIMENSIONAL</label>
                <p><strong>Foco do Instrutor:</strong> Planejar o esqueleto da página antes de colocar o conteúdo. Linhas e colunas trabalhando juntas.</p>
                
                <label class="sub-label">GRID VS FLEX:</label>
                <p>Enquanto o Flex é para componentes (menus, botões), o Grid é para o <strong>Layout (Dashboard, Estrutura)</strong>.</p>

                <ul>
                    <li><strong>grid-template-columns:</strong> Definindo as pistas do nosso layout.</li>
                    <li><strong>grid-template-areas:</strong> Nomeando áreas (header, sidebar, main) para um código extremamente legível.</li>
                    <li><strong>repeat() & fr:</strong> O uso de unidades fracionárias para layouts fluidos.</li>
                </ul>
                
                <hr>
                <p><small>🏗️ Projeto: Estruturar o Dashboard administrativo da <strong>ByteClass</strong> usando apenas Grid.</small></p>
            </div>`;
      break;

    case 8:
      metaLevel.innerText = "FUNDAMENTAL / RESPONSIVE";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 08: RESPONSIVIDADE E A MENTALIDADE MOBILE-FIRST</label>
                <p><strong>Foco do Instrutor:</strong> O site não é para o seu monitor de 27 polegadas; é para o celular do usuário na rua.</p>
                
                <label class="sub-label">ESTRATÉGIAS DE ADAPTAÇÃO:</label>
                <ul>
                    <li><strong>Media Queries:</strong> O uso de <code>@media</code> para detectar tamanhos de tela.</li>
                    <li><strong>Mobile-First:</strong> Escrever o CSS do celular primeiro e escalar para o desktop (economiza 30% de código).</li>
                    <li><strong>Breakpoints:</strong> Definindo onde o layout "quebra" e se transforma.</li>
                </ul>

                <hr>
                <p><small>⚠️ Regra de Negócio: Se o sistema da <strong>Volta Express</strong> não funcionar no celular do motorista no meio da estrada, o sistema falhou.</small></p>
            </div>`;
      break;

    case 9:
      metaLevel.innerText = "FUNDAMENTAL / UI";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 09: DESIGN TOKENS E SISTEMAS DE CORES</label>
                <p><strong>Foco do Instrutor:</strong> Parar de usar cores aleatórias. Criar uma identidade visual consistente através de variáveis.</p>
                
                <label class="sub-label">IMPLEMENTAÇÃO:</label>
                <ul>
                    <li><strong>CSS Variables (:root):</strong> Centralizar cores, fontes e espaçamentos (ex: <code>--accent-color</code>).</li>
                    <li><strong>Tipografia Escalonável:</strong> Trocar <code>px</code> por <code>rem</code> e <code>em</code> para respeitar as configurações do usuário.</li>
                    <li><strong>Contraste:</strong> A importância de cores que permitem a leitura sem esforço.</li>
                </ul>

                <p><strong>Exemplo:</strong> Aplicando a paleta <strong>Tokyo Night</strong> no projeto do aluno.</p>
            </div>`;
      break;

    case 10:
      metaLevel.innerText = "PROJECT / HTML-CSS";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 10: PROJETO FINAL DE MÓDULO - LANDING PAGE PROFISSIONAL</label>
                <p><strong>O Desafio:</strong> Construir do zero uma página de alta conversão para a <strong>learnTECH</strong>.</p>
                
                <label class="sub-label">REQUISITOS DO PROJETO:</label>
                <ul>
                    <li>HTML5 Semântico e SEO-friendly.</li>
                    <li>Layout Grid para estrutura e Flexbox para componentes.</li>
                    <li>100% Responsivo (Celular, Tablet e Desktop).</li>
                    <li>Uso de Design Tokens (Variáveis CSS).</li>
                </ul>
                
                <hr>
                <p><small>🏆 Milestone: Este é o primeiro item real do portfólio do aluno. A qualidade aqui define a entrada dele no mercado.</small></p>
            </div>`;
      break;

    case 11:
      metaLevel.innerText = "LOGIC / JS";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 11: ANATOMIA DOS DADOS E GESTÃO DE MEMÓRIA</label>
                <p><strong>Foco do Instrutor:</strong> O JS não é apenas texto; são espaços na memória do computador. Entender a fundação da linguagem.</p>
                
                <label class="sub-label">PILAR TÉCNICO:</label>
                <ul>
                    <li><strong>Let vs Const:</strong> A regra de ouro da <strong>learnTECH</strong>: use <code>const</code> por padrão; use <code>let</code> apenas se o valor for mudar. Esqueça que <code>var</code> existe.</li>
                    <li><strong>Tipagem Dinâmica:</strong> String, Number, Boolean, Null e Undefined.</li>
                    <li><strong>Naming Conventions:</strong> camelCase e por que nomes de variáveis importam para a manutenção do código.</li>
                </ul>

                <hr>
                <p><small>💡 Dica: Mostre que <code>const placaCaminhao = "ABC-1234"</code> é imutável, garantindo segurança no fluxo da <strong>Volta Express</strong>.</small></p>
            </div>`;
      break;

    case 12:
      metaLevel.innerText = "LOGIC / JS";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 12: OPERADORES E A LÓGICA DA VERDADE</label>
                <p><strong>Foco do Instrutor:</strong> Ensinar o computador a processar informações e fazer comparações precisas.</p>
                
                <label class="sub-label">CONCEITOS CHAVE:</label>
                <ul>
                    <li><strong>Aritmética:</strong> Soma, subtração e o operador de resto (<code>%</code>) para algoritmos de paridade.</li>
                    <li><strong>Igualdade Estrita (===):</strong> Por que nunca usar <code>==</code> (evitando coerção de tipo implícita).</li>
                    <li><strong>Operadores Lógicos:</strong> AND (&&), OR (||) e NOT (!).</li>
                </ul>

                <p><strong>Exemplo:</strong> "O motorista tem CNH <strong>E</strong> o caminhão está disponível?"</p>
            </div>`;
      break;

    case 13:
      metaLevel.innerText = "LOGIC / JS";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 13: TOMADA DE DECISÃO (CONTROL FLOW)</label>
                <p><strong>Foco do Instrutor:</strong> Criar bifurcações no sistema. O código deve reagir a diferentes estados de negócio.</p>
                
                <label class="sub-label">ESTRUTURAS:</label>
                <ul>
                    <li><strong>If / Else If / Else:</strong> A base da inteligência do sistema.</li>
                    <li><strong>Operador Ternário:</strong> Escrevendo condições simples em uma única linha para um código mais limpo.</li>
                    <li><strong>Switch Case:</strong> Ideal para estados de pedidos (Pendente, Em Trânsito, Entregue).</li>
                </ul>
                
                <hr>
                <p><small>🛠️ Exercício: Criar um validador de frete que altera o preço baseado no peso da mercadoria.</small></p>
            </div>`;
      break;

    case 14:
      metaLevel.innerText = "LOGIC / JS";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 14: ESTRUTURAS DE REPETIÇÃO E ITERAÇÃO</label>
                <p><strong>Foco do Instrutor:</strong> Automação de tarefas em massa. Não repetimos código, repetimos lógica.</p>
                
                <label class="sub-label">O PODER DO LOOP:</label>
                <ul>
                    <li><strong>For Loop:</strong> Controle total sobre o índice e a parada.</li>
                    <li><strong>While:</strong> Executar enquanto uma condição for verdadeira (ex: processar fila de espera).</li>
                    <li><strong>Break e Continue:</strong> Como interromper ou pular ciclos de forma inteligente.</li>
                </ul>

                <p><strong>Contexto:</strong> Percorrer uma lista de 500 entregas na <strong>Volta Express</strong> para encontrar uma específica.</p>
            </div>`;
      break;

    case 15:
      metaLevel.innerText = "LOGIC / JS";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 15: FUNÇÕES - A FÁBRICA DE CÓDIGO</label>
                <p><strong>Foco do Instrutor:</strong> Modularização e DRY (Don't Repeat Yourself). Criar ferramentas reutilizáveis.</p>
                
                <label class="sub-label">CONCEITOS CRÍTICOS:</label>
                <ul>
                    <li><strong>Parâmetros e Argumentos:</strong> As entradas da nossa fábrica.</li>
                    <li><strong>Return:</strong> A saída (produto final) da função.</li>
                    <li><strong>Escopo (Global vs Local):</strong> Onde suas variáveis vivem e onde elas morrem.</li>
                </ul>

                <hr>
                <p><small>💡 Insight de Engenharia: Uma função deve fazer apenas <strong>uma coisa</strong> e fazê-la bem. Se sua função tem 100 linhas, ela precisa ser dividida.</small></p>
            </div>`;
      break;

    case 16:
      metaLevel.innerText = "LOGIC / JS";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 16: MODERN JS E ARROW FUNCTIONS</label>
                <p><strong>Foco do Instrutor:</strong> Sintaxe ES6+. Escrever código moderno, elegante e performático.</p>
                
                <label class="sub-label">DIFERENCIAIS:</label>
                <ul>
                    <li><strong>Arrow Syntax (=>):</strong> Menos verbosidade e comportamento do <code>this</code> léxico.</li>
                    <li><strong>Template Literals:</strong> Interpolação de strings com <code>\`\${variável}\`</code> em vez de concatenação com <code>+</code>.</li>
                    <li><strong>Destructuring:</strong> Extrair dados de objetos e arrays de forma rápida.</li>
                </ul>
            </div>`;
      break;

    case 17:
      metaLevel.innerText = "DOM / INTERACTION";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 17: MANIPULAÇÃO DO DOM (DOCUMENT OBJECT MODEL)</label>
                <p><strong>Foco do Instrutor:</strong> A ponte entre o JavaScript e o HTML. Dar vida aos elementos estáticos.</p>
                
                <label class="sub-label">DOMINAÇÃO DA TELA:</label>
                <ul>
                    <li><strong>QuerySelectors:</strong> A forma moderna de capturar elementos (ID, Class, Atributos).</li>
                    <li><strong>innerHTML vs textContent:</strong> Segurança e performance ao injetar dados.</li>
                    <li><strong>Style via JS:</strong> Alterar o CSS dinamicamente (ex: mudar a cor de um status de "Aguardando" para "OK").</li>
                </ul>
            </div>`;
      break;

    case 18:
      metaLevel.innerText = "DOM / EVENTS";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 18: EVENT LISTENERS E INTERATIVIDADE</label>
                <p><strong>Foco do Instrutor:</strong> Transformar o site em uma aplicação reativa. O sistema deve "ouvir" o usuário.</p>
                
                <label class="sub-label">REAÇÃO EM TEMPO REAL:</label>
                <ul>
                    <li><strong>Clicks e Submits:</strong> Capturar o envio de formulários de cadastro de alunos.</li>
                    <li><strong>Keyboard Events:</strong> Atalhos de teclado e busca enquanto digita.</li>
                    <li><strong>PreventDefault:</strong> Assumir o controle total do comportamento do navegador.</li>
                </ul>
                
                <hr>
                <p><small>⚡ Projeto: Criar um botão "Calcular Rota" que valida os campos antes de processar.</small></p>
            </div>`;
      break;

    case 19:
      metaLevel.innerText = "PROJECT / DOM";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 19: ESTADO DA APLICAÇÃO (HUB DE EXERCÍCIOS)</label>
                <p><strong>Desafio:</strong> Gerenciar a "verdade" dos dados na interface sem banco de dados (ainda).</p>
                
                <label class="sub-label">OBJETIVO PEDAGÓGICO:</label>
                <p>O aluno deve criar um Dashboard que lista, filtra e remove itens de uma lista em tempo real, manipulando o DOM de forma eficiente.</p>
                
                <hr>
                <p><small>🏆 Milestone: É aqui que o aluno entende como o React/Vue funcionam "por baixo do capô".</small></p>
            </div>`;
      break;

    case 20:
      metaLevel.innerText = "API / FETCH";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 20: CONSUMO DE APIs E INTEGRAÇÃO EXTERNA</label>
                <p><strong>Foco do Instrutor:</strong> O seu sistema não está sozinho no mundo. Aprender a buscar dados externos.</p>
                
                <label class="sub-label">Habilidades:</label>
                <ul>
                    <li><strong>Fetch API:</strong> Como fazer requisições HTTP (GET) para servidores.</li>
                    <li><strong>JSON:</strong> O formato universal de troca de dados na web.</li>
                    <li><strong>Promises:</strong> Entender que a internet demora e o código precisa saber esperar.</li>
                </ul>

                <p><strong>Case:</strong> Buscar o endereço pelo CEP automaticamente no cadastro da <strong>Volta Express</strong> usando a ViaCEP.</p>
            </div>`;
      break;

    case 21:
      metaLevel.innerText = "ASYNC / JS";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 21: ASYNC / AWAIT - O PADRÃO PROFISSIONAL</label>
                <p><strong>Foco do Instrutor:</strong> Escrever código assíncrono que parece síncrono. Legibilidade e tratamento de erros.</p>
                
                <label class="sub-label">CONTEÚDO:</label>
                <ul>
                    <li><strong>Try / Catch:</strong> O que fazer quando a internet cai ou a API falha? Gestão de erros robusta.</li>
                    <li><strong>Syntactic Sugar:</strong> Migrando de <code>.then()</code> para <code>await</code>.</li>
                </ul>
                
                <hr>
                <p><small>🚩 Dica de CTO: Um desenvolvedor que não sabe tratar erros em chamadas de API derruba sistemas em produção.</small></p>
            </div>`;
      break;

    case 22:
      metaLevel.innerText = "PRO / CRUD";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 22: CRUD I - CREATE E READ (FUNDAÇÃO)</label>
                <p><strong>Foco do Instrutor:</strong> O coração de 99% das aplicações de mercado. Criar e Listar dados.</p>
                
                <label class="sub-label">FLUXO DE DADOS:</label>
                <ul>
                    <li><strong>LocalStorage:</strong> Persistindo dados no navegador do aluno para que não sumam no F5.</li>
                    <li><strong>Data Tables:</strong> Renderizar listas complexas a partir de objetos JS.</li>
                </ul>
            </div>`;
      break;

    case 23:
      metaLevel.innerText = "PRO / CRUD";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 23: CRUD II - UPDATE E DELETE (MANUTENÇÃO)</label>
                <p><strong>Foco do Instrutor:</strong> Manipulação precisa de dados por ID ou Índice.</p>
                
                <label class="sub-label">SKILLS:</label>
                <ul>
                    <li><strong>Find / FindIndex:</strong> Localizar o item exato para edição.</li>
                    <li><strong>Splice / Filter:</strong> Remover dados sem quebrar a integridade da lista.</li>
                    <li><strong>Modais de Confirmação:</strong> "Tem certeza que deseja excluir este aluno?".</li>
                </ul>
            </div>`;
      break;

    case 24:
      metaLevel.innerText = "PRO / UX";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 24: UX E FEEDBACK NO GERENCIAMENTO DE DADOS</label>
                <p><strong>Foco do Instrutor:</strong> O sistema deve ser amigável. Não basta funcionar, tem que ser bom de usar.</p>
                
                <label class="sub-label">DIRETRIZES DE UI:</label>
                <ul>
                    <li><strong>Toasts/Alertas:</strong> Notificações de "Salvo com sucesso!".</li>
                    <li><strong>Loading States:</strong> Spinners enquanto a API carrega.</li>
                    <li><strong>Empty States:</strong> "Nenhum caminhão encontrado" em vez de uma tela em branco.</li>
                </ul>
                
                <hr>
                <p><small>🏆 Milestone: O aluno agora possui as ferramentas para construir qualquer ferramenta de gestão (ERP/CRM) básica.</small></p>
            </div>`;
      break;
    case 25:
      metaLevel.innerText = "FUNDAMENTAL / CLI";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 25: DOMINANDO O TERMINAL (CLI)</label>
                <p><strong>Foco do Instrutor:</strong> Perder o medo da "tela preta". O terminal é a ferramenta mais rápida e poderosa do desenvolvedor.</p>
                <p>Nesta aula, o aluno aprende a interagir diretamente com o <strong>Sistema Operacional (SO)</strong> através da Interface de Linha de Comando (CLI).</p>
                
                <label class="sub-label">DIRETRIZES PEDAGÓGICAS:</label>
                <ul>
                    <li><strong>PWD:</strong> "Onde eu estou?". A base da navegação em diretórios.</li>
                    <li><strong>LS (-la):</strong> "O que tem aqui?". Mostre a importância de ver arquivos ocultos (como o .git).</li>
                    <li><strong>CD (..) :</strong> "Como eu ando?". Navegação relativa e absoluta entre pastas.</li>
                    <li><strong>MKDIR / TOUCH:</strong> "Como eu crio?". Criando a estrutura de pastas e arquivos sem usar o mouse.</li>
                </ul>
                
                <label class="sub-label">CONTEXTO LOGÍSTICO (Volta Express):</label>
                <p>Um Sênior de Logística não usa interfaces lentas para gerenciar servidores; ele usa o terminal para mover manifestos de carga e verificar logs de roteamento em segundos.</p>

                <hr>
                <p><small>💡 Dica do CTO: O ambiente Vanilla acaba aqui. O Terminal é o portal para o mundo profissional (Node.js, Docker e Cloud).</small></p>
            </div>
        `;
      break;
    case 26:
      metaLevel.innerText = "INFRA / VERSIONING";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 26: GIT & GITHUB I - O SNAPSHOT</label>
                <p><strong>Foco do Instrutor:</strong> Ensinar que o Git é a "Máquina do Tempo" do desenvolvedor. O erro é reversível.</p>
                
                <label class="sub-label">A METÁFORA DO CARRINHO:</label>
                <ul>
                    <li><strong>Working Dir:</strong> Os produtos na prateleira da loja (Arquivos editados).</li>
                    <li><strong>Staging Area:</strong> Colocar o produto no carrinho (<code>git add</code>). Você escolhe o que vai levar.</li>
                    <li><strong>Local Repo:</strong> Passar no caixa e receber o cupom fiscal (<code>git commit</code>). Agora está registrado permanentemente.</li>
                </ul>

                <label class="sub-label">SKILLS TÉCNICAS:</label>
                <p>O aluno deve sair da aula sabendo a diferença entre <strong>rastreado</strong> (tracked) e <strong>não rastreado</strong> (untracked).</p>
                
                <hr>
                <p><small>🚩 Alerta Pedagógico: Foque na qualidade das mensagens de commit. "Ajustes" não diz nada. "feat: adiciona calculador de frete na Volta Express" diz tudo.</small></p>
            </div>
        `;
      break;
    case 27:
      metaLevel.innerText = "INFRA / CLOUD";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 27: GIT & GITHUB II - O MUNDO REMOTO</label>
                <p><strong>Foco do Instrutor:</strong> Transição do Local para o Global. Ensinar a importância do Repositório Remoto.</p>
                
                <label class="sub-label">CONCEITOS CRÍTICOS:</label>
                <ul>
                    <li><strong>Origin:</strong> O apelido (alias) para o endereço do servidor no GitHub.</li>
                    <li><strong>Push:</strong> O ato de empurrar suas fotos (commits) para o álbum coletivo na nuvem.</li>
                    <li><strong>Main/Master:</strong> Entender o conceito de ramificação (branch) principal de produção.</li>
                </ul>

                <label class="sub-label">VALOR PARA O ALUNO:</label>
                <p>Mostre que a partir de hoje o trabalho deles está seguro. Se o computador quebrar, o código vive no <strong>learnTECH GitHub</strong>.</p>
                
                <hr>
                <p><small>⚡ Dica de CTO: Explique que o GitHub não é apenas backup, é ferramenta de colaboração (Pull Requests) e portfólio técnico.</small></p>
            </div>
        `;
      break;
    case 28:
      metaLevel.innerText = "INFRA / DEPLOY";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 28: DEPLOY - COLOCANDO O SITE NO AR</label>
                <p><strong>Foco do Instrutor:</strong> O encerramento do ciclo de publicação. Transformar o código local em um link global compartilhavel.</p>
                
                <label class="sub-label">FLUXO DE TRABALHO (CD):</label>
                <ul>
                    <li><strong>Continuous Deployment:</strong> Explique que, ao dar <code>git push</code>, o site se atualiza sozinho.</li>
                    <li><strong>Netlify/Vercel:</strong> Por que usamos essas ferramentas ao invés de servidores manuais neste início? (Facilidade e foco no Front).</li>
                    <li><strong>Custom Domain:</strong> Introduza brevemente a ideia de domínios (ex: <code>voltaexpress.com.br</code>).</li>
                </ul>

                <label class="sub-label">A SENSAÇÃO DE "SOU DEV":</label>
                <p>Este é o momento de pedir para os alunos enviarem o link do projeto no grupo da <strong>ByteClass</strong> e para amigos. A visibilidade é o maior combustível para o aprendizado.</p>
                
                <hr>
                <p><small>⚠️ Importante: Verifique se o arquivo principal se chama <strong>index.html</strong>. Sem isso, o servidor de deploy não saberá qual página carregar primeiro.</small></p>
            </div>
        `;
      break;
    case 29:
      metaLevel.innerText = "MANAGEMENT / WORKFLOW";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 29: GESTÃO DE TAREFAS E KANBAN</label>
                <p><strong>Foco do Instrutor:</strong> O aluno deve entender que código sem organização gera dívida técnica e estresse.</p>
                
                <label class="sub-label">1. O QUE É KANBAN?</label>
                <p>É um sistema visual para gerenciar trabalho conforme ele avança por um processo. O objetivo é visualizar o <strong>fluxo</strong> e garantir que nada fique "entalado" (Gargalos).</p>

                <label class="sub-label">2. COMO PRIORIZAR? (Matriz de Eisenhower)</label>
                <ul>
                    <li><strong>Urgente + Importante:</strong> Crise! (Ex: Login quebrado). Faça agora.</li>
                    <li><strong>Não Urgente + Importante:</strong> Evolução. (Ex: Refatoração para Clean Code). Agende.</li>
                    <li><strong>Urgente + Não Importante:</strong> Interrupções. Tente automatizar ou delegar.</li>
                </ul>

                <label class="sub-label">3. O FLUXO NA PRÁTICA (Life of a Ticket):</label>
                <ol>
                    <li><strong>Issue:</strong> O problema é relatado no GitHub.</li>
                    <li><strong>Label:</strong> Classificamos (bug, feature, refactor).</li>
                    <li><strong>Sprint:</strong> Movemos para o "To Do" da semana.</li>
                    <li><strong>Review:</strong> Antes de ir para "Done", alguém revisa o código.</li>
                </ol>

                <hr>
                <p><small>💡 Insight de CTO: Na Volta Express, priorizamos o que move a mercadoria. Se o caminhão não sai do lugar por causa de um bug no sistema, essa é a única tarefa que importa hoje.</small></p>
            </div>
        `;
      break;
    case 30:
      metaLevel.innerText = "SOFT SKILLS / REVIEW";
      docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 30: CODE REVIEW E FEEDBACK DE CICLO</label>
                <p><strong>Foco do Instrutor:</strong> Encerramento dos Fundamentos. O objetivo é a <strong>Qualidade</strong> e o <strong>Ego Zero</strong>.</p>
                
                <label class="sub-label">O QUE É UM CODE REVIEW?</label>
                <p>É o processo onde um par revisa seu código em busca de erros, melhorias de performance ou desvios de padrão. Na <strong>Volta Express</strong>, nada vai para o ar sem passar por aqui.</p>

                <label class="sub-label">COMO DAR FEEDBACK (Regra ByteClass):</label>
                <ul>
                    <li><strong>Seja Específico:</strong> Não diga "está ruim". Diga "essa variável poderia ser mais clara".</li>
                    <li><strong>Elogie o Acerto:</strong> Comece destacando o que foi bem feito.</li>
                    <li><strong>Sugira, não Ordene:</strong> "O que você acha de usar um .map aqui?" em vez de "Troque isso".</li>
                </ul>

                <label class="sub-label">CHECKLIST DE CONCLUSÃO:</label>
                <p>O aluno possui: HTML semântico, CSS organizado (Flex/Grid), JS funcional com APIs e deploy ativo no GitHub?</p>

                <hr>
                <p><small>🏆 Próximo Passo: Preparação para o Módulo INTERMEDIÁRIO (Frameworks e Backend). O aluno agora é oficialmente um Desenvolvedor Jr. em formação.</small></p>
            </div>
        `;
      break;
       case 31:
    metaLevel.innerText = "INTERMEDIÁRIO / DEBUG";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 31: DEVTOOLS & DEBUGGING AVANÇADO</label>
            <p><strong>Foco do Instrutor:</strong> Transição do <code>console.log</code> para o <strong>Breakpoint</strong> Profissional.</p>
            
            <div class="bu-selector-container" style="background: #16161e; padding: 15px; border-radius: 8px; border: 1px solid #414868; margin-bottom: 20px;">
                <label class="sub-label" style="color: #7aa2f7;">SIMULADOR DE ECOSSISTEMA (BU):</label>
                <select id="bu-case-31" onchange="updateBUContext()" style="width: 100%; padding: 10px; background: #24283b; color: #fff; border: 1px solid #414868; border-radius: 4px; margin-top: 10px;">
                    <option value="volta">Volta Express (Logística)</option>
                    <option value="medtrem">MedTrem (Saúde Ocupacional)</option>
                    <option value="nck">NCK Labs (Inovação Tech)</option>
                </select>
                <p id="bu-desc" style="font-size: 0.85rem; margin-top: 10px; color: #565f89;">Contexto: Cálculo de Frete Logístico.</p>
            </div>

            <label class="sub-label">O QUE O ALUNO DEVE APRENDER:</label>
            <ul style="font-size: 0.9rem; line-height: 1.6;">
                <li><strong>Sources Panel:</strong> Navegar no código fonte em tempo real.</li>
                <li><strong>Watch Expressions:</strong> Monitorar variáveis sem sujar o código.</li>
                <li><strong>Call Stack:</strong> Rastrear a "pilha de chamadas" para saber quem invocou a função.</li>
                <li><strong>Tipagem no DOM:</strong> Identificar por que <code>input.value</code> é sempre String.</li>
            </ul>

            <div class="debug-challenge" style="background: rgba(247, 118, 142, 0.1); border-left: 4px solid #f7768e; padding: 15px; margin-top: 20px;">
                <h4 style="margin: 0; color: #f7768e;">🚨 MISSÃO DO DIA:</h4>
                <p style="font-size: 0.85rem;">O sistema está concatenando valores em vez de somar (Ex: 100 + 50 = 10050). O aluno deve usar o <strong>Breakpoint</strong> para capturar a coerção implícita e corrigir usando <code>Number()</code>.</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>💡 <strong>Dica de Sênior:</strong> Mostre ao aluno que no painel "Scope", Strings aparecem com aspas e Numbers em azul. Essa percepção visual acelera o Debug em 10x.</small></p>
        </div>
    `;

    // Função auxiliar injetada para troca de contexto dentro do case
    window.updateBUContext = () => {
        const bu = document.getElementById('bu-case-31').value;
        const desc = document.getElementById('bu-desc');
        const contexts = {
            volta: "Contexto: Cálculo de Frete e Manifesto de Carga.",
            medtrem: "Contexto: Gestão de Exames e Taxas de Risco Ocupacional.",
            nck: "Contexto: Orçamento de Infraestrutura e Horas Cloud."
        };
        desc.innerText = contexts[bu];
        console.log(`[ByteClass] Contexto de Debug alterado para: ${bu.toUpperCase()}`);
    };
    break;
    case 32:
    metaLevel.innerText = "INTERMEDIÁRIO / UI-UX";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 32: ANIMAÇÕES CSS I - TRANSIÇÕES E TRANSFORMAÇÕES</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar que o movimento no CSS não é "enfeite", é <strong>feedback de interface</strong>.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #bb9af7; margin: 15px 0;">
                <label class="sub-label" style="color: #bb9af7;">🧠 PILARES TÉCNICOS:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Transition:</strong> Suaviza a mudança de estado (ex: de <code>bg-blue</code> para <code>bg-red</code>).</li>
                    <li><strong>Transform (GPU):</strong> Move, rotaciona e escala elementos sem causar <em>Reflow</em> (recalculo de layout).</li>
                    <li><strong>Timing Functions:</strong> Diferença entre <code>linear</code>, <code>ease-in-out</code> e o personalizado <code>cubic-bezier</code>.</li>
                </ul>
            </div>

            <label class="sub-label">APLICAÇÃO NAS BUSINESS UNITS:</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                <div style="background: #24283b; padding: 10px; border-radius: 4px; border: 1px solid #414868;">
                    <strong style="color: #9ece6a;">MedTrem:</strong>
                    <p style="font-size: 0.75rem; margin: 5px 0;">Cards de exames que "saltam" ao passar o mouse para indicar interatividade.</p>
                </div>
                <div style="background: #24283b; padding: 10px; border-radius: 4px; border: 1px solid #414868;">
                    <strong style="color: #7aa2f7;">NCK Labs:</strong>
                    <p style="font-size: 0.75rem; margin: 5px 0;">Botões de Deploy que expandem levemente, simulando pressão física (tecnologia).</p>
                </div>
            </div>

            <div class="review-bubble" style="background: rgba(224, 175, 104, 0.1); border: 1px solid #e0af68; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #e0af68; font-weight: bold; font-size: 0.8rem;">🔎 Pergunta Estratégica:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Por que é melhor usar <code>transform: translateX(10px)</code> em vez de <code>margin-left: 10px</code> para animar um caminhão da Volta Express?"</p>
                <p style="font-size: 0.75rem; color: #565f89;"><em>Resposta esperada: Performance. O transform não afeta os elementos vizinhos, economizando processamento.</em></p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>⚠️ <strong>Ponto de Atenção:</strong> Cuidado com o "enjoo visual". Animações devem ter entre 200ms e 500ms. Mais que isso, o sistema parece lento.</small></p>
        </div>
    `;
    break;
    default:
      metaLevel.innerText = "PLANNING";
      docContent.innerHTML = `<p>Conteúdo em fase de planejamento pedagógico.</p>`;
      break;
  }
}
