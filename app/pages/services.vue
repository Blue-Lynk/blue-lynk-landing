<script setup lang="ts">
useSeoMeta({
    title: 'Servicios | BlueLynk',
    description: 'Descubre los servicios de BlueLynk: desarrollo web, desarrollo de soluciones y análisis de datos para empresas.',
    ogTitle: 'Servicios | BlueLynk',
    ogDescription: 'Creamos soluciones digitales modernas para negocios que buscan crecer, optimizar procesos y fortalecer su presencia digital.',
    ogImage: 'https://www.bluelynk.dev/og-image.jpg',
    ogUrl: 'https://www.bluelynk.dev/services',
    ogType: 'website',
    ogLocale: 'es_PE',
    ogSiteName: 'BlueLynk',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Servicios | BlueLynk',
    twitterDescription: 'Desarrollo web, desarrollo de soluciones y análisis de datos para empresas.',
    twitterImage: 'https://www.bluelynk.dev/og-image.jpg',
    robots: 'index, follow',
})

useHead({
    htmlAttrs: { lang: 'es' },
    link: [{ rel: 'canonical', href: 'https://www.bluelynk.dev/services' }],
    script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'BlueLynk',
            alternateName: ['Blue Lynk', 'BlueLink', 'Blue Link', 'bluelynk'],
            description: 'Consultora digital especializada en desarrollo web, desarrollo de soluciones y análisis de datos para negocios.',
            url: 'https://www.bluelynk.dev',
            logo: 'https://www.bluelynk.dev/logo.png',
            areaServed: { '@type': 'Country', name: 'Perú' },
        }),
    }],
})

const plans = [
    {
        id: 'datos',
        eyebrow: 'Para decidir con información',
        title: 'ANALÍTICA DE DATOS',
        desc: 'Dashboards, BI y modelado para tomar decisiones basadas en información real.',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 3v18h18"/><path d="M7 16l4-6 4 3 5-8"/></svg>`,
        features: [
            'Dashboards interactivos Power BI',
            'Limpieza y modelado de datos',
            'KPIs y métricas de negocio',
            'Reportes automáticos programados',
            'Conexión a múltiples fuentes',
            'Capacitación al equipo',
        ],
        timeline: '2 – 5 semanas',
        cta: 'Analizar mis datos',
        featured: false,
    },
    {
        id: 'web',
        eyebrow: 'Para tu presencia digital',
        title: 'SITIOS WEB',
        desc: 'Páginas modernas, rápidas y orientadas a conversión, alineadas a tu marca.',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
        features: [
            'Diseño responsivo y mobile-first',
            'Optimización SEO técnica incluida',
            'Velocidad de carga optimizada',
            'Panel de gestión de contenido',
            'Certificado SSL y backups',
            '30 días de soporte gratuito',
        ],
        timeline: '2 – 3 semanas',
        cta: 'Quiero mi sitio web',
        featured: true,
    },
    {
        id: 'soluciones',
        eyebrow: 'Para escalar tu operación',
        title: 'DESARROLLO DE SOLUCIONES',
        desc: 'Plataformas, sistemas internos y MVPs a medida que escalan con tu negocio.',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
        features: [
            'Arquitectura escalable a medida',
            'Dashboards y reportes en tiempo real',
            'Integración con sistemas existentes',
            'Panel de administración propio',
            'APIs robustas y documentadas',
            'Soporte y mejoras continuas',
        ],
        timeline: '6 – 12 semanas',
        cta: 'Desarrollar mi solución',
        featured: false,
    },
]

const whyItems = [
    { num: '01', title: 'A MEDIDA', desc: 'Cada proyecto se desarrolla desde cero según tus procesos reales. Sin plantillas.' },
    { num: '02', title: 'ENFOQUE EN NEGOCIO', desc: 'Analizamos tu operación antes de escribir una sola línea de código.' },
    { num: '03', title: 'ESCALABLE', desc: 'Construimos para crecer. Tu herramienta evoluciona con tu empresa.' },
    { num: '04', title: 'SIEMPRE CONTIGO', desc: 'No desaparecemos al entregar. Soporte y acompañamiento continuo.' },
]
</script>

<template>
    <!-- Hero -->
    <section class="hero">
        <div class="hero-glow"></div>
        <div class="hero-content content-center-md">
            <p class="top-title text-md-center">Servicios</p>
            <h1 class="hero-h h1 text-md-center">
                Soluciones <em>completas</em> <br>
                para tu negocio
            </h1>
            <p class="sec-sub light-text text-md-center md">
                Desde sitios web hasta automatización. <br class="responsive-ipad">
                Cada servicio diseñado para hacer crecer tu empresa.
            </p>
            <div class="hero-btns">
                <UiBtnLight variant="btn-primary" to="/contact">Agenda tu Cita</UiBtnLight>
                <UiBtnLight variant="btn-secondary" to="/portfolio">Ver portafolio</UiBtnLight>
            </div>
        </div>
    </section>

    <!-- Ticker -->
    <Ticker :items="[
        { text: 'E-commerce' },
        { text: 'Desarrollo web a medida', highlight: true },
        { text: 'Aplicaciones móviles' },
        { text: 'Integraciones API', highlight: true },
        { text: 'SaaS' },
        { text: 'Mantenimiento y soporte', highlight: true },
        { text: 'Hosting' },
    ]" />

    <!-- Plans / Pricing-style -->
    <section class="sections light">
        <div class="plans-header content-center">
            <p class="top-title">Elige tu servicio</p>
            <h2 class="h2 text-center">NUESTROS SERVICIOS</h2>
            <p class="plans-sub sec-sub text-center">
                Sin precios fijos — cada solución se cotiza según tus necesidades reales.
            </p>
        </div>

        <div class="plans-grid">
            <div
                v-for="plan in plans"
                :key="plan.id"
                class="plan-col"
                :class="{ 'plan-col--featured': plan.featured }"
            >
                <div v-if="plan.featured" class="plan-badge">MÁS SOLICITADO</div>

                <div class="plan-icon" v-html="plan.icon"></div>

                <p class="plan-eyebrow">{{ plan.eyebrow }}</p>
                <h3 class="plan-title">{{ plan.title }}</h3>
                <p class="plan-desc">{{ plan.desc }}</p>

                <ul class="plan-features">
                    <li v-for="f in plan.features" :key="f">
                        <svg class="feat-check" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.3"/>
                            <path d="M5 8l2.5 2.5L11 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        {{ f }}
                    </li>
                </ul>

                <div class="plan-footer">
                    <div class="plan-timeline">
                        <span class="tl-label">Entrega estimada</span>
                        <span class="tl-value">{{ plan.timeline }}</span>
                    </div>
                    <NuxtLink to="/contact" class="plan-cta" :class="{ 'plan-cta--solid': plan.featured }">
                        {{ plan.cta }}
                        <svg viewBox="0 0 20 20" fill="none">
                            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <p class="plans-note">
            ¿Necesitas algo diferente?
            <NuxtLink to="/contact" class="plans-note-link">Cuéntanos tu proyecto →</NuxtLink>
        </p>
    </section>

    <!-- Why BlueLynk -->
    <section class="sections darkest mid-sm">
        <div class="why-intro">
            <div>
                <p class="top-title">Por qué elegirnos</p>
                <h2 class="h2 bright-text">¿POR QUÉ<br>BLUELYNK?</h2>
            </div>
            <p class="why-lead light-text">
                No somos una agencia de plantillas. Cada solución se construye desde cero,
                entendiendo tu negocio, tus procesos y tus objetivos reales.
            </p>
        </div>

        <div class="why-grid">
            <div v-for="(item, i) in whyItems" :key="item.num" class="why-col" :class="{ 'why-col--last': i === whyItems.length - 1 }">
                <p class="why-num">{{ item.num }}</p>
                <h3 class="why-title bright-text">{{ item.title }}</h3>
                <p class="why-desc light-text">{{ item.desc }}</p>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="sections dark">
        <div class="final-cta">
            <p class="top-title">Da el primer paso</p>
            <h2 class="h2 bright-text text-center">
                ¿CUÁL ES EL SIGUIENTE<br><em>PASO</em> PARA TU NEGOCIO?
            </h2>
            <p class="light-text text-center md">
                Cuéntanos qué necesitas. Te haremos una propuesta clara en menos de 24 horas.
            </p>
            <UiBtnLight variant="btn-primary" to="/contact">Solicitar cotización</UiBtnLight>
        </div>
    </section>
</template>

<style scoped>
/* ── PLANS ────────────────────────────────────────── */
.plans-header {
    margin-bottom: 3.5rem;
}

.plans-sub {
    max-width: 460px;
    margin: .75rem auto 0;
}

.plans-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    align-items: start;
}

.plan-col {
    position: relative;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem;
    background: var(--color-bg-lightest);
    border: 1px solid rgba(81, 112, 255, 0.15);
    margin-top: 1.5rem;
    transition: transform .3s ease, box-shadow .3s ease, border-color .3s;
}

.plan-col:hover {
    transform: translateY(-6px);
    border-color: rgba(81, 112, 255, 0.35);
    box-shadow: 0 12px 40px rgba(81, 112, 255, 0.1);
}

/* featured */
.plan-col--featured {
    background: linear-gradient(150deg, var(--color-bg-darkest) 0%, var(--color-bg-dark) 55%, var(--color-primary-hover) 100%);
    border-color: rgba(90, 140, 255, 0.4);
    margin-top: 0;
    box-shadow: 0 24px 64px rgba(3, 0, 107, 0.28);
}

.plan-col--featured:hover {
    transform: translateY(-6px);
    box-shadow: 0 32px 72px rgba(3, 0, 107, 0.35);
    border-color: rgba(90, 140, 255, 0.6);
}

.plan-badge {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-primary);
    color: var(--color-bg-lightest);
    font-family: var(--font-title);
    font-size: .65rem;
    letter-spacing: 2.5px;
    padding: .3rem 1.1rem;
    border-radius: 20px;
    text-transform: uppercase;
    white-space: nowrap;
}

/* icon */
.plan-icon {
    width: 36px;
    height: 36px;
    color: var(--color-primary);
    margin-bottom: 1.5rem;
}

.plan-icon :deep(svg) {
    width: 100%;
    height: 100%;
}

/* text */
.plan-eyebrow {
    font-size: .7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--color-primary);
    margin-bottom: .4rem;
    font-weight: 600;
}

.plan-col--featured .plan-eyebrow {
    color: rgba(199, 210, 255, 0.7);
}

.plan-title {
    font-family: var(--font-title);
    font-size: 2.4rem;
    letter-spacing: 1.5px;
    color: var(--color-bg-darkest);
    line-height: 1;
    margin-bottom: .9rem;
}

.plan-col--featured .plan-title {
    color: var(--color-bg-lightest);
}

.plan-desc {
    font-size: .88rem;
    line-height: 1.75;
    color: var(--color-text-on-light-muted);
    margin-bottom: 1.75rem;
    padding-bottom: 1.75rem;
    border-bottom: 1px solid rgba(81, 112, 255, 0.12);
}

.plan-col--featured .plan-desc {
    color: rgba(244, 246, 255, 0.6);
    border-bottom-color: rgba(255, 255, 255, 0.1);
}

/* features */
.plan-features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    flex-grow: 1;
    margin-bottom: 2rem;
}

.plan-features li {
    display: flex;
    align-items: flex-start;
    gap: .6rem;
    font-size: .875rem;
    line-height: 1.5;
    color: var(--color-text-on-light-muted);
}

.plan-col--featured .plan-features li {
    color: rgba(244, 246, 255, 0.78);
}

.feat-check {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    color: var(--color-primary);
    margin-top: 2px;
}

/* footer */
.plan-footer {
    margin-top: auto;
}

.plan-timeline {
    display: flex;
    flex-direction: column;
    gap: .2rem;
    border-top: 1px solid rgba(81, 112, 255, 0.12);
    padding-top: 1.5rem;
    margin-bottom: 1.25rem;
}

.plan-col--featured .plan-timeline {
    border-top-color: rgba(255, 255, 255, 0.1);
}

.tl-label {
    font-size: .68rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #999;
}

.plan-col--featured .tl-label {
    color: rgba(199, 210, 255, 0.55);
}

.tl-value {
    font-family: var(--font-title);
    font-size: 1.55rem;
    letter-spacing: 1px;
    color: var(--color-bg-darkest);
}

.plan-col--featured .tl-value {
    color: var(--color-bg-lightest);
}

/* cta button */
.plan-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .75rem;
    padding: .85rem 1.25rem;
    border-radius: 10px;
    border: 1.5px solid rgba(81, 112, 255, 0.28);
    color: var(--color-bg-darkest);
    font-family: var(--font-body);
    font-weight: 500;
    font-size: .88rem;
    text-decoration: none;
    transition: all .2s;
}

.plan-cta svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: var(--color-primary);
    transition: transform .25s;
}

.plan-cta:hover {
    border-color: var(--color-primary);
    background: rgba(81, 112, 255, 0.06);
}

.plan-cta:hover svg {
    transform: translateX(4px);
}

.plan-cta--solid {
    background: var(--color-bg-lightest);
    border-color: transparent;
    color: var(--color-bg-darkest);
    font-weight: 700;
}

.plan-cta--solid svg {
    color: var(--color-bg-darkest);
}

.plan-cta--solid:hover {
    background: var(--color-bg-light);
    border-color: transparent;
}

/* note */
.plans-note {
    text-align: center;
    margin-top: 2.5rem;
    font-size: .85rem;
    color: #aaa;
}

.plans-note-link {
    color: var(--color-primary);
    font-weight: 600;
    text-decoration: none;
    transition: color .2s;
}

.plans-note-link:hover {
    color: var(--color-bg-darkest);
}

/* ── WHY ─────────────────────────────────────────── */
.why-intro {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: end;
    margin-bottom: 4rem;
}

.why-lead {
    font-size: 1rem;
    line-height: 1.85;
}

.why-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(81, 112, 255, 0.2);
}

.why-col {
    padding: 2.5rem 2rem 0 0;
    border-right: 1px solid rgba(81, 112, 255, 0.2);
}

.why-col:not(:first-child) {
    padding-left: 2rem;
}

.why-col--last {
    border-right: none;
}

.why-num {
    font-family: var(--font-title);
    font-size: 2.8rem;
    color: var(--color-primary);
    opacity: .45;
    line-height: 1;
    margin-bottom: 1rem;
}

.why-title {
    font-family: var(--font-title);
    font-size: 1.3rem;
    letter-spacing: 1px;
    margin-bottom: .6rem;
}

.why-desc {
    font-size: .85rem;
    line-height: 1.75;
}

/* ── CTA ─────────────────────────────────────────── */
.final-cta {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
}

.final-cta h2 {
    margin-bottom: 1.25rem;
}

.final-cta .md {
    margin-bottom: 2rem;
}

/* ── RESPONSIVE ──────────────────────────────────── */
@media (max-width: 1050px) {
    .plan-title {
        font-size: 1.9rem;
    }

    .why-intro {
        gap: 2.5rem;
    }
}

@media (max-width: 835px) {
    .plans-grid {
        grid-template-columns: 1fr;
        max-width: 480px;
        margin-left: auto;
        margin-right: auto;
    }

    .plan-col {
        margin-top: 0;
    }

    .plan-col--featured {
        order: -1;
    }

    .why-intro {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .why-grid {
        grid-template-columns: 1fr 1fr;
        gap: 0;
    }

    .why-col {
        padding-bottom: 2.5rem;
    }

    .why-col:nth-child(even) {
        border-right: none;
    }

    .why-col:nth-child(odd) {
        padding-right: 2rem;
    }

    .why-col:nth-child(n+3) {
        border-top: 1px solid rgba(81, 112, 255, 0.2);
        padding-top: 2.5rem;
    }
}

@media (max-width: 475px) {
    .plans-grid {
        max-width: 100%;
    }

    .why-grid {
        grid-template-columns: 1fr;
    }

    .why-col {
        border-right: none !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
    }

    .why-col:not(:first-child) {
        border-top: 1px solid rgba(81, 112, 255, 0.2);
        padding-top: 2rem;
    }
}
</style>