const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const fullstacks = [
  {
    title: "Coodesh",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/coodesh.jpg",
    site_url: "https://coodesh.com/",
    category: "Developer"
  },
  {
    title: "Geekhunter",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/geekhunter.jpg",
    site_url: "https://www.geekhunter.com.br/vagas",
    category: "Developer"
  },
  {
    title: "Linkedin",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/linkedin.jpg",
    site_url: "https://www.linkedin.com/jobs/",
    category: "Developer"
  },
  {
    title: "Polywork",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/polywork.jpg",
    site_url: "https://coodesh.com/",
    category: "Developer"
  },
  {
    title: "Programadores de Juiz de Fora",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/programadoresjuizdefora.jpg",
    site_url: "https://programador.emjuizdefora.com/oportunidades",
    category: "Developer"
  },
  {
    title: "Programathor",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/programathor.jpg",
    site_url: "https://programathor.com.br/",
    category: "Developer"
  },
  {
    title: "Bossabox",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/bossabox.jpg",
    site_url: "https://app.bossabox.com/profile/jobs/active-products",
    category: "Developer"
  },
  {
    title: "Impulso",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/impulso.jpg",
    site_url: "https://app.impulso.team/painel",
    category: "Developer"
  },
  {
    title: "trampos",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/trampos.jpg",
    site_url: "https://trampos.co/oportunidades/?tr=desenvolvedor",
    category: "Developer"
  },
  {
    title: "Revelo",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/revelo.jpg",
    site_url: "https://app.careers.revelo.com/#/international/positions/list",
    category: "Developer"
  },
  {
    title: "Movile",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/movile.jpg",
    site_url: "https://www.movile.com.br/carreiras-movile",
    category: "Developer"
  },
  {
    title: "Glassdoor",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/glassdoor.jpg",
    site_url: "https://programathor.com.br/",
    category: "Developer"
  },
  {
    title: "Abler",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/abler.jpg",
    site_url: "https://candidatos.abler.com.br/app/vagas?q=desenvolvedor",
    category: "Developer"
  },
  {
    title: "vagas",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/vagas.jpg",
    site_url: "https://www.vagas.com.br/vagas-de-desenvolvedor",
    category: "Developer"
  },
  {
    title: "99freelas",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/99freelas.jpg",
    site_url: "https://www.99freelas.com.br/projects",
    category: "Freelas"
  },
  {
    title: "Superprof",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/superprof.jpg",
    site_url: "https://www.superprof.com.br/",
    category: "Freelas"
  },
  {
    title: "Workana",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/workana.jpg",
    site_url: "https://www.workana.com/jobs?language=pt",
    category: "Freelas"
  },
  {
    title: "meuredator",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/meuredator.jpg",
    site_url: "https://meuredator.com.br/",
    category: "Freelas"
  },
  {
    title: "meseems",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/meseems.jpg",
    site_url: "https://meseems.com.br/Social/Posts",
    category: "Freelas"
  },
  {
    title: "myiyo",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/myiyo.jpg",
    site_url: "https://www.myiyo.com/",
    category: "Freelas"
  },
  {
    title: "suasaulasparticulares",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/suasaulasparticulares.jpg",
    site_url: "https://www.suasaulasparticulares.com.br/",
    category: "Freelas"
  },
  {
    title: "starofservice",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/starofservice.jpg",
    site_url: "https://www.starofservice.com.br/",
    category: "Freelas"
  },
  {
    title: "catho",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/catho.jpg",
    site_url: "https://www.catho.com.br/area-candidato",
    category: "Freelas"
  },
  {
    title: "jfempregos",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/jfempregos.jpg",
    site_url: "https://www.jfempregos.com.br/vagas-sugeridas",
    category: "Freelas"
  },
  {
    title: "kenoby",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/kenoby.jpg",
    site_url: "https://empregos.kenoby.com/",
    category: "Freelas"
  },
  {
    title: "indeed",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/indeed.jpg",
    site_url: "https://br.indeed.com/?from=gnav-homepage",
    category: "Freelas"
  },
  {
    title: "infojobs",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/infojobs.jpg",
    site_url: "https://www.infojobs.com.br/t",
    category: "Freelas"
  },
  {
    title: "fiemg",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/fiemg.jpg",
    site_url: "https://portal.fiemg.com.br/paraVoce",
    category: "Freelas"
  },
  {
    title: "senac",
    duration: "3 dias",
    thumb: "../files/thumb_jobs/senac.jpg",
    site_url: "https://www.senac.br/",
    category: "Freelas"
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


