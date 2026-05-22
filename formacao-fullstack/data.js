/**
 * ByteClass - Formação Fullstack
 * Dataset centralizado para renderização do Roadmap
 */

export const roadmapData = [
  {
    fase: "1. Frontend Foundations",
    slug: "frontend",
    cards: [
      {
        id: "html",
        titulo: "HTML",
        tipo: "key-topic",
        descricao: "Estruturação semântica de páginas web.",
        status: "essencial",
        link: "https://roadmap.sh/html",
      },
      {
        id: "css",
        titulo: "CSS",
        tipo: "key-topic",
        descricao: "Estilização, layouts e design responsivo.",
        status: "essencial",
        link: "https://roadmap.sh/css",
      },
      {
        id: "checkpoint-static",
        titulo: "Checkpoint - Static Webpages",
        tipo: "project",
        descricao: "Desenvolvimento de sites estáticos modernos.",
        link: "https://roadmap.sh/frontend/projects",
      },
      {
        id: "javascript",
        titulo: "JavaScript",
        tipo: "key-topic",
        descricao: "Lógica de programação e manipulação do DOM.",
        status: "essencial",
        link: "https://roadmap.sh/javascript",
      },
      {
        id: "checkpoint-interactivity",
        titulo: "Checkpoint - Interactivity",
        tipo: "project",
        descricao: "Criação de elementos interativos e dinâmicos.",
        link: "https://roadmap.sh/javascript",
      },
      {
        id: "npm",
        titulo: "npm",
        tipo: "key-topic",
        descricao: "Gerenciamento de pacotes e dependências.",
        link: "https://roadmap.sh/nodejs",
      },
      {
        id: "git-github",
        titulo: "Git & GitHub",
        tipo: "key-topic",
        descricao: "Versionamento de código e colaboração.",
        link: "https://roadmap.sh/git-github",
      },
      {
        id: "react-tailwind",
        titulo: "React & Tailwind CSS",
        tipo: "key-topic",
        descricao: "Frameworks modernos para UI e estilização utilitária.",
        link: "https://roadmap.sh/react",
      },
    ],
  },
  {
    fase: "2. Backend Development",
    slug: "backend",
    cards: [
      {
        id: "nodejs",
        titulo: "Node.js",
        tipo: "key-topic",
        descricao: "Ambiente de execução para JavaScript no servidor.",
        link: "https://roadmap.sh/nodejs",
      },
      {
        id: "checkpoint-cli",
        titulo: "Checkpoint - CLI Apps",
        tipo: "project",
        descricao: "Construção de ferramentas de linha de comando.",
        link: "https://roadmap.sh/backend/projects",
      },
      {
        id: "postgresql",
        titulo: "PostgreSQL",
        tipo: "key-topic",
        descricao: "Banco de dados relacional e manipulação de SQL.",
        link: "https://roadmap.sh/postgresql",
      },
      {
        id: "checkpoint-crud",
        titulo: "Checkpoint - Simple CRUD Apps",
        tipo: "project",
        descricao:
          "Operações básicas de banco de dados (Create, Read, Update, Delete).",
        link: "https://roadmap.sh/backend/projects",
      },
      {
        id: "rest-jwt-redis",
        titulo: "RESTful APIs, JWT & Redis",
        tipo: "key-topic",
        descricao: "Arquitetura, autenticação e cache para alta performance.",
        link: "https://roadmap.sh/rest-api",
      },
      {
        id: "checkpoint-complete",
        titulo: "Checkpoint - Complete App",
        tipo: "project",
        descricao: "Integração total do sistema.",
        link: "https://roadmap.sh/full-stack",
      },
    ],
  },
  {
    fase: "3. DevOps & Cloud",
    slug: "devops",
    cards: [
      {
        id: "linux-aws",
        titulo: "Linux Basics & AWS",
        tipo: "key-topic",
        descricao: "Fundamentos de SO e serviços como EC2, S3 e VPC.",
        link: "https://roadmap.sh/linux",
      },
      {
        id: "checkpoint-deployment",
        titulo: "Checkpoint - Deployment",
        tipo: "project",
        descricao: "Hospedagem e colocação da aplicação no ar.",
        link: "https://roadmap.sh/devops",
      },
      {
        id: "github-actions-ansible",
        titulo: "CI/CD & Automation",
        tipo: "key-topic",
        descricao: "GitHub Actions, Ansible e monitoramento com Monit.",
        link: "https://roadmap.sh/devops",
      },
      {
        id: "terraform",
        titulo: "Terraform",
        tipo: "key-topic",
        descricao: "Infraestrutura como código (IaC).",
        link: "https://roadmap.sh/terraform",
      },
      {
        id: "checkpoint-infra",
        titulo: "Checkpoint - Infrastructure",
        tipo: "project",
        descricao: "Gerenciamento e automação de infraestrutura escalável.",
        link: "https://roadmap.sh/devops",
      },
    ],
  },
];
