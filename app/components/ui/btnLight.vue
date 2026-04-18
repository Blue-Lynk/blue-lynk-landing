<script setup lang="ts">
import { NuxtLink } from '#components'
defineProps<{
    variant?: 'btn-primary' | 'btn-secondary'
    to?: string
    href?: string
}>()
</script>

<template>
    <component :is="to ? NuxtLink : href ? 'a' : 'button'" :to="to" :href="href"
        :class="['btn', variant || 'btn-primary']">
        <slot />
    </component>
</template>

<style scoped>
.btn {
    text-decoration: none;
    border: none;
    padding: .7rem 1.8rem;
    border-radius: 8px;
    font-family: var(--font-body);
    font-size: .9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all .2s ease;
}

.btn-primary {
    background: var(--color-bg-light);
    color: var(--color-bg-dark);
}

.btn-primary:hover {
    background: var(--color-bg-lightest);
    transform: translateY(-2px);
}

.btn-secondary {
    background: transparent;
    color: var(--color-bg-light);
    border: 1.5px solid rgba(244, 246, 255, 0.45);
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
}
</style>