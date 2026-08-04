const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const fullstacks = [
  {
    title: "guiando",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/guiando.jpg",
    site_url: "https://www.guiando.com.br/",
    category: "Developer"
  },
  {
    title: "viva e ventos",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/vivaeventos.jpg",
    site_url: "https://vivaeventos.com.br/",
    category: "Developer"
  },
  {
    title: "nova tendencia",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/ntendencia.jpg",
    site_url: "https://www.ntendencia.com.br/",
    category: "Developer"
  },
  {
    title: "handcom",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/handcom.jpg",
    site_url: "http://v2.handcom.com.br/",
    category: "Developer"
  },
  {
    title: "appmasters",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/appmasters.jpg",
    site_url: "https://www.appmasters.io/en",
    category: "Developer"
  },
  {
    title: "prodoctor",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/prodoctor.jpg",
    site_url: "https://prodoctor.net/",
    category: "Developer"
  },
  {
    title: "promobit",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/promobit.jpg",
    site_url: "https://www.promobit.com.br/",
    category: "Developer"
  },
  {
    title: "sensedata",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/sensedata.jpg",
    site_url: "https://sensedata.com.br/",
    category: "Developer"
  },
  {
    title: "tecnospeed",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/tecnospeed.jpg",
    site_url: "https://tecnospeed.com.br/",
    category: "Developer"
  },
  {
    title: "revelo",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/revelo.jpg",
    site_url: "https://www.revelo.com.br/",
    category: "Developer"
  },
  {
    title: "careers google",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/google.jpg",
    site_url: "https://careers.google.com/",
    category: "Developer"
  },
  {
    title: "betrybe",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/trybe.jpg",
    site_url: "https://www.betrybe.com/trabalhe-conosco",
    category: "Developer"
  },
  {
    title: "rocketseat",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/rocketseat.jpg",
    site_url: "https://rocketseat.gupy.io/",
    category: "Developer"
  },
  {
    title: "geekhunter",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/geekhunter.jpg",
    site_url: "https://geekhunter.gupy.io/",
    category: "Developer"
  },
  {
    title: "gupy",
    duration: "10 dias",
    thumb: "../files/thumb_good-companies/gupy.jpg",
    site_url: "https://tech-career.gupy.io/?utm_source=site&utm_medium=footer",
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


