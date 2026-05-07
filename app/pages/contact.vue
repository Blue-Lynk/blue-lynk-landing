<script setup lang="ts">
useSeoMeta({
    // SEO principal
    title: 'Contacto | BlueLynk',
    description:
        'Contáctanos para conversar sobre tu proyecto, desarrollo web, automatización o soluciones digitales para tu negocio.',
    // Open Graph
    ogTitle: 'Contacto | BlueLynk',
    ogDescription:
        'Hablemos sobre cómo podemos ayudarte a construir una solución digital moderna para tu negocio.',
    ogImage: 'https://www.bluelynk.dev/og-image.jpg',
    ogUrl: 'https://www.bluelynk.dev/contact',
    ogType: 'website',
    ogLocale: 'es_PE',
    ogSiteName: 'BlueLynk',
    // Twitter / X
    twitterCard: 'summary_large_image',
    twitterTitle: 'Contacto | BlueLynk',
    twitterDescription:
        'Cuéntanos sobre tu proyecto y conversemos sobre la mejor solución para tu negocio.',
    twitterImage: 'https://www.bluelynk.dev/og-image.jpg',

    // Crawlers
    robots: 'index, follow',
})

useHead({
    htmlAttrs: {
        lang: 'es',
    },
    link: [
        {
            rel: 'canonical',
            href: 'https://www.bluelynk.dev/contact',
        },
    ],

    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ContactPage',
                name: 'Contacto | BlueLynk',
                description:
                    'Página de contacto de BlueLynk para consultas sobre desarrollo web, automatización y soluciones digitales.',
                url: 'https://www.bluelynk.dev/contact',
                mainEntity: {
                    '@type': 'Organization',
                    name: 'BlueLynk',
                    alternateName: [
                        'Blue Lynk',
                        'BlueLink',
                        'Blue Link',
                        'Blu Lynk',
                        'bluelynk',
                        'bluelink'
                    ],
                    url: 'https://www.bluelynk.dev',
                    logo: 'https://www.bluelynk.dev/logo.png',
                    email: 'info@bluelynk.dev',
                    telephone: '+51 987 151 798',
                    contactPoint: {
                        '@type': 'ContactPoint',
                        telephone: '+51 987 151 798',
                        contactType: 'customer support',
                        areaServed: 'PE',
                        availableLanguage: ['Spanish'],
                    },
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Lima',
                        addressRegion: 'Lima',
                        addressCountry: 'PE',
                    },
                },
            }),
        },
    ],
})
</script>

<template>
    <Contact />
</template>

<style scoped></style>