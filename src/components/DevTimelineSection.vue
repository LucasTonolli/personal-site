<script setup>
const timelineEvents = [
  {
    year: '2025 - Atual',
    role: 'Freelancer Full-Stack',
    company: 'Autônomo',
    desc: 'Desenvolvimento de soluções SaaS e automação com IA. Destaque para o projeto "Zintbot" (integração WhatsApp + ChatGPT) e redesign completo de portais corporativos focando em otimização de processos.',
    techs: ['Laravel', 'Vue.js', 'OpenAI API', 'SaaS'],
  },
  {
    year: 'Jan 2023 - Jul 2024',
    role: 'Tech Lead',
    company: 'VVerner Desenvolvimento Web',
    desc: 'Liderança técnica da equipe. Atuei na arquitetura de e-commerce (Avantgarde College, Pitaya) e desenvolvimento de APIs Headless (Terapize). Responsável pela ponte entre clientes e equipe técnica.',
    techs: ['Liderança', 'Arquitetura', 'Headless CMS', 'Integrações'],
  },
  {
    year: 'Fev 2022 - Dez 2022',
    role: 'Estagiário de Programação',
    company: 'VVerner Desenvolvimento Web',
    desc: 'Início da carreira profissional focada. Desenvolvimento de temas customizados para WordPress, manipulação de APIs REST, versionamento com Git e configuração de ambientes Linux/cPanel.',
    techs: ['PHP', 'JavaScript', 'WordPress', 'Linux'],
  },
  {
    year: '2020',
    role: 'Ciência da Computação',
    company: 'Universidade Feevale',
    desc: 'Início da graduação. Base sólida em algoritmos, estrutura de dados e lógica de programação.',
    techs: ['Acadêmico', 'C', 'Java', 'Lógica'],
  },
]
</script>

<template>
  <section class="section timeline-section">
    <h3 class="section-title"><span class="icon">🚀</span> Carreira & XP</h3>

    <div class="timeline">
      <div v-for="(event, index) in timelineEvents" :key="index" class="timeline-item">
        <div class="timeline-date desktop-only">
          <span class="year">{{ event.year }}</span>
        </div>

        <div class="timeline-marker">
          <div class="dot"></div>
          <div class="line" v-if="index !== timelineEvents.length - 1"></div>
        </div>

        <div class="timeline-content">
          <div class="header">
            <span class="mobile-year">{{ event.year }}</span>

            <h4 class="role">{{ event.role }}</h4>
            <span class="company">@{{ event.company }}</span>
          </div>

          <p class="description">
            {{ event.desc }}
          </p>

          <div class="tags">
            <span v-for="tech in event.techs" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section.timeline-section {
  flex-direction: column;
}

.section-title {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #333;
  padding-bottom: 1rem;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.timeline-item {
  display: flex;
  gap: 1rem;
  position: relative;
}
.desktop-only {
  display: none;
}

.mobile-year {
  display: block;
  font-family: var(--font-code);
  font-size: 0.8rem;
  color: var(--color-primary);
  font-weight: bold;
  margin-bottom: 0.2rem;
}

.timeline-date {
  min-width: 100px;
  text-align: left;
  padding-top: 5px;
}

.year {
  font-family: var(--font-code);
  color: var(--color-primary);
  font-weight: bold;
  font-size: 0.9rem;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 20px;
}

.dot {
  width: 14px;
  height: 14px;
  background: var(--color-bg-body);
  border: 3px solid var(--color-secondary);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 243, 255, 0.4);
  z-index: 2;
  flex-shrink: 0;
}

.line {
  width: 2px;
  background: #333;
  flex: 1;
  margin-top: 5px;
  min-height: 100%;
}

.timeline-content {
  flex: 1;
  background: rgba(255, 255, 255, 0.03);
  padding: 1.2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.role {
  color: #fff;
  font-size: 1.1rem;
  margin: 0;
  line-height: 1.2;
}

.company {
  display: block;
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 0.8rem;
  font-style: italic;
  margin-bottom: 0.2rem;
}

.description {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  font-family: var(--font-code);
  font-size: 0.7rem;
  background: rgba(0, 0, 0, 0.3);
  color: var(--color-secondary);
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(0, 243, 255, 0.2);
}

@media (min-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .timeline-item {
    gap: 1.5rem;
  }

  .desktop-only {
    display: block;
    min-width: 175px;
    text-align: right;
    padding-top: 2px;
  }

  .mobile-year {
    display: none;
  }

  .year {
    font-family: var(--font-code);
    color: var(--color-primary);
    font-weight: bold;
    font-size: 0.95rem;
  }

  .timeline-content {
    padding: 1.5rem;
    transition: transform 0.3s ease;
  }

  .timeline-content:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    transform: translateY(5px);
  }

  .role {
    font-size: 1.3rem;
  }
}
</style>
