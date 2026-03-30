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
      metaLevel.innerText = "BASIC";
      docContent.innerHTML = `
            <div class="info-card">
                <label>SOBRE O REDUCE</label>
                <p>O método <strong>.reduce()</strong> é fundamental para processar coleções de dados de forma imutável.</p>
                <p>Neste desafio, ele subtrai fatoriais de um montante inicial de 500k.</p>
                <hr>
                <p><small>Dica: Observe como o acumulador preserva o estado entre as iterações.</small></p>
            </div>
        `;
      break;

    case 2:
      metaLevel.innerText = "FUNDAMENTAL";
      docContent.innerHTML = `
            <div class="info-card">
                <label>RECURSIVIDADE E GERAÇÃO</label>
                <p>Aqui evoluímos a lógica: os fatoriais são gerados dinamicamente por uma <strong>função recursiva</strong>.</p>
                <p>A recursão permite resolver problemas complexos dividindo-os em instâncias menores de si mesmos.</p>
                <hr>
                <p><small>Foco: Observe a diferença entre gerar dados (case 2) e consumir dados estáticos (case 1).</small></p>
            </div>
        `;
      break;

    case 3:
      metaLevel.innerText = "FUNDAMENTAL";
      docContent.innerHTML = `
            <div class="info-card">
                <label>MANIPULAÇÃO DE ARRAYS</label>
                <p>Uso avançado de métodos de iteração para transformação de coleções de dados.</p>
                <p>Foco em como estruturar resultados para exibição posterior.</p>
            </div>
        `;
      break;

    case 4:
    case 5:
      metaLevel.innerText = "INTERMEDIATE";
      docContent.innerHTML = `
            <div class="info-card">
                <label>LÓGICA E ESTRUTURAS</label>
                <p>Desafios focados em algoritmos de busca e ordenação dentro do ecossistema learnTECH.</p>
                <p>Introdução a conceitos de performance e eficiência de código.</p>
            </div>
        `;
      break;

    case 6:
      metaLevel.innerText = "INTERMEDIATE";
      docContent.innerHTML = `
            <div class="info-card">
                <label>MODELAGEM DE DADOS: LOGÍSTICA</label>
                <p>Neste desafio, trabalhamos com a estrutura central da <strong>Volta Express</strong>.</p>
                <p>O objetivo é mapear um array de objetos representando "Mercadorias" e associá-los a "Caminhões" disponíveis, utilizando lógica de filtragem dinâmica.</p>
                
                <label class="sub-label">CONCEITOS CHAVE:</label>
                <ul>
                    <li><strong>Mapeamento (Map):</strong> Transformação de objetos brutos em instâncias de classe.</li>
                    <li><strong>Relacionamento:</strong> Vinculação entre IDs de carga e IDs de transporte.</li>
                    <li><strong>Imutabilidade:</strong> Garantir que a lista original de mercadorias não seja alterada durante o match.</li>
                </ul>

                <hr>
                <p><small>Dica Pedagógica: Observe como o sistema valida se "tenho mercadoria e quero alugar caminhão" antes de processar o frete.</small></p>
            </div>
        `;
      break;
    case 7:
    case 8:
      metaLevel.innerText = "INTERMEDIATE";
      docContent.innerHTML = `
            <div class="info-card">
                <label>OBJETOS E DATA MODELS</label>
                <p>Trabalhando com estruturas de objetos complexos, simulando dados de <strong>logística e transporte</strong>.</p>
                <p>Essencial para a integração com a BU de Logística.</p>
            </div>
        `;
      break;

    case 9:
    case 10:
    case 11:
    case 12:
      metaLevel.innerText = "ADVANCED";
      docContent.innerHTML = `
            <div class="info-card">
                <label>ESTRUTURAS DE DADOS: MAP</label>
                <p>Neste desafio, exploramos o objeto <strong>Map</strong> do ES6 para gerenciar permissões de acesso (Roles).</p>
                <p>Diferente de objetos comuns, o Map preserva a ordem de inserção e oferece melhor performance para grandes volumes de dados.</p>
                
                <label class="sub-label">OBJETIVOS TÉCNICOS:</label>
                <ul>
                    <li><strong>Iteração:</strong> Utilizar estruturas de repetição para percorrer chaves e valores simultaneamente.</li>
                    <li><strong>Filtragem Dinâmica:</strong> Identificar usuários com a role 'ADMIN' dentro de um conjunto de dados.</li>
                    <li><strong>Performance:</strong> Entender por que o Map é a escolha profissional para dicionários de dados.</li>
                </ul>

                <hr>
                <p><small>Desafio: Como você modificaria o código para retornar um objeto contendo a contagem total de cada role?</small></p>
            </div>
        `;
      break;

    default:
      metaLevel.innerText = "BOOTCAMP";
      docContent.innerHTML = `
            <div class="info-card">
                <label>PROJETO FULLSTACK</label>
                <p>Desafios finais integrando Frontend, Backend e regras de negócio complexas.</p>
                <p>Aplicação dos princípios <strong>SOLID e Clean Architecture</strong> aprendidos.</p>
            </div>
        `;
      break;
    case 18:
      metaLevel.innerText = "INTERMEDIATE";
      docContent.innerHTML = `
            <div class="info-card">
                <label>LÓGICA DE NÚMEROS PRIMOS</label>
                <p>Um número primo é aquele divisível apenas por 1 e por ele mesmo.</p>
                
                <label class="sub-label">OTIMIZAÇÃO APLICADA:</label>
                <ul>
                    <li><strong>Early Exit:</strong> O algoritmo ignora números pares e múltiplos de 3 imediatamente.</li>
                    <li><strong>Raiz Quadrada:</strong> Testamos divisores apenas até √n, reduzindo drasticamente o número de iterações.</li>
                </ul>

                <hr>
                <p><small>Curiosidade: Números primos são a base da criptografia moderna (RSA).</small></p>
            </div>
        `;
      break;
    case 19:
      metaLevel.innerText = "INTERMEDIATE";
      docContent.innerHTML = `
            <div class="info-card">
                <label>LÓGICA DE MÚLTIPLOS (3 OU 5)</label>
                <p>Este desafio foca em três níveis de maturidade de código:</p>
                
                <label class="sub-label">EVOLUÇÃO DO CÓDIGO:</label>
                <ul>
                    <li><strong>A) Funcional:</strong> Resolve o problema central de soma.</li>
                    <li><strong>B) Modular:</strong> Separa a regra de negócio (verificação) da lógica de repetição.</li>
                    <li><strong>C) Estado:</strong> Armazena os dados processados em uma estrutura de lista (Array).</li>
                </ul>

                <hr>
                <p><small>Reflexão: Por que é melhor ter uma função 'verificarMultiplo' separada em vez de fazer o cálculo direto no loop?</small></p>
            </div>
        `;
      break;
  }
}
