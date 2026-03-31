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
    case 2:
    case 3:
      metaLevel.innerText = "BASIC";
      docContent.innerHTML = `
            <div class="info-card">
                <label>01-03: ALGORITMOS INICIAIS</label>
                <p>O início da jornada focada em <strong>Variáveis, Tipos e Operadores</strong>.</p>
                <p>Nesta fase, o aluno aprende como o JavaScript armazena informações e realiza cálculos básicos de aritmética e comparação.</p>
                <hr>
                <p><small>Conceito Chave: Tipagem dinâmica e declaração de constantes (const/let).</small></p>
            </div>
        `;
      break;

    case 4:
    case 5:
      metaLevel.innerText = "BASIC";
      docContent.innerHTML = `
            <div class="info-card">
                <label>04-05: FLUXO DE DECISÃO</label>
                <p>Introdução às estruturas <strong>Condicionais (If/Else e Switch)</strong>.</p>
                <p>Ensinamos o código a "pensar" e tomar caminhos diferentes baseados em validações lógicas e booleanas.</p>
                <hr>
                <p><small>Aplicação: Validação de entradas e controle de acesso simples.</small></p>
            </div>
        `;
      break;

    case 6:
    case 7:
      metaLevel.innerText = "FUNDAMENTAL";
      docContent.innerHTML = `
            <div class="info-card">
                <label>06-07: REPETIÇÃO E LISTAS</label>
                <p>Domínio dos laços <strong>For e While</strong> para processamento de dados em série.</p>
                <p>Fundamental para entender como percorrer coleções de informações, como listas de mercadorias da Volta Express.</p>
                <hr>
                <p><small>Destaque: Prevenção de loops infinitos e controle de índices.</small></p>
            </div>
        `;
      break;

    case 8:
    case 9:
      metaLevel.innerText = "FUNDAMENTAL";
      docContent.innerHTML = `
            <div class="info-card">
                <label>08-09: FUNÇÕES E MODULARIZAÇÃO</label>
                <p>Aprendemos a criar blocos de código reutilizáveis com <strong>Functions e Arrow Functions</strong>.</p>
                <p>O foco aqui é o princípio DRY (Don't Repeat Yourself), organizando a lógica em pequenas unidades de tarefa.</p>
                <hr>
                <p><small>Skill: Passagem de parâmetros e retorno de valores processados.</small></p>
            </div>
        `;
      break;

    case 10:
      metaLevel.innerText = "INTERMEDIATE";
      docContent.innerHTML = `
            <div class="info-card">
                <label>10: ARQUITETURA DE SOFTWARE</label>
                <p>O desafio da Calculadora: Analisamos as 3 vertentes — <strong>Motor, Parsing e Estado</strong>.</p>
                <p>Uma aula crítica que ensina a separar a lógica matemática (Business) da representação visual (UI).</p>
                <hr>
                <p><small>Mentalidade: Diferença entre código funcional e código estruturado.</small></p>
            </div>
        `;
      break;

    case 11:
      metaLevel.innerText = "INTERMEDIATE";
      docContent.innerHTML = `
            <div class="info-card">
                <label>11: DOM - O JS NA TELA</label>
                <p>A primeira grande interação com o HTML através de <strong>Seletores e Eventos</strong>.</p>
                <p>Uso de createElement e appendChild para transformar um array de tarefas em elementos visíveis na página.</p>
                <hr>
                <p><small>Técnica: Manipulação de estilos (.style) e classes via JavaScript.</small></p>
            </div>
        `;
      break;

    case 12:
      metaLevel.innerText = "ADVANCED";
      docContent.innerHTML = `
            <div class="info-card">
                <label>12: ESTADO E PERSISTÊNCIA</label>
                <p>Finalização da Lista de Tarefas profissional com <strong>LocalStorage e JSON</strong>.</p>
                <p>Implementamos filtros avançados (Pendentes/Concluídas) e garantimos que os dados não sumam no Refresh.</p>
                <label class="sub-label">RECURSOS UTILIZADOS:</label>
                <ul>
                    <li><strong>.filter():</strong> Filtros dinâmicos de visualização.</li>
                    <li><strong>JSON.stringify/parse:</strong> Serialização de dados.</li>
                    <li><strong>IDs Únicos:</strong> Gestão de integridade do array.</li>
                </ul>
            </div>
        `;
      break;

    default:
      metaLevel.innerText = "BOOTCAMP";
      docContent.innerHTML = `
            <div class="info-card">
                <label>PRÓXIMO NÍVEL</label>
                <p>Você completou o ciclo fundamental de lógica e DOM.</p>
                <p>As próximas aulas focarão em <strong>Consumo de APIs, Assincronismo e Integração Fullstack</strong>.</p>
            </div>
        `;
      break;
  }
}
