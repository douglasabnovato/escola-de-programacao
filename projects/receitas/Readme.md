<h4 align="center"> 
	🚧 Receita 🚀
</h4>

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="versão 1 do projeto" title="#receita" src="./.github/tela-1.jpg">
</p>  

### 💻 Sobre o desafio

Nesse desafio você deverá criar uma página web de uma receita com título, imagem, lista de ingredientes e modo de preparo. O desafio está dividido em duas partes, no primeiro momento você irá criar a estrutura HTML com as informações da receita e na segunda parte será o momento de adicionar os estilos à página com o CSS.

#### 💻 Techs

- Nível de dificuldade: Iniciante
- Tecnologias: html, css

#### 💻 Como começar?

1 - Use o link do [Notion](https://efficient-sloth-d85.notion.site/1-Criando-a-estrutura-HTML-a73054c07efa45cc9e7449c6ebf5e046) como base para o projeto. Também disponibilizamos para download todos os assets necessários (imagens e ícones), para fazer o download basta clicar no link acima.  

2 - Leia com atenção todas as instruções do desafio.

3 - Bora codar! Lembre-se que você pode usar as tecnologias que se sentir mais confortável, mas também pode se desafiar usando novas techs, fazendo modificações e/ou adicionando funcionalidades no projeto como preferir. 🚀

4 - Compartilhe seu resultado ou tire suas dúvidas na nossa [**comunidade aberta**](https://discord.gg/bacwY2gDCF)

### 💡 Conteúdos Aplicados

Nesse desafio você deverá criar uma página web de uma receita com título, imagem, lista de ingredientes e modo de preparo.
O desafio está dividido em duas partes, no primeiro momento você irá criar a estrutura HTML com as informações da receita e na segunda parte será o momento de adicionar os estilos à página com o CSS.

#### 💡 [Guia Estelar de HTML](https://app.rocketseat.com.br/discover/course/o-guia-estelar-de-html)
O conteúdo esclarece plugin de preview HTML, tags, atributos, semântica, listas, abreviações, listas, representação de código, URLs, diretórios, tabelas, THead, TBody, colgroup, cabeçalho, meta, favicon, meta SEO e meta social.

#### 💡 [Guia Estelar de CSS](https://app.rocketseat.com.br/discover/course/o-guia-estelar-de-css)
O conteúdo aborda anatomia, seletores, box model, cascata, especificidade, shorthand, funções, devTools e vender prefixes.

#### 💡 [Posso ver e ouvir o HTML](https://app.rocketseat.com.br/discover/course/posso-ver-e-ouvir-o-html?&) 

#### 💡 [HTML que faz sentido, para todos](https://app.rocketseat.com.br/discover/course/html-que-faz-sentido-para-todos?&) 

### 🚀 [Requisitos do projeto](https://efficient-sloth-d85.notion.site/Desafio-Piloto-P-gina-de-Receita-15acc6a34f744484a2e64a1f115bfbae)

#### 🚀 Requisitos para o desafio 

- [x] 1. Criando a estrutura HTML.
- [x] 2. Adicionando os estilos com CSS.
 
### 🎨 Style Guide

#### 🎨 1. Criando a estrutura HTML.

Nesse desafio você vai construir a estrutura HTML da página de receita. Para isso, é necessário conhecer o básico de HTML, caso você ainda não tenha feito os cursos do Discover ou queira fazer uma revisão, segue abaixo uma lista dos cursos que podem te ajudar a resolver esse desafio.

- [O guia estelar de HTML](https://app.rocketseat.com.br/node/o-guia-estelar-de-html): "HTML é a base de qualquer website ou aplicação web."

- [Posso ver e ouvir o HTML - Imagens](https://app.rocketseat.com.br/node/posso-ver-e-ouvir-o-html/group/images/lesson/images): "Existem muitos elementos de media no HTML incluindo áudio, imagens e vídeo."

- [HTML Semântico (header, section, footer)](https://app.rocketseat.com.br/node/html-que-faz-sentido-para-todos): "Entenda a semântica dos elementos e acessibilidade do HTML."

##### 🎨 Como deve ficar a página ao final?

Ao finalizar o desafio você vai ter um resultado parecido com o da imagem abaixo. 

Lembrando que as imagens e textos abaixo são ilustrativos e você pode adicionar seu próprio conteúdo conforme as instruções acima.

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="versão 1 do projeto" title="#receita" src="./.github/receita-html.png" width="400px">
</p>  

Bora lá?

##### 🎨 Iniciando o projeto

Para iniciar o projeto devemos criar a estrutura HTML base. Você deve iniciar **criando a pasta** onde vai colocar os arquivos do projeto e dentro dela você já pode criar o arquivo **index.html** que é onde vamos escreve o HTML da página da receita.

Para criar a estrutura base do HTML no Visual Studio Code, você pode digitar `!` e `TAB` em seguida. Feito isso, você vai ficar com uma estrutura parecida com o código abaixo:

````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>

  </body>
</html>
````

##### 🎨 Construindo a estrutura HTML da página

Nessa seção você vai encontrar as instruções e dicas para resolver o desafio.

Então, bora codar! 👨‍💻👩‍💻

- A receita deve ter um título, para isso você pode usar uma das tags de heading (h1, h2, h3, h4, h5, h6). Você deve escolher a tag que faz mais sentido como título principal da página. 

- A receita deve ter uma **imagem** ilustrativa.
    - Adicione também uma **legenda** para a imagem.
    - Para adicionar uma legenda na imagem você pode usar as tags figure e figcaption como no exemplo abaixo:
````html
    <figure>
        <img src="https://unsplash.com/photos/dEUyLofZe5o" alt="Texto descritivo da imagem" />
        <figcaption>Adicionar aqui a legenda da imagem</figcaption>
    </figure>
````
- Sites onde você pode encontrar imagens grátis para usar nos seus projetos: Unsplash, Pexels, Pixabay.

- Cada lista deve ter um **subtítulo** (`Ingredientes` e `Modo de preparo`) .
- Os ingredientes devem ser apresentados como uma **lista não ordenada** `<ul>`.
- O modo de preparo deve ser apresentado como uma **lista ordenada** `<ol>`.
- Deve ter uma seção `Informações adicionais` com um **parágrafo** com a **descrição da receita.**
- No final da receita deve ter um **rodapé** com seus créditos.
    - Pode direcionar o **link** para seu repositório do Github. (opcional)

#### 🎨 2. Adicionando os estilos com CSS

Nessa parte do desafio você vai adicionar os estilos da página. Para isso, é necessário conhecer o básico de CSS, caso você ainda não tenha feito os cursos do Discover ou queira fazer uma revisão, segue abaixo uma lista dos cursos que podem te ajudar a resolver esse desafio.

- [O guia estelar de CSS](https://app.rocketseat.com.br/node/o-guia-estelar-de-css): "Nenhuma aplicação web vive sem CSS"

##### 🎨 Layout da página

Ao finalizar o desafio você vai ter um resultado parecido com o da imagem abaixo.  

Os estilos usados nesse desafio são bem simples, e lembrando que as imagens e textos abaixo são ilustrativos e você pode adicionar seu próprio CSS como preferir.

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="versão 1 do projeto" title="#receita" src="./.github/receita-html-2.png" width="400px">
</p>  

##### 🎨 Importando styles.css

Agora você deve criar o arquivo styles.css que é onde vamos adicionar todo o CSS da página. Depois de criado, você deve importar o arquivo no HTML usando a tag <link> dentro da tag <head>.

````html
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="styles.css" /> 
  </head>
````

##### 🎨 Fazendo o reset do CSS

Por padrão o navegador pode adicionar alguns estilos, então para fazer o reset desses estilos podemos adicionar o código abaixo:

````css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
````

Se você ficou com dúvida sobre o trecho de código acima, no curso do Discover "[Uma caixa dentro da outra](https://app.rocketseat.com.br/node/uma-caixa-dentro-da-outra)" tem várias dicas que podem te ajudar.

##### 🎨 Cores 

As cores usada no exemplo são as seguintes:

- Background da página: `#EAEAEA`;
- Background da receita: `#FFFFFF`;
- Títulos e subtítulos: `#1B1B1B`;
- Footer e legenda da imagem: `#8F8F8F`;
- Outros textos: `#39393A`;

Para ver mais sobre como trabalhar com [cores no CSS](https://app.rocketseat.com.br/node/agora-sim-cores)

##### 🎨 Tipografia

A font usada foi a **Roboto** que pode ser encontrada no site do [Google Fonts](https://fonts.google.com/).

Para usar essa font adicione o código abaixo dentro da tag `<head>` do HTML.

Para esse desafio estamos usando um **font-weight** de 400 para os textos e 700 para os título e subtítulos.

````html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
   href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
   rel="stylesheet"
/>
````

No CSS basta adicionar a propriedade font-family: 'Roboto', sans-serif; ao body, assim a font será aplicada para todos os elementos da página.

````css
body {
  background: #eaeaea;
  font-family: 'Roboto', sans-serif;
}
````
 
Você pode usar os tamanhos de font abaixo como referência:

- Título: `28px`;
- Subtítulos: `20px`;
- Listas e parágrafo(s): `16px`;
- Footer e legenda da imagem: `12px`;
 
💡 Para usar a unidade de medida `rem` no lugar de `px`, basta dividir o valor em px por 16.
**Exemplo:** 28 / 16 = 1.75rem

💡 16 é o [tamanho de fonte padrão](https://app.rocketseat.com.br/node/nem-tudo-sao-pixels/lesson/distancias-absolutas-e-relativas) usado pela maioria dos navegadores. Se modificar o tamanho da font pelo elemento root ou html você deve dividir pelo valor alterado.
Lembrando também que deve ser usado **ponto** e não vírgula. 
 
💡 Para ver mais sobre como [trabalhar com textos nos CSS](https://app.rocketseat.com.br/node/app-bonito-ate-nos-textos)

##### 🎨 Adicionando outros estilos a lista de ingredientes e modo de preparo

No exemplo acima foi usado a propriedade line-height nas listas de ingredientes e modo de preparo. O valor usado foi de 26px.

Nessa aula você pode ver mais sobre a [propriedade line-height](https://app.rocketseat.com.br/node/app-bonito-ate-nos-textos/group/mais-estilos-para-os-textos/lesson/line-height-e-text-transform)

Para mudar o posicionamento dos boolets das listas, você pode usar a propriedade list-style-position. Os valores aceitos são: inside | outside. [Documentação](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position)

##### 🎨 Como alinhar elementos ao centro da página?

Existem diversas opções para alinhar elementos ao centro da página, algumas formas simples que podemos usar em alguns casos como o desse desafio, são:

- Para alinhar textos e muitas vezes alguns outros elementos podemos usar  a propriedade text-align: center; , essa propriedade também aceita os valores start | end | left | right | center | justify | match-parent, então já fica aí a dica de como alinhar a legenda da imagem a direita (right). 😉

Nessa aula você pode ver mais sobre a [propriedade text-align](https://app.rocketseat.com.br/node/app-bonito-ate-nos-textos/group/mais-estilos-para-os-textos/lesson/text-align)

- Para alinhar outros tipos de elementos você pode tentar usar a propriedade margin: 0 auto;, por exemplo. Você pode adicionar qualquer valor de top e bottom, o importante é deixar como autoos valores de left e right. Também é importante lembrar que o width do elemento deve ser menor do que o da página para que seja possível visualizar o alinhamento ao centro.

````css
.recipe-container {
  background: white;
  width: 70%;
  margin: 40px auto;
  padding: 30px;
  border-radius: 10px;
}
````

Em alguns outro desafios iremos ver outras formas de alinhar elementos como CSS Flexbox e CSS Grid, por exemplo.

##### 🎨 Estilizando a imagem

A imagem do layout acima tem uma largura(width) de 100% e altura(height) de 250px. Você pode usar essas medida para ajustar o tamanho da imagem.

💡 Caso a imagem fique distorcida, você pode usar a propriedade `object-fit` e testar/escolher o valor(value) que melhor ajusta a imagem.
Os valores aceitos são: fill | contain | cover | none | scale-down
Documentação: [https://developer.mozilla.org/pt-BR/docs/Web/CSS/object-fit](https://developer.mozilla.org/pt-BR/docs/Web/CSS/object-fit)


Para deixar as bordas arredondadas basta adicionar a propriedade `border-radius`, no layout do desafio todos os border-radius desse desafio são de 10px. Lembrando que você pode usar [essa dica](https://www.notion.so/2-Adicionando-os-estilos-com-CSS-f0797e51911e453eabdc99634a0356a0) para converter px para rem, se preferir.

````html
<figure class="recipe-image">
    <img
       src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80"
       alt="Foto Waffle"
     />
     <figcaption>Receita de waffle clássico</figcaption>
</figure>
````

````css
.recipe-image {
  text-align: right;
  font-size: 12px;
  color: #8f8f8f;
}

.recipe-image img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 5px;
}
````

##### 🎨 E quanto aos espaçamentos?

Nesse primeiro momento você pode analisar a imagem e adicionar valores de margin e ou padding aproximados. Isso vai te treinar a analisar o layout e definir qual elemento fica melhor para adicionar essas propriedades. Não precisa se preocupar com valores exatos por enquanto. Em próximos desafios você vai poder praticar outras formas de analisar o layout de um projeto.

### 📅 Entrega

Após concluí-los, adicionar esses códigos ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

#### 📅 Tarefas

- [x] Organizando os detalhes do projeto no readme.md
- [x] Uma branch main e uma developer
- [x] Favicon
- [ ] [Learn Responsive Design](https://web.dev/learn/design/)
- [ ] [Learn CSS](https://web.dev/learn/css/)

#### 📅 Telas

- Desktop

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="versão 1 do projeto" title="#receita" src="./.github/tela-1.jpg" width="400px">
</p>

Feito com ❤️ por Douglas A B Novato. 👋🏽 [Entre em contato!](https://www.linkedin.com/in/douglasabnovato/)
 
Fonte do projeto na [Rocketseat](https://www.rocketseat.com.br/). 👋 Participe da [comunidade aberta](https://discord.gg/bacwY2gDCF)!
