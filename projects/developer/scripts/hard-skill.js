const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const fullstacks = [
  {
    title: "Guia Web Dev",
    duration: "10 dias",
    thumb: "../files/thumb_hard-skills/web_dev.jpg",
    site_url: "https://web.dev/learn/",
    category: "Web Developer"
  },
  {
    title: "Guia CSS Tricks",
    duration: "12 dias",
    thumb: "../files/thumb_hard-skills/css-tricks.jpg",
    site_url: "https://css-tricks.com/guides/",
    category: "CSS"
  },
  {
    title: "Guia Open props style",
    duration: "15 dias",
    thumb: "../files/thumb_hard-skills/open-props.jpg",
    site_url: "https://open-props.style/",
    category: "CSS"
  },
  {
    title: "Guia Glitch",
    duration: "8 dias",
    thumb: "../files/thumb_hard-skills/glitch.jpg",
    site_url: "https://glitch.com/",
    category: "Web Developer"
  },
  {
    title: "Guia UI Design Daily",
    duration: "9 dias",
    thumb: "../files/thumb_hard-skills/ui-design-daily.jpg",
    site_url: "https://uidesigndaily.com/",
    category: "Design Templates"
  },
  {
    title: "Guia React for Designers",
    duration: "6 dias",
    thumb: "../files/thumb_hard-skills/react-for-designers.jpg",
    site_url: "https://reactfordesigners.com/",
    category: "Web Developer"
  },
  {
    title: "Guia Dev Resources",
    duration: "13 dias",
    thumb: "../files/thumb_hard-skills/dev-resources.jpg",
    site_url: "https://devresourc.es/",
    category: "Fullstack Developer"
  },
  {
    title: "Guia Headless UI",
    duration: "11 dias",
    thumb: "../files/thumb_hard-skills/headless.jpg",
    site_url: "https://headlessui.com/",
    category: "Frontend Developer"
  },
  {
    title: "Guia Grid by Example",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/gridbyexample.jpg",
    site_url: "https://gridbyexample.com/patterns/",
    category: "CSS Advanced"
  },
  {
    title: "Guia Codepip",
    duration: "2 dias",
    thumb: "../files/thumb_hard-skills/codepip.jpg",
    site_url: "https://codepip.com/",
    category: "CSS"
  },
  {
    title: "Guia Grid Malven",
    duration: "2 dias",
    thumb: "../files/thumb_hard-skills/grid-malven.jpg",
    site_url: "https://grid.malven.co/",
    category: "CSS"
  },
  {
    title: "Guia Flex Malven",
    duration: "2 dias",
    thumb: "../files/thumb_hard-skills/flex-malven.jpg",
    site_url: "https://flexbox.malven.co/",
    category: "CSS"
  },
  {
    title: "MDN Aprendendo desenvolvimento web",
    duration: "4 dias",
    thumb: "../files/thumb_hard-skills/mdn-1.jpg",
    site_url: "https://developer.mozilla.org/pt-BR/docs/Learn",
    category: "Web Developer"
  },
  {
    title: "MDN HTML",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/mdn-1.jpg",
    site_url: "https://developer.mozilla.org/pt-BR/docs/Learn/HTML",
    category: "HTML"
  },
  {
    title: "MDN CSS",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/mdn-1.jpg",
    site_url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    category: "CSS"
  },
  {
    title: "MDN Acessibilidade",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/mdn-1.jpg",
    site_url: "https://developer.mozilla.org/pt-BR/docs/Web/Accessibility",
    category: "CSS Advanced"
  },
  {
    title: "MDN CSS Pré Processador",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/mdn-1.jpg",
    site_url: "https://developer.mozilla.org/pt-BR/docs/Glossary/CSS_preprocessor",
    category: "CSS Advanced"
  },
  {
    title: "MDN Javascript",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/mdn-1.jpg",
    site_url: "https://developer.mozilla.org/pt-BR/docs/Learn/Javascript",
    category: "Javascript"
  },
  {
    title: "MDN JSON",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/mdn-1.jpg",
    site_url: "https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Global_Objects/JSON",
    category: "Javascript"
  },
  {
    title: "MDN Web Authentication API",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/mdn-1.jpg",
    site_url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API",
    category: "Javascript"
  },
  {
    title: "Axios",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/axios.jpg",
    site_url: "https://axios-http.com/",
    category: "Javascript Advanced"
  },
  {
    title: "Type ORM",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/typeorm.jpg",
    site_url: "https://typeorm.io/",
    category: "Javascript Advanced"
  },
  {
    title: "Developers Google",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/developers-google.jpg",
    site_url: "https://developers.google.com/",
    category: "Developers"
  },
  {
    title: "Styled Components",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/styled-components.jpg",
    site_url: "https://styled-components.com/",
    category: "CSS Advanced"
  },
  {
    title: "Ant Design",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/ant-design.jpg",
    site_url: "https://ant.design/",
    category: "CSS Advanced"
  },
  {
    title: "Tailwindcss",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/tailwindcss.jpg",
    site_url: "https://tailwindcss.com/",
    category: "CSS Advanced"
  },
  {
    title: "Material UI",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/material-ui.jpg",
    site_url: "https://gridbyexample.com/patterns/",
    category: "CSS Advanced"
  },
  {
    title: "Material Design - M2 e M3",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/material-design.jpg",
    site_url: "https://m2.material.io/design/introduction",
    category: "CSS Advanced"
  },
  {
    title: "Storybook",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/storybook.jpg",
    site_url: "storybook",
    category: "Web Developer"
  },
  {
    title: "Yarn",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/files.jpg",
    site_url: "https://yarnpkg.com/",
    category: "Gerenciador de Pacotes"
  },
  {
    title: "Npm",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/npm.jpg",
    site_url: "https://docs.npmjs.com/about-npm",
    category: "Gerenciador de Pacotes"
  },
  {
    title: "ReactJS",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/reactjs.jpg",
    site_url: "https://reactjs.org/docs/getting-started.html",
    category: "Frontend"
  },
  {
    title: "Typescript",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/typescript.jpg",
    site_url: "https://www.typescriptlang.org/",
    category: "Frontend"
  },
  {
    title: "NextJS",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/nextjs.jpg",
    site_url: "https://nextjs.org/",
    category: "Frontend"
  },
  {
    title: "GatsbyJS",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/gatsbyjs.jpg",
    site_url: "https://www.gatsbyjs.com/",
    category: "Frontend"
  },
  {
    title: "Jestjs",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/jestjs.jpg",
    site_url: "https://jestjs.io/pt-BR/",
    category: "Teste"
  },
  {
    title: "React Testing Library",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/react-testing-library.jpg",
    site_url: "https://testing-library.com/docs/react-testing-library/intro/",
    category: "Teste"
  },
  {
    title: "Git",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/git.jpg",
    site_url: "https://git-scm.com/",
    category: "Controle de Versão"
  },
  {
    title: "Microsoft SQL",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/microsoft-sql.jpg",
    site_url: "https://learn.microsoft.com/en-us/sql/sql-server/install/what-s-new-in-sql-server-installation?view=sql-server-ver15",
    category: "Banco de Dados"
  },
  {
    title: "Firebase",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/firebase.jpg",
    site_url: "https://firebase.google.com/docs/web/setup",
    category: "Banco de Dados"
  },
  {
    title: "Prisma SQLite",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/prisma-sql.jpg",
    site_url: "https://www.prisma.io/docs/concepts/database-connectors/sqlite",
    category: "Banco de Dados"
  },
  {
    title: "SQLite",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/sqlite.jpg",
    site_url: "https://www.sqlite.org/whentouse.html",
    category: "Banco de Dados"
  },
  {
    title: "MySQL",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/mysql.jpg",
    site_url: "https://docs.oracle.com/en-us/iaas/mysql-database/doc/getting-started.html",
    category: "Banco de Dados"
  },
  {
    title: "PostgreSQL",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/postgresql.jpg",
    site_url: "https://www.postgresql.org/developer/",
    category: "Banco de Dados"
  },
  {
    title: "MongoDB",
    duration: "14 dias",
    thumb: "../files/thumb_hard-skills/mongodb.jpg",
    site_url: "https://www.mongodb.com/docs/",
    category: "Banco de Dados"
  }  
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


