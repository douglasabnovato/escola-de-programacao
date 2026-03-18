# 🎬 Aula 02 — O Manifesto Digital: Dados e Persistência

- 📚 **Nível:** Intermediário — Lógica de Dados e LocalStorage
- 🟢 **Conceito Chave:** O Navegador como Banco de Dados
- 🎯 **Tema Central:** Capturar, Processar, Armazenar e Exibir.
- 📅 **Data de Referência:** 17 de Março de 2026

---

## 🎯 Objetivo da Aula

O aluno deve sair entendendo:

- Como capturar dados de um formulário de forma segura.
- O que é o **LocalStorage** e como ele mantém os dados "vivos".
- Como o método `.reduce()` simplifica cálculos de saldo.
- Como o método `.filter()` gerencia a exclusão de itens.

---

### 🧠 1. Abertura da Aula (5 min)

#### 🎙 Fala do Instrutor

> "Fala, desenvolvedores! Na aula passada, entendemos como o navegador renderiza elementos. Hoje, vamos dar um passo além: vamos criar **memória** para a nossa aplicação.
>
> Imagine um motorista de caminhão que precisa anotar cada frete e cada gasto com diesel durante uma viagem. Se ele fechar o navegador, as contas não podem sumir! Vamos construir o **MyLog** — um manifesto digital que armazena dados na 'gaveta' do navegador."

---

### 🏗 2. Parte 1 — Capturando a Carga (O Formulário)

#### 🎙 Fala

"O HTML é o nosso manifesto. O JavaScript precisa 'escutar' quando o motorista envia os dados. Vamos usar o evento `submit` para processar a carga."

#### 💻 Código para Praticar

```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o recarregamento da página

  const desc = descInput.value.trim();
  const valor = Number(valorInput.value);
  const tipo = tipoInput.value;

  // Validação de segurança
  if (desc === "" || isNaN(valor) || valor <= 0) return;

  console.log("Carga validada:", { desc, valor, tipo });
});
```

---

### 📦 3. Parte 2 — A Gaveta do Caminhão (LocalStorage)

#### 🎙 Fala

"O `localStorage` é a nossa memória persistente. Como ele só entende texto, usamos o `JSON.stringify` para guardar e o `JSON.parse` para ler os dados da 'gaveta'."

#### 💻 Código para Praticar

```javascript
// Salvando os dados no navegador
function salvarLocal() {
  localStorage.setItem("transacoes", JSON.stringify(transacoes));
}

// Recuperando os dados ao iniciar a aula
let transacoes = JSON.parse(localStorage.getItem("transacoes")) || [];
```

---

### 🧮 4. Parte 3 — O Fechamento do Caixa (Reduce)

#### 🎙 Fala

"Aqui está a inteligência do sistema. O método `.reduce()` percorre a lista e decide: se for 'entrada', soma ao acumulador; se for 'saída', subtrai."

#### 💻 Código para Praticar

```javascript
function atualizarSaldo() {
  const total = transacoes.reduce((acc, t) => {
    return t.tipo === "entrada" ? acc + t.valor : acc - t.valor;
  }, 0); // O '0' é o nosso saldo inicial da viagem

  saldoDisplay.textContent = `R$ ${total.toFixed(2)}`;
}
```

---

### 🗑 5. Parte 4 — Descarregando Itens (Filter)

#### 🎙 Fala

"Lançou um valor errado? O `.filter()` cria uma nova lista mantendo apenas os itens que **não** possuem o ID que queremos remover."

#### 💻 Código para Praticar

```javascript
function remover(id) {
  // Mantém tudo que for DIFERENTE do ID selecionado
  transacoes = transacoes.filter((t) => t.id !== id);

  salvarLocal(); // Atualiza a 'gaveta'
  init(); // Recarrega a interface (renderização)
}
```

---

### 🎯 6. Exercício & Desafio ByteClass

**💪 Exercício Guiado:**
Altere a cor do saldo dinamicamente no JavaScript:

- Se `total >= 0`, a cor do texto deve ser **verde**.
- Se `total < 0`, a cor do texto deve ser **vermelha**.

**🧪 Desafio Pós-Aula (Logística):**

> Adicione um campo de **"Placa do Caminhão"** no formulário HTML e faça com que essa informação apareça ao lado da descrição no histórico da rota (`<li>`).

---

### 📌 7. Encerramento

#### 🎙 Fala Final

"Hoje você dominou a gestão de estado persistente. Você não está mais apenas 'fazendo sites', está gerenciando fluxos de informação reais de logística. Subam o código para o repositório **learnTECH** e nos vemos na próxima aula!"

---

**Instrutor:** Douglas Novato  
**Escola:** ByteClass - 2026
