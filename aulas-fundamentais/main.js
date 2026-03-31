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
                <label>AULA 01: O NASCIMENTO DA WEB</label>
                <p><strong>Foco:</strong> Entender o caminho do dado desde o clique até a tela.</p>
                <ul>
                    <li><strong>Protocolos:</strong> A diferença entre a segurança do HTTPS e o padrão HTTP.</li>
                    <li><strong>DNS:</strong> O "GPS" que localiza o servidor da <strong>learnTECH</strong>.</li>
                    <li><strong>Renderização:</strong> Como o browser lê o HTML de cima para baixo.</li>
                </ul>
            </div>`;
        break;

    case 2:
        metaLevel.innerText = "BASIC / SEO";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 02: SEMÂNTICA E ACESSIBILIDADE</label>
                <p><strong>Foco:</strong> Parar de usar <code>&lt;div&gt;</code> para tudo.</p>
                <p>Ensinamos o aluno que tags como <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code> e <code>&lt;footer&gt;</code> ajudam o Google e leitores de tela.</p>
            </div>`;
        break;

    case 3:
        metaLevel.innerText = "BASIC / DESIGN";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 03: BOX MODEL NA PRÁTICA</label>
                <p><strong>Foco:</strong> A anatomia de todo elemento web.</p>
                <p>Explicamos a diferença crucial entre <strong>Padding</strong> (espaço interno) e <strong>Margin</strong> (espaço externo).</p>
            </div>`;
        break;

    case 4:
        metaLevel.innerText = "BASIC / LAYOUT";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 04: POSICIONAMENTO E DISPLAYS</label>
                <p><strong>Foco:</strong> Como os elementos se comportam no fluxo da página.</p>
                <ul>
                    <li><strong>Relative vs Absolute:</strong> Criando elementos sobrepostos (ex: badges de alerta).</li>
                    <li><strong>Fixed:</strong> Menus que não somem no scroll.</li>
                </ul>
            </div>`;
        break;

    case 5:
        metaLevel.innerText = "BASIC / FLEXBOX";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 05: FLEXBOX - EIXO PRINCIPAL</label>
                <p><strong>Foco:</strong> Alinhamento horizontal facilitado.</p>
                <p>Uso de <code>justify-content</code> para distribuir elementos em uma barra de navegação.</p>
            </div>`;
        break;

    case 6:
        metaLevel.innerText = "BASIC / FLEXBOX";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 06: FLEXBOX - EIXO TRANSVERSAL</label>
                <p><strong>Foco:</strong> Alinhamento vertical e quebra de linha (<code>flex-wrap</code>).</p>
                <p>Ideal para criar galerias de cards de cursos que se ajustam sozinhos.</p>
            </div>`;
        break;

    case 7:
        metaLevel.innerText = "FUNDAMENTAL / GRID";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 07: CSS GRID LAYOUT</label>
                <p><strong>Foco:</strong> Planejamento bi-dimensional (Linhas e Colunas).</p>
                <p>Criação de dashboards complexos usando <code>grid-template-areas</code>.</p>
            </div>`;
        break;

    case 8:
        metaLevel.innerText = "FUNDAMENTAL / RESPONSIVE";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 08: MEDIA QUERIES E MOBILE FIRST</label>
                <p><strong>Foco:</strong> Adaptabilidade. O site deve carregar bem no celular antes do desktop.</p>
                <p>Estratégia de <code>min-width</code> para escalar o layout.</p>
            </div>`;
        break;

    case 9:
        metaLevel.innerText = "FUNDAMENTAL / UI";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 09: DESIGN TOKENS (CORES E TIPOS)</label>
                <p><strong>Foco:</strong> Consistência visual.</p>
                <p>Uso de unidades relativas (<code>rem</code>) para garantir que o texto escale com a preferência do usuário.</p>
            </div>`;
        break;

    case 10:
        metaLevel.innerText = "PROJECT / HTML-CSS";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 10: PROJETO LANDING PAGE</label>
                <p><strong>Desafio:</strong> Consolidar todo o CSS e HTML aprendido em uma página real de captura de alunos.</p>
            </div>`;
        break;

    case 11:
        metaLevel.innerText = "LOGIC / JS";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 11: VARIÁVEIS E TIPAGEM</label>
                <p><strong>Foco:</strong> Como o JS armazena dados na memória.</p>
                <p>A diferença entre <code>let</code> e <code>const</code> e por que nunca usar <code>var</code>.</p>
            </div>`;
        break;

    case 12:
        metaLevel.innerText = "LOGIC / JS";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 12: OPERADORES E ARITMÉTICA</label>
                <p><strong>Foco:</strong> Cálculos básicos e comparações lógicas (<code>==</code> vs <code>===</code>).</p>
            </div>`;
        break;

    case 13:
        metaLevel.innerText = "LOGIC / JS";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 13: ESTRUTURAS CONDICIONAIS</label>
                <p><strong>Foco:</strong> Tomada de decisão. "Se o aluno passou, mostre verde; se não, vermelho".</p>
            </div>`;
        break;

    case 14:
        metaLevel.innerText = "LOGIC / JS";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 14: LAÇOS DE REPETIÇÃO</label>
                <p><strong>Foco:</strong> Automação. Percorrer listas sem repetir código manualmente.</p>
            </div>`;
        break;

    case 15:
        metaLevel.innerText = "LOGIC / JS";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 15: FUNÇÕES E ESCOPO</label>
                <p><strong>Foco:</strong> Criar ferramentas reutilizáveis. O conceito de "entrada -> processamento -> saída".</p>
            </div>`;
        break;

    case 16:
        metaLevel.innerText = "LOGIC / JS";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 16: ARROW FUNCTIONS</label>
                <p><strong>Foco:</strong> Sintaxe moderna e simplificada para o dia a dia do desenvolvedor.</p>
            </div>`;
        break;

    case 17:
        metaLevel.innerText = "DOM / INTERACTION";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 17: SELETORES E MANIPULAÇÃO</label>
                <p><strong>Foco:</strong> Capturar elementos do HTML e alterar seu conteúdo via JS.</p>
            </div>`;
        break;

    case 18:
        metaLevel.innerText = "DOM / EVENTS";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 18: ESCUTADORES DE EVENTOS</label>
                <p><strong>Foco:</strong> Reagir à interação do usuário (clicks, formulários e teclas).</p>
            </div>`;
        break;

    case 19:
        metaLevel.innerText = "PROJECT / DOM";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 19: HUB DE EXERCÍCIOS</label>
                <p><strong>Foco:</strong> Criar um dashboard que gerencia o estado da aplicação dinamicamente.</p>
            </div>`;
        break;

    case 20:
        metaLevel.innerText = "API / FETCH";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 20: POKÉDEX E APIs</label>
                <p><strong>Foco:</strong> Buscar dados em servidores externos e injetar na nossa interface.</p>
            </div>`;
        break;

    case 21:
        metaLevel.innerText = "ASYNC / JS";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 21: ASYNC E AWAIT</label>
                <p><strong>Foco:</strong> Lidar com o tempo da internet. Aprender a esperar a resposta sem travar o browser.</p>
            </div>`;
        break;

    case 22:
        metaLevel.innerText = "PRO / CRUD";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 22: CRUD - CREATE E READ</label>
                <p><strong>Foco:</strong> Iniciar um sistema de gestão. Salvar dados em um array e listá-los na tela.</p>
            </div>`;
        break;

    case 23:
        metaLevel.innerText = "PRO / CRUD";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 23: CRUD - UPDATE E DELETE</label>
                <p><strong>Foco:</strong> Manipular índices de arrays para editar informações existentes ou remover registros.</p>
            </div>`;
        break;

    case 24:
        metaLevel.innerText = "PRO / UX";
        docContent.innerHTML = `
            <div class="info-card">
                <label>AULA 24: UX E DESIGN NO CRUD</label>
                <p><strong>Foco:</strong> Dar feedback visual. Mensagens de sucesso, erro e animações de transição.</p>
            </div>`;
        break;

    default:
        metaLevel.innerText = "PLANNING";
        docContent.innerHTML = `<p>Conteúdo em fase de planejamento pedagógico.</p>`;
        break;
}

}
