# 🎬 Aula 01 — Dando Vida ao HTML no SlideShow

- 📚 Nível: Básico — Fundamentos Visíveis 
- 🟢 1 - Navegador Não É Mágica: 
  - Compreensão técnica de como o browser processa códigos HTML, CSS e JavaScript para renderizar a interface final. 
- 🎯 Tema central: O navegador interpreta, constrói, estiliza e executa.
- 📅 08 de Julho de 2025

## 🎯 Objetivo da Aula

O aluno deve sair entendendo:

  - O que o navegador faz ao abrir um arquivo HTML 
  - Como HTML, CSS e JS são interpretados 
  - Como o DOM é criado 
  - Como o JavaScript altera a interface 
  - Que nada é “mágica” — é processamento
 
### 🧠 Abertura da Aula (5 min)

#### 🎙 Fala

Hoje você vai entender algo que separa curioso de desenvolvedor.
Quando você abre um arquivo HTML… o que realmente acontece?

O navegador não “executa um site”.
Ele lê texto.
Interpreta.
Constrói uma árvore.
Aplica estilo.
Depois executa JavaScript.

Hoje você vai enxergar isso acontecendo.


### 🏗 Parte 1 — Estrutura HTML (Construindo o esqueleto)

#### 🎙 Fala

Primeiro passo: o navegador lê o HTML de cima para baixo.
Ele constrói o DOM — Document Object Model.

Vamos começar só com a estrutura.

#### 💻 Código que você escreve

````html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>SlideShow </title>
</head>
<body>

  <h1>Meu Primeiro SlideShow</h1>

</body>
</html>
````

#### 🧠 Checkpoint 1

##### 🎙 Pergunte:

O que acontece se eu apagar o DOCTYPE?
O navegador precisa “compilar” isso?

##### 🎙 Explique:

HTML não é compilado.
Ele é interpretado.

### 🎨 Parte 2 — Inserindo Estrutura do Slide

#### 🎙 Fala

Agora vamos criar a estrutura visual.
Ainda não existe comportamento.
Só estrutura.

#### 💻 Código que você escreve

````html
<div class="slideshow-container">

  <div class="mySlides">
    <img src="img1.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <img src="img2.jpg" style="width:100%">
  </div>

</div>
````

#### 🧠 Checkpoint 2

##### 🎙 Pergunte:

O navegador já sabe que isso é um slideshow?
Existe alguma “inteligência” aqui?

##### 🎙 Conclusão:

Não.
Isso é apenas estrutura.

### 🎨 Parte 3 — O CSS Entra em Ação

#### 🎙 Fala

Agora o navegador termina de ler o HTML…
e aplica o CSS.

Ele cruza seletores com os elementos da árvore DOM.

#### 💻 Código que você escreve

````html
<style>
.mySlides {
  display: none;
}

.slideshow-container {
  max-width: 800px;
  margin: auto;
}
</style>
````

#### 🧠 Checkpoint 3

##### 🎙 Pergunte:

Por que as imagens sumiram?

##### 🎙 Explique:

Porque CSS controla renderização.
display: none remove da renderização visual.

### ⚙️ Parte 4 — JavaScript Entra em Cena

#### 🎙 Fala

Agora começa o que as pessoas chamam de “mágica”.

O navegador terminou de montar o DOM.
Agora ele executa o JavaScript.

#### 💻 Código que você escreve

````html
<script>
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[n - 1].style.display = "block";
}
</script>
````

#### 🧠 Checkpoint 4

##### 🎙 Pergunte:

O que é document?

O que getElementsByClassName retorna?

Isso é HTML ou é JavaScript manipulando o DOM?

##### 🎙 Explique:

O JavaScript não altera o HTML original.
Ele altera o DOM em memória.

### 🔁 Parte 5 — Interação do Usuário

#### 🎙 Fala

Agora vamos permitir interação.
O navegador também escuta eventos.

#### 💻 Código que você escreve

Adicionar botão:

````html
<button onclick="showSlides(2)">Ir para Slide 2</button>
````

#### 🧠 Checkpoint 5

##### 🎙 Pergunte:

O que é onclick?

Quem dispara esse evento?

Isso roda no servidor?

##### 🎙 Resposta que você conduz:

Não.
Tudo isso roda no navegador.

#### 🧠 Momento Mentalidade  

##### 🎙 Explique claramente:

O fluxo real é:

1. Navegador lê HTML
2. Constrói DOM
3. Aplica CSS
4. Executa JavaScript
5. Atualiza renderização

Nada é mágico.
É sequência de processamento. 

#### 🎯 Exercício Guiado (10 min)

Peça para o aluno:

1. Adicionar um terceiro slide
2. Criar botão para voltar
3. Alterar texto do h1 via JavaScript

#### 🧪 Desafio Pós-Aula

Desafio:

1. Fazer o slide avançar automaticamente a cada 3 segundos
2. Usar setInterval

#### 📌 Encerramento

##### 🎙 Fala Final

Hoje você entendeu que:

O navegador é uma máquina de interpretar texto.

HTML estrutura.
CSS estiliza.
JavaScript controla comportamento.

Se você entende isso…
você não programa copiando.
Você programa entendendo.

#### 🏆 Resultado Pedagógico da Aula

Ao final o aluno:

✔ Entende DOM
✔ Entende renderização
✔ Entende fluxo do browser
✔ Vê JavaScript manipulando interface
✔ Perde a ilusão da “mágica”