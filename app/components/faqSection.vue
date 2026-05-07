<script setup lang="ts">
import { ref } from 'vue'

interface Faq {
    q: string
    a: string
}

const props = defineProps<{
    faqs: Faq[]
}>()

const activeIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
    <section class="sections lightest" id="faq">
        <div class="faq-container">
            <p class="top-title">Resolvemos tus dudas</p>
            <h2 class="h2">Preguntas frecuentes</h2>
            <p class="sec-sub">Todo lo que necesitas saber antes de empezar.</p>

            <div v-for="(item, index) in props.faqs" :key="index" class="faq-item"
                :class="{ 'open': activeIndex === index }" @click="toggleFaq(index)">
                <div class="faq-q">
                    {{ item.q }}
                    <div class="faq-icon">
                        <svg viewBox="0 0 10 10">
                            <path d="M5 1v8M1 5h8" stroke="currentColor" stroke-width="2" />
                        </svg>
                    </div>
                </div>
                <div class="faq-a">
                    {{ item.a }}
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.faq-container {
    max-width: 780px;
    margin: 0 auto;
}

.faq-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding: 1.5rem 0;
    cursor: pointer;
    transition: all 0.3s ease;
}

.faq-q {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    font-size: .95rem;
    color: var(--color-bg-darkest);
}

.faq-icon {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--color-primary);
    color: var(--color-bg-lightest);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform .25s
}

.faq-icon svg {
    width: 10px;
    height: 10px;
    stroke: var(--color-bg-lightest);
    fill: none;
    stroke-width: 2.5
}

.faq-a {
    font-size: .88rem;
    color: var(--color-text-on-light-muted);
    line-height: 1.7;
    max-height: 0;
    overflow: hidden;
    transition: all .4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
}

.faq-item.open .faq-a {
    max-height: 300px;
    margin-top: 1rem;
    opacity: 1;
}

.faq-item.open .faq-icon {
    transform: rotate(45deg);
    background-color: var(--color-primary);
}
</style>
