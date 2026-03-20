# Mini Trello

Aplicação web inspirada no Trello, desenvolvida com foco em **organização visual de tarefas**, **experiência do usuário** e **arquitetura front-end pura (HTML, CSS e JavaScript)**.

Este projeto foi construído como parte de uma **jornada prática orientada por projeto**, simulando o desenvolvimento de um produto real desde a interface até o comportamento interativo.

---

## 🎯 Objetivo do Projeto

O Mini Trello foi criado para:

* Praticar conceitos fundamentais de front-end
* Trabalhar manipulação de DOM de forma estruturada
* Implementar interações reais (drag and drop)
* Desenvolver pensamento de produto (UX + UI)
* Servir como base didática para ensino de programação

---

## 🚀 Funcionalidades

* ✅ Criação de listas (colunas)
* ✅ Criação de cartões (tarefas)
* ✅ Edição de títulos (listas e cartões)
* ✅ Drag and Drop de cartões entre listas
* ✅ Reordenação de cartões dentro da mesma lista
* ✅ Interface responsiva
* ✅ Header moderno com identidade visual
* ✅ Animações leves e feedback visual

---

## 🧠 Conceitos Aplicados

### Front-end

* Manipulação de DOM
* Eventos (click, blur, keypress, drag events)
* Estruturação sem frameworks
* Componentização via funções JS

### UX/UI

* Hierarquia visual
* Feedback de interação
* Microinterações (hover, animações)
* Layout inspirado em ferramentas reais

### Engenharia

* Separação de responsabilidades
* Identificação única de elementos (IDs)
* Estrutura modular de funções
* Código escalável para evolução futura

---

## 🗂️ Estrutura de Pastas

```
mini-trello/
│
├── index.html
├── README.md
│
└── src/
    └── assets/
        ├── css/
        │   └── style.css
        │
        └── js/
            └── script.js
```

---

## 🖥️ Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/mini-trello.git
```

2. Acesse a pasta:

```bash
cd mini-trello
```

3. Abra o arquivo `index.html` no navegador

---

## 🧩 Arquitetura do Código

O projeto segue uma abordagem simples e eficiente:

* `index.html` → Estrutura da aplicação
* `style.css` → Estilização e responsividade
* `script.js` → Lógica e interatividade

### Principais funções:

* `createListElement()` → cria listas
* `createCardElement()` → cria cartões
* `generateUniqueId()` → gera identificadores únicos
* `getDragAfterElement()` → lógica de posicionamento no drag

---

## 🎨 Design e Experiência

O projeto foi pensado com foco em:

* Simplicidade visual
* Clareza de uso
* Redução de fricção
* Interface limpa (sem distrações no header)
* Feedback imediato nas ações do usuário

---

## 📱 Responsividade

* Layout adaptável para desktop e mobile
* Ajustes de tipografia e espaçamento
* Organização vertical em telas menores

---

## 🧪 Possíveis Evoluções

* Persistência com LocalStorage
* Integração com API (backend)
* Autenticação de usuário
* Tema dark/light
* Edição avançada de cartões
* Labels e prioridades
* Filtros e busca

---

## 🎓 Uso Educacional

Este projeto é ideal para:

* Aulas de front-end básico/intermediário
* Introdução a aplicações interativas
* Ensino de lógica com DOM
* Projetos guiados em escolas de programação

---

## 💡 Aprendizados

Durante o desenvolvimento, foram trabalhados:

* Pensamento orientado a produto
* Estruturação de código front-end
* Controle de estado via DOM
* Experiência do usuário aplicada

---

## 📌 Conclusão

O Mini Trello não é apenas um exercício técnico, mas um passo na construção de aplicações reais, combinando **design, engenharia e experiência do usuário**.

---

## 👨‍💻 Autor

Desenvolvido por Douglas
Projeto com foco em aprendizado, prática e evolução contínua.
