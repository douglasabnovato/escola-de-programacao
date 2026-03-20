# 🎓 Roteiro de Aula — Mini Trello

## 🧭 Metodologia

**Jornada prática orientada por projeto**

Cada etapa representa uma aula ou bloco de aula, seguindo a estrutura:

1. Contexto
2. Construção guiada
3. Exercício prático
4. Extensão (desafio)

---

# 📍 Etapa 1 — Fundamento do Produto

## 🎯 Objetivo

Compreender o problema e a estrutura do sistema.

## 📚 Conteúdo

- Conceito de board (quadro)
- Listas (colunas)
- Cards (tarefas)
- Relação: **Board → Lists → Cards**

## 💻 Prática

- Criar estrutura HTML base:
  - Header
  - Board
  - Botão "Adicionar lista"

## ✅ Entrega

Tela estática inicial

---

# 📍 Etapa 2 — Layout e Estilização (CSS)

## 🎯 Objetivo

Construir a interface visual do sistema.

## 📚 Conteúdo

- Flexbox
- Layout horizontal
- Espaçamento (padding, margin, gap)

## 💻 Prática

- Estilizar:
  - Board (scroll horizontal)
  - Listas
  - Header moderno

## 💡 Conceito-chave

Interface é produto, não decoração

---

# 📍 Etapa 3 — Criação de Listas (DOM)

## 🎯 Objetivo

Manipular o DOM com JavaScript.

## 📚 Conteúdo

- `createElement`
- `appendChild`
- `addEventListener`

## 💻 Prática

- Criar função:

```js
createListElement();
```

Criar listas dinamicamente ao clicar no botão

🧪 Exercício
Impedir criação de listas vazias

# 📍 Etapa 4 — Criação de Cards

## 🎯 Objetivo

Reutilizar lógica e estruturar componentes.

## 📚 Conteúdo

- Funções reutilizáveis
- Estrutura interna das listas

## 💻 Prática

- Criar função:

```js
createCardElement();
```

Adicionar cards dentro das listas

🧪 Exercício
Limitar número de caracteres no card

# 📍 Etapa 5 — Edição de Conteúdo

## 🎯 Objetivo

Criar interação real de produto.

## 📚 Conteúdo

- Manipulação de `input` e `textarea`
- Eventos: `blur` e `keypress`

## 💻 Prática

- Editar:
  - Título da lista
  - Conteúdo do card

## 💡 Insight

Produto real precisa permitir edição rápida

---

# 📍 Etapa 6 — Drag and Drop

## 🎯 Objetivo

Implementar interação avançada.

## 📚 Conteúdo

- `dragstart`
- `dragover`
- `drop`
- `dragend`

## 💻 Prática

- Arrastar cards entre listas
- Reordenar cards

## 🧪 Exercício

Destacar visualmente o card sendo arrastado

---

# 📍 Etapa 7 — Organização de Código

## 🎯 Objetivo

Melhorar a qualidade do código.

## 📚 Conteúdo

- Separação de responsabilidades
- Nomeação de funções
- Estrutura de código

## 💻 Prática

Refatorar:

- Funções
- Variáveis
- Organização geral

---

# 📍 Etapa 8 — UX e Design

## 🎯 Objetivo

Aprimorar a experiência do usuário.

## 📚 Conteúdo

- Hierarquia visual
- Feedback de interação
- Microinterações

## 💻 Prática

Melhorar:

- Hover
- Animações
- Espaçamento
- Header

---

# 📍 Etapa 9 — Responsividade

## 🎯 Objetivo

Adaptar o sistema para diferentes telas.

## 📚 Conteúdo

- Mobile first
- Media queries
- Ajustes de layout

## 💻 Prática

Ajustar:

- Header
- Listas
- Interface geral

---

# 📍 Etapa 10 — Evolução do Projeto

## 🎯 Objetivo

Expandir funcionalidades.

## 💡 Sugestões

- LocalStorage (persistência)
- Exclusão de listas e cards
- Tema dark/light
- Contador de tarefas
- Labels

---

# 🧠 Estrutura Padrão das Aulas

## 🔁 Modelo

1. Contexto (5–10 min) → Por que isso existe no mundo real?
2. Construção guiada (20–40 min) → Instrutor desenvolve explicando
3. Exercício (15–25 min) → Aluno pratica sozinho
4. Extensão (desafio) → Aluno evolui a solução

---

# 🎯 Resultado Esperado

Ao final, o aluno será capaz de:

- Manipular o DOM com segurança
- Criar interfaces interativas
- Estruturar código front-end
- Pensar como desenvolvedor de produto

---

# 🚨 Boas Práticas

## ❌ Evitar

- Copiar código sem entender
- Passividade durante a aula
- Dependência de tutorial

## ✅ Incentivar

- Pensamento lógico
- Tentativa e erro
- Construção ativa

---

# 🚀 Próximos Passos

- Integração com backend
- Autenticação de usuários
- Deploy do projeto
- Evolução para SPA
