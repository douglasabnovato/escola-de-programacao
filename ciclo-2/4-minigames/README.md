# 🎮 Mini Games

Este é um projeto de site de mini jogos desenvolvido com **HTML**, **CSS** e **JavaScript puro**,
contendo três jogos clássicos: **Jogo da Forca**, **Jogo da Velha** e **Quebra-Cabeça**.

## 🧩 Funcionalidades

- Página principal com **menu de navegação** para seleção dos jogos.
- Cada jogo é carregado dinamicamente via JavaScript, mantendo a navegação fluida sem recarregamento da página.
- Interface simples e intuitiva, com layout responsivo.

## 🎮 Jogos Disponíveis

| Jogo              | Descrição                                                                        |
| ----------------- | -------------------------------------------------------------------------------- |
| **Jogo da Forca** | Adivinhe a palavra oculta antes que o boneco seja completado.                    |
| **Jogo da Velha** | Dois jogadores se enfrentam em uma partida clássica de "X" e "O".                |
| **Quebra-Cabeça** | Organize os números de 1 a 8 na ordem correta, deslizando as peças no tabuleiro. |

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura do site
- **CSS3** – Estilização e layout
- **JavaScript (Vanilla JS)** – Lógica do jogo e carregamento dinâmico

## 🛠️ Estrutura de Pastas

````markdown
learn-tech/ (raiz)
├── index.html <-- O Shell Principal
├── src/
│ ├── core/
│ │ └── router.js <-- O Orquestrador
│ ├── assets/
│ │ ├── css/
│ │ │ ├── variables.css <-- Design Tokens
│ │ │ └── main.css <-- Layout Global
│ │ ├── audio/ <-- (Sons de vitória/derrota aqui)
│ │ └── img/
│ │ ├── shared/ <-- (GIFs de resultado aqui)
│ │ └── games/
│ │ │ └── forca/  
│ │ │ └── quebra-cabeca/  
│ │ │ └── velha/  
│ │ └── ui/  
│ └── games/
│ ├── forca/
│ │ ├── forca.html, forca.js, forca.css e word-list.js
│ ├── velha/
│ │ ├── velha.html, velha.js, velha.css
│ └── quebra-cabeca/
│ └── quebra-cabeca.html, quebra-cabeca.js, quebra-cabeca.css
```` 

### 📂 Análise da Estrutura de Governança

1. O Core (Cérebro)
   src/core/router.js: Atua como o orquestrador. É ele quem decide qual "peça" de código injetar no index.html sem recarregar a página.

2. Assets Centralizados (Recursos)
   src/assets/audio/: Centraliza os feedbacks sonoros (lost.mp3, victory.mp3). Isso evita que cada jogo tenha sua própria cópia de som, economizando memória.

src/assets/img/: A divisão entre shared (GIFs de fim de jogo), games (específicos de cada jogo) e ui (ícones de interface) é uma prática de mercado que facilita o gerenciamento de centenas de imagens.

src/assets/css/: Separa a identidade visual (tokens/variáveis) do layout estrutural.

3. Games (Módulos Autônomos)
   Cada pasta dentro de src/games/ é agora um micro-aplicativo.

Encapsulamento Total: forca.css, forca.html, forca.js e world-list.js moram juntos. Se você precisar remover o jogo da Forca amanhã, basta deletar uma única pasta sem "quebrar" o resto do site.

## 🛠️ WorkFlow Git

main - tudo funcionando
feature/versao-2-aulas - desenvolvendo

## 🛠️ Plano de Ação

### 1. Infraestrutura & Core (Status Atual)

- [x] Criar Shell Principal (index.html)
- [x] Implementar Design Tokens (src/assets/css/variables.css)
- [x] Implementar Layout Global (src/assets/css/main.css)
- [x] Criar Orquestrador de Rotas (src/core/router.js)
- [x] Desenvolver Módulo Forca (src/games/forca/forca.html e js)

### 2. Migração de Assets

- [x] Criar a pasta src/assets/img/ e organizar imagens por subpastas de jogo.
- [x] Criar a pasta src/assets/audio/ e centralizar os arquivos .mp3.

### 3. Desenvolvimento dos Módulos

- [x] Forca:
  - [x] Criar src/games/forca/forca.html (Fragmento).
  - [x] Criar src/games/forca/forca.js (Módulo com export function init()).
  - [x] Criar src/games/forca/forca.css (Estilos específicos).

- [x] Jogo da Velha:
  - [x] Criar src/games/velha/velha.html (Fragmento).
  - [x] Criar src/games/velha/velha.js (Módulo com export function init()).
  - [x] Criar src/games/velha/velha.css (Estilos específicos).

- [x] Quebra-Cabeça:
  - [x] Criar src/games/quebra-cabeca/quebra-cabeca.html.
  - [x] Criar src/games/quebra-cabeca/quebra-cabeca.js.
  - [x] Criar src/games/quebra-cabeca/quebra-cabeca.css.

### 4. Refinamento de UX/UI

- [x] Implementar destaque no menu lateral via router.js.
- [x] Feedback de Navegação: Implementar lógica no router.js para adicionar a classe .active no menu lateral.
- [x] Responsividade: Homologação do layout Grid em dispositivos mobile (iOS/Android).

### 5. Finalização & Governança (ByteClass)

- [x] Encapsulamento: Mover word-list.js para src/games/forca/.
- [x] Clean-up: Deletar pastas de topo css/, scripts/, sounds/ e arquivos .html soltos na raiz.

# 🎓 Roteiro de Aula: Ecossistema Mini Games learnTECH

Este roteiro guia o desenvolvimento do projeto do zero, focando em **Arquitetura de Software**, **Vanilla JS** e **Governança de Código** para a ByteClass.

---

## 🏗️ 1. Infraestrutura & Core (O Shell)

O objetivo desta etapa é criar o "palco" da aplicação e o sistema de rotas que permite a navegação sem recarregar a página.

- [ ] **Shell Principal (`index.html`)**: Criar a estrutura base com o menu de navegação lateral.
- [ ] **Design Tokens (`variables.css`)**: Implementar a identidade visual Neo-Brutalista (bordas grossas e sombras sólidas).
- [ ] **Layout Global (`main.css`)**: Definir as regras de grid, flexbox e a área de visualização central.
- [ ] **Orquestrador de Rotas (`router.js`)**: Desenvolver a lógica de `fetch` e injeção dinâmica de módulos no container principal.

---

## 📂 2. Migração e Governança de Assets

Organização profissional de recursos para garantir que o projeto seja escalável.

- [ ] **Organização de Imagens**: Criar e popular `src/assets/img/` com as subpastas `shared/`, `games/` e `ui/`.
- [ ] **Centralização de Áudio**: Configurar `src/assets/audio/` com os arquivos `victory.mp3` e `lost.mp3` para uso global por todos os módulos.

---

## 🎮 3. Desenvolvimento dos Módulos (Jogos)

Construção de micro-aplicativos autônomos. Cada jogo deve ser um módulo independente (Encapsulamento Total).

### 🪓 Jogo da Forca

- [ ] Criar fragmento `forca.html`.
- [ ] Implementar lógica em `forca.js` com a função obrigatória `export function init()`.
- [ ] Estilizar com `forca.css` e isolar o banco de palavras em `word-list.js`.

### ❌ Jogo da Velha

- [ ] Criar fragmento `velha.html` com o grid 3x3.
- [ ] Implementar lógica de estado e verificação de vitória em `velha.js`.
- [ ] Criar o **Histórico estilo Terminal** para registro de jogadas em tempo real.

### 🧩 Quebra-Cabeça Numérico

- [ ] Criar fragmento `quebra-cabeca.html`.
- [ ] Implementar lógica de deslizamento de peças e detecção de ordenação correta em `quebra-cabeca.js`.

---

## 💅 4. Refinamento de UX/UI e Responsividade

Polimento da interface para garantir que a aplicação funcione em qualquer dispositivo.

- [ ] **Feedback de Navegação**: Adicionar lógica no `router.js` para aplicar a classe `.active` ao item selecionado no menu lateral.
- [ ] **Homologação Mobile**: Ajustar o layout para garantir usabilidade em dispositivos iOS e Android.

---

## ⚖️ 5. Finalização & Governança ByteClass

Auditoria final de código e limpeza do ambiente de desenvolvimento.

- [ ] **Encapsulamento**: Garantir que nenhum arquivo de estilo ou lógica de jogo esteja solto na raiz.
- [ ] **Clean-up**: Deletar pastas obsoletas como `css/`, `scripts/` ou `sounds/` criadas durante testes iniciais.
- [ ] **Revisão de BU**: Confirmar se todos os módulos estão alinhados com a Unidade de Negócio correta.
