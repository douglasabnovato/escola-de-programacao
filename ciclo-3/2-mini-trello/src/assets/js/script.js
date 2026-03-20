document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const addListBtn = document.getElementById("add-list-btn");

  let draggedCard = null;
  let draggedList = null;

  // ========================
  // UTIL
  // ========================
  const generateId = () =>
    "id-" + Date.now() + Math.random().toString(16).slice(2);

  const saveBoard = () => {
    const data = [];

    document.querySelectorAll(".list").forEach((list) => {
      const listData = {
        id: list.dataset.id,
        title: list.querySelector(".list-header").textContent,
        cards: [],
      };

      list.querySelectorAll(".card").forEach((card) => {
        listData.cards.push({
          id: card.dataset.id,
          text: card.textContent,
        });
      });

      data.push(listData);
    });

    localStorage.setItem("mini-trello", JSON.stringify(data));
  };

  const loadBoard = () => {
    const data = JSON.parse(localStorage.getItem("mini-trello")) || [];
    data.forEach((list) => {
      const listEl = createList(list.title, list.id);
      board.insertBefore(listEl, addListBtn.parentElement);

      list.cards.forEach((card) => {
        const cardEl = createCard(card.text, card.id);
        listEl.querySelector(".cards-container").appendChild(cardEl);
      });
    });
  };

  // ========================
  // CARD
  // ========================
  function createCard(text, id = generateId()) {
    const card = document.createElement("div");
    card.className = "card";
    card.draggable = true;
    card.dataset.id = id;
    card.textContent = text;

    // DRAG
    card.addEventListener("dragstart", () => {
      draggedCard = card;
      card.classList.add("dragging");
    });

    card.addEventListener("dragend", () => {
      draggedCard = null;
      card.classList.remove("dragging");
      saveBoard();
    });

    // EDIT
    card.addEventListener("click", () => {
      if (card.querySelector("textarea")) return;

      const textarea = document.createElement("textarea");
      textarea.value = card.textContent;

      card.innerHTML = "";
      card.appendChild(textarea);
      textarea.focus();

      const save = () => {
        card.textContent = textarea.value.trim() || "Novo cartão";
        saveBoard();
      };

      textarea.addEventListener("blur", save);
      textarea.addEventListener("keydown", (e) => {
        if (e.key === "Enter") textarea.blur();
      });
    });

    return card;
  }

  // ========================
  // LIST
  // ========================
  function createList(title, id = generateId()) {
    const list = document.createElement("div");
    list.className = "list";
    list.dataset.id = id;
    list.draggable = true;

    const header = document.createElement("div");
    header.className = "list-header";
    header.textContent = title;

    const cardsContainer = document.createElement("div");
    cardsContainer.className = "cards-container";

    const addCardBtn = document.createElement("button");
    addCardBtn.className = "add-card-btn";
    addCardBtn.textContent = "+ Adicionar cartão";

    list.append(header, cardsContainer, addCardBtn);

    // DRAG LIST
    list.addEventListener("dragstart", () => {
      draggedList = list;
      list.classList.add("dragging");
    });

    list.addEventListener("dragend", () => {
      draggedList = null;
      list.classList.remove("dragging");
      saveBoard();
    });

    // EDIT TITLE
    header.addEventListener("click", () => {
      const input = document.createElement("input");
      input.value = header.textContent;

      header.replaceWith(input);
      input.focus();

      const save = () => {
        header.textContent = input.value.trim() || "Lista";
        input.replaceWith(header);
        saveBoard();
      };

      input.addEventListener("blur", save);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") save();
      });
    });

    // ADD CARD
    addCardBtn.addEventListener("click", () => {
      const textarea = document.createElement("textarea");
      const addBtn = document.createElement("button");
      const cancelBtn = document.createElement("button");

      addBtn.textContent = "Adicionar";
      cancelBtn.textContent = "X";

      const form = document.createElement("div");
      form.className = "add-card-form";

      form.append(textarea, addBtn, cancelBtn);
      list.insertBefore(form, addCardBtn);

      addCardBtn.style.display = "none";
      textarea.focus();

      addBtn.onclick = () => {
        if (!textarea.value.trim()) return;

        const card = createCard(textarea.value);
        cardsContainer.appendChild(card);

        textarea.value = "";
        textarea.focus();
        saveBoard();
      };

      cancelBtn.onclick = () => {
        form.remove();
        addCardBtn.style.display = "block";
      };
    });

    // DROP CARDS
    cardsContainer.addEventListener("dragover", (e) => {
      e.preventDefault();

      const after = getCardAfter(cardsContainer, e.clientY);

      if (!draggedCard) return;

      if (after == null) {
        cardsContainer.appendChild(draggedCard);
      } else {
        cardsContainer.insertBefore(draggedCard, after);
      }
    });

    return list;
  }

  // ========================
  // DRAG HELPERS
  // ========================
  function getCardAfter(container, y) {
    const elements = [...container.querySelectorAll(".card:not(.dragging)")];

    return elements.reduce(
      (closest, el) => {
        const box = el.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
          return { offset, element: el };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY },
    ).element;
  }

  function getListAfter(x) {
    const elements = [...document.querySelectorAll(".list:not(.dragging)")];

    return elements.reduce(
      (closest, el) => {
        const box = el.getBoundingClientRect();
        const offset = x - box.left - box.width / 2;

        if (offset < 0 && offset > closest.offset) {
          return { offset, element: el };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY },
    ).element;
  }

  // ========================
  // ADD LIST
  // ========================
  addListBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    const addBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    addBtn.textContent = "Adicionar";
    cancelBtn.textContent = "X";

    const form = document.createElement("div");
    form.className = "add-list-form";

    form.append(input, addBtn, cancelBtn);

    board.insertBefore(form, addListBtn.parentElement);
    addListBtn.style.display = "none";

    input.focus();

    addBtn.onclick = () => {
      if (!input.value.trim()) return;

      const list = createList(input.value);
      board.insertBefore(list, form);

      form.remove();
      addListBtn.style.display = "block";

      saveBoard();
    };

    cancelBtn.onclick = () => {
      form.remove();
      addListBtn.style.display = "block";
    };
  });

  // ========================
  // DRAG LIST BOARD
  // ========================
  board.addEventListener("dragover", (e) => {
    e.preventDefault();

    if (!draggedList) return;

    const after = getListAfter(e.clientX);

    if (after == null) {
      board.insertBefore(draggedList, addListBtn.parentElement);
    } else {
      board.insertBefore(draggedList, after);
    }
  });

  // ========================
  // INIT
  // ========================
  loadBoard();
});
