# 🔍 Escola de Programação

uma escola de formação de programação com visão

- Básico → Entender o que está acontecendo 
- Iniciante → Construir coisas reais 
- Intermediário → Organizar pensamento 
- Avançado → Pensar como profissional

## 🟢 NÍVEL BÁSICO — Fundamentos Visíveis

👉 Foco: entender como a web funciona e ganhar confiança.

### 1 - Navegador Não É Mágica: 
Compreensão técnica de como o browser processa códigos HTML, CSS e JavaScript para renderizar a interface final.

### 2 - Estrutura Antes de Estilo: 
A prática fundamental de construir o esqueleto semântico da página antes de aplicar qualquer camada visual.

### 3 - HTML Não É Só Texto: 
O uso de marcação semântica e atributos de acessibilidade (ARIA) para garantir que a página seja interpretável por tecnologias assistivas.

### 4 - Organizando a Página Como Um Profissional: 
Agrupamento lógico de elementos, como o uso de fieldset e legend em formulários, para facilitar a manutenção e a experiência do usuário.

### 5 - CSS: 
A Roupa da Interface: Definição da identidade visual através de cores, tipografia e o uso de variáveis CSS para garantir consistência em todo o projeto.

### 6 - Layout Não É Tentativa e Erro: 
Domínio de ferramentas modernas como CSS Grid e Flexbox para criar estruturas responsivas e alinhamentos precisos, como os ajustados para as diferentes resoluções de tela.

### 7 - O Primeiro JavaScript da Vida: 
Inserção de lógica programática inicial para dar dinamismo ao ambiente estático do navegador.

### 8 - Quando a Página Começa a Responder: 
Implementação de manipuladores de eventos (onclick, onchange, onsubmit) para captar e reagir às ações do usuário em tempo real.

### 9 - Manipulando o DOM Sem Medo: 
Controle dinâmico da interface, permitindo a alteração de conteúdos e classes (como a exibição de bordas e mensagens de erro) sem a necessidade de recarregar a página.

### 10 - Juntando Tudo Pela Primeira Vez: 
A integração total entre a estrutura HTML, a estilização CSS e o comportamento JavaScript com o backend (como o Google Apps Script) para formar um sistema funcional completo.

#### 🎯 Objetivo do nível:
Entender HTML, CSS e JS de forma integrada.
Formar base sólida e consciente.
O aluno não apenas executa — ele entende o que está acontecendo.

## 🟡 NÍVEL INICIANTE — Construindo Interfaces Reais

👉 Foco: sair do “exemplo simples” e construir aplicações objetivas.

### 1 - Criando Componentes Reutilizáveis
Separação de partes da interface em blocos independentes (ex: cards, botões, modais). Introdução ao pensamento modular mesmo antes de frameworks.

### 2 - Organização de Pastas Que Faz Sentido
Estruturação de projeto separando HTML, CSS e JavaScript. Introdução a padrões simples de organização para facilitar manutenção e crescimento.

### 3 - Eventos Além do Clique
Uso de eventos como input, submit, keydown, mouseover. Entendimento do ciclo de interação do usuário e como reagir corretamente.

### 4 - Validação de Formulários
Validação no frontend com feedback visual. Introdução a boas práticas de UX: mensagens claras, estados de erro e prevenção de submissões inválidas.

### 5 - Trabalhando com Arrays no Frontend
Manipulação de listas de dados com map, filter, forEach. Entendimento de como dados estruturados geram interface dinâmica.

### 6 - Renderizando Listas Dinâmicas
Criação automática de elementos na tela a partir de dados. Construção de interfaces baseadas em estado e não em HTML fixo.

### 7 - Manipulando Classes e Estados
Controle visual baseado em lógica: mostrar/ocultar, ativar/desativar, alternar estilos. Introdução ao conceito de estado de interface.

### 8 - Responsividade Sem Sofrimento
Uso estratégico de media queries, unidades relativas e layout flexível para garantir adaptação a diferentes dispositivos.

### 9 - Consumindo Uma API Simples
Uso de fetch para buscar dados externos. Entendimento do fluxo requisição → resposta → renderização.

### 10 - Projeto Final: Mini Aplicação Completa
Desenvolvimento de uma aplicação simples integrando:
    - Interface estruturada
    - Manipulação de dados
    - Consumo de API
    - Responsividade
    - Organização de código

#### 🎯 Objetivo do nível
Fazer o aluno começar a pensar como desenvolvedor:
    - Organização antes de volume
    - Reutilização antes de repetição
    - Dados antes de interface fixa
    - Pensar em estrutura 

## 🟠 NÍVEL INTERMEDIÁRIO — Mentalidade de Engenharia

👉 Foco: parar de escrever código aleatório.

### 1 - Separação de Responsabilidades no Frontend: 
Aplicação do princípio de que cada parte do código deve cuidar de apenas um aspecto da aplicação. Isso envolve separar a lógica de negócio (regras que definem como os dados funcionam) da lógica de apresentação (como os dados aparecem na tela).

### 2 - Funções Puras vs. Funções com Efeitos Colaterais: 
Domínio de funções puras, que sempre retornam o mesmo resultado para o mesmo parâmetro e não alteram nada fora de seu escopo. Em contrapartida, o isolamento de "efeitos colaterais" (como chamadas de API ou manipulação direta do DOM) torna o sistema mais fácil de testar e prever.

### 3 - Organização Modular com JavaScript: 
Substituição de scripts globais por ES Modules (import/export). Isso permite criar sistemas onde as dependências são explícitas, o código é encapsulado e o navegador pode otimizar o carregamento através de técnicas como tree-shaking.

### 4 - Padrões Básicos de Arquitetura no Frontend: 
Introdução a padrões como MVC (Model-View-Controller) ou MVVM, que oferecem diretrizes reutilizáveis para estruturar a implementação e evitar que o projeto se torne um "monolito de espaguete" difícil de escalar.

### 5 - Gerenciamento de Estado Sem Framework: 
Implementação de padrões de comunicação entre componentes, como o Observer (relacionamento direto um-para-muitos) ou Pub/Sub (uso de um Event Bus para desacoplar totalmente as partes do sistema), permitindo gerenciar dados complexos sem depender de bibliotecas externas.

### 6 - Performance: Evitando Reflows e Problemas de DOM: 
Compreensão do ciclo de renderização do navegador para evitar o Reflow (recalculo caro de geometria) e priorizar o Repaint. O foco é evitar o layout thrashing (leituras e escritas seguidas no DOM dentro de loops) para garantir interfaces fluidas.

### 7 - Boas Práticas de CSS Escalável (BEM ou similar): 
Adoção de metodologias como BEM (Block Element Modifier) para manter seletores com baixa especificidade, evitar conflitos de estilos globais e permitir que componentes visuais sejam reutilizados em diferentes partes do projeto de forma segura.

### 8 - Introdução a Versionamento com Git: 
Uso profissional do Git para além do commit e push. Envolve o uso estratégico de Branches para novas funcionalidades, a proteção da branch principal (main) e a escrita de mensagens de commit que narram a evolução do projeto.

### 9 - Estruturando Projetos para Portfólio: 
Organização de repositórios que demonstram maturidade técnica, incluindo um README.md detalhado, documentação de decisões técnicas, templates de relatórios de erros (Bug Reports) e uma estrutura de pastas que qualquer desenvolvedor consiga navegar com facilidade.

### 10 - Projeto Estruturado com Arquitetura Limpa Simples: 
Criação de aplicações onde as regras de negócio (Entidades) estão no centro e são independentes de frameworks, bancos de dados ou APIs. Isso garante que a inteligência do seu software não fique "presa" a uma tecnologia específica, facilitando migrações e testes automatizados.

#### 🎯 Objetivo do nível
Formar raciocínio técnico, não apenas execução.

## 🔴 NÍVEL AVANÇADO — Pensamento Profissional

👉 Foco: preparar para mercado e senioridade.

### 1 - Introdução a SPA Sem Framework
Explorar como criar uma Single Page Application apenas com HTML, CSS e JavaScript puro, entendendo os fundamentos antes de usar bibliotecas.

### 2 - Modularização Avançada
Aprender a dividir o código em módulos reutilizáveis e bem organizados, favorecendo manutenção e escalabilidade.

### 3 - Conceitos de Clean Code no Frontend
Aplicar princípios de legibilidade, simplicidade e clareza no código JavaScript e na estrutura de componentes.

### 4 - Testes Básicos com JavaScript
Introdução a testes unitários e de integração, garantindo confiabilidade e prevenindo regressões no código.

### 5 - Introdução a TypeScript
Compreender tipagem estática e como ela ajuda a reduzir erros e aumentar a produtividade no desenvolvimento frontend.

### 6 - Introdução ao React (Arquitetura de Componentes)
Aprender os fundamentos da biblioteca React, com foco em componentização, reuso e organização da interface.

### 7 - Consumo de API com Tratamento de Erros
Praticar requisições HTTP, lidar com respostas assíncronas e implementar estratégias de tratamento de falhas.

### 8 - Estruturação de Projeto Escalável
Organizar pastas, arquivos e dependências de forma profissional, pensando em crescimento e manutenção futura.

### 9 - Deploy e Ambiente de Produção
Entender como preparar e publicar uma aplicação em servidores ou plataformas de hospedagem, configurando variáveis e otimizações.

### 10 - Projeto Final: Aplicação Completa com Arquitetura Organizada
Construir uma aplicação real, aplicando todos os conceitos aprendidos, com foco em qualidade, organização e boas práticas.

#### 🎯 Objetivo do nível:
desenvolver a mentalidade de um profissional de software
estruturar projetos escaláveis
aplicar boas práticas
entregar soluções robustas

## 🧠 Roteiro de Aula

Conduziremos as aulas de um nível com um projeto 
Em cada módulo, teremos diversos tópicos e assim, permitirá que evoluirmos nosso projeto.

O aluno verá:

    - Pensamento 
    - Decisão 
    - Erro  
    - Ajuste 
    - Organização

Uma pergunta estratégica de professor:
Você quer que essa aula seja mais conceitual
ou mais mão na massa?

## ⚠️ Metodologia da jornada

Vamos entender a progressão pedagógica com a ordem sugerida de ensino e práticas
    
    - Clareza didática
    - Progressão cognitiva
    - Coerência estratégica 
    - Jornada evolutiva em frontend, backend, fullstack
    - Empregabilidade   
    - Comunidade

### Tecnologias Utilizadas 

Para construir essa jornada, vamos utilizar as seguintes tecnologias:

- Html
- Css
- Javascript
- Git / Github
- Kanban
- ReactJS
- NodeJS
- Relacional / Não Relacional
- Ux / Ui
- Figma

### Nosso objetivo

O aluno ter mapa para seguir sua jornada pelo frontend, pelo backend, complementando até fullstack.
Com a clareza de ter uma Base sólida para continuar sozinho

Essa formação completa com 14 meses. 

Podendo ter módulos adicionais para especialização. 

### Critérios de Avaliação

Especificar os desafios de cada nível.
Detalhes os métodos de avaliação.

Uma metodologia Avaliação 360°

 - Presença Nas Aulas
 - Interações nos canais
 - Conclusão de Projetos
 - Consistência no Github
 - Workflow no Github

### Desde o Início

    - Git desde o básico
    - README desde o primeiro projeto
    - Deploy desde o iniciante
    - Portfólio construído progressivamente

####  Engajamento

Integrar o aluno a comunidade de tecnologia da região

Realizar atividades para fortalecer o acompanhamento da fixação do conteúdo

Nossa preocupação é a Taxa de evasão. Nosso compromisso é te acompanhar nessa jornada.

Realização de Bootcamps temáticos para criação de soluções completas.

Agenda com servidor no Discord, Grupo no Whatsapp e Workflow no Github.

#### 🔴🟠 Empregabilidade

Um plano prático com as atividades:

    - Simulação de entrevistas
    - Code review simulado
    - Pull request revisado
    - Projeto em equipe
    - Soft skills técnicas
    - Escrita técnica
    - Comunicação técnica 

### Perfil do aluno

    - Carga horária semanal 2h? 5h? 5h?
    - Idade 16–20? 
    - Adulto em transição de carreira? 
    - Preço: Pessoa com alto ticket?  
    - Já trabalha e quer migrar? 
    - Desde o Zero? 
    - A formação: Presencial, Gravado, Online ao vivo

#### "Ao final da ByteClass, o aluno é capaz de "
#### "A transformação principal que a ByteClass entrega é "

###### Feito e Conduzido por @douglasabnovato em ByteClass