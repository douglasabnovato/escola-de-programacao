/**
 * PROJECT: Mini Kanban - Edition
 * FEATURE: Advanced UX & Task Management
 * AUTHOR: byteclass Instructional Team
 */

// 1. CONFIGURAÇÕES GLOBAIS DE INTERFACE
const UI_CONFIG = {
  animationDuration: 300,
  confirmDelete: true,
  storageKey: "@devflow:tasks",
};

// 2. ENTRADA DE DADOS (UX MODERNA)
window.showInput = function (element) {
  const column = element.closest(".column");
  if (!column || column.querySelector(".task-input")) return;

  const input = document.createElement("input");
  input.type = "text";
  input.className = "task-input";
  input.placeholder = "O que precisa ser feito?";

  // Insere o input antes do botão "Adicionar"
  column.insertBefore(input, element);
  input.focus();

  // Listener para concluir a criação
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const taskText = input.value.trim();
      if (taskText !== "") {
        addCard(column, taskText);
      }
      input.remove();
    }
  });

  // Remove se o usuário clicar fora sem digitar
  input.addEventListener("blur", () => {
    if (input.value.trim() === "") input.remove();
  });
};

// 3. CORE: CRIAÇÃO DE CARDS
function addCard(targetColumn, text) {
  const targetList = targetColumn.querySelector(".task-list");
  if (!targetList) return;

  const id = `task-${Date.now()}`;
  const card = document.createElement("li");
  card.id = id;
  card.className = "task-card";
  card.draggable = true;

  // Estado inicial para animação de entrada (UX)
  card.style.opacity = "0";
  card.style.transform = "translateY(10px)";

  card.innerHTML = `
        <p>${text}</p>
        <span class="remove-btn" onclick="removeCard('${id}')">
            <i class="fas fa-trash-alt"></i>
        </span>
    `;

  // Eventos de Drag registrados via código
  card.addEventListener("dragstart", window.handleDragStart);
  card.addEventListener("dragend", window.handleDragEnd);

  targetList.appendChild(card);

  // Trigger da animação de entrada
  requestAnimationFrame(() => {
    card.style.transition = `all ${UI_CONFIG.animationDuration}ms ease`;
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  });

  updateCounters();
}

// 4. CRUD: REMOÇÃO
window.removeCard = function (id) {
  const card = document.getElementById(id);
  if (!card) return;

  const shouldDelete = UI_CONFIG.confirmDelete
    ? confirm("Deseja arquivar esta tarefa?")
    : true;

  if (shouldDelete) {
    card.style.opacity = "0";
    card.style.transform = "scale(0.8)";

    setTimeout(() => {
      card.remove();
      updateCounters();
    }, UI_CONFIG.animationDuration);
  }
};

// 5. DRAG & DROP ENGINE (UX SENIOR)
window.handleDragStart = function (event) {
  event.dataTransfer.setData("textId", event.target.id);
  event.target.classList.add("dragging");
};

window.handleDragEnd = function (event) {
  event.target.classList.remove("dragging");
};

window.allowDrop = function (event) {
  event.preventDefault();
  const list = event.target.closest(".task-list");
  if (list) list.classList.add("drag-over");
};

window.drop = function (event) {
  event.preventDefault();

  // Limpa efeitos visuais
  document
    .querySelectorAll(".task-list")
    .forEach((l) => l.classList.remove("drag-over"));

  const cardId = event.dataTransfer.getData("textId");
  const card = document.getElementById(cardId);

  // Encontra a lista alvo correta (evita aninhamento de cards)
  const targetList = event.target.closest(".task-list");

  if (card && targetList) {
    targetList.appendChild(card);
    updateCounters();

    // Feedback visual de sucesso no drop
    card.style.animation = "dropPulse 0.4s ease";
  }
};

// 6. HELPER: CONTADORES DINÂMICOS
function updateCounters() {
  const columns = {
    todo: "count-todo",
    doing: "count-doing",
    done: "count-done",
  };

  Object.entries(columns).forEach(([listId, spanId]) => {
    const list = document.getElementById(listId);
    const counter = document.getElementById(spanId);
    if (list && counter) {
      counter.innerText = list.children.length;
    }
  });
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  console.log("DevFlow Engine Iniciada 🚀");
  updateCounters();
});
