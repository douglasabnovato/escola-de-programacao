const form = document.getElementById("form");
const descInput = document.getElementById("desc");
const valorInput = document.getElementById("valor");
const tipoInput = document.getElementById("tipo");
const lista = document.getElementById("lista");
const saldoDisplay = document.getElementById("saldo");

// Busca dados da "gaveta do caminhão" (LocalStorage)
let transacoes = JSON.parse(localStorage.getItem("transacoes")) || [];

// 1. Inicialização
const init = () => {
  lista.innerHTML = "";
  transacoes.forEach(adicionarNaLista);
  atualizarSaldo();
};

// 2. Atualizar Saldo (Lógica corrigida com Reduce)
function atualizarSaldo() {
  const total = transacoes.reduce((acc, t) => {
    return t.tipo === "entrada" ? acc + t.valor : acc - t.valor;
  }, 0);

  saldoDisplay.textContent = `R$ ${total.toFixed(2)}`;
  saldoDisplay.style.color = total >= 0 ? "#2ecc71" : "#e74c3c";
}

// 3. Adicionar na Interface
function adicionarNaLista(t) {
  const li = document.createElement("li");
  const simbolo = t.tipo === "entrada" ? "+" : "-";

  li.innerHTML = `
        <span>${t.desc}</span>
        <span class="${t.tipo}">${simbolo} R$ ${t.valor.toFixed(2)}</span>
        <button class="remove-btn" onclick="remover(${t.id})">x</button>
    `;
  lista.appendChild(li);
}

// 4. Salvar no LocalStorage
function salvarLocal() {
  localStorage.setItem("transacoes", JSON.stringify(transacoes));
}

// 5. Evento de Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const desc = descInput.value.trim();
  const valor = Number(valorInput.value);
  const tipo = tipoInput.value;

  if (desc === "" || isNaN(valor) || valor <= 0) return;

  const novaTransacao = { id: Date.now(), desc, valor, tipo };

  transacoes.push(novaTransacao);
  salvarLocal();
  adicionarNaLista(novaTransacao);
  atualizarSaldo();

  descInput.value = "";
  valorInput.value = "";
  descInput.focus();
});

// 6. Remover Transação
function remover(id) {
  transacoes = transacoes.filter((t) => t.id !== id);
  salvarLocal();
  init(); // Reinicia a lista visual
}

init();
