const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const fullstacks = [
  {
    title: "solides",
    duration: "10 dias",
    thumb: "../files/thumb_soft-skills/solides.jpg",
    site_url: "https://empregabilidade.solides.com.br/",
    category: "Comportamentais"
  },
  {
    title: "na pratica",
    duration: "10 dias",
    thumb: "../files/thumb_soft-skills/na-pratica.jpg",
    site_url: "https://ead.napratica.org.br/",
    category: "Comportamentais"
  },
  {
    title: "Endeavor",
    duration: "10 dias",
    thumb: "../files/thumb_soft-skills/endeavor.jpg",
    site_url: "https://endeavor.org.br/empreendedores-endeavor/",
    category: "empreendedorismo"
  },
  {
    title: "TED",
    duration: "10 dias",
    thumb: "../files/thumb_soft-skills/ted.jpg",
    site_url: "https://www.ted.com/",
    category: "Motivacional"
  },
  {
    title: "CODEJR",
    duration: "10 dias",
    thumb: "../files/thumb_soft-skills/codejr.jpg",
    site_url: "https://codejr.com.br/",
    category: "Empreendedorismo"
  },
  {
    title: "aiesec",
    duration: "10 dias",
    thumb: "../files/thumb_soft-skills/aiesec.jpg",
    site_url: "https://aiesec.org.br/",
    category: "Liderança"
  },
]

fullstacks.map((fullstack) => {
  const cardClone = card.cloneNode(true);
  cardClone.querySelector("a.destino").href = fullstack.site_url;
  cardClone.querySelector("img").src = fullstack.thumb;
  cardClone.querySelector(".title").innerHTML = fullstack.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = fullstack.duration;
  cardClone.querySelector(".info > p.price").innerHTML = fullstack.category;
  sectionCards.appendChild(cardClone);
});

card.remove();


