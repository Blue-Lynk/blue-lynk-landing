<script setup lang="ts">
import Footer from '~/components/footer.vue';
import Header from '~/components/header.vue';


</script>

<template>
    <div>
        <Header />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>

<style scoped>
main {
    padding-top: 55px;
    font-family: 'DM Sans', sans-serif;
    background: var(--color-bg-light);
    color: var(--color-text-on-light);
    overflow-x: hidden;
}
</style>