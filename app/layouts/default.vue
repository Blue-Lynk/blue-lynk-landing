<script setup lang="ts">

</script>

<template>
    <div>
        <Header />
        <main>
            <slot />
        </main>
        <Footer />
        <UiWhatsAppFloat phone="51987151798" message="Hola, vengo desde tu web" :delay="5000" />
    </div>
</template>

<style scoped>
main {
    padding-top: 55px;
    font-family: var(--font-body);
    background: var(--color-bg-light);
    color: var(--color-text-on-light);
    overflow-x: hidden;
    min-height: 100vh;
}
</style>