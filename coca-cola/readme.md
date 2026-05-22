# 🥤 Coca Vibes — Landing Page

Landing page de captura de leads para o **Copo Coca-Cola Gelado**, construída com HTML5, CSS3 e JavaScript puro. Zero dependências, zero frameworks — abre direto no navegador.

---

## 📁 Estrutura do projeto

```
coca-vibes/
└── index.html   ← arquivo único com HTML, CSS e JS embutidos
```

---

## 🧱 Estrutura do HTML

| Seção | Classe | Descrição |
|-------|--------|-----------|
| Cabeçalho | `.header` | Logo "Coca Vibes" + badge "Edição Gelada" |
| Conteúdo | `.main` | Título, subtítulo, imagem e formulário |
| Rodapé | `.footer` | Copyright centralizado |
| Formulário | `.form` | Campos nome, e-mail e WhatsApp |
| Card de sucesso | `.card-sucesso` | Mensagem exibida após envio |

---

## 🎨 Design

- **Fontes**: `Bebas Neue` (títulos) + `DM Sans` (corpo) — via Google Fonts
- **Cor principal**: `#F40009` (vermelho Coca-Cola)
- **Fundo**: `#FDF6EC` (creme suave)
- **Abordagem**: Mobile first, max-width 600px no conteúdo
- **Imagem**: Unsplash (substituível por qualquer URL)

---

## ⚙️ Comportamento do formulário (JavaScript puro)

1. Intercepta o `submit` com `e.preventDefault()` — sem reload
2. Lê e faz `.trim()` nos campos nome, e-mail e WhatsApp
3. Se algum campo vazio → `alert` de aviso
4. Se todos preenchidos → esconde `.form`, exibe `.card-sucesso` com fade-in
5. Mensagem personalizada: *"Valeu, [nome]! Te avisamos no WhatsApp quando seu copo gelado estiver pronto 🥤"*

---

## 🚀 Como usar

```bash
# Sem instalação. Só abrir no navegador:
open index.html
```

Ou arraste o arquivo para qualquer aba do Chrome/Firefox/Safari.

---

## 🔧 Personalizações comuns

| O que mudar | Onde no código |
|-------------|---------------|
| Nome da marca | `header__logo` + `<title>` |
| Cor principal | variável `--red` no `:root` |
| Imagem do produto | atributo `src` da `<img>` |
| Texto do botão | conteúdo do `<button class="form__btn">` |
| Mensagem de sucesso | string em `cardMsg.textContent` no JS |
| Adicionar campo | novo `.form__field` + variável no JS |

---

## 📐 Breakpoints

| Breakpoint | Comportamento |
|------------|--------------|
| `< 640px` | Mobile — padding menor, imagem 280px de altura |
| `≥ 640px` | Desktop — padding maior, imagem 360px de altura |

---

# 🥤 Coca Vibes — Relatório de Qualidade

> Análise técnica e de design da landing page, baseada na inspeção dos arquivos `index.html`, `style.css` e `script.js`, com referência ao site oficial da Coca-Cola Brasil.

---

## 📊 Pontuação Geral

| Dimensão | Nota | Status |
|----------|:----:|--------|
| HTML semântico | **9/10** | ✅ Ótimo |
| Organização CSS | **8/10** | ✅ Bom |
| Mobile-first | **7/10** | 🟡 Regular |
| JavaScript | **7/10** | 🟡 Regular |
| Impacto visual | **6/10** | 🟡 Regular |
| Validação de formulário | **6/10** | 🟡 Regular |
| Conversão (CRO) | **5/10** | 🔴 Fraco |
| Acessibilidade | **4/10** | 🔴 Fraco |

---

## 📐 Dimensões Detalhadas

### HTML — 9/10

A estrutura está próxima do ideal. Uso correto de `<header>`, `<main>` e `<footer>` semânticos, `novalidate` no form, `alt` na imagem, e `required` nos inputs. Os arquivos estão separados corretamente (`style.css` e `script.js` externos).

**Único ponto de atenção:** o `<link rel="stylesheet" href="./style.css">` aparece *antes* do Google Fonts. Invertendo a ordem, as fontes carregam primeiro e o CSS já as encontra na primeira pintura, evitando flash de fonte genérica.

---

### CSS — 8/10

CSS variables bem definidas no `:root`, reset global com `box-sizing: border-box`, nomenclatura BEM consistente (`.header__logo`, `.form__btn`), overlay na imagem com `::after` e `pointer-events: none`, e animação `fadeUp` no card de sucesso.

**Ponto de atenção:** o `@keyframes fadeUp` está declarado no elemento com `display: none`. A animação precisa ser ativada via JS ao mudar o display — do contrário, o navegador pode ignorá-la dependendo do motor de renderização.

---

### Mobile-first — 7/10

A base é mobile-first e o único breakpoint (`640px`) cobre a transição para tablet. Funciona bem, mas telas maiores (768px, 1024px+) ficam sem ajustes — o layout de coluna única desperdiça espaço em desktops.

---

### JavaScript — 7/10

`preventDefault` correto, `trim()` nos campos, mensagem personalizada com o nome. Código limpo e sem dependências.

**Dois pontos a melhorar:**
- A validação de e-mail é superficial (`if (!email)` aceita qualquer string). Um regex simples — `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` — já resolve.
- Não há estado de loading no botão. Desabilitar o elemento e trocar o texto para `"Enviando…"` durante o submit aumenta a percepção de qualidade.

---

### Impacto visual — 6/10

O design é funcional e coerente, mas o fundo `#FDF6EC` (creme claro) dilui o impacto da marca. O site oficial da Coca-Cola usa heroes com fundo escuro (preto ou vermelho profundo) e texto branco — contraste que passa energia imediata ao produto.

**Principais gaps visuais:**
- Sem hero fullscreen (imagem ocupa apenas parte da viewport)
- Sem cor de acento secundária (o site da Coca usa amarelo `#FFD700` em destaques e CTAs)
- Fundo claro reduz o impacto do vermelho `#F40009`

---

### Conversão (CRO) — 5/10

A estrutura básica de captura está correta, mas faltam os elementos que de fato aumentam conversão:

- **Sem social proof** — um contador tipo `"🔥 2.847 copos reservados"` logo abaixo do título reduz fricção
- **Sem urgência real** — o eyebrow `"Oferta limitada 🔥"` é genérico; uma contagem regressiva ou estoque limitado seria mais efetivo
- **Sem meta tags de compartilhamento** — sem `og:image` e `og:title`, o link não gera preview ao ser compartilhado no WhatsApp, que é o canal principal da LP

---

### Acessibilidade — 4/10

É a maior lacuna do projeto. Os inputs não têm `aria-label` (apenas `<label for="…">` que depende de foco para ser anunciado corretamente), o card de sucesso não tem `role="alert"` (leitores de tela não o anunciam ao aparecer), e não há `<title>` descritivo para a aba do navegador além do nome da marca.

---

## ✅ O que está bem

- `[OK]` Estrutura HTML semântica (`header`, `main`, `footer`)
- `[OK]` CSS variables no `:root` para cores e consistência
- `[OK]` Nomenclatura BEM nos seletores
- `[OK]` Sticky header com `z-index` e `box-shadow`
- `[OK]` Overlay com gradiente na imagem via `::after`
- `[OK]` Animação `fadeUp` no card de sucesso
- `[OK]` `preventDefault` no submit do formulário
- `[OK]` `trim()` nos campos antes de validar
- `[OK]` Arquivos separados (`index.html`, `style.css`, `script.js`)
- `[OK]` Fontes externas do Google Fonts com os pesos corretos

---

## ⚠️ O que precisa melhorar

- `[WARN]` Link do CSS antes das fontes no `<head>`
- `[WARN]` `@keyframes fadeUp` declarado em elemento `display: none`
- `[WARN]` Validação de e-mail aceita qualquer string
- `[WARN]` Sem máscara no campo WhatsApp
- `[WARN]` Sem estado de loading no botão de envio
- `[WARN]` Fundo creme reduz impacto visual da marca
- `[WARN]` Apenas 1 breakpoint — sem suporte a 768px e 1024px+
- `[ERROR]` Sem `aria-label` nos inputs
- `[ERROR]` Card de sucesso sem `role="alert"`
- `[ERROR]` Sem meta tags de compartilhamento (`og:title`, `og:image`, `og:description`)
- `[ERROR]` Sem social proof ou gatilho de urgência real
- `[ERROR]` Sem favicon
- `[ERROR]` Hero layout não ocupa a viewport

---

## 🗺️ Plano de Melhoria

As ações estão ordenadas por impacto e esforço. Siga a sequência para evoluir o projeto de forma incremental e testável.

---

### 🔴 Prioridade Alta

#### 1. Hero fullscreen com imagem de fundo

**Por que:** É a mudança de maior impacto visual. O site da Coca-Cola Brasil usa heroes que ocupam 100% da viewport com produto em destaque e texto sobreposto. A LP atual parece um formulário com imagem decorativa.

**O que fazer:**
- Transformar a `.main` em uma seção hero com `min-height: 100vh`
- Usar a imagem do copo como `background-image` com `background-size: cover`
- Mover o formulário para um card flutuante sobre a imagem
- Adicionar overlay escuro para legibilidade do texto

---

#### 2. Corrigir acessibilidade

**Por que:** Inputs sem `aria-label` são invisíveis para leitores de tela. O card de sucesso sem `role="alert"` não é anunciado ao aparecer.

**O que fazer:**
```html
<!-- Inputs -->
<input id="nome" aria-label="Seu nome completo" ... />
<input id="email" aria-label="Seu endereço de e-mail" ... />
<input id="whatsapp" aria-label="Seu número de WhatsApp" ... />

<!-- Card de sucesso -->
<div class="card-sucesso" id="cardSucesso" role="alert" aria-live="polite">
```

---

#### 3. Adicionar meta tags de compartilhamento

**Por que:** Sem `og:image`, o link não gera preview ao ser compartilhado no WhatsApp — canal principal para esse tipo de LP.

**O que fazer:**
```html
<meta name="description" content="Garanta seu Copo Coca-Cola Gelado. Cadastre seu nome e WhatsApp e receba o aviso quando estiver pronto." />
<meta property="og:title" content="Copo Coca-Cola Gelado | Coca Vibes" />
<meta property="og:description" content="Oferta limitada. Garanta o seu agora." />
<meta property="og:image" content="https://images.unsplash.com/photo-1554866585-cd94860890b7?w=1200" />
<meta property="og:url" content="https://seudominio.com" />
```

---

### 🟡 Prioridade Média

#### 4. Social proof — contador de reservas

**Por que:** Elementos de prova social reduzem a fricção de decisão. Ver que outras pessoas já reservaram valida a escolha.

**O que fazer:**
Adicionar abaixo do `h1`, antes do subtítulo:
```html
<p class="main__counter">🔥 <strong>2.847 copos</strong> já reservados esta semana</p>
```

---

#### 5. Validação de e-mail e máscara de WhatsApp

**Por que:** A validação atual aceita qualquer string no campo e-mail, gerando leads inválidos.

**O que fazer:**
```javascript
// Validação de e-mail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  alert('Digite um e-mail válido.');
  return;
}

// Máscara WhatsApp (no evento input)
document.getElementById('whatsapp').addEventListener('input', function (e) {
  let v = e.target.value.replace(/\D/g, '').slice(0, 11);
  if (v.length >= 7) v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
  else if (v.length >= 2) v = `(${v.slice(0,2)}) ${v.slice(2)}`;
  e.target.value = v;
});
```

---

#### 6. Estado de loading no botão

**Por que:** Sem feedback visual, o usuário não sabe se o clique funcionou — especialmente em dispositivos lentos.

**O que fazer:**
```javascript
const btn = document.querySelector('.form__btn');
btn.disabled = true;
btn.textContent = 'Enviando…';

// Restaurar se houver erro
btn.disabled = false;
btn.textContent = 'Quero meu copo 🥤';
```

---

### 🔵 Prioridade Baixa

#### 7. Cor de acento amarela (inspiração Coca-Cola)

Adicionar `#FFD700` no `.main__eyebrow`, no hover do botão e na borda do card de sucesso. Fica muito mais alinhado com a identidade visual do site oficial.

#### 8. Breakpoints adicionais (768px e 1024px)

Layout de 2 colunas em tablet: imagem à esquerda, formulário à direita. Aproveita melhor o espaço em desktops.

#### 9. Corrigir ordem dos links no `<head>`

Mover o `<link>` do Google Fonts para antes do `style.css`, garantindo que as fontes estejam disponíveis quando o CSS for processado.

#### 10. Corrigir animação `fadeUp`

Remover a animação do CSS estático e ativá-la via JS no momento em que o `display` muda:
```javascript
card.style.display = 'block';
card.style.animation = 'fadeUp .35s ease forwards';
```

#### 11. Favicon

Adicionar um favicon SVG simples no `<head>`:
```html
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🥤</text></svg>" />
```

---

## 📁 Estrutura atual do projeto

```
coca-vibes/
├── index.html    ← estrutura semântica
├── style.css     ← estilos com CSS variables
├── script.js     ← validação e interação do formulário
└── README.md     ← documentação
```

---

*Análise realizada com base no código fonte dos três arquivos e comparação com o site oficial `coca-cola.com/br/pt`. Última atualização: 2026.*