const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
document
  .querySelectorAll("a, button, .color-card, .feature-card")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });

// SIZE SELECTOR
function selectSize(btn) {
  document
    .querySelectorAll(".size-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
reveals.forEach((el) => revealObserver.observe(el));

// CTRL+D — selecionar próxima ocorrência (estilo VS Code)
let selections = [];
let currentTerm = "";
let allMatches = [];
let matchIdx = -1;
let highlighted = [];

const toast = document.getElementById("ctrlD-toast");
let toastTimer;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function getPageText() {
  return document.body.innerText;
}

function findAllInPage(term) {
  if (!term) return [];
  const matches = [];
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
  );
  let node;
  while ((node = walker.nextNode())) {
    const text = node.textContent;
    const re = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    let m;
    while ((m = re.exec(text)) !== null) {
      matches.push({ node, start: m.index, end: m.index + term.length });
    }
  }
  return matches;
}

function highlightMatch(match, isCurrent) {
  const range = document.createRange();
  try {
    range.setStart(match.node, match.start);
    range.setEnd(match.node, match.end);
  } catch (e) {
    return null;
  }

  const span = document.createElement("span");
  span.style.background = isCurrent
    ? "rgba(232,255,71,0.55)"
    : "rgba(232,255,71,0.22)";
  span.style.borderRadius = "2px";
  span.style.outline = isCurrent ? "1.5px solid #e8ff47" : "none";
  span.style.color = isCurrent ? "#0a0a0a" : "inherit";
  span.dataset.ctrlHighlight = "1";
  try {
    range.surroundContents(span);
  } catch (e) {
    return null;
  }
  return span;
}

function clearHighlights() {
  document.querySelectorAll("[data-ctrl-highlight]").forEach((span) => {
    const parent = span.parentNode;
    if (parent) {
      while (span.firstChild) parent.insertBefore(span.firstChild, span);
      parent.removeChild(span);
      parent.normalize();
    }
  });
  highlighted = [];
  selections = [];
  allMatches = [];
  matchIdx = -1;
  currentTerm = "";
}

function getSelectedText() {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed) return "";
  return sel.toString().trim();
}

document.addEventListener("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && e.key === "d") {
    e.preventDefault();

    const selected = getSelectedText();
    if (!selected) {
      showToast("Selecione um texto na página primeiro");
      return;
    }

    if (selected !== currentTerm) {
      clearHighlights();
      currentTerm = selected;
      allMatches = findAllInPage(selected);
      matchIdx = -1;
    }

    if (allMatches.length === 0) {
      showToast(`"${selected}" — nenhuma ocorrência`);
      return;
    }

    // avança pro próximo match
    matchIdx = (matchIdx + 1) % allMatches.length;
    const match = allMatches[matchIdx];

    clearHighlights();
    allMatches = findAllInPage(currentTerm);

    allMatches.forEach((m, i) => {
      const isCur = i === matchIdx;
      highlightMatch(m, isCur);
    });

    const cur = allMatches[matchIdx];
    if (cur) {
      const range = document.createRange();
      try {
        range.setStart(cur.node, cur.start);
        range.setEnd(cur.node, cur.end);
        const rect = cur.node.parentElement?.getBoundingClientRect();
        if (rect) {
          window.scrollTo({
            top: window.scrollY + rect.top - window.innerHeight / 2,
            behavior: "smooth",
          });
        }
      } catch (e) {}
    }

    showToast(
      `"${currentTerm}" — ocorrência ${matchIdx + 1} de ${allMatches.length}`,
    );
  }

  if (e.key === "Escape") {
    clearHighlights();
    showToast("Seleções limpas");
  }
});

// Limpa ao clicar em área vazia
document.addEventListener("mousedown", function (e) {
  if (!e.target.closest("[data-ctrl-highlight]")) {
    if (highlighted.length > 0) clearHighlights();
  }
});
