<script setup>
const techCategories = [
  {
    name: 'Backend & Core',
    icon: '⚙️',
    color: '#ff007a', // Rosa (Sua cor primária)
    skills: ['Laravel', 'PHP 8+', 'SQL / MySQL', 'API Rest', 'WordPress Core', 'Livewire'],
  },
  {
    name: 'Frontend',
    icon: '🎨',
    color: '#00f3ff', // Ciano (Sua cor secundária)
    fontColor: '#000',

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
    color: '#7000ff', // Roxo (Cor de acento)
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
        :style="{ '--card-color': cat.color, '--font-color': cat.fontColor || '#fff' }"
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
  padding: 2rem 0 4rem 0;
}

.tech-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.tech-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-card:hover {
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
  color: #ccc;
  background: rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #333;
  transition: 0.2s;
}

@media (min-width: 768px) {
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .tech-card:hover .skill-pill {
    border-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  .tech-card:hover .skill-pill:hover {
    background: var(--card-color);
    color: var(--font-color);
    border-color: var(--card-color);
    font-weight: bold;
  }
}
</style>
