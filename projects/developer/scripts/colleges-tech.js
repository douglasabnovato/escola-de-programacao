const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const fullstacks = [
  {
    title: "Ciência da Computação na UFJF",
    duration: "5 anos",
    thumb: "../files/thumb_colleges-tech/ufjf-dcc.jpg",
    site_url: "https://www2.ufjf.br/ufjf/ensino/graduacao/ciencia-da-computacao/",
    category: "Universidade Federal"
  }, 
  {
    title: "Técnico em Informática no ifsudestemg",
    duration: "18 meses",
    thumb: "../files/thumb_colleges-tech/ifsudestemg-jf.jpg",
    site_url: "https://www.ifsudestemg.edu.br/hotsites/processo-seletivo-2023-1/botoes/cursos/processo-seletivo-2023-1/cursos/juizdefora",
    category: "Instituto Federal"
  }, 
  {
    title: "Análise e Desenvolvimento de Sistemas",
    duration: "2 anos",
    thumb: "../files/thumb_colleges-tech/ads-descomplica.jpg",
    site_url: "https://web.dev/learn/",
    category: "Graduação"
  }, 
  {
    title: "XPEducação",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/xpe.jpg",
    site_url: "https://online.igti.com.br/",
    category: "Graduação"
  }, 
  {
    title: "Cod3r",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/cod3r.jpg",
    site_url: "https://www.cod3r.com.br/collections/courses",
    category: "Curso"
  }, 
  {
    title: "Dev Academy",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/devacademy.jpg",
    site_url: "https://devacademy.com.br/",
    category: "Curso"
  }, 
  {
    title: "rocketseat",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/rocketseat.jpg",
    site_url: "https://app.rocketseat.com.br/discover",
    category: "Curso"
  }, 
  {
    title: "hackerrank",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/hackerrank.jpg",
    site_url: "https://www.hackerrank.com/dashboard",
    category: "Programar"
  }, 
  {
    title: "w3schools",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/w3schools.jpg",
    site_url: "https://my-learning.w3schools.com/",
    category: "Curso"
  }, 
  {
    title: "khanacademy",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/khanacademy.jpg",
    site_url: "https://pt.khanacademy.org/profile/me/courses",
    category: "Curso"
  }, 
  {
    title: "udemy",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/udemy.jpg",
    site_url: "https://www.udemy.com/home/my-courses/lists/",
    category: "Curso"
  }, 
  {
    title: "DIO",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/dio.jpg",
    site_url: "https://web.dio.me/home",
    category: "Curso"
  }, 
  {
    title: "42sp",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/42sp.jpg",
    site_url: "https://www.42sp.org.br/",
    category: "Curso"
  }, 
  {
    title: "startse",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/startse.jpg",
    site_url: "https://lms.startse.com/",
    category: "Curso"
  }, 
  {
    title: "microsoft makecode",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/makecode.jpg",
    site_url: "https://www.microsoft.com/pt-br/makecode?",
    category: "Ensinar Programação"
  }, 
  {
    title: "Developer Roadmaps",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/roadmap.jpg",
    site_url: "https://roadmap.sh/roadmaps",
    category: "roadmap"
  }, 
  {
    title: "git how to",
    duration: "10 dias",
    thumb: "../files/thumb_colleges-tech/githowto.jpg",
    site_url: "https://githowto.com/setup",
    category: "Programar"
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


