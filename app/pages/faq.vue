<script setup lang="ts">
import Contact from '~/components/contact.vue';

useSeoMeta({
    // SEO principal
    title: 'Preguntas Frecuentes | BlueLynk',
    description:
        'Resuelve tus dudas sobre desarrollo web, e-commerce, automatización, soporte y el proceso de trabajo de BlueLynk.',
    // Open Graph
    ogTitle: 'Preguntas Frecuentes | BlueLynk',
    ogDescription:
        'Encuentra respuestas sobre nuestros servicios, tiempos de entrega, soporte y cómo trabajamos en BlueLynk.',
    ogImage: 'https://www.bluelynk.dev/og-image.jpg',
    ogUrl: 'https://www.bluelynk.dev/faq',
    ogType: 'website',
    ogLocale: 'es_PE',
    ogSiteName: 'BlueLynk',
    // Twitter / X
    twitterCard: 'summary_large_image',
    twitterTitle: 'Preguntas Frecuentes | BlueLynk',
    twitterDescription:
        'Conoce más sobre nuestros servicios y el proceso de trabajo de BlueLynk.',

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
            href: 'https://www.bluelynk.dev/faq',
        },
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: '¿Qué servicios ofrece BlueLynk?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'BlueLynk ofrece desarrollo web, e-commerce, automatización, integraciones y soluciones digitales modernas para negocios.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: '¿Trabajan con negocios pequeños?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Sí. Trabajamos con negocios de distintos tamaños y adaptamos las soluciones según las necesidades de cada proyecto.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: '¿Cuánto demora un proyecto?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'El tiempo depende del alcance del proyecto. Después de evaluar tus necesidades, entregamos una propuesta clara con tiempos estimados.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: '¿Ofrecen soporte después de entregar el proyecto?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Sí. Ofrecemos soporte, mantenimiento y mejoras continuas para asegurar el correcto funcionamiento de cada solución.',
                        },
                    },
                ],
            }),
        },
    ],
})

const aboutFaqs = [
    {
        q: '¿Vale la pena invertir en una web?',
        a: 'Una web profesional mejora tu presencia online, genera confianza y puede ayudarte a conseguir más clientes.'
    },
    {
        q: '¿Cuánto tiempo toma un proyecto?',
        a: 'Depende del alcance. Un sitio web informativo puede estar listo en 2–3 semanas. Un e-commerce puede tomar de 4 a 8 semanas.'
    },
    {
        q: '¿Trabajan con empresas fuera de Lima?',
        a: 'Sí, trabajamos con clientes en todo el Perú y también en el extranjero. Todo el proceso es 100% remoto.'
    },
    {
        q: '¿Qué incluye el soporte post-entrega?',
        a: 'Todos los proyectos incluyen 30 días de soporte gratuito. Después, ofrecemos planes de mantenimiento mensual.'
    },
    {
        q: '¿Cómo son los pagos?',
        a: 'Trabajamos con pagos fraccionados: 50% al inicio del proyecto y 50% a la entrega.'
    },
    {
        q: '¿Cómo inicia el proyecto?',
        a: 'Todo comienza con una reunión breve donde entendemos tu negocio, objetivos y necesidades. Luego te proponemos una estructura y diseño inicial antes de empezar el desarrollo.'
    },
    {
        q: '¿Puedo hacer cambios durante el proyecto?',
        a: 'Sí, incluimos revisiones en el proceso para ajustar detalles. Cambios grandes fuera del alcance inicial pueden implicar un costo adicional.'
    },
    {
        q: '¿El diseño es personalizado o usan plantillas?',
        a: 'Trabajamos con diseños modernos y adaptables, que pueden ser personalizados según tu marca y objetivos.'
    },
    {
        q: '¿Puedo elegir colores, tipografías y estilo?',
        a: 'Sí, todo se adapta a tu branding. También podemos ayudarte a definirlo si aún no lo tienes claro.'
    },
    {
        q: '¿Mi página será responsive?',
        a: 'Sí, todos nuestros sitios están optimizados para verse bien en móviles, tablets y computadoras.'
    },
    {
        q: '¿Incluyen dominio y hosting?',
        a: 'Podemos asesorarte en la compra de dominio y hosting, BlueLynk también te ofrece hostear tu web o proyecto en un subdomain ".bluelynk.dev" y un hosting gratuito dependiendo del proyecto.'
    },
    {
        q: '¿La web será rápida y optimizada?',
        a: 'Sí, optimizamos velocidad, rendimiento y buenas prácticas SEO desde el desarrollo.'
    },
    {
        q: '¿Mi web aparecerá en Google?',
        a: 'Implementamos bases de SEO técnico para que tu web pueda indexarse correctamente en buscadores.'
    },
    {
        q: '¿Ofrecen servicios de marketing digital?',
        a: 'Sí, podemos ayudarte con estrategias adicionales como optimización SEO, landing pages y automatización.'
    },
    {
        q: '¿Incluyen seguridad en la web?',
        a: 'Aplicamos buenas prácticas de seguridad para proteger tu sitio y la información de tus usuarios.'
    }
]
</script>

<template>
    <FaqSection :faqs="aboutFaqs" />

    <Contact />
</template>

<style scoped></style>
