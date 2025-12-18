# <LucasTonolli /> - Personal Portfolio & Hub

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

Bem-vindo ao repositório da minha página pessoal. Este projeto atua como um "Hub Central", conectando meu perfil profissional (**Modo Dev**) aos meus interesses pessoais (**Modo Otaku**).

O objetivo principal foi criar uma aplicação Single Page Application (SPA) leve, performática e com uma experiência de usuário imersiva, utilizando Vue.js 3 e CSS nativo moderno.

## ✨ Funcionalidades

- **Navegação Dual Mode:** Arquitetura que separa claramente o conteúdo profissional do pessoal.
- **Hero Interativo:** Apresentação com efeito _Typewriter_ e dados dinâmicos (como cálculo de idade).
- **Glassmorphism & Neon UI:** Design system próprio utilizando variáveis CSS globais (Design Tokens) para consistência de tema.
- **Timeline Profissional:** Componente de linha do tempo responsiva para exibir trajetória de carreira.
- **Tech Stack Grid:** Visualização de habilidades técnicas com categorização e efeitos de hover interativos.
- **Mobile-First:** Layout construído priorizando dispositivos móveis, com adaptação fluida para desktop.

## 🛠️ Tecnologias & Ferramentas

- **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API + `<script setup>`)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Roteamento:** [Vue Router 4](https://router.vuejs.org/)
- **Estilização:** CSS3 Scoped + CSS Variables (sem frameworks de UI pesados).
- **Code Quality:** ESLint + Prettier para padronização.

## 📂 Estrutura do Projeto

O projeto segue uma estrutura modular para facilitar a escalabilidade e manutenção:

```bash
src/
├── assets/
│   └── base.css         # Design Tokens (Cores, Fontes, Utilitários)
├── components/
│   ├── layout/          # Componentes reutilizáveis (NavBar, Footer)
│   ├── dev/             # Seções do perfil profissional (Hero, Timeline, TechStack, Contact)
│   └── otaku/           # Seções do perfil pessoal (Em desenvolvimento)
├── router/
│   └── index.js         # Configuração de rotas (SPA)
├── views/
│   ├── HomeView.vue     # Landing Page (Hub)
│   └── DevView.vue      # Página "Modo Dev"
└── App.vue              # Layout Base
```
