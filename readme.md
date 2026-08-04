<div align="center">

# 🚀 Escola de Programação

**Uma coleção viva de projetos práticos — do primeiro "Hello World" a desafios técnicos de processo seletivo.**

</div>

---

## 💻 Sobre o projeto

A **Escola de Programação** reúne **58 projetos práticos**, cada um em sua própria pasta, documentando uma trajetória real de aprendizado em desenvolvimento web — não um curso fechado, mas um catálogo crescente de exercícios, desafios e ferramentas construídos ao longo do tempo.

Cada projeto é independente (HTML/CSS/JS próprios, geralmente com seu README), e todos são reunidos numa página central que lê o catálogo a partir de `projects.json`.

## 🎯 De onde vêm os projetos

A diversidade de fonte é o que dá substância ao catálogo — não é um curso único seguido do início ao fim, é a soma de várias trilhas de aprendizado diferentes:

| Origem | O que representa |
|---|---|
| **Rocketseat** | Desafios de DOM, Flexbox, temas dark/light, formulários — parte da trilha Discover |
| **Alura** | Desafios do Challenge ONE (parceria com Oracle), incluindo entregas publicadas |
| **Desafios técnicos** | Exercícios reais aplicados em processos seletivos para vaga de desenvolvedor |
| **Tutoriais de criadores** | Projetos construídos acompanhando conteúdo de criadores como Curso em Vídeo (Gustavo Guanabara) e Mayk Brito |
| **Projetos autorais** | Iniciativas próprias, sem curso ou desafio externo por trás |

## 📁 Estrutura

```text
escola-de-programacao/
├── index.html          # página principal do catálogo
├── projects.json        # inventário de todos os projetos
├── readme.md             # este arquivo
├── assets/                # logos e thumbnails do hub
├── public/                 # favicons, manifest
└── projects/
    ├── aprender-programar/
    ├── dev-em-dobro/
    ├── sidebar-green/
    ├── countdown/
    ├── pricing-table/
    ├── switcher/
    ├── developer/
    ├── cadastrar-cep/
    ├── pokedex/
    ├── dev-cast/
    ├── alurinha/
    ├── text-decoder/
    ├── flex-turismos/
    ├── google-glass/
    ├── internet-periodic-table/
    ├── meu-blog/
    └── ... (demais projetos, um por pasta)
```

## ➕ Adicionando um novo projeto ao catálogo

Cada entrada em `projects.json` segue este formato:

```json
{
  "id": 59,
  "title": "Nome de Exibição",
  "description": "O que o projeto demonstra, com clareza sobre o que está pronto e o que ainda falta.",
  "path": "./projects/nome-da-pasta/index.html",
  "category": "Origem ou tema do projeto",
  "icon": "fas fa-icone",
  "featured": false
}
```

- `path` precisa bater com o nome real da pasta em `projects/`
- `description` deve refletir o estado real do projeto — se algo ficou pendente (responsividade, persistência, funcionalidade), isso entra na descrição, não é escondido

## 🌳 Fluxo de contribuição

```
feature/sua-branch  →  developer  →  main (produção)
```

## ⚙️ Como rodar localmente

Projeto estático, sem dependências — abra `index.html` num servidor local (Live Server, `npx serve`, etc.), já que a leitura de `projects.json` exige HTTP, não funciona direto do sistema de arquivos.

---

Feito com ❤️ por [Douglas A. B. Novato](https://www.linkedin.com/in/douglasabnovato/) 👋🏽