<script setup lang="ts">
// Definimos los links para que el template sea más limpio y fácil de mantener
const links = [
  { name: 'Privacidad', href: '#' },
  { name: 'Términos', href: '#' },
  { name: 'Instagram', href: '#' }
];

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="foot">
    <div class="foot-logo" aria-label="Blue Lynk Home">
      BLUE<b>LYNK</b>
    </div>

    <small class="foot-copy">
      © {{ currentYear }} Blue Lynk · Lima, Perú
    </small>

    <nav class="foot-links" aria-label="Footer Navigation">
      <a 
        v-for="link in links" 
        :key="link.name" 
        :href="link.href"
        class="foot-link"
      >
        {{ link.name }}
      </a>
    </nav>
  </footer>
</template>

<style scoped>
.foot {
  --text-muted: rgba(244, 246, 255, 0.4);
  --text-hover: var(--color-primary, #007bff); /* Fallback si no existe la variable */
  
  background: var(--color-bg-darkest);
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  border-top: 1px solid rgba(244, 246, 255, 0.07);
}

.foot-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem; /* Un poco más grande para destacar */
  letter-spacing: 2px;
  color: var(--color-bg-light);
  user-select: none;
}

.foot-logo b {
  color: var(--color-primary);
}

.foot-copy {
  font-size: 0.8rem;
  color: var(--text-muted);
  order: 2; /* En móvil, suele ir al final */
}

.foot-links {
  display: flex;
  gap: 1.5rem;
}

.foot-link {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.3s ease, transform 0.2s ease;
}

.foot-link:hover {
  color: var(--text-hover);
  transform: translateY(-1px);
}

/* Optimización para móviles */
@media (max-width: 768px) {
  .foot {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 1rem;
  }
  
  .foot-copy {
    order: 3; /* El copy baja al final en móviles */
  }

  .foot-links {
    justify-content: center;
  }
}
</style>