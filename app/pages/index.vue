<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import posts from '~/composables/posts.json'
useSeoMeta({
    // Se muestra en los resultados de busqueda
    title: 'Consultoría y Desarrollo Web en Lima | BlueLynk',
    description: 'Diseñamos sitios web, e-commerce y soluciones digitales para PYMEs peruanas. Rápido, moderno y sin complicaciones. Lima, Perú.',

    // WhatsApp, Facebook, LinkedIn
    ogTitle: 'Consultoría y Desarrollo Web | BlueLynk',
    ogDescription: 'Soluciones digitales para PYMEs peruanas: sitios web, e-commerce, automatización y más.',
    ogImage: 'https://www.bluelynk.dev/og-image.jpg', // 1200×630px
    ogUrl: 'https://www.bluelynk.dev',
    ogType: 'website',
    ogLocale: 'es_PE',
    ogSiteName: 'BlueLynk',

    // Twitter/X 
    twitterCard: 'summary_large_image',
    twitterTitle: 'Consultoría y Desarrollo Web en Lima | BlueLynk',
    twitterDescription: 'Hacemos crecer a los negocios peruanos con tecnología accesible.',
    twitterImage: 'https://www.bluelynk.dev/og-image.jpg',

    // Instrucciones para los crawlers de Google
    robots: 'index, follow',
})

useHead({
    htmlAttrs: { lang: 'es' },
    link: [{ rel: 'canonical', href: 'https://www.bluelynk.dev' }],

    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                name: 'BlueLynk',
                alternateName: [
                    'Blue Lynk',
                    'BlueLink',
                    'Blue Link',
                    'Blu Lynk',
                    'bluelynk',
                    'bluelink'
                ],
                description: 'Agencia de desarrollo web y soluciones digitales para PYMEs peruanas.',
                url: 'https://www.bluelynk.dev',
                logo: 'https://www.bluelynk.dev/logo.png',
                telephone: '+51 987 151 798',
                email: 'info@bluelynk.dev',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Lima',
                    addressRegion: 'Lima',
                    addressCountry: 'PE',
                },
                areaServed: {
                    '@type': 'Country',
                    name: 'Perú',
                },
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Servicios de BlueLynk',
                    itemListElement: [
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desarrollo de sitios web' } },
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce' } },
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatización de procesos' } },
                        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Soporte TI' } },
                    ],
                },
                founder: [
                    { '@type': 'Person', name: 'Daniel C.', jobTitle: 'Creative Director' },
                    { '@type': 'Person', name: 'Nicolas A.', jobTitle: 'Tech Lead' },
                ],
                foundingDate: '2026',
                foundingLocation: { '@type': 'Place', name: 'Lima, Perú' },
            }),
        },
    ],
})

const homeFaqs = [
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
    }
]

const latestPosts = computed(() => {
    return posts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3)
})

/* ----------------------------------------------------------
   Services list (link-row style instead of cards)
---------------------------------------------------------- */
const services = [
    {
        title: 'SITIOS WEB',
        desc: 'Páginas modernas, rápidas y orientadas a conversión, alineadas a tu marca.',
        icon: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>`
    },
    {
        title: 'DESARROLLO DE SOLUCIONES',
        desc: 'Plataformas, sistemas internos y MVPs a medida que escalan junto con tu negocio.',
        icon: `<svg viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>`
    },
    {
        title: 'ANALÍTICA DE DATOS',
        desc: 'Dashboards, BI y modelado de datos para tomar mejores decisiones basadas en información real.',
        icon: `<svg viewBox="0 0 24 24"><path d="M3 3v18h18" /><path d="M7 16l4-6 4 3 5-8" /></svg>`
    },
]

/* ----------------------------------------------------------
   About stats — count-up on scroll into view
---------------------------------------------------------- */
const aboutStats = [
    { value: 2026, suffix: '', label: 'Fundada en Lima', isYear: true },
    { value: 2, suffix: '+', label: 'Proyectos implementados' },
    { value: 2, suffix: '+', label: 'Industrias atendidas' },
    { value: 100, suffix: '%', label: 'Enfoque en satisfacción' },
]

const statRefs = ref<HTMLElement[]>([])
const statDisplay = ref(aboutStats.map(s => (s.isYear ? s.value : 0)))
let statsObserver: IntersectionObserver | null = null

function animateStat(index: number) {
    const target = aboutStats[index]
    if (target?.isYear) {
        statDisplay.value[index] = target?.value
        return
    }
    const duration = 1200
    const start = performance.now()
    const from = 0
    const to = target?.value || 0

    function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        statDisplay.value[index] = Math.round(from + (to - from) * eased)
        if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
}

onMounted(() => {
    statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idx = Number((entry.target as HTMLElement).dataset.statIndex)
                animateStat(idx)
                statsObserver?.unobserve(entry.target)
            }
        })
    }, { threshold: 0.4 })

    statRefs.value.forEach(el => el && statsObserver?.observe(el))
})

onUnmounted(() => {
    statsObserver?.disconnect()
})
</script>

<template>
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-glow"></div>
        <div class="hero-content content-center-md">
            <p class="top-title text-md-center">Consultoría y Desarrollo Web en Lima, Perú</p>
            <h1 class="hero-h h1 text-md-center">
                TU EMPRESA <em>PREPARADA</em><br>PARA EL FUTURO
            </h1>
            <p class="sec-sub light-text text-md-center md">
                Desarrollamos soluciones tecnológicas a medida que optimizan procesos,
                mejoran la toma de decisiones y aceleran tu crecimiento.
            </p>
            <div class="hero-btns ">
                <UiBtnLight variant="btn-primary" to="/services">Ver servicios</UiBtnLight>
                <UiBtnLight variant="btn-secondary" to="/portfolio">Ver portafolio</UiBtnLight>
            </div>
        </div>
    </section>

    <!-- Ticker Section -->
    <Ticker :items="[
        { text: 'E-commerce' },
        { text: 'Desarrollo web a medida', highlight: true },
        { text: 'Aplicaciones móviles' },
        { text: 'Integraciones API', highlight: true },
        { text: 'SaaS' },
        { text: 'Mantenimiento y soporte', highlight: true },
        { text: 'Hosting' },
    ]" />

    <!-- Services Section -->
    <section class="sec sections light mid" id="servicios">
        <p class="top-title">Qué hacemos</p>
        <h2 class="h2">NUESTROS SERVICIOS</h2>
        <p class="sec-sub">Soluciones tecnológicas diseñadas para optimizar operaciones, mejorar la gestión
            y acelerar el crecimiento de tu negocio.
        </p>

        <div class="services-list">
            <NuxtLink
                v-for="(service, i) in services"
                :key="service.title"
                to="/contact"
                class="service-row"
                :class="{ 'service-row-large': i === 0 }"
            >
                <span class="service-index">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="service-icon" v-html="service.icon"></span>
                <span class="service-text">
                    <span class="service-title">{{ service.title }}</span>
                    <span class="service-desc">{{ service.desc }}</span>
                </span>
                <span class="service-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </span>
            </NuxtLink>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section class="sections darkest mid" id="portafolio">
        <p class="top-title">Trabajo reciente</p>
        <h2 class="h2">PORTAFOLIO</h2>
        <p class="sec-sub">Proyectos que transformaron negocios reales.</p>
        <div class="port-grid">
            <div class="port-card">
                <div class="port-thumb t1">BL</div>
                <div class="port-info">
                    <p class="port-tag vivid-text">E-Commerce · Retail</p>
                    <h3 class="port-name h3 bright-text">MODA PERÚ STORE</h3>
                    <p class="bright-text">Tienda online con +200 productos, pagos con Yape y PagoEfectivo, entrega en
                        todo Lima.</p>
                </div>
            </div>
            <div class="port-card">
                <div class="port-thumb t2">BL</div>
                <div class="port-info">
                    <p class="port-tag vivid-text">Sistema · Salud</p>
                    <h3 class="port-name h3 bright-text">CLÍNICA DIGITAL</h3>
                    <p class="light-text">Plataforma de citas online, historial de pacientes y facturación
                        electrónica SUNAT.</p>
                </div>
            </div>
            <div class="port-card">
                <div class="port-thumb t3">BL</div>
                <div class="port-info">
                    <p class="port-tag vivid-text">Web · Educación</p>
                    <h3 class="port-name h3 bright-text">ACADEMIA LYNK</h3>
                    <p class="light-text">Sitio web con landing de conversión, blog SEO y formulario de inscripción
                        integrado.</p>
                </div>
            </div>
        </div>
        <div class="block-button">
            <UiBtnLight variant="btn-secondary" to="portfolio">Ver todos los proyectos</UiBtnLight>
        </div>
    </section>

    <!-- About Section -->
    <section class="sections divided light" id="nosotros">
        <div>
            <p class="top-title">Quiénes somos</p>
            <h2 class="h2">TECNOLOGÍA CON ENFOQUE EN RESULTADOS</h2>

            <p class="sec-sub">
                En BlueLynk desarrollamos soluciones tecnológicas a medida para empresas que buscan
                optimizar sus procesos y fortalecer su presencia digital. Nos enfocamos en entender cada
                negocio y construir herramientas que generen impacto real.
            </p>

            <div class="about-stats">
                <div
                    v-for="(stat, i) in aboutStats"
                    :key="stat.label"
                    class="about-stat"
                    :data-stat-index="i"
                    :ref="el => { if (el) statRefs[i] = el as HTMLElement }"
                >
                    <div class="about-stat-n">{{ statDisplay[i] }}{{ stat.suffix }}</div>
                    <div class="about-stat-l">{{ stat.label }}</div>
                </div>
            </div>
        </div>

        <div>
            <div class="about-quote">
                <div class="about-quote-mark">"</div>
                <p class="light-text">
                    Creemos que la tecnología debe adaptarse al negocio, no al revés. Por eso,
                    diseñamos soluciones prácticas, escalables y alineadas a los objetivos de cada cliente.
                </p>
                <div class="about-quote-sig vivid-text">— BlueLynk</div>
            </div>
        </div>
    </section>

    <!--FAQ Section -->
    <FaqSection :faqs="homeFaqs" />

    <!-- Blog Section -->
    <section class="sections light mid" id="blog">
        <p class="top-title">
            Blog de desarrollo web en Lima para empresas
        </p>

        <h2 class="h2">ARTÍCULOS Y GUÍAS</h2>

        <p class="sec-sub">
            Aprende cómo llevar tu negocio al siguiente nivel con estrategias de desarrollo web,
            SEO y e-commerce en Perú. Compartimos guías prácticas para ayudarte a tener
            <strong>tu empresa preparada para el futuro</strong> con herramientas digitales
            modernas y efectivas.
        </p>

        <div class="post-list">
            <NuxtLink
                v-for="(post, i) in latestPosts"
                :key="post.id"
                :to="`/blog/${post.slug}`"
                class="post-row"
                :class="{ 'post-row-featured': i === 0 }"
            >
                <div class="post-row-image">
                    <img :src="post.image" :alt="post.imageAlt" loading="lazy">
                </div>

                <div class="post-row-body">
                    <p class="post-row-category">{{ post.category }}</p>
                    <h3 class="post-row-title">{{ post.title }}</h3>
                    <p class="post-row-desc">{{ post.description }}</p>
                    <span class="post-row-link">
                        Leer artículo
                        <svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                    </span>
                </div>
            </NuxtLink>
        </div>

        <!-- CTA -->
        <div class="block-button">
            <UiBtnDark variant="btn-primary" to="/blog">
                Ver todos los artículos
            </UiBtnDark>
        </div>

    </section>

    <!-- Contact Section -->
    <Contact />
</template>

<style scoped>
/* animation: fup .6s .1s both */

/* Portafolio */
.port-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.25rem
}

.port-card {
    border-radius: 14px;
    overflow: hidden;
    background: var(--color-bg-dark);
    cursor: pointer;
    transition: transform .2s;
}

.port-card:hover {
    transform: scale(1.02)
}

.port-thumb {
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-title);
    font-size: 3rem;
    letter-spacing: 2px;
    color: rgba(244, 246, 255, 0.15)
}

.port-thumb.t1 {
    background: #1a2e7a
}

.port-thumb.t2 {
    background: #162868
}

.port-thumb.t3 {
    background: #111f60
}

.port-info {
    padding: 1.1rem 1.25rem
}

.port-tag {
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: .35rem
}

.port-name {
    letter-spacing: 1px;
    margin-bottom: .8rem
}

/* ============================================
   SERVICES — link-row layout
============================================ */
.services-list {
    margin-top: 2.5rem;
    border-top: 1px solid rgba(81, 112, 255, 0.18);
}

.service-row {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
    gap: 1.75rem;
    padding: 1.75rem 0.5rem;
    border-bottom: 1px solid rgba(81, 112, 255, 0.18);
    text-decoration: none;
    transition: background-color .25s, padding-left .25s;
}

.service-row:hover {
    background: rgba(81, 112, 255, 0.06);
    padding-left: 1.25rem;
}

/* Desktop split: big card left half, two stacked right half */
@media (min-width: 836px) {
    .services-list {
        margin-top: 2.5rem;
        border-top: none;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1.5rem;
        min-height: 560px;
    }

    .service-row {
        border: 1px solid rgba(81, 112, 255, 0.18);
        border-radius: 16px;
        padding: 2.5rem;
        grid-template-columns: 1fr auto;
        grid-template-areas:
            "index arrow"
            "icon  icon"
            "text  text";
        align-content: start;
        gap: 1.25rem;
        height: 100%;
    }

    .service-row:hover {
        padding-left: 2.5rem;
        padding-top: 2.5rem;
    }

    /* First service: big, occupies full left column */
    .service-row-large {
        grid-row: 1 / 3;
        grid-column: 1;
        justify-content: center;
        padding: 3rem;
    }

    .service-row-large:hover {
        padding: 3rem;
    }

    /* Second & third: stacked on the right column */
    .service-row:not(.service-row-large) {
        grid-column: 2;
    }

    .service-row:nth-child(2) {
        grid-row: 1;
    }

    .service-row:nth-child(3) {
        grid-row: 2;
    }

    .service-row .service-index {
        grid-area: index;
    }

    .service-row .service-icon {
        grid-area: icon;
        width: 56px;
        height: 56px;
    }

    .service-row .service-icon :deep(svg) {
        width: 26px;
        height: 26px;
    }

    .service-row .service-text {
        grid-area: text;
        margin-top: .5rem;
    }

    .service-row .service-arrow {
        grid-area: arrow;
        justify-self: end;
    }

    .service-row-large .service-icon {
        width: 72px;
        height: 72px;
    }

    .service-row-large .service-icon :deep(svg) {
        width: 32px;
        height: 32px;
    }

    .service-row-large .service-title {
        font-size: 2.4rem;
    }

    .service-row-large .service-desc {
        font-size: 1rem;
        max-width: 40ch;
    }
}

.service-index {
    font-family: var(--font-title);
    font-size: 1.4rem;
    color: var(--color-primary);
    opacity: .55;
    min-width: 2.5ch;
}

.service-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    border: var(--color-card-border-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.service-icon :deep(svg) {
    width: 20px;
    height: 20px;
    stroke: var(--color-primary);
    fill: none;
    stroke-width: 1.8;
}

.service-text {
    display: flex;
    flex-direction: column;
    gap: .35rem;
    min-width: 0;
}

.service-title {
    font-family: var(--font-title);
    font-size: 1.5rem;
    letter-spacing: 1px;
    color: var(--color-bg-darkest);
}

.service-desc {
    font-size: .9rem;
    line-height: 1.6;
    color: var(--color-text-on-light-muted);
    max-width: 60ch;
}

.service-arrow {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1.5px solid rgba(81, 112, 255, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background-color .25s, border-color .25s, transform .25s;
}

.service-arrow svg {
    width: 18px;
    height: 18px;
    stroke: var(--color-primary);
    fill: none;
    stroke-width: 2;
    transition: stroke .25s;
}

.service-row:hover .service-arrow {
    background: var(--color-primary);
    border-color: var(--color-primary);
    transform: rotate(45deg);
}

.service-row:hover .service-arrow svg {
    stroke: var(--color-bg-lightest);
}

/* ============================================
   ABOUT STATS — loose statistics, no cards
============================================ */
.about-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem 3rem;
    margin-top: 3rem;
    padding-top: 2.5rem;
    border-top: 1px solid rgba(81, 112, 255, 0.18);
}

.about-stat {
    display: flex;
    flex-direction: column;
    gap: .35rem;
}

.about-stat-n {
    font-family: var(--font-title);
    font-size: 3.2rem;
    line-height: 1;
    color: var(--color-primary);
    font-variant-numeric: tabular-nums;
}

.about-stat-l {
    font-size: .78rem;
    color: var(--color-text-on-light-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.about-quote {
    background: var(--color-bg-darkest);
    border-radius: 16px;
    padding: 2rem;
    position: relative;
}

.about-quote-mark {
    font-family: var(--font-title);
    font-size: 5rem;
    color: var(--color-primary);
    line-height: .7;
    margin-bottom: .75rem
}

.about-quote-sig {
    margin-top: 1.25rem;
}

/* ============================================
   BLOG — magazine row layout
============================================ */
.post-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2.5rem;
}

.post-row {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 2rem;
    align-items: center;
    text-decoration: none;
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(81, 112, 255, 0.18);
    transition: padding-left .25s;
}

.post-list .post-row:first-child {
    border-top: 1px solid rgba(81, 112, 255, 0.18);
}

.post-row:hover {
    padding-left: 1rem;
}

.post-row-image {
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    aspect-ratio: 16 / 10;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%);
}

.post-row-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .4s;
}

.post-row:hover .post-row-image img {
    transform: scale(1.05);
}

.post-row-body {
    display: flex;
    flex-direction: column;
    gap: .6rem;
    min-width: 0;
}

.post-row-category {
    font-size: .75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--color-primary);
    font-weight: 600;
}

.post-row-title {
    font-family: var(--font-title);
    font-size: 1.9rem;
    letter-spacing: 1px;
    line-height: 1.15;
    color: var(--color-bg-darkest);
    max-width: 28ch;
}

.post-row-desc {
    font-size: .95rem;
    line-height: 1.65;
    color: var(--color-text-on-light-muted);
    max-width: 60ch;
}

.post-row-link {
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    margin-top: .5rem;
    font-weight: 600;
    font-size: .9rem;
    color: var(--color-primary);
}

.post-row-link svg {
    width: 16px;
    height: 16px;
    stroke: var(--color-primary);
    fill: none;
    stroke-width: 2;
    transition: transform .25s;
}

.post-row:hover .post-row-link svg {
    transform: translateX(4px);
}

.post-row-featured .post-row-title {
    font-size: 2.4rem;
}

/* Services */
.svc-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* ============================================
   RESPONSIVE
============================================ */
@media (max-width: 835px) {
    .service-row {
        grid-template-columns: auto 1fr auto;
        gap: 1rem;
    }

    .service-index {
        display: none;
    }

    .post-row,
    .post-row-featured {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .post-row-title,
    .post-row-featured .post-row-title {
        font-size: 1.6rem;
    }
}

@media (max-width: 475px) {
    .about-stats {
        gap: 2rem;
        justify-content: space-between;
    }

    .about-stat-n {
        font-size: 2.4rem;
    }

    .service-row {
        gap: .75rem;
        padding: 1.25rem 0.25rem;
    }

    .service-icon {
        width: 38px;
        height: 38px;
    }

    .service-title {
        font-size: 1.25rem;
    }

    .service-arrow {
        width: 34px;
        height: 34px;
    }
}
</style>