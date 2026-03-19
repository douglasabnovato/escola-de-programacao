# 🎓 Roteiro de Aula: Pokédex Dinâmica (Consumo de API)

Este módulo marca a transição para o desenvolvimento de aplicações vivas. Vamos construir uma Pokédex que consome dados da **PokéAPI**, aplicando conceitos de **Async/Await**, **Manipulação de DOM** e **UX Moderna**.

---

## 🏗️ 1. Planejamento e Estrutura (HTML Semântico)
O foco é preparar o "palco" para dados que serão carregados dinamicamente.

- [ ] **Container Principal**: Criar a estrutura base que centraliza a Pokédex na tela.
- [ ] **Header e Busca**: Implementar o campo de entrada (`input`) e o botão de busca (`button`).
- [ ] **Display de Dados**: 
    - [ ] `<img>` com ID para a foto do Pokémon.
    - [ ] `<h2>` para o nome e `<p>` para o ID/Tipo.
- [ ] **Navegação**: Criar os botões "Anterior" e "Próximo" para percorrer a lista.
- [ ] **Estados de Interface**: Criar containers para mensagens de "Carregando" e "Erro 404".



---

## 📐 2. Layout e Identidade Visual (CSS Moderno)
Aplicando as técnicas de posicionamento e os Design Tokens da learnTECH.

- [ ] API PokeAPI (3 partes): https://www.youtube.com/watch?v=Zr9SMQH4M_A
- [ ] **CSS Grid Layout**: Organizar a Pokédex em áreas definidas (`header`, `search`, `display`, `nav`).
- [ ] **Responsividade**: Garantir que a Pokédex seja funcional em telas de smartphones e desktops.
- [ ] **Estética Neo-Brutalista**: 
    - [ ] Bordas espessas (`border: 3px solid #000`).
    - [ ] Sombras sólidas (`box-shadow: 5px 5px 0px #000`).
- [ ] **Classe de Controle**: Implementar a classe `.hiden { display: none; }` para o gerenciamento de estado via JS.



---

## 🧠 3. Lógica de Programação (JavaScript & API)
Transformando o JSON da PokéAPI em uma interface interativa.

- [ ] **Variáveis de Estado**: Criar um contador global para rastrear qual Pokémon está sendo exibido.
- [ ] **Função de Consumo (`fetch`)**:
    - [ ] Implementar `async` e `await` para buscar dados em `https://pokeapi.co/api/v2/pokemon/`.
    - [ ] Utilizar `try/catch` para capturar erros de conexão ou busca.
- [ ] **Renderização**: 
    - [ ] Injetar o nome, imagem (sprites) e tipos no DOM.
    - [ ] Formatar o ID (ex: #001) para melhorar a UX.
- [ ] **Interatividade**: Vincular os botões de navegação e o campo de busca às funções de busca.



---

## 🚀 4. UX e Animações (O Diferencial)
Elevando o nível do projeto para um padrão profissional.

- [ ] **Skeleton Loading**: Mostrar um estado visual de carregamento enquanto a API responde.
- [ ] **Animações de Entrada**: Usar `@keyframes` para fazer o Pokémon aparecer com um leve "fade-in" ou "bounce".
- [ ] **Troca de Cores**: Alterar a cor de fundo do card dinamicamente com base no tipo do Pokémon (Fogo = Vermelho, Água = Azul).

---

## ⚖️ 5. Governança ByteClass
- [ ] **Modularização**: Separar a lógica de busca da lógica de atualização da tela.
- [ ] **Clean Code**: Funções curtas e nomes de variáveis semânticos.
- [ ] **Check de BU**: Garantir que os assets e cores seguem o manual de marca da learnTECH.

---

## 📱 Scripts de Engajamento (WhatsApp)

| Momento | Gatilho | Mensagem |
| :--- | :--- | :--- |
| **Véspera** | Antecipação | "Preparado para capturar dados reais? Amanhã vamos conectar nosso código à PokéAPI e criar uma Pokédex profissional! ⚡" |
| **1h antes** | Aquecimento | "Falta 1 hora! Já explorou o site pokeapi.co? Escolha seus favoritos para testarmos hoje. 🎮" |
| **15min antes** | Checklist | "VS Code aberto e café na mão? Em 15 min vamos transformar JSON em uma interface épica. 🔥" |
| **Início** | Chamada Final | "Estamos AO VIVO! Vamos dominar o consumo de APIs na prática. Link liberado! 💻" |