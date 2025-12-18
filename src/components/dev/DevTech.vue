<script setup>
const techCategories = [
  {
    name: 'Backend & Core',
    icon: '⚙️',
    color: 'var(--color-primary)', // Rosa
    skills: ['Laravel', 'PHP 8+', 'SQL / MySQL', 'API Rest', 'WordPress Core', 'Livewire'],
  },
  {
    name: 'Frontend',
    icon: '🎨',
    color: 'var(--color-secondary)', // Ciano
    fontColor: '#000000', // Texto preto para contraste no fundo Ciano
    skills: [
      'Vue.js 3',
      'JavaScript (ES6+)',
      'HTML5 & CSS3',
      'Tailwind',
      'Responsive Design',
      'Bootstrap',
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: '🛠️',
    color: 'var(--color-accent)', // Roxo
    skills: ['Linux / Shell', 'Git / GitHub', 'Docker', 'Apache/Nginx'],
  },
]
</script>

<template>
  <section class="section tech-section">
    <h3 class="section-title"><span class="icon">🛠️</span> Stack Tecnológica</h3>

    <div class="tech-grid">
      <div
        v-for="(cat, index) in techCategories"
        :key="index"
        class="tech-card"
        :style="{
          '--card-color': cat.color,
          '--pill-font-color': cat.fontColor || '#ffffff',
        }"
      >
        <div class="card-header">
          <span class="cat-icon">{{ cat.icon }}</span>
          <h4>{{ cat.name }}</h4>
        </div>

        <div class="skills-list">
          <span v-for="skill in cat.skills" :key="skill" class="skill-pill">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-section {
  width: 100%;
}

.tech-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.tech-card {
  background: var(--color-bg-card);
  border: 1px solid var(--border-dim);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-card:hover {
  background: var(--color-bg-card-hover);
  transform: translateY(-5px);
  border-color: var(--card-color);
  box-shadow:
    0 5px 20px rgba(0, 0, 0, 0.5),
    0 0 15px var(--card-color);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.cat-icon {
  font-size: 1.5rem;
}

.tech-card h4 {
  color: #fff;
  font-size: 1.2rem;
  margin: 0;
  font-family: var(--font-code);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-pill {
  font-family: var(--font-code);
  font-size: 0.85rem;
  color: var(--color-text-muted);
  background: rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-dim);
  transition: 0.2s;
}

/* Interatividade das Pills */
.tech-card:hover .skill-pill {
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--color-text-main);
}

.tech-card:hover .skill-pill:hover {
  background: var(--card-color);
  color: var(--pill-font-color); /* Usa a cor dinâmica (preto ou branco) */
  border-color: var(--card-color);
  font-weight: 600;
}

@media (min-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
