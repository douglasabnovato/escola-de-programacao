# 🎬 Aula: ByteGallery — Conectando ao Mundo via API

- 📚 **Nível:** Iniciante — Construindo Interfaces Reais
- 🟢 **Conceito Chave:** O Fluxo Requisição → Resposta → Renderização
- 🎯 **Tema Central:** Consumo de API com `fetch` e Grid Dinâmica.
- 📅 **Data:** 17 de Março de 2026

---

## 🎯 Objetivo Cognitivo

Ao final desta aula, o aluno será capaz de:

1. Explicar o que é uma API e como ela entrega dados (JSON).
2. Utilizar `fetch()` com `async/await` para buscar dados externos.
3. Criar elementos HTML dinamicamente no DOM a partir de uma lista de dados.

---

## 🧠 1. Problema Inicial (Ativação Mental) — 3 min

#### 🎙 Fala do Professor

> "Pessoal, imaginem o seguinte: vocês construíram o site da transportadora. Mas toda vez que um caminhão novo chega na frota, vocês precisam abrir o HTML e digitar o nome dele na mão. Isso escala? Não.
>
> Como o site do Instagram mostra fotos novas sem você atualizar o aplicativo? Os dados não estão no código; eles vêm de fora. Hoje, vamos aprender a 'abrir o portão' do nosso site para receber cargas de dados externos."

---

## 🏗 2. Fundamento (Clareza Antes do Código) — 8 min

#### 🎙 Fala do Professor

> "Antes de digitar, entendam o mapa:
>
> 1. **O Pedido (Fetch):** É o nosso caminhão indo buscar a carga.
> 2. **A Espera (Await):** A estrada leva tempo. Não podemos descarregar algo que ainda não chegou.
> 3. **O Manifesto (JSON):** É o formato do documento que a API nos entrega.
> 4. **A Entrega (DOM):** É quando pegamos o papel e montamos as prateleiras na tela."

---

## 💻 3. Construção Guiada (Com Pensamento Explícito) — 15 min

### Etapa 1: O Endereço da Carga

#### 🎙 Fala

"Primeiro, definimos para onde o nosso caminhão vai. Usaremos uma URL que simula dados de fotos."

#### ⌨️ Código

```javascript
const API_URL =
  "[https://jsonplaceholder.typicode.com/photos?_limit=12](https://jsonplaceholder.typicode.com/photos?_limit=12)";
const galleryContainer = document.getElementById("gallery");
```

---

### Etapa 2: A Requisição Assíncrona

#### 🎙 Fala

"Vou criar uma função `async`. Por quê? Porque buscar dados na rede não é instantâneo. O `await` diz ao JavaScript: 'Espere a carga chegar antes de seguir'."

#### ⌨️ Código

```javascript
async function fetchImages() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json(); // Transforma o texto em objeto JS

    renderGallery(data);
  } catch (error) {
    console.error("Carga extraviada:", error);
  }
}
```

#### 🧠 Pensamento Explícito

> "Usei o `try/catch` porque a internet falha. Se o servidor cair, eu preciso avisar o usuário, em vez de deixar a tela branca."

---

### Etapa 3: Renderizando a Grid Dinâmica

#### 🎙 Fala

"Agora que temos o `data` (nosso array), vamos usar o `forEach`. Para cada item que veio da API, vamos fabricar um Card de imagem."

#### ⌨️ Código

```javascript
function renderGallery(items) {
  galleryContainer.innerHTML = ""; // Limpa o carregamento

  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
            <img src="[https://picsum.photos/id/$](https://picsum.photos/id/$){item.id}/400/300" alt="Ativo Logístico">
            <div class="card-content">
                <span class="category-badge">Logística</span>
                <h3 class="card-title">${item.title.substring(0, 20)}...</h3>
            </div>
        `;
    galleryContainer.appendChild(card);
  });
}

fetchImages(); // Inicia a operação
```

---

## 🔍 4. Consolidação Técnica (Perguntas Estratégicas)

1. **O que acontece se eu esquecer o `await`?**
   - (Resposta esperada: O código tenta ler a carga antes dela chegar, gerando um erro de 'Promise pending').
2. **Por que limpamos o `innerHTML` antes do loop?**
   - (Resposta esperada: Para remover a mensagem de 'Carregando' e não duplicar itens se a função rodar de novo).

---

## ⚠️ 5. Pontos de Atenção (Erro Comum)

- **CORS:** Explique que algumas APIs barram o acesso se você não tiver permissão.
- **JSON:** Lembre que `response` é o pacote fechado; `response.json()` é abrir o pacote.

---

## 🎯 6. Exercício Imediato (10 min)

**Tarefa:** Altere o código para que o título de cada card apareça em letras MAIÚSCULAS usando JavaScript (`.toUpperCase()`).

---

## 🚀 7. Desafio de Projeto (Para Casa)

1. Adicione um campo de busca (input) no Header.
2. Quando o usuário digitar, filtre a galeria para mostrar apenas os cards que contêm aquele texto no título.
3. **Entrega:** Link do GitHub com README explicando o fluxo da API.

---

**Instrutor:** Douglas Novato
**Escola:** ByteClass — 2026
