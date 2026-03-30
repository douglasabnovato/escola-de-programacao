let currentBoardId = null;

// Abrir modal para adicionar card
function addCard(element) {
  currentBoardId = element.previousElementSibling.id;
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("taskInput").value = "";
  document.getElementById("taskInput").focus();
}

// Fechar modal
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  currentBoardId = null;
}

// Confirmar criação de tarefa
function confirmTask() {
  const text = document.getElementById("taskInput").value.trim();
  if (!text || !currentBoardId) return;

  const board = document.getElementById(currentBoardId);
  const template = document.createElement("li");
  template.id = new Date().getTime();
  template.draggable = true;
  template.ondragstart = drag;

  const content = document.createElement("p");
  content.textContent = text;

  const removeBtn = document.createElement("span");
  removeBtn.className = "remove";
  removeBtn.textContent = "🗑️";
  removeBtn.onclick = () => removeCard(removeBtn);

  template.appendChild(content);
  template.appendChild(removeBtn);
  board.appendChild(template);

  closeModal();
}

// Remover card
function removeCard(element) {
  const card = element.parentElement;
  card.remove();
}

// Drag and drop
function drag(event) {
  event.dataTransfer.setData("card", event.target.id);
}

function over(event) {
  event.preventDefault();
}

function drop(event, id) {
  event.preventDefault();
  const target = document.getElementById(id);
  const data = event.dataTransfer.getData("card");
  const card = document.getElementById(data);
  target.appendChild(card);
  event.dataTransfer.clearData();
}

document.getElementById("year").textContent = new Date().getFullYear();
