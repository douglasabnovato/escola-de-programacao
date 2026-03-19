# 🎮 Mini Games

Este é um projeto de site de mini jogos desenvolvido com **HTML**, **CSS** e **JavaScript puro**, 
contendo três jogos clássicos: **Jogo da Forca**, **Jogo da Velha** e **Quebra-Cabeça**.

## 🧩 Funcionalidades

- Página principal com **menu de navegação** para seleção dos jogos.
- Cada jogo é carregado dinamicamente via JavaScript, mantendo a navegação fluida sem recarregamento da página.
- Interface simples e intuitiva, com layout responsivo.

## 🎮 Jogos Disponíveis

| Jogo             | Descrição                                                                         |
|------------------|-----------------------------------------------------------------------------------|
| **Jogo da Forca** | Adivinhe a palavra oculta antes que o boneco seja completado.                    |
| **Jogo da Velha** | Dois jogadores se enfrentam em uma partida clássica de "X" e "O".                |
| **Quebra-Cabeça** | Organize os números de 1 a 8 na ordem correta, deslizando as peças no tabuleiro. |


## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura do site
- **CSS3** – Estilização e layout
- **JavaScript (Vanilla JS)** – Lógica do jogo e carregamento dinâmico


## 🛠️ WorkFlow Git

main - tudo funcionando
feature/versao-2-aulas - desenvolvendo


## 🛠️ Plano de Ação

1. Infraestrutura & Core (Status Atual)
[x] Criar Shell Principal (index.html)

[x] Implementar Design Tokens (src/assets/css/variables.css)

[x] Implementar Layout Global (src/assets/css/main.css)

[x] Criar Orquestrador de Rotas (src/core/router.js)

[x] Desenvolver Módulo Forca (src/games/forca/forca.html e js)

2. Migração de Assets
[ ] Criar a pasta src/assets/img/ e organizar imagens por subpastas de jogo.

[ ] Criar a pasta src/assets/audio/ e centralizar os arquivos .mp3.

3. Desenvolvimento dos Módulos Restantes
[ ] Jogo da Velha:

[ ] Criar src/games/velha/velha.html (Fragmento).

[ ] Criar src/games/velha/velha.js (Módulo com export function init()).

[ ] Criar src/games/velha/velha.css (Estilos específicos).

[ ] Quebra-Cabeça:

[ ] Criar src/games/quebra-cabeca/quebra-cabeca.html.

[ ] Criar src/games/quebra-cabeca/quebra-cabeca.js.

[ ] Criar src/games/quebra-cabeca/quebra-cabeca.css.

4. Refinamento de UX/UI
[ ] Feedback de Navegação: Implementar lógica no router.js para adicionar a classe .active no menu lateral.

[ ] Responsividade: Homologação do layout Grid em dispositivos mobile (iOS/Android).

5. Finalização & Governança (ByteClass)
[ ] Encapsulamento: Mover word-list.js para src/games/forca/.

[ ] Clean-up: Deletar pastas de topo css/, scripts/, sounds/ e arquivos .html soltos na raiz.