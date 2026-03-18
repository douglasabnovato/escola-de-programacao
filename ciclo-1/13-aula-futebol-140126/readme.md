📖 Roteiro de Aula Atualizado: Relíquia Amarela

📚 Nível: Intermediário — Dominando a Manipulação do DOM

🟢 Conceito Chave: Arquitetura de Dados e SPA (Single Page Application)

🎯 Tema Central: Transformando Objetos JS em Interfaces Visuais de Colecionador.

📅 Data: 18 de Março de 2026

🏗️ Etapa 1: O Esqueleto e a Troca de Contexto (HTML5)
Arquitetura de Contêiner: Uso de <header>, <main> e <footer>.

O "Palco" Dinâmico: Criação da <div id="palco">. Explicação de como um único elemento ID serve de âncora para múltiplas interfaces (Home e Álbum).

Navegação por Eventos: Implementação de botões com onclick que passam argumentos ('1970', '2002') para uma função mestre.

🎨 Etapa 2: Estética e Proporções de Design (CSS3)
Dualidade de Layout:

Home (Banner): Proporção 16:9 (horizontal) para os álbuns fechados.

Álbum (Figurinha): Proporção 3:4 (vertical) para os bustos dos jogadores.

Física de Colecionador: Uso de rotate() e scale() no hover para simular a pegada de uma figurinha física.

Animações de Entrada: Implementação de @keyframes fadeIn para que a troca de seleção não seja "seca", mas sim uma transição suave.

🧠 Etapa 3: Inteligência de Dados e Normalização (JS)
Dicionário de Dados: Estruturação do bancoDados como um objeto de objetos, permitindo acesso instantâneo via chave (ex: bancoDados[ano]).

Sanitização de Strings (The Clean Rule): Aprofundamento na função gerarCaminhoImagem. Como tratar acentos (normalize("NFD")) e espaços para que o código "adivinhe" o nome do arquivo no disco.

Iteração Semântica: Uso de forEach associado ao createElement e appendChild em vez de apenas strings puras, para melhor manipulação de nós do DOM.

🚀 Etapa 4: Ciclo de Navegação e Resiliência (UX Sênior)
Gerenciamento de Estado: Criação da função voltarHome(). Ensinar o aluno que uma SPA (Single Page Application) precisa saber "limpar a mesa" antes de servir o próximo prato.

Fallback de Imagem: Uso do evento onerror para garantir que o álbum nunca exiba um "ícone de imagem quebrada", mantendo o profissionalismo.

Scroll de Experiência: Uso de window.scrollTo para guiar o olhar do usuário após a ação de clique.

⚽ README.md (Versão Douglas Novato 2026)
🏆 Relíquia Amarela — Álbum Digital de Colecionador
Projeto de conclusão do Mês 1 (Nível Básico) da formação Fullstack na ByteClass.

O Relíquia Amarela é uma experiência interativa que celebra a história da Seleção Brasileira. Mais do que um site, é um motor de renderização dinâmica que transforma dados técnicos em uma galeria visual de craques.

🚀 Diferenciais Técnicos
Este projeto aplica conceitos que vão além do básico de HTML/CSS:

Navegação Single Page (SPA): A interface alterna entre a Home e os Álbuns sem nenhum recarregamento de página, utilizando manipulação cirúrgica do DOM.

Algoritmo de Normalização: Implementação de lógica para conversão de nomes reais em caminhos de ativos (assets), lidando com acentuação e espaços via RegEx e Normalização Unicode.

Design Adaptativo: Grid System que alterna entre proporções horizontais (banners) e verticais (cards de jogadores) conforme o contexto da aplicação.

🧠 Aprendizados ByteClass
Sob a mentoria do instrutor Douglas Novato, os pilares desenvolvidos foram:

Manipulação de DOM de Alto Nível: Criação de elementos em tempo real e gestão de eventos.

Tratamento de Erros em Runtime: Implementação de placeholders dinâmicos para falhas de carregamento de mídia.

Arquitetura de Dados: Organização de informações complexas em objetos aninhados para fácil manutenção.

🎨 Identidade Visual
Background: #0b0e14 (Foco total no conteúdo)

Cards: #fdfdfd (Textura de papel fotográfico)

Tipografia: Focada em legibilidade e estilo clássico de álbuns de banca de jornal.

🛠️ Instalação
Bash

# Clone o repositório

git clone https://github.com/[SEU-USUARIO]/reliquia-amarela.git

# Execute com Live Server para garantir o carregamento dos assets

Este projeto integra o ecossistema learnTECH e o Desafio Douglas 2026.
