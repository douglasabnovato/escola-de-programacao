
# Computer Science in the World

> Uma experiência de player multimídia educativa com playlist dinâmica, design glassmorphism e controles de ordenação.

## 🌐 Visão geral

Este projeto é um aplicativo estático em HTML, CSS e JavaScript que organiza uma seleção de vídeos sobre ciência da computação em uma interface moderna. O usuário pode:

- visualizar uma playlist de vídeos educacionais
- reproduzir vídeos locais diretamente no player
- mover itens para cima e para baixo na fila
- remover vídeos da playlist
- acompanhar o título, canal e duração do vídeo ativo

## ✨ Recursos principais

- interface responsiva com layout em duas colunas
- player de vídeo HTML5 com poster dinâmico
- playlist dinâmica com destaque de item ativo
- ordenação de vídeos dentro da fila
- remoção de vídeos da lista
- suporte para origem local de mídia e base para futura integração com YouTube

## 📁 Estrutura do projeto

- `index.html` — estrutura principal da aplicação
- `style.css` — estilo visual com paleta escura e efeitos glassmorphism
- `script.js` — lógica do player, renderização de playlist e manipulação de estado
- `assets/` — vídeos locais usados na playlist

## 🚀 Como usar

1. Abra o arquivo `index.html` no navegador.
2. Selecione um vídeo na playlist para iniciar a reprodução.
3. Use os botões de seta para mover vídeos na fila.
4. Clique no ícone de lixeira para remover um vídeo.

> Dica: Para melhor compatibilidade com arquivos de vídeo locais, use um servidor estático simples quando necessário, por exemplo:
>
> `npx http-server .` ou `python -m http.server 8000`

## 🧠 Comportamento do player

- ao clicar em um cartão, o vídeo correspondente é carregado no player
- o painel de detalhes exibe título, canal e duração do vídeo ativo
- quando um vídeo termina, a reprodução avança automaticamente para o próximo item da lista
- se o vídeo ativo for removido, o player retorna ao estado inicial

## 💻 Tecnologias usadas

- HTML5
- CSS3
- JavaScript puro
- Font Awesome para ícones
- Google Fonts (`DM Sans` e `Space Grotesk`)

## 🛠️ Possíveis melhorias

- adicionar suporte nativo para links de YouTube
- implementar busca e filtragem na playlist
- salvar a ordem da playlist no armazenamento local
- adicionar controles avançados como volume, legenda e tela cheia

## 📌 Observações

- Todos os vídeos estão localizados em `assets/`.
- O projeto é perfeito para demonstrações de UI/UX e aprendizado de JavaScript.
