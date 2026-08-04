const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const fullstacks = [
  {
    title: "Duolingo English",
    duration: "10 dias",
    thumb: "../files/thumb_speaker/english.jpg",
    site_url: "https://www.duolingo.com/learn",
    category: "Idioma"
  },
  {
    title: "Duolingo France",
    duration: "10 dias",
    thumb: "../files/thumb_speaker/france.jpg",
    site_url: "https://www.duolingo.com/learn",
    category: "Idioma"
  },
  {
    title: "mairo vergara English",
    duration: "10 dias",
    thumb: "../files/thumb_speaker/mairovergara.jpg",
    site_url: "https://www.mairovergara.com/",
    category: "Idioma"
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


