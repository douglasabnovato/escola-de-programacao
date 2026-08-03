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
      const bu = document.getElementById("bu-case-31").value;
      const desc = document.getElementById("bu-desc");
      const contexts = {
        volta: "Contexto: Cálculo de Frete e Manifesto de Carga.",
        medtrem: "Contexto: Gestão de Exames e Taxas de Risco Ocupacional.",
        nck: "Contexto: Orçamento de Infraestrutura e Horas Cloud.",
      };
      desc.innerText = contexts[bu];
      console.log(
        `[ByteClass] Contexto de Debug alterado para: ${bu.toUpperCase()}`,
      );
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
  case 33:
    metaLevel.innerText = "INTERMEDIÁRIO / DOM-ANIMATION";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 33: KEYFRAMES E LÓGICA JAVASCRIPT</label>
            <p><strong>Foco do Instrutor:</strong> Criar coreografias complexas no CSS e dar o "play/pause" via código (Business Logic).</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #73daca; margin: 15px 0;">
                <label class="sub-label" style="color: #73daca;">🔬 CONCEITOS AVANÇADOS:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>@keyframes:</strong> Definição de estados intermediários (0%, 50%, 100%).</li>
                    <li><strong>Animation-Play-State:</strong> Controlar <code>running</code> ou <code>paused</code> via JS.</li>
                    <li><strong>CSS Variables (Runtime):</strong> Alterar a velocidade (<code>duration</code>) dinamicamente com <code>setProperty</code>.</li>
                </ul>
            </div>

            <label class="sub-label">SINCRONIA COM AS BUS:</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px;">
                <div style="background: #24283b; padding: 10px; border-radius: 4px; border: 1px solid #414868;">
                    <strong style="color: #f7768e;">MedTrem:</strong>
                    <p style="font-size: 0.75rem; margin: 5px 0;">O ícone de batimento cardíaco acelera se o status do funcionário for alterado para "Emergência".</p>
                </div>
                <div style="background: #24283b; padding: 10px; border-radius: 4px; border: 1px solid #414868;">
                    <strong style="color: #73daca;">NCK Labs:</strong>
                    <p style="font-size: 0.75rem; margin: 5px 0;">Uma linha de "Scan" atravessa a tela continuamente enquanto o deploy de infraestrutura está ativo.</p>
                </div>
            </div>

            <div class="review-bubble" style="background: rgba(115, 218, 202, 0.1); border: 1px solid #73daca; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #73daca; font-weight: bold; font-size: 0.8rem;">🚀 Desafio de Engenharia:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Como sincronizar o tempo de uma animação CSS com o tempo de resposta de uma API da NCK Labs?"</p>
                <p style="font-size: 0.75rem; color: #565f89;"><em>Resposta: Usar Promises no JS para remover a classe de animação (loading) assim que o <code>resolve</code> for disparado.</em></p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>📌 <strong>Próximo Passo:</strong> Aula 34 - Refatoração e Clean Code. Vamos organizar toda a lógica de animação que criamos para escalar no ecossistema.</small></p>
        </div>
    `;
    break;
  case 34:
    metaLevel.innerText = "INTERMEDIÁRIO / CLEAN-CODE";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 34: REFATORAÇÃO E CLEAN CODE APLICADO</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar que código é feito para humanos lerem e máquinas executarem.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #9ece6a; margin: 15px 0;">
                <label class="sub-label" style="color: #9ece6a;">📜 OS MANDAMENTOS DA AULA:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>DRY (Don't Repeat Yourself):</strong> Se você copiou e colou, está errado.</li>
                    <li><strong>Nomes Significativos:</strong> <code>const t</code> ❌ vs <code>const totalFrete</code> ✅.</li>
                    <li><strong>Funções de Responsabilidade Única:</strong> Uma função deve fazer apenas uma coisa e fazê-la bem.</li>
                </ul>
            </div>

            <label class="sub-label">IMPACTO NO ECOSSISTEMA:</label>
            <p style="font-size: 0.85rem;">
                <strong>MedTrem:</strong> Refatorar a lógica de validação de exames para que sirva para qualquer tipo de clínica.<br>
                <strong>NCK Labs:</strong> Organizar as chamadas de animação que criamos na Aula 33 em uma única Engine de UI.
            </p>

            <div class="review-bubble" style="background: rgba(158, 206, 106, 0.1); border: 1px solid #9ece6a; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #9ece6a; font-weight: bold; font-size: 0.8rem;">💡 Dica de CTO para Aluno:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Refatoração não é mudar o que o código FAZ, é mudar COMO ele é escrito para que o seu 'eu do futuro' não te odeie daqui a 6 meses."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>🏆 <strong>Fim do Bloco 2:</strong> O aluno agora domina o fluxo de trabalho profissional. Próxima parada: <strong>Estrutura de Dados e Algoritmos (Aula 35)</strong>.</small></p>
        </div>
    `;
    break;
  case 35:
    metaLevel.innerText = "ALGORITMOS / ESTRUTURA";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 35: ARRAYS E MATRIZES (DATA STRUCTURES)</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar como organizar dados de forma linear e multidimensional.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #7aa2f7; margin: 15px 0;">
                <label class="sub-label" style="color: #7aa2f7;">📊 MAPA MENTAL:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Array (Unidimensional):</strong> Uma lista simples de itens (Ex: Lista de funcionários MedTrem).</li>
                    <li><strong>Matriz (Multidimensional):</strong> Um Array de Arrays. Ideal para coordenadas, grids e pátios logísticos.</li>
                    <li><strong>Acesso por Índice:</strong> Por que começamos a contar do <code>[0]</code>? (Offset de Memória).</li>
                </ul>
            </div>

            <label class="sub-label">CASOS DE USO NAS BUs:</label>
            <p style="font-size: 0.85rem;">
                <strong>Volta Express:</strong> Mapeamento de vagas no galpão via Matriz <code>[corredor][vaga]</code>.<br>
                <strong>NCK Labs:</strong> Processamento de pixels em imagens ou buffers de dados em rede.<br>
                <strong>MedTrem:</strong> Histórico de exames anuais organizados em Arrays temporais.
            </p>

            <div class="review-bubble" style="background: rgba(122, 162, 247, 0.1); border: 1px solid #7aa2f7; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #7aa2f7; font-weight: bold; font-size: 0.8rem;">💡 Desafio de Lógica:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Se a Volta Express tem 5 galpões e cada galpão tem 10 vagas, qual a estrutura de dados ideal?"</p>
                <p style="font-size: 0.75rem; color: #565f89;"><em>Resposta: Uma matriz <code>galpoes[5][10]</code>.</em></p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>🧠 <strong>Próxima Aula:</strong> Objetos e Mapas (Dicionários). Saímos dos índices numéricos para chaves semânticas.</small></p>
        </div>
    `;
    break;
  case 36:
    metaLevel.innerText = "ALGORITMOS / ESTRUTURA";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 36: OBJETOS E MAPAS (DICTIONARIES)</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar o conceito de Chave-Valor e como ele substitui buscas lentas em Arrays.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #73daca; margin: 15px 0;">
                <label class="sub-label" style="color: #73daca;">🔑 ESTRUTURAS SEMÂNTICAS:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Objeto Literal:</strong> Perfeito para descrever uma única entidade (Ex: 1 Caminhão da Volta Express).</li>
                    <li><strong>Map (Dicionário):</strong> Ideal para coleções onde a busca é feita por um identificador único (ID, CPF, Placa).</li>
                    <li><strong>Performance:</strong> Por que buscar em um Map é <code>O(1)</code> enquanto no Array pode ser <code>O(n)</code>?</li>
                </ul>
            </div>

            <label class="sub-label">DOMÍNIO DAS BUS:</label>
            <p style="font-size: 0.85rem;">
                <strong>MedTrem:</strong> Dicionário de CIDs ou CPFs para acesso instantâneo aos prontuários.<br>
                <strong>NCK Labs:</strong> Objetos de configuração para ambientes de Deploy e variáveis de ambiente.<br>
                <strong>Volta Express:</strong> Mapeamento de Placas de veículos para seus respectivos motoristas.
            </p>

            <div class="review-bubble" style="background: rgba(115, 218, 202, 0.1); border: 1px solid #73daca; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #73daca; font-weight: bold; font-size: 0.8rem;">🧠 Desafio de Memória:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Para um sistema com 1 milhão de registros, você usaria um Array ou um Map para encontrar um usuário pelo e-mail?"</p>
                <p style="font-size: 0.75rem; color: #565f89;"><em>O aluno deve concluir que o Map evita o loop por todo o milhão de registros.</em></p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>📌 <strong>Próxima Aula:</strong> Pilhas (Stack) e Filas (Queue). Vamos controlar a ordem de entrada e saída de dados.</small></p>
        </div>
    `;
    break;
  case 37:
    metaLevel.innerText = "ALGORITMOS / ESTRUTURA";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 37: PILHAS (STACK) E FILAS (QUEUE)</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar as restrições de entrada e saída (LIFO vs FIFO).</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #bb9af7; margin: 15px 0;">
                <label class="sub-label" style="color: #bb9af7;">📐 REGRAS DE ACESSO:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Stack (Pilha):</strong> <em>Last-In, First-Out</em>. O último a entrar é o primeiro a sair. (Ex: O "Desfazer" do editor).</li>
                    <li><strong>Queue (Fila):</strong> <em>First-In, First-Out</em>. O primeiro a entrar é o primeiro a sair. (Ex: Impressora ou Fila de Processamento).</li>
                    <li><strong>Métodos JS:</strong> <code>push/pop</code> para Pilha e <code>push/shift</code> para Fila.</li>
                </ul>
            </div>

            <label class="sub-label">DOMÍNIO DAS BUS:</label>
            <p style="font-size: 0.85rem;">
                <strong>Volta Express:</strong> Fila de caminhões para pesagem (o primeiro que chega é o primeiro pesado).<br>
                <strong>MedTrem:</strong> Pilha de prontuários na mesa do médico (o último que chega fica no topo).<br>
                <strong>NCK Labs:</strong> Fila de execução de Deploys (Pipeline de CI/CD).
            </p>

            <div class="review-bubble" style="background: rgba(187, 154, 247, 0.1); border: 1px solid #bb9af7; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #bb9af7; font-weight: bold; font-size: 0.8rem;">💡 Pergunta Crítica:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Se você remover o primeiro elemento de um Array de 1 milhão de itens (shift), o que acontece com a performance?"</p>
                <p style="font-size: 0.75rem; color: #565f89;"><em>O aluno deve notar que o JS precisa re-indexar todos os outros 999.999 itens.</em></p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>📌 <strong>Próxima Aula:</strong> Busca Linear e Busca Binária. Como encontrar dados de forma eficiente.</small></p>
        </div>
    `;
    break;
  case 38:
    metaLevel.innerText = "ALGORITMOS / PERFORMANCE";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 38: ALGORITMOS DE BUSCA (LINEAR VS BINÁRIA)</label>
            <p><strong>Foco do Instrutor:</strong> Demonstrar que a organização dos dados (ordenação) permite buscas exponencialmente mais rápidas.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #f7768e; margin: 15px 0;">
                <label class="sub-label" style="color: #f7768e;">🔍 COMPARAÇÃO TÉCNICA:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Busca Linear:</strong> Verifica item por item. Funciona em listas desordenadas. Complexidade: <code>O(n)</code>.</li>
                    <li><strong>Busca Binária:</strong> Divide para conquistar. Requer lista <strong>ORDENADA</strong>. Complexidade: <code>O(log n)</code>.</li>
                    <li><strong>A Regra de Ouro:</strong> Para 1 milhão de itens, a Linear pode levar 1 milhão de passos; a Binária leva apenas 20.</li>
                </ul>
            </div>

            <label class="sub-label">CENÁRIOS NAS BUSINESS UNITS:</label>
            <p style="font-size: 0.85rem;">
                <strong>Volta Express:</strong> Localizar um caminhão específico pelo ID numa frota de 50.000 veículos ordenados.<br>
                <strong>MedTrem:</strong> Procurar uma palavra-chave num laudo médico longo (Busca Linear no texto).<br>
                <strong>NCK Labs:</strong> Otimização de índices de base de dados para consultas de alta performance.
            </p>

            <div class="review-bubble" style="background: rgba(122, 162, 247, 0.1); border: 1px solid #7aa2f7; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #7aa2f7; font-weight: bold; font-size: 0.8rem;">💡 Insight de Arquitetura:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Vale a pena ordenar uma lista só para fazer uma busca? Se fores procurar apenas uma vez, não. Se fores procurar várias vezes, a ordenação paga-se rapidamente."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>🚀 <strong>Próxima Aula:</strong> Ordenação I (Bubble Sort). Como colocar os dados em ordem para permitir a Busca Binária.</small></p>
        </div>
    `;
    break;
  case 39:
    metaLevel.innerText = "ALGORITMOS / ORDENAÇÃO";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 39: ALGORITMOS DE ORDENAÇÃO I (BUBBLE SORT)</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar a lógica de comparação de pares e a complexidade quadrática.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #bb9af7; margin: 15px 0;">
                <label class="sub-label" style="color: #bb9af7;">🫧 A LÓGICA DA BOLHA:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Comparação Adjacente:</strong> Verifica <code>arr[j]</code> e <code>arr[j+1]</code>.</li>
                    <li><strong>Troca (Swap):</strong> Se o da esquerda for maior, eles trocam de lugar.</li>
                    <li><strong>Complexidade:</strong> <code>O(n²)</code>. É ineficiente para grandes volumes, mas excelente para ensinar o conceito de <em>Nested Loops</em>.</li>
                </ul>
            </div>

            <label class="sub-label">CENÁRIOS NAS BUSINESS UNITS:</label>
            <p style="font-size: 0.85rem;">
                <strong>Volta Express:</strong> Ordenar uma pequena lista de entregas do dia por prioridade.<br>
                <strong>MedTrem:</strong> Organizar a fila de espera de uma clínica com apenas 5 pacientes.<br>
                <strong>NCK Labs:</strong> Entender o "pior cenário" de performance para evitar algoritmos lentos em produção.
            </p>

            <div class="review-bubble" style="background: rgba(187, 154, 247, 0.1); border: 1px solid #bb9af7; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #bb9af7; font-weight: bold; font-size: 0.8rem;">🧠 Reflexão de Engenharia:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Por que o Bubble Sort é considerado lento?"</p>
                <p style="font-size: 0.75rem; color: #565f89;"><em>Resposta: Porque ele precisa percorrer a lista muitas vezes. Se dobrarmos os itens, o tempo de execução quadruplica.</em></p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>⚡ <strong>Próxima Aula:</strong> Ordenação II (Quick Sort). O algoritmo de "dividir para conquistar" usado em sistemas de alto tráfego.</small></p>
        </div>
    `;
    break;
  case 40:
    metaLevel.innerText = "ALGORITMOS / PERFORMANCE";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 40: SORT NATIVO E COMPARADORES</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar o uso profissional do método <code>.sort()</code> e a importância de tratar números vs strings.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #73daca; margin: 15px 0;">
                <label class="sub-label" style="color: #73daca;">🛠️ O MOTOR DO JAVASCRIPT:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Padrão Alfabético:</strong> Sem comparador, <code>[1, 10, 2]</code> vira <code>[1, 10, 2]</code> (ordem léxica).</li>
                    <li><strong>Comparador Numérico:</strong> <code>(a, b) => a - b</code> (Crescente) ou <code>b - a</code> (Decrescente).</li>
                    <li><strong>Strings:</strong> Uso do <code>localeCompare()</code> para tratar acentos e casos especiais.</li>
                </ul>
            </div>

            <label class="sub-label">CENÁRIOS NAS BUSINESS UNITS:</label>
            <p style="font-size: 0.85rem;">
                <strong>Volta Express:</strong> Ordenar ordens de serviço por prioridade de entrega.<br>
                <strong>NCK Labs:</strong> Listar logs de servidor do mais recente para o mais antigo.<br>
                <strong>MedTrem:</strong> Classificar pacientes por nível de risco no dashboard.
            </p>

            <div class="review-bubble" style="background: rgba(115, 218, 202, 0.1); border: 1px solid #73daca; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #73daca; font-weight: bold; font-size: 0.8rem;">🧠 Dica de Performance:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"O <code>.sort()</code> do JS moderno geralmente usa <strong>Timsort</strong> (estável e rápido). Não tente reescrever isso a menos que tenha um motivo acadêmico."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>⏱️ <strong>Próxima Aula:</strong> Complexidade de Tempo (Big O Notation). Vamos aprender a medir matematicamente o custo do nosso código.</small></p>
        </div>
    `;
    break;
  case 41:
    metaLevel.innerText = "ALGORITMOS / TEORIA";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 41: BIG O NOTATION (COMPLEXIDADE)</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar o aluno a medir a eficiência do código antes mesmo de executá-lo.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #f7768e; margin: 15px 0;">
                <label class="sub-label" style="color: #f7768e;">📉 TABELA DE IMPACTO:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>O(1) - Excelente:</strong> Acesso direto (Ex: <code>paciente.nome</code>).</li>
                    <li><strong>O(log n) - Muito Bom:</strong> Busca Binária.</li>
                    <li><strong>O(n) - Justo:</strong> Loop simples por um Array.</li>
                    <li><strong>O(n²) - Ruim:</strong> Loop dentro de Loop (Nested Loops).</li>
                </ul>
            </div>

            <label class="sub-label">CENÁRIOS REAIS:</label>
            <p style="font-size: 0.85rem;">
                <strong>Volta Express:</strong> Comparar cada caminhão com todos os outros para otimizar rotas sem filtro prévio é <code>O(n²)</code>. Sistema trava com 1.000 caminhões.<br>
                <strong>MedTrem:</strong> Buscar um CPF em um <code>Map</code> é <code>O(1)</code>. Instantâneo com 1 milhão de pacientes.
            </p>

            <div class="review-bubble" style="background: rgba(247, 118, 142, 0.1); border: 1px solid #f7768e; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #f7768e; font-weight: bold; font-size: 0.8rem;">🚨 PENSAMENTO SÊNIOR:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Premature optimization is the root of all evil, mas ignorar o Big O é plantar um bug de performance para o futuro."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>🧠 <strong>Próxima Aula:</strong> Recursividade. Quando uma função chama a si mesma para resolver problemas complexos.</small></p>
        </div>
    `;
    break;
  case 42:
    metaLevel.innerText = "ALGORITMOS / LÓGICA";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 42: RECURSIVIDADE (RECURSION)</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar o aluno a pensar em camadas e a entender a Call Stack (Pilha de Chamadas).</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #bb9af7; margin: 15px 0;">
                <label class="sub-label" style="color: #bb9af7;">🧠 ANATOMIA RECURSIVA:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Caso Base (Condição de Parada):</strong> Evita o loop infinito e o erro de estouro de pilha.</li>
                    <li><strong>Passo Recursivo:</strong> A função chama a si mesma com um argumento "menor" ou mais próximo do caso base.</li>
                    <li><strong>Call Stack:</strong> O navegador empilha cada chamada e só resolve os cálculos de cima para baixo ao atingir o fim.</li>
                </ul>
            </div>

            <label class="sub-label">CENÁRIOS NAS BUSINESS UNITS:</label>
            <p style="font-size: 0.85rem;">
                <strong>NCK Labs:</strong> Percorrer uma árvore de pastas e subpastas para encontrar arquivos de log.<br>
                <strong>Volta Express:</strong> Calcular o custo de uma rota que possui múltiplas paradas interdependentes.<br>
                <strong>MedTrem:</strong> Analisar uma árvore genealógica médica para identificar padrões hereditários.
            </p>

            <div class="review-bubble" style="background: rgba(187, 154, 247, 0.1); border: 1px solid #bb9af7; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #bb9af7; font-weight: bold; font-size: 0.8rem;">⚠️ ALERTA DE PERFORMANCE:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"A recursividade é poderosa, mas gasta mais memória (Stack) que um loop <code>while</code>. Use-a quando a estrutura do dado for naturalmente recursiva (como árvores)."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>🌳 <strong>Próxima Aula:</strong> Árvores e Grafos. Onde a recursividade brilha de verdade.</small></p>
        </div>
    `;
    break;
  case 43:
    metaLevel.innerText = "ALGORITMOS / RESILIÊNCIA";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 43: TRATAMENTO DE ERROS PROFISSIONAL</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar que um erro não tratado é uma vulnerabilidade e uma péssima UX.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #f7768e; margin: 15px 0;">
                <label class="sub-label" style="color: #f7768e;">🛡️ O ESCUDO DO CÓDIGO:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Try:</strong> O bloco onde "tentamos" executar o código perigoso (APIs, JSON, DB).</li>
                    <li><strong>Catch:</strong> Onde capturamos o objeto <code>Error</code> e decidimos o que fazer.</li>
                    <li><strong>Finally:</strong> Onde limpamos a casa (fechar conexões, parar loadings) independente do resultado.</li>
                    <li><strong>Throw:</strong> Como criar seus próprios erros (Ex: <code>throw new Error('Saldo Insuficiente')</code>).</li>
                </ul>
            </div>

            <label class="sub-label">CENÁRIOS NAS BUSINESS UNITS:</label>
            <p style="font-size: 0.85rem;">
                <strong>MedTrem:</strong> Se o sensor de batimentos falhar, o sistema deve emitir um alerta visual em vez de apenas parar de funcionar.<br>
                <strong>NCK Labs:</strong> Tratamento de erros em requisições assíncronas para garantir que o usuário saiba que o servidor está offline.<br>
                <strong>Volta Express:</strong> Validação de entrada de dados (peso, dimensões) lançando erros personalizados antes de enviar ao backend.
            </p>

            <div class="review-bubble" style="background: rgba(247, 118, 142, 0.1); border: 1px solid #f7768e; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #f7768e; font-weight: bold; font-size: 0.8rem;">💡 Mentalidade Sênior:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Tratar erros é sobre dar uma saída digna para o usuário. Um erro 500 sem mensagem amigável faz o cliente perder a confiança no ecossistema learnTECH."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>🏁 <strong>Próxima Aula:</strong> Revisão e Exercício Final de Algoritmos (Aula 44). O grande desafio antes do Módulo de Projetos Reais.</small></p>
        </div>
    `;
    break;
  case 44:
    metaLevel.innerText = "ALGORITMOS / STRING-PARSING";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 44: REGEX AVANÇADO (VALIDAÇÕES)</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar o poder do reconhecimento de padrões para garantir a integridade dos dados.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #7aa2f7; margin: 15px 0;">
                <label class="sub-label" style="color: #7aa2f7;">🧩 SINTAXE DE ELITE:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Quantificadores:</strong> <code>{3}</code>, <code>+</code>, <code>*</code>, <code>?</code> (Controle de repetição).</li>
                    <li><strong>Lookaheads:</strong> <code>(?=...)</code> - Validar se algo existe à frente sem "consumir" a string.</li>
                    <li><strong>Escapes:</strong> <code>\\d</code> (números), <code>\\w</code> (alfanumérico), <code>\\s</code> (espaços).</li>
                    <li><strong>Flags:</strong> <code>/g</code> (global), <code>/i</code> (case-insensitive).</li>
                </ul>
            </div>

            <label class="sub-label">USO NO ECOSSISTEMA:</label>
            <p style="font-size: 0.85rem;">
                <strong>Volta Express:</strong> Validação de CEPs e placas para evitar erros no cadastro de fretes.<br>
                <strong>MedTrem:</strong> Higienização de inputs em laudos para remover caracteres especiais maliciosos.<br>
                <strong>NCK Labs:</strong> Criação de roteadores (Routing) baseados em padrões de URL.
            </p>

            <div class="review-bubble" style="background: rgba(122, 162, 247, 0.1); border: 1px solid #7aa2f7; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #7aa2f7; font-weight: bold; font-size: 0.8rem;">🚨 Aviso do CTO:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Regex é como fogo: cozinha o jantar ou queima a casa. Sempre use ferramentas como <strong>Regex101</strong> para testar antes de levar para a produção."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>🏁 <strong>Módulo 5 Concluído!</strong> O aluno agora domina a lógica pura. Próximo Módulo: <strong>DOM e Browser APIs (45-54)</strong>.</small></p>
        </div>
    `;
    break;
  case 45:
    metaLevel.innerText = "POO / ARQUITETURA";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 45: POO I - CLASSES E CONSTRUTORES</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar o conceito de "Blueprint" (Molde) e a palavra-chave <code>new</code>.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #7aa2f7; margin: 15px 0;">
                <label class="sub-label" style="color: #7aa2f7;">🏗️ PILARES INICIAIS:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Class:</strong> A definição teórica (O que um caminhão tem e faz?).</li>
                    <li><strong>Constructor:</strong> A função automática que "nasce" com o objeto para inicializar dados.</li>
                    <li><strong>This:</strong> A referência ao próprio objeto que está sendo criado no momento.</li>
                    <li><strong>Instance:</strong> O objeto vivo na memória após o comando <code>new</code>.</li>
                </ul>
            </div>

            <label class="sub-label">ENTIDADES DO ECOSSISTEMA:</label>
            <p style="font-size: 0.85rem;">
                <strong>Volta Express:</strong> Classe <code>Veiculo</code> para gerenciar frotas.<br>
                <strong>MedTrem:</strong> Classe <code>Exame</code> para padronizar laudos médicos.<br>
                <strong>NCK Labs:</strong> Classe <code>ComponenteUI</code> para criar elementos de interface reutilizáveis.
            </p>

            <div class="review-bubble" style="background: rgba(122, 162, 247, 0.1); border: 1px solid #7aa2f7; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #7aa2f7; font-weight: bold; font-size: 0.8rem;">💡 Analogia de CTO:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"A Classe é a planta baixa de um prédio da Volta Express. O Objeto é o prédio construído onde as pessoas realmente entram."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>🧬 <strong>Próxima Aula:</strong> POO II - Métodos e Encapsulamento. Como dar "vida" aos objetos e proteger seus dados.</small></p>
        </div>
    `;
    break;
  case 46:
    metaLevel.innerText = "POO / SEGURANÇA";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 46: ENCAPSULAMENTO E ATRIBUTOS PRIVADOS</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar o conceito de "caixa preta" e como proteger o estado interno do objeto.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #bb9af7; margin: 15px 0;">
                <label class="sub-label" style="color: #bb9af7;">🔐 CONCEITOS CHAVE:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Atributo Privado (<code>#</code>):</strong> Impede que o dado seja alterado de fora da classe.</li>
                    <li><strong>Getters:</strong> Métodos para ler dados de forma controlada.</li>
                    <li><strong>Setters:</strong> Métodos para alterar dados com validação (Ex: não aceitar peso negativo).</li>
                    <li><strong>Interface Pública:</strong> Apenas o que o objeto "mostra" para o mundo.</li>
                </ul>
            </div>

            <label class="sub-label">APLICAÇÃO NAS BUs:</label>
            <p style="font-size: 0.85rem;">
                <strong>Volta Express:</strong> O <code>#odometro</code> de um caminhão deve ser privado para evitar fraudes de quilometragem.<br>
                <strong>MedTrem:</strong> O <code>#historicoClinico</code> deve ser acessado apenas por métodos que validam o token do médico.<br>
                <strong>NCK Labs:</strong> Chaves de API de serviços de nuvem encapsuladas em classes de Configuração.
            </p>

            <div class="review-bubble" style="background: rgba(187, 154, 247, 0.1); border: 1px solid #bb9af7; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #bb9af7; font-weight: bold; font-size: 0.8rem;">🧠 Desafio Sênior:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Por que não deixar tudo público e apenas tomar cuidado?"</p>
                <p style="font-size: 0.75rem; color: #565f89;"><em>Resposta: Em sistemas grandes (learnTECH), múltiplos desenvolvedores mexem no código. O encapsulamento evita que um erro em uma parte do sistema quebre a lógica de negócio central de outra.</em></p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>🧬 <strong>Próxima Aula:</strong> POO III - Herança e Polimorfismo. Como reaproveitar código e criar especializações.</small></p>
        </div>
    `;
    break;
  case 47:
    metaLevel.innerText = "POO / ARQUITETURA";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 47: POO III - HERANÇA E REUSO</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar como evitar a repetição de código (DRY - Don't Repeat Yourself) através da especialização de classes.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #7aa2f7; margin: 15px 0;">
                <label class="sub-label" style="color: #7aa2f7;">🧬 GENÉTICA DE CÓDIGO:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Extends:</strong> Estabelece a relação "É UM" (Um Caminhão <em>é um</em> Veículo).</li>
                    <li><strong>Super():</strong> O "telefone" para o pai. Obrigatório para inicializar os atributos herdados.</li>
                    <li><strong>Reuso:</strong> Se você consertar um bug na classe <code>Veiculo</code>, todas as classes filhas são corrigidas automaticamente.</li>
                </ul>
            </div>

            <label class="sub-label">USO NAS BUs:</label>
            <p style="font-size: 0.85rem;">
                <strong>MedTrem:</strong> Classe <code>Usuario</code> (base) -> <code>Medico</code> e <code>Paciente</code> (especializações).<br>
                <strong>Volta Express:</strong> Classe <code>Carga</code> -> <code>Perigosa</code>, <code>Frágil</code> e <code>Comum</code>.<br>
                <strong>NCK Labs:</strong> Classe <code>BotaoUI</code> -> <code>BotaoSubmit</code> e <code>BotaoCancel</code>.
            </p>

            <div class="review-bubble" style="background: rgba(122, 162, 247, 0.1); border: 1px solid #7aa2f7; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #7aa2f7; font-weight: bold; font-size: 0.8rem;">⚠️ ALERTA DE ARQUITETURA:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Não abuse da herança. Se a relação não for estritamente 'É UM', talvez você precise de <strong>Composição</strong>, que veremos mais à frente."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>🎭 <strong>Próxima Aula:</strong> POO IV - Polimorfismo. Como o mesmo comando pode ter comportamentos diferentes.</small></p>
        </div>
    `;
    break;
  case 48:
    metaLevel.innerText = "WEB APIS / PERSISTÊNCIA";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 48: JSON E PERSISTÊNCIA AVANÇADA</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar o transporte de dados entre memória e armazenamento através da serialização.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #bb9af7; margin: 15px 0;">
                <label class="sub-label" style="color: #bb9af7;">💾 O CICLO DO DADO:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>JSON.stringify():</strong> Transforma seu objeto vivo em uma String (pacote de viagem).</li>
                    <li><strong>JSON.parse():</strong> Transforma a String de volta em um objeto funcional (desempacotamento).</li>
                    <li><strong>LocalStorage:</strong> Memória persistente do browser (limite de ~5MB).</li>
                    <li><strong>SessionStorage:</strong> Persistência apenas enquanto a aba estiver aberta.</li>
                </ul>
            </div>

            <label class="sub-label">CENÁRIOS NAS BUSINESS UNITS:</label>
            <p style="font-size: 0.85rem;">
                <strong>Volta Express:</strong> Salvar o estado do formulário de frete para que o usuário não perca os dados se a página recarregar.<br>
                <strong>MedTrem:</strong> Cache local de exames recentes para acesso rápido offline.<br>
                <strong>NCK Labs:</strong> Armazenar o "Tema Escuro/Claro" escolhido pelo usuário.
            </p>

            <div class="review-bubble" style="background: rgba(187, 154, 247, 0.1); border: 1px solid #bb9af7; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #bb9af7; font-weight: bold; font-size: 0.8rem;">🚨 PONTO DE ATENÇÃO:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"O LocalStorage só aceita Strings. Tentar salvar um objeto direto resultará no famoso erro '[object Object]'. O JSON é a ponte obrigatória."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>📡 <strong>Próxima Aula:</strong> Fetch API I - Consumindo dados do mundo real (APIs Externas).</small></p>
        </div>
    `;
    break;
  case 49:
    metaLevel.innerText = "ARQUITETURA / DATABASE";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 49: ARQUITETURA DE DADOS E MODELAGEM</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar a estruturar dados de forma normalizada para evitar redundância e garantir a integridade.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #9ece6a; margin: 15px 0;">
                <label class="sub-label" style="color: #9ece6a;">🏗️ PILARES DA MODELAGEM:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Entidade:</strong> O "assunto" da tabela (Ex: Motorista, Carga).</li>
                    <li><strong>Primary Key (PK):</strong> O ID único e imutável que identifica um registro.</li>
                    <li><strong>Foreign Key (FK):</strong> A "ponte" que conecta uma tabela a outra.</li>
                    <li><strong>Normalização:</strong> O processo de organizar colunas e tabelas para reduzir a duplicidade.</li>
                </ul>
            </div>

            <label class="sub-label">DESIGN DE BUSINESS UNITS:</label>
            <p style="font-size: 0.85rem;">
                <strong>Volta Express:</strong> Como modelar a relação entre um Caminhão e o Manifesto de Cargas (Agrupamento).<br>
                <strong>MedTrem:</strong> Como separar dados cadastrais (Paciente) de dados clínicos (Prontuário) por segurança e performance.<br>
                <strong>NCK Labs:</strong> Estruturação de permissões de usuário (Roles) em sistemas SaaS.
            </p>

            <div class="review-bubble" style="background: rgba(158, 206, 106, 0.1); border: 1px solid #9ece6a; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #9ece6a; font-weight: bold; font-size: 0.8rem;">💡 Visão de CTO:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Código ruim você refatora em um dia. Um banco de dados mal modelado pode destruir uma empresa em um ano. Desenhe antes de digitar."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>💾 <strong>Próxima Aula:</strong> SQL Básico - Consultando nossas modelagens na prática.</small></p>
        </div>
    `;
    break;
  case 50:
    metaLevel.innerText = "DATABASE / INFRA";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 50: FUNDAMENTOS DE BANCO DE DADOS (SQL VS NOSQL)</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar o aluno a discernir entre modelos relacionais e não-relacionais baseados no volume, velocidade e variedade dos dados.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #7aa2f7; margin: 15px 0;">
                <label class="sub-label" style="color: #7aa2f7;">📊 COMPARAÇÃO TÉCNICA:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>SQL (PostgreSQL/MySQL):</strong> Foco em Consistência e Integridade. Excelente para dados que se conectam muito (Joins).</li>
                    <li><strong>NoSQL (MongoDB/Redis):</strong> Foco em Performance e Flexibilidade. Excelente para Big Data e Protótipos rápidos.</li>
                    <li><strong>Esquema:</strong> SQL exige que você defina as colunas antes. NoSQL aceita novos campos "on-the-fly".</li>
                </ul>
            </div>

            <label class="sub-label">ESTRATÉGIA NAS BUs:</label>
            <p style="font-size: 0.85rem;">
                <strong>Volta Express:</strong> SQL para o Core (Pagamentos e Contratos) + NoSQL para Rastreamento GPS (Alta escrita).<br>
                <strong>MedTrem:</strong> SQL para Cadastro de Pacientes + NoSQL para imagens de exames e metadados variados.<br>
                <strong>NCK Labs:</strong> NoSQL para armazenamento de configurações dinâmicas de usuários.
            </p>

            <div class="review-bubble" style="background: rgba(122, 162, 247, 0.1); border: 1px solid #7aa2f7; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #7aa2f7; font-weight: bold; font-size: 0.8rem;">⚠️ VISÃO DE CTO:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Muitos devs escolhem NoSQL por 'preguiça' de modelar o banco SQL. Isso cobra um preço caro em relatórios complexos no futuro. Escolha pela necessidade técnica, não pela facilidade inicial."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>🌐 <strong>Próxima Aula:</strong> Integração Frontend/Backend - O papel das APIs REST.</small></p>
        </div>
    `;
    break;
  case 51:
    metaLevel.innerText = "ES6+ / ARQUITETURA";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 51: JS MODERNO - MÓDULOS E DESTRUCTURING</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar a sintaxe que torna o código JavaScript mais limpo, modular e fácil de manter em grandes projetos.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #ff9e64; margin: 15px 0;">
                <label class="sub-label" style="color: #ff9e64;">⚡ SINTAXE DE ALTO NÍVEL:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Modules (import/export):</strong> Permite que a MedTrem use o mesmo validador de CPF em 50 arquivos diferentes sem duplicar código.</li>
                    <li><strong>Object Destructuring:</strong> Facilita o recebimento de parâmetros em funções (Ex: <code>function cadastrar({nome, email})</code>).</li>
                    <li><strong>Array Destructuring:</strong> Muito usado em hooks de bibliotecas modernas (como React).</li>
                    <li><strong>Spread/Rest Operator:</strong> Para clonar objetos ou receber múltiplos argumentos de forma dinâmica.</li>
                </ul>
            </div>

            <label class="sub-label">APLICAÇÃO NAS BUs:</label>
            <p style="font-size: 0.85rem;">
                <strong>Volta Express:</strong> Exportar uma classe <code>CalculadoraFrete</code> para ser usada tanto no painel do cliente quanto no painel do admin.<br>
                <strong>MedTrem:</strong> Desestruturar o objeto <code>Paciente</code> para exibir apenas as informações de emergência na tela do médico.<br>
                <strong>NCK Labs:</strong> Utilizar módulos para separar a lógica de UI da lógica de processamento de dados.
            </p>

            <div class="review-bubble" style="background: rgba(255, 158, 100, 0.1); border: 1px solid #ff9e64; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #ff9e64; font-weight: bold; font-size: 0.8rem;">💡 DICA DE SENIORIDADE:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"A modularização não é apenas sobre arquivos separados; é sobre 'Separação de Preocupações' (SoC). Se um arquivo faz 10 coisas diferentes, ele ainda não está modularizado."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>🧪 <strong>Próxima Aula:</strong> Testes Unitários - Garantindo que a lógica das nossas BUs nunca falhe.</small></p>
        </div>
    `;
    break;
  case 52:
    metaLevel.innerText = "QA / SOFTWARE ENGINEERING";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 52: METODOLOGIA DE TESTES BÁSICOS</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar a cultura da prova técnica. Testar não é um "extra", é parte do desenvolvimento.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #9ece6a; margin: 15px 0;">
                <label class="sub-label" style="color: #9ece6a;">🛠️ O DICIONÁRIO DO QA:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Teste Unitário:</strong> Testa a menor unidade de código (uma função isolada).</li>
                    <li><strong>Asserção (Expect):</strong> A afirmação do que esperamos que aconteça.</li>
                    <li><strong>TDD:</strong> Ciclo Red (falha) -> Green (passa) -> Refactor (melhora).</li>
                    <li><strong>Mocks:</strong> Simular comportamentos (ex: simular uma API fora do ar).</li>
                </ul>
            </div>

            <label class="sub-label">TESTES NAS BUs:</label>
            <p style="font-size: 0.85rem;">
                <strong>Volta Express:</strong> Garantir que o cálculo de pedágio nunca retorne valores negativos.<br>
                <strong>MedTrem:</strong> Testar se a conversão de unidades (mg para g) está matematicamente perfeita.<br>
                <strong>NCK Labs:</strong> Validar se o sistema de login bloqueia acessos sem token.
            </p>

            <div class="review-bubble" style="background: rgba(158, 206, 106, 0.1); border: 1px solid #9ece6a; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #9ece6a; font-weight: bold; font-size: 0.8rem;">💡 MENTALIDADE CTO:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Código sem teste é dívida técnica imediata. Se você não tem tempo para testar agora, terá que ter tempo para consertar o bug em produção às 3 da manhã."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>⏱️ <strong>Próxima Aula:</strong> JavaScript Assíncrono (Promises/Async-Await). Lidando com o tempo.</small></p>
        </div>
    `;
    break;
  case 53:
    metaLevel.innerText = "DEVOPS / CLOUD";
    docContent.innerHTML = `
        <div class="info-card">
            <label>AULA 53: DEPLOY E AMBIENTES (NETLIFY/VERCEL)</label>
            <p><strong>Foco do Instrutor:</strong> Ensinar o fluxo de automação que leva o código do ambiente de desenvolvimento para as mãos do usuário final.</p>
            
            <div style="background: #16161e; padding: 15px; border-radius: 8px; border-left: 4px solid #f14e32; margin: 15px 0;">
                <label class="sub-label" style="color: #f14e32;">🌐 O CAMINHO PARA A NUVEM:</label>
                <ul style="font-size: 0.85rem; margin-top: 10px; line-height: 1.6;">
                    <li><strong>Continuous Deployment (CD):</strong> Cada "Push" no GitHub gera um novo deploy automático.</li>
                    <li><strong>Variáveis de Ambiente (.env):</strong> Onde guardamos chaves secretas (DB, APIs) que não podem ir para o GitHub.</li>
                    <li><strong>Preview Deploy:</strong> Ver como uma nova funcionalidade fica online antes de mesclar com a versão principal.</li>
                    <li><strong>Edge Network:</strong> Servir o site learnTECH do servidor mais próximo do usuário (RJ, SP, Miami).</li>
                </ul>
            </div>

            <label class="sub-label">ESTRUTURA DE AMBIENTES:</label>
            <p style="font-size: 0.85rem;">
                <strong>Local:</strong> Máquina do dev (Douglas). Liberdade total para errar.<br>
                <strong>Staging (Homologação):</strong> Cópia idêntica à produção para testes finais da equipe ByteClass.<br>
                <strong>Produção:</strong> Onde os caminhões da Volta Express são monitorados em tempo real. Erro proibido.
            </p>

            <div class="review-bubble" style="background: rgba(241, 78, 50, 0.1); border: 1px solid #f14e32; margin-top: 20px; padding: 12px; border-radius: 6px;">
                <span style="color: #f14e32; font-weight: bold; font-size: 0.8rem;">🚨 REGRA DE OURO DO CTO:</span>
                <p style="font-size: 0.85rem; margin-top: 5px;">"Nunca suba chaves de acesso no código fonte. Use sempre as Environment Variables do Netlify/Vercel. Segurança em primeiro lugar, sempre."</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #414868; margin: 20px 0;">
            <p><small>🏁 <strong>PRÓXIMA AULA (54):</strong> O Grande Projeto Final. Consolidando todo o Módulo 6 e fechando o treinamento!</small></p>
        </div>
    `;
    break;
  case 54:
    metaLevel.innerText = "MVP / GRADUAÇÃO";
    docContent.innerHTML = `
        <div class="info-card" style="border: 2px solid #9ece6a;">
            <label style="background: #9ece6a; color: #1a1b26; padding: 5px 10px; border-radius: 4px;">AULA 54: PROJETO INTEGRADOR FINAL (MVP)</label>
            <h2 style="margin-top: 15px;">🎓 Conclusão do Ciclo de Fundamentos</h2>
            
            <p><strong>Objetivo:</strong> O aluno deve agir como um Desenvolvedor Júnior em sua primeira task real na learnTECH.</p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
                <div style="background: rgba(122, 162, 247, 0.1); padding: 15px; border-radius: 8px; border: 1px solid #7aa2f7;">
                    <h4 style="color: #7aa2f7;">📦 Entregável A (Logística)</h4>
                    <p style="font-size: 0.8rem;">Sistema de despacho de carga com cálculo de frete dinâmico, persistência de rotas e validação de frota.</p>
                </div>
                <div style="background: rgba(187, 154, 247, 0.1); padding: 15px; border-radius: 8px; border: 1px solid #bb9af7;">
                    <h4 style="color: #bb9af7;">🏥 Entregável B (Saúde)</h4>
                    <p style="font-size: 0.8rem;">Triagem de pacientes com histórico encapsulado (POO), filtros de busca e exportação de dados em JSON.</p>
                </div>
            </div>

            <div class="review-bubble" style="background: #16161e; border: 1px solid #9ece6a; padding: 15px;">
                <span style="color: #9ece6a; font-weight: bold;">📝 Checklist de Avaliação do CTO:</span>
                <ul style="font-size: 0.8rem; margin-top: 10px; line-height: 1.6;">
                    <li>✅ O código está modularizado (import/export)?</li>
                    <li>✅ Os atributos sensíveis estão protegidos com # (Private)?</li>
                    <li>✅ O deploy reflete o último commit da branch main?</li>
                    <li>✅ O README do GitHub explica como rodar o projeto?</li>
                </ul>
            </div>

            <div style="text-align: center; margin-top: 30px;">
                <h3 style="color: #f7768e;">¡MISSIÓN CUMPLIDA!</h3>
                <p><small>Douglas, finalizamos a trilha de 54 aulas. O ecossistema ByteClass/learnTECH tem agora uma base de engenharia de software de elite.</small></p>
            </div>
        </div>
    `;
    break;
  default:
    metaLevel.innerText = "PLANNING";
    docContent.innerHTML = `<p>Conteúdo em fase de planejamento pedagógico.</p>`;
    break;
}
