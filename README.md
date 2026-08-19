# Conectar

Plataforma front-end que aproxima empresas, voluntários e iniciativas sociais. O projeto reúne oportunidades de doação, voluntariado, mentoria e eventos em uma experiência responsiva.

[![CI](https://github.com/jessicatrindadeads/projeto-social-conectar/actions/workflows/ci.yml/badge.svg)](https://github.com/jessicatrindadeads/projeto-social-conectar/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel)](https://projeto-social-conectar.vercel.app)

## Demonstração

Acesse: [projeto-social-conectar.vercel.app](https://projeto-social-conectar.vercel.app)

## Funcionalidades

- Navegação entre oportunidades sociais por categoria
- Catálogo de doações, mentorias, voluntariado e eventos
- Perfil demonstrativo de voluntária
- Menu responsivo para dispositivos móveis
- Página personalizada para rotas não encontradas
- Layout adaptável para desktop, tablet e mobile
- Imagens otimizadas em WebP para os cards atualizados

## Tecnologias

- React
- React Router
- JavaScript
- Sass Modules
- Vite
- ESLint
- GitHub Actions
- Vercel

## Como executar

Pré-requisitos: Node.js 22 ou superior e npm.

```bash
git clone https://github.com/jessicatrindadeads/projeto-social-conectar.git
cd projeto-social-conectar
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm run build
npm run preview
```

O fluxo de integração contínua executa lint e build automaticamente em pull requests e atualizações da branch principal.

## Estrutura

```text
src/
├── assets/
├── components/
├── pages/
├── styles/
├── App.jsx
├── globalStyles.scss
└── main.jsx
```

## Status

Projeto front-end educacional em evolução. As telas demonstram a experiência da plataforma; autenticação, inscrições e persistência de dados não fazem parte do escopo atual.

## Autora

Desenvolvido por [Jéssica Trindade](https://github.com/jessicatrindadeads).
