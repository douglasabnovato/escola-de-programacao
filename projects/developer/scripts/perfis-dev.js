const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const fullstacks = [
  {
    title: "Tiago Gouvêa",
    duration: "10 dias",
    thumb: "../files/thumb_perfis-dev/tiagogouvea.jpg",
    site_url: "https://www.tiagogouvea.com.br/",
    category: "Developer"
  },
  {
    title: "coca cola",
    duration: "10 dias",
    thumb: "../files/thumb_perfis-dev/coca-cola.jpg",
    site_url: "https://www.coca-cola.com.br/",
    category: "Developer"
  },
  {
    title: "gabs ferreira",
    duration: "10 dias",
    thumb: "../files/thumb_perfis-dev/gabsferreira.jpg",
    site_url: "http://gabsferreira.com/",
    category: "Developer"
  },
  {
    title: "filipe deschamps",
    duration: "10 dias",
    thumb: "../files/thumb_perfis-dev/filipedeschamps.jpg",
    site_url: "https://filipedeschamps.com.br/",
    category: "Developer"
  },
  {
    title: "lucas montano",
    duration: "10 dias",
    thumb: "../files/thumb_perfis-dev/lucasmontano.jpg",
    site_url: "https://lucasmontano.com/",
    category: "Developer"
  },
  {
    title: "branas",
    duration: "10 dias",
    thumb: "../files/thumb_perfis-dev/branas.jpg",
    site_url: "https://app.branas.io/public/products",
    category: "Developer"
  },
  {
    title: "programadorbr",
    duration: "10 dias",
    thumb: "../files/thumb_perfis-dev/programadorbr.jpg",
    site_url: "https://programadorbr.com/",
    category: "Developer"
  },
  {
    title: "codigofonte tv",
    duration: "10 dias",
    thumb: "../files/thumb_perfis-dev/codigofonte-tv.jpg",
    site_url: "https://codigofonte.tv/",
    category: "Developer"
  },
  {
    title: "playcode",
    duration: "10 dias",
    thumb: "../files/thumb_perfis-dev/playcode.jpg",
    site_url: "https://playcode.com.br/",
    category: "Developer"
  },
  {
    title: "taniarascia",
    duration: "10 dias",
    thumb: "../files/thumb_perfis-dev/taniarascia.jpg",
    site_url: "https://www.taniarascia.com/",
    category: "Developer"
  },
  {
    title: "o dev ta ligado",
    duration: "10 dias",
    thumb: "../files/thumb_perfis-dev/odevtaligado.jpg",
    site_url: "https://www.odevtaligado.com/",
    category: "Developer"
  },
  {
    title: "vinniciusgomes",
    duration: "10 dias",
    thumb: "../files/thumb_perfis-dev/vinniciusgomes.jpg",
    site_url: "https://vinniciusgomes.dev/",
    category: "Developer"
  },
  {
    title: "mariosouto",
    duration: "10 dias",
    thumb: "../files/thumb_perfis-dev/mariosouto.jpg",
    site_url: "https://mariosouto.com/",
    category: "Developer"
  },
  {
    title: "JOÃO FERNANDO BARAKY",
    duration: "10 dias",
    thumb: "../files/thumb_perfis-dev/baraky.jpg",
    site_url: "https://baraky.com.br/",
    category: "Developer"
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


