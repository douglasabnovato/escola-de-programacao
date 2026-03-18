📖 Roteiro de Aula: Relíquia Amarela — O Álbum Digital
Guia oficial para instrutores e alunos da ByteClass para o projeto de encerramento do Mês 1.

Este roteiro detalha a construção da aplicação em 4 etapas lógicas, focando na transição do conteúdo estático para a inteligência de dados com JavaScript.

🏗️ Etapa 1: O Esqueleto Semântico (HTML5)
Nesta fase, construímos o "estádio" da aplicação. O foco é a semântica e a preparação dos pontos de manipulação.

Tags Estruturais: Uso de header, main e footer para uma arquitetura limpa.

Interatividade Inicial: Criação de botões de controle com o atributo onclick para disparar as funções.

Ponto de Injeção: Criação da <div id="palco"></div>. É neste container vazio que o JavaScript "colará" as figurinhas dinamicamente.

🎨 Etapa 2: A Estética da Figurinha (CSS3)
Transformamos elementos genéricos em objetos de colecionador baseados no design de 2002.

Layout Responsivo: Implementação de CSS Grid com auto-fill para que o álbum se ajuste a qualquer tela.

Design de Objeto: Uso de box-shadow e border-radius curtos para simular o papel da figurinha.

Micro-interações: Adição de efeitos de hover com transform: scale() para dar feedback visual de profundidade.

Paleta de Cores: Contraste entre o fundo Dark Mode e os cards em off-white (#fdfdfd).

🧠 Etapa 3: Logística de Dados (JavaScript)
A parte crítica: transformar o Manifesto de Carga (objetos) em elementos visuais.

Modelagem de Dados: Organização de nomes, posições e clubes em Arrays de Objetos.

Normalização de Strings: Criação da função gerarCaminhoImagem para remover acentos e espaços, garantindo que o código encontre os arquivos na pasta assets/.

Automação de Loop: Uso do método .forEach() para percorrer a lista de 11 titulares e renderizar os cards automaticamente.

🚀 Etapa 4: UX e Refinamento Técnico
Ajustes de senioridade que garantem a resiliência da aplicação.

Caminhos Dinâmicos: Concatenação de strings para buscar fotos em assets/jogadores/ de forma automatizada.

Tratamento de Erros: Uso do atributo onerror nas imagens para exibir um placeholder caso a foto oficial não seja encontrada.

Estado Visual: Atualização dinâmica do banner do Header e das frases históricas conforme a seleção escolhida.

🏁 Checkpoint de Avaliação
Ao concluir o roteiro, o aluno deve demonstrar domínio sobre:

Escalabilidade: Por que gerenciar 22 jogadores em um único arquivo JS é melhor que 22 arquivos HTML.

Lógica: Como a função de normalização resolve o conflito entre nomes reais e nomes de arquivos.

Semântica: A escolha correta de tags para acessibilidade e SEO.

Este roteiro faz parte da metodologia ByteClass e do Desafio Douglas 2026.
---

**README.md**

# ⚽ Relíquia Amarela — Álbum Digital de Colecionador

> Projeto de conclusão do **Mês 1 (Nível Básico)** da formação Fullstack na **ByteClass**.

Este projeto é uma aplicação web interativa que simula um álbum de figurinhas histórico da Seleção Brasileira, permitindo alternar entre o esquadrão de **1970** e a "Família Scolari" de **2002**.

---

## 🚀 Tecnologias Utilizadas

Para este desafio, apliquei os fundamentos de desenvolvimento web moderno:

- **HTML5 Semântico:** Uso de tags como `header`, `main`, `footer` e `article` para melhor indexação e acessibilidade.
- **CSS3 Customizado:** Implementação de um design inspirado no álbum de figurinhas de 2002, utilizando **CSS Grid**, **Flexbox** e variáveis nativas.
- **JavaScript (ES6+):** \* Manipulação dinâmica do DOM.
  - Tratamento de strings para automação de caminhos de imagem.
  - Renderização de interface baseada em objetos de dados.

---

## 🧠 Desafios Técnicos & Aprendizados

Durante a 4ª semana de aula com o instrutor **Douglas Novato**, os principais focos foram:

1.  **Normalização de Dados:** Criei uma função que limpa nomes de jogadores (remove acentos e espaços) para buscar fotos automaticamente na pasta `assets/`.
2.  **Estado da Interface:** O site não recarrega para mudar de ano; o JavaScript limpa o "palco" e reconstrói a escalação em milissegundos.
3.  **Clean Architecture:** Organização do código seguindo os princípios de separação de responsabilidades (HTML para estrutura, CSS para estilo, JS para lógica).

---

## 🎨 Design System

O projeto utiliza as cores oficiais da CBF com uma abordagem **Dark Mode** para garantir o conforto visual:

- **Fundo:** `#0b0e14` (Dark profundo)
- **Cards:** `#fdfdfd` (Off-white estilo papel de figurinha)
- **Destaques:** `#FFDF00` (Amarelo Canário) e `#009B3A` (Verde Bandeira)

---

## 🛠️ Como executar o projeto

1. Clone este repositório:
   ```bash
   git clone [https://github.com/](https://github.com/)[SEU-USUARIO]/reliquia-amarela.git
   ```
2. Abra o arquivo `index.html` em seu navegador ou utilize a extensão **Live Server** do VS Code.

---

## 👨‍🎓 Autor

- **Nome:** [SEU NOME AQUI]
- **Turma:** ByteClass 2026 - Track Frontend
- **LinkedIn:** [SEU LINK]

---

_Este projeto faz parte do ecossistema **learnTECH** e do **Desafio Douglas 2026**._
