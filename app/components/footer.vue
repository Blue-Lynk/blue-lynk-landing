<script setup lang="ts">
const links = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Accesibility', href: '#' }
];

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="foot">
    <div class="foot-logo" aria-label="Blue Lynk Home">
      <!-- B<em>L</em>UE<b>LYNK</b> -->
      <img src="/BlueLynk-horizontal-azul.png" alt="Blue Lynk Logo">
    </div>

    <small class="foot-copy vivid-text">
      © {{ currentYear }} Blue Lynk · Lima, Perú
    </small>

    <nav class="foot-links" aria-label="Footer Navigation">
      <a v-for="link in links" :key="link.name" :href="link.href" class="foot-link vivid-text">
        {{ link.name }}
      </a>
    </nav>
  </footer>
</template>

<style scoped>
.foot {
  background: var(--color-bg-darkest);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  border-top: 1px solid rgba(244, 246, 255, 0.07);
}

.foot-logo img {
    width: auto;
    height: 25px;
}

.foot-copy {
  font-size: 0.8rem;
  order: 2;
}

.foot-links {
  display: flex;
  gap: 1.5rem;
}

.foot-link {
  font-size: 0.8rem;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.2s ease;
}

.foot-link:hover {
  color: var(--color-bg-lightest);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .foot {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 1rem;
  }

  .foot-copy {
    order: 3;
  }

  .foot-links {
    justify-content: center;
  }
}
</style>