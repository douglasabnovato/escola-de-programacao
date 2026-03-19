# 📱 PokéDex Dinâmica - Ciclo 2 (byteclass)

Bem-vindo ao projeto **PokéDex Dinâmica**, um marco no **Ciclo 2** da nossa trilha de formação. Aqui, deixamos o conteúdo estático para trás e entramos no mundo das **Aplicações Vivas**, conectando o nosso Frontend a dados reais através da **PokéAPI**.

> **Status do Projeto:** 🚀 Concluído (v2.0)  
> **Tecnologias:** HTML5, CSS3 (Neo-Brutalismo), JavaScript (ES6+)

---

## 🏗️ Arquitetura do Projeto

O projeto segue a estrutura de governança da **learnTECH**, priorizando a modularidade e organização profissional:

```text
1-api-pokedex/
├── index.html              # Página Principal (Busca Individual)
├── lista.html              # Explorador de Base (Sistema de Reveal)
└── src/
    └── assets/
        ├── css/
        │   ├── style.css       # Design System Neo-Brutalista
        │   ├── lista.css       # Layout de Grid e Animações de Reveal
        │   └── responsive.css  # Media Queries e Mobile-First
        ├── images/
        │   └── pokeball.png    # Assets estáticos
        └── js/
            ├── main.js         # Lógica de consumo e navegação (Index)
            └── lista.js        # Filtro de 1º estágio e eventos de clique
```

🧠 Objetivos de Aprendizado1. Consumo de API (Async/Await)Aprendemos a transformar o fluxo assíncrono em algo simples de ler, utilizando fetch, async e await para buscar dados em https://pokeapi.co/api/v2/.2. Manipulação Avançada de DOMInjeção dinâmica de elementos, criação de badges de tipos e gerenciamento de estados de interface (loading, erro, revelado).3. UX & Estética Neo-BrutalistaAplicação de uma identidade visual forte com:Bordas espessas (3px solid #000).Sombras sólidas sem desfoque.Micro-interações: O efeito de "saída da Pokébola" usando filtros de brilho e escala.🚀 Funcionalidades ChaveBusca em Tempo Real: Pesquise por nome ou ID oficial.Navegação Inteligente: Botões para percorrer a PokéDex sequencialmente.Explorador de Base (Exclusivo): Uma segunda página que filtra apenas Pokémon de primeiro estágio.Sistema de Reveal: Os Pokémon na listagem começam escondidos em Pokébolas e são revelados com animação de luz ao clicar.Totalmente Responsivo: Design adaptado para qualquer tamanho de tela via responsive.css.⚖️ Governança e Clean CodePadronização de IDs: Uso de padStart(3, '0') para exibir IDs como #001.Tratamento de Erros: Implementação de try/catch para evitar quebras silenciosas.Modularização: CSS e JS separados por responsabilidade de página.🛠️ Como ExecutarClone o repositório para a sua máquina.Certifique-se de manter a estrutura da pasta src/assets.Abra o arquivo index.html utilizando a extensão Live Server no VS Code.O browser deve apontar para http://127.0.0.1:5500/index.html.📱 Engajamento (WhatsApp)MomentoObjetivoMensagemVésperaAntecipação"Preparado para capturar dados reais? Amanhã vamos conectar nosso código à PokéAPI! ⚡"1h antesAquecimento"Falta 1 hora! Já escolheu seus Pokémon favoritos para testarmos? 🎮"15min antesChecklist"VS Code aberto e café na mão? Em 15 min vamos transformar JSON em interface. 🔥"InícioChamada Final"Estamos AO VIVO! Link liberado para dominarmos APIs na prática! 💻"


## 👨‍🏫 Roteiro de Aula: Pokédex & Consumo de APIs
Bloco 1: O "Esqueleto" e a Hierarquia (15 min)
O objetivo é garantir que o aluno entenda onde cada arquivo mora para evitar erros de 404.

Abertura: Explicar o que é uma API Rest e como a PokéAPI entrega dados em JSON.

Prática: Criar a estrutura de pastas conforme o padrão:

/src/assets/css

/src/assets/js

/src/assets/images

Check de Governança: Validar se os caminhos no <link> e <script> no index.html estão apontando corretamente para dentro de ./assets/....

Bloco 2: CSS Neo-Brutalista e Design Tokens (30 min)
Transformar o layout simples em uma interface com a identidade visual da learnTECH.

Conceito: Explicar o uso de variáveis CSS (:root) para cores e bordas.

Técnica:

Uso de clamp() para fontes responsivas.

Criação da classe .hiden { display: none !important; } para controle de estado.

Desafio Rápido: Pedir para os alunos alterarem a cor da variável --primary-color e verem o impacto global.

Bloco 3: O Coração Assíncrono - main.js (45 min)
Momento crítico da aula. Vamos sair do function comum para o async/await.

Explicação Visual: Como o navegador "espera" a resposta da API sem travar a tela.

Codificação Guiada:

Implementar o fetch() simples.

Refatorar para async/await.

Adicionar o try/catch para tratamento de erro (Simular erro digitando um nome de Pokémon que não existe).

Dica de Mentor: Mostrar o console.log(data) para que o aluno veja a árvore do objeto JSON antes de injetar no HTML.

Bloco 4: A Segunda Tela e o Efeito "Reveal" (40 min)
Aplicação prática de lógica de negócios e animações avançadas.

Navegação: Implementar o botão de transição para a lista.html.

Lógica de Filtragem:

Explicar por que usamos o endpoint pokemon-species (verificar evolves_from_species === null).

A "Mágica" do CSS:

Configurar o @keyframes flashLight.

Sincronizar o setTimeout() do JS (300ms) com o auge do brilho do CSS.

Bloco 5: Revisão e Publicação (20 min)
Responsividade: Testar o projeto no "Inspetor de Elementos" em modo mobile.

Deploy: Instruir o uso do GitHub Pages, reforçando que o index.html deve estar acessível para o serviço funcionar.

🎯 Dicas de Suporte (Checklist para o Instrutor)
Caminhos Relativos: 90% dos erros dos alunos serão 404 Not Found. Reitere que se o HTML está na src, ele não precisa escrever src/ no caminho.

MIME Type Error: Se o aluno receber este erro, explique que o caminho do JS está errado e o servidor está devolvendo um HTML de erro no lugar do script.

Sprites: Lembre-os que nem todos os Pokémon têm o GIF animado (gerações novas). O código deve ter o fallback para a imagem estática.