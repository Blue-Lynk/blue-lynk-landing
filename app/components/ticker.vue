<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'

interface Item {
  text: string
  highlight?: boolean
}

const props = defineProps<{
  items: Item[]
  duration?: number
}>()

const tickerInner = ref<HTMLElement | null>(null)

onMounted(async () => {
  await nextTick()
  if (document.fonts) await document.fonts.ready

  const el = tickerInner.value
  if (!el) return

  gsap.killTweensOf(el)
  gsap.set(el, { x: 0 })

  gsap.to(el, {
    xPercent: -50, 
    duration: props.duration ?? 20,
    ease: 'none',
    repeat: -1,
    force3D: true 
  })
})
</script>

<template>
  <div class="ticker">
    <div ref="tickerInner" class="ticker-inner">
      <div
        v-for="(item, i) in [...items, ...items]"
        :key="i"
        class="ticker-item"
      >
        <span v-if="item.highlight"><b>{{ item.text }}</b></span>
        <span v-else>{{ item.text }}</span>
        <span class="separator">✦</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ticker {
  background: var(--color-bg-dark);
  padding: 1rem 0;
  overflow: hidden;
  width: 100%;
}

.ticker-inner {
  display: flex;
  width: max-content;
  gap: 0; 
  will-change: transform;
}

.ticker-item {
  display: flex;
  align-items: center;
  padding-right: 3rem; 
  
  font-family: var(--font-body);
  font-size: .75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-bg-light);
  white-space: nowrap;
  flex-shrink: 0;
}

.ticker-item b {
  color: var(--color-bg-lightest);
  font-weight: 600;
}

.separator {
  margin-left: 3rem; 
  font-size: 0.8rem;
  color: var(--color-primary);
}
</style>