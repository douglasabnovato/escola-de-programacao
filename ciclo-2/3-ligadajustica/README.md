🎓 Roteiro de Aula: Masterclass Liga da Justiça (Fullstack Mindset)
Duração estimada: 3 horas
Requisito: Conhecimento básico de tags HTML e seletores CSS.

1. Introdução: O Problema da Repetição (15 min)
   Desafio: "Se quisermos criar uma página para cada um dos 10 heróis, precisaríamos de 10 arquivos HTML?"

Conceito: Apresentar a ideia de Single Page Application (SPA) simplificada.

Objetivo: Criar um "esqueleto" único que se transforma conforme o clique do usuário.

2. O Esqueleto Semântico (30 min)
   Hands-on: Montagem do index.html.

Ponto Chave: O uso de data-attributes (ex: data-hero="Batman").

Explicação: Ensinar que o HTML guarda a intenção (quem é o herói), enquanto o JS executa a ação.

3. Design de Cinema com CSS (45 min)
   Layout: Diferença entre position: absolute (para o fundo de cinema) e position: relative (para o texto).

Efeitos Especiais: \* Glassmorphism: Como o backdrop-filter: blur() cria a sensação de vidro no menu.

Ken Burns Effect: Criar a animação de @keyframes que faz o zoom lento na imagem de fundo.

Desafio de UX: Implementar o menu que "esconde" no desktop, mas vira uma barra inferior no mobile (Responsividade).

4. JavaScript: O Cérebro do Projeto (60 min)
   Divida esta parte em três grandes blocos lógicos:

A. O Objeto de Dados (The Data Store)
Mostrar como organizar as 25 imagens dentro de um objeto {}.

Por que? Facilidade de manutenção. "Se o Superman mudar de imagem, mudo em um lugar só".

B. Manipulação de DOM e Template Literals
Ensinar a usar as Backticks (`) para criar HTML dinâmico dentro do content.innerHTML.

Looping com .map(): Como gerar os "pontinhos" (dots) do carrossel automaticamente baseando-se no número de imagens que o herói tem.

C. Lógica de Tempo (setInterval)
Explicar o ciclo de vida do carrossel: Limpar o intervalo antigo (clearInterval) antes de começar um novo para evitar conflitos de memória.

5. Debugging e Console (15 min)
   Como identificar o erro Uncaught ReferenceError (que você viu anteriormente).

Ensinar os alunos a lerem o erro no Chrome DevTools e rastrearem a linha exata no VS Code.

6. Encerramento e Desafio Extra (15 min)
   Desafio para Casa: "Adicione um atributo cor no objeto de cada herói e faça o botão de destaque (--primary-gold) mudar de cor para combinar com o herói selecionado (ex: Verde para o Arqueiro, Vermelho para o Flash)."

💡 Dica para o Instrutor (Douglas)
Durante a aula, destaque que este projeto usa a mesma lógica de grandes plataformas como Netflix ou Disney+: Um container fixo onde apenas os dados (filmes/heróis) são trocados dinamicamente. Isso eleva a percepção de valor dos alunos sobre o que estão construindo.
