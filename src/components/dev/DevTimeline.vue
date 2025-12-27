<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n()

console.log(tm('dev_mode.timeline.freelancer.techs'))
const timelineEvents = computed(() => [
  {
    year: t('dev_mode.timeline.freelancer.year'),
    role: t('dev_mode.timeline.freelancer.role'),
    company: t('dev_mode.timeline.freelancer.company'),
    desc: t('dev_mode.timeline.freelancer.desc'),
    techs: tm('dev_mode.timeline.freelancer.techs').map((tech) => rt(tech)),
  },
  {
    year: t('dev_mode.timeline.tech_lead.year'),
    role: t('dev_mode.timeline.tech_lead.role'),
    company: t('dev_mode.timeline.tech_lead.company'),
    desc: t('dev_mode.timeline.tech_lead.desc'),
    techs: tm('dev_mode.timeline.tech_lead.techs').map((tech) => rt(tech)),
  },
  {
    year: t('dev_mode.timeline.intern.year'),
    role: t('dev_mode.timeline.intern.role'),
    company: t('dev_mode.timeline.intern.company'),
    desc: t('dev_mode.timeline.intern.desc'),
    techs: tm('dev_mode.timeline.intern.techs').map((tech) => rt(tech)),
  },
  {
    year: t('dev_mode.timeline.academic.year'),
    role: t('dev_mode.timeline.academic.role'),
    company: t('dev_mode.timeline.academic.company'),
    desc: t('dev_mode.timeline.academic.desc'),
    techs: tm('dev_mode.timeline.academic.techs').map((tech) => rt(tech)),
  },
])
</script>

<template>
  <section class="section timeline-section">
    <h3 class="section-title"><span class="icon">🚀</span>{{ t('dev_mode.timeline.title') }}</h3>

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
            <span class="company">@ {{ event.company }}</span>
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
  padding-bottom: 4rem;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.timeline-item {
  display: flex;
  gap: 1rem;
  position: relative;
}

/* --- DATA --- */
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

/* --- MARCADOR --- */
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

/* --- CARD CONTEÚDO --- */
.timeline-content {
  flex: 1;
  background: var(--color-bg-card);
  border: 1px solid var(--border-dim);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  transition: all 0.3s ease;
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
  margin-bottom: 0.5rem;
}

.description {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* --- TAGS --- */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  font-family: var(--font-code);
  font-size: 0.75rem;
  background: rgba(0, 0, 0, 0.3);
  color: var(--color-secondary);
  padding: 0.3rem 0.6rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-dim);
}

/* --- DESKTOP --- */
@media (min-width: 768px) {
  .section.timeline-section {
    padding-bottom: 6rem;
  }

  .timeline-item {
    gap: 1.5rem;
  }

  .desktop-only {
    display: block;
    min-width: 195px;
    text-align: right;
    padding-top: 2px;
  }

  .mobile-year {
    display: none;
  }

  .year {
    font-size: 1rem;
  }

  /* Hover Effect no Desktop */
  .timeline-content:hover {
    background: var(--color-bg-card-hover);
    border-color: var(--border-light);
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .role {
    font-size: 1.3rem;
  }
}
</style>
