<script setup lang="ts">
useSeoMeta({
    title: 'Portafolio | BlueLynk',
    description: 'Explora los proyectos de BlueLynk: casos de éxito en desarrollo web, e-commerce y soluciones digitales para empresas peruanas.',
    ogTitle: 'Portafolio | BlueLynk',
    ogDescription: 'Mira cómo hemos transformado negocios con soluciones digitales modernas.',
    ogImage: 'https://www.bluelynk.dev/og-image.jpg',
    ogUrl: 'https://www.bluelynk.dev/portfolio',
    ogType: 'website',
    ogLocale: 'es_PE',
    ogSiteName: 'BlueLynk',
    robots: 'index, follow',
})

useHead({
    htmlAttrs: { lang: 'es' },
    link: [{ rel: 'canonical', href: 'https://www.bluelynk.dev/portfolio' }],
})
</script>

<template>
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-glow"></div>
        <div class="hero-content content-center-md">
            <p class="top-title text-md-center">Nuestro trabajo</p>
            <h1 class="hero-h h1 text-md-center">
                PROYECTOS <em>REALES</em> IMPACTO <em>REAL</em>
            </h1>
            <p class="sec-sub light-text text-md-center md">
                Casos reales donde la tecnología ayudó a empresas a crecer y mejorar su presencia
                digital.
            </p>
            <div class="hero-btns">
                <UiBtnLight variant="btn-primary" to="/contact">Agenda tu Cita</UiBtnLight>
                <UiBtnLight variant="btn-secondary" to="/services">Ver Servicios</UiBtnLight>
            </div>
        </div>
    </section>


    <!-- Ticker Section -->
    <Ticker :items="[
        { text: 'Análisis de datos', highlight: true },
        { text: 'SEO y posicionamiento' },
        { text: 'Desarrollo web a medida', highlight: true },
        { text: 'Dashboards y BI' },
        { text: 'Integraciones API', highlight: true },
        { text: 'SaaS' },
        { text: 'Mantenimiento y soporte', highlight: true },
        { text: 'Hosting' },
    ]" />

    <!-- Featured Project -->
    <section class="sections light">
        <div class="max-w">
            <div class="proj-grid">
                <!-- Image/placeholder -->
                <div class="proj-image">
                    <div class="proj-placeholder">SINERGIA</div>
                </div>

                <!-- Content -->
                <div>
                    <p class="proj-tag">Sitio Web • Landing Page</p>
                    <h2 class="h2">SINERGIA</h2>
                    <p class="proj-desc">
                        Sinergia diseña e implementa stands, activaciones y merchandising que transforman espacios
                        físicos en experiencias de marca memorables, enfocadas en atraer, interactuar y generar
                        recordación.
                    </p>

                    <!-- Scope -->
                    <div class="proj-scope">
                        <h3 class="h3">ALCANCE DEL PROYECTO</h3>
                        <ul class="scope-list">
                            <li><span class="scope-dot"></span> Landing page de 1 página optimizada</li>
                            <li><span class="scope-dot"></span> Formulario de contacto integrado</li>
                            <li><span class="scope-dot"></span> Diseño moderno y completamente responsivo</li>
                        </ul>
                    </div>

                    <!-- CTA -->
                    <NuxtLink to="https://sinergia-landing-lyart.vercel.app/" target="_blank" class="proj-cta">
                        Ver proyecto en vivo
                        <svg viewBox="0 0 20 20" fill="none">
                            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.8"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>

    <!-- Upcoming Projects -->
    <section class="sections darkest">
        <div class="upcoming-container">
            <div class="upcoming-box">
                <p class="top-title">Próximamente</p>
                <h2 class="h2 bright-text text-center">MÁS PROYECTOS</h2>
                <p class="upcoming-text">
                    Estamos trabajando en casos fascinantes en e-commerce, automatización, análisis de datos
                    y soluciones a medida. Pronto compartiremos historias de éxito de transformaciones digitales
                    que están revolucionando empresas peruanas.
                </p>
                <div class="coming-soon">
                    <span class="badge">Coming Soon</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Explore Services -->
    <section class="sections light mid">
        <div class="max-w" style="text-align: center">
            <p class="top-title">Elige tu solución</p>
            <h2 class="h2">¿Necesitas UN PROYECTO COMO ESTOS?</h2>
            <p class="explore-sub">
                Explora nuestros servicios y cuéntanos sobre tu idea. Te ayudaremos a transformar tu negocio.
            </p>
            <div class="cta-group">
                <UiBtnDark variant="btn-primary" to="/services">Ver servicios</UiBtnDark>
                <UiBtnDark variant="btn-secondary" to="/contact">Solicitar cotización</UiBtnDark>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Hero */
.port-hero {
    background: linear-gradient(135deg, var(--color-bg-darkest) 0%, var(--color-bg-dark) 100%);
    padding: 6rem 2.5rem;
    text-align: center;
    color: var(--color-bg-light);
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.port-hero .top-title {
    color: var(--color-primary);
    opacity: .8;
}

.port-hero h1 {
    color: var(--color-bg-lightest);
    margin-bottom: 1.5rem;
}

.sub-text {
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(244, 246, 255, 0.65);
}

/* Projects */
.max-w {
    max-width: 1200px;
    margin: 0 auto;
}

.proj-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.proj-image {
    border-radius: 20px;
    overflow: hidden;
}

.proj-placeholder {
    aspect-ratio: 1 / 1;
    background: linear-gradient(135deg, #1a2e7a 0%, #162868 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-title);
    font-size: 4rem;
    letter-spacing: 2px;
    color: rgba(244, 246, 255, 0.12);
}

.proj-tag {
    font-size: .7rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--color-primary);
    margin-bottom: .5rem;
    font-weight: 700;
}

.proj-desc {
    font-size: 1rem;
    color: var(--color-text-on-light-muted);
    line-height: 1.8;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(81, 112, 255, 0.12);
}

.proj-scope {
    margin-bottom: 2rem;
}

.proj-scope h3 {
    color: var(--color-bg-darkest);
    margin-bottom: 1rem;
}

.scope-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: .75rem;
}

.scope-list li {
    display: flex;
    align-items: flex-start;
    gap: .75rem;
    font-size: .95rem;
    color: #666;
    line-height: 1.6;
}

.scope-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-primary);
    flex-shrink: 0;
    margin-top: .5rem;
}

.proj-cta {
    display: inline-flex;
    align-items: center;
    gap: .75rem;
    padding: .9rem 2rem;
    background: var(--color-primary);
    color: var(--color-bg-lightest);
    border-radius: 10px;
    text-decoration: none;
    font-weight: 700;
    transition: all .2s;
}

.proj-cta:hover {
    background: var(--color-primary-hover);
    transform: translateY(-2px);
}

.proj-cta svg {
    width: 18px;
    height: 18px;
}

/* Upcoming */
.upcoming-container {
    display: flex;
    justify-content: center;
}

.upcoming-box {
    max-width: 800px;
    border-radius: 20px;
    border: 2px dashed rgba(81, 112, 255, 0.3);
    padding: 4rem 2rem;
    text-align: center;
}

.upcoming-box .top-title {
    color: var(--color-primary);
}

.upcoming-text {
    font-size: 1rem;
    color: rgba(244, 246, 255, 0.6);
    line-height: 1.8;
    margin-bottom: 2rem;
}

.coming-soon {
    display: flex;
    justify-content: center;
}

.badge {
    display: inline-block;
    padding: .4rem 1.2rem;
    background: var(--color-primary);
    color: var(--color-bg-lightest);
    border-radius: 20px;
    font-size: .75rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
}

/* Explore */
.explore-sub {
    font-size: 1rem;
    color: var(--color-text-on-light-muted);
    max-width: 500px;
    margin: 1rem auto 2rem;
    line-height: 1.8;
}

.cta-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 835px) {
    .proj-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }

    .proj-placeholder {
        aspect-ratio: 4 / 3;
    }

    .upcoming-box {
        padding: 2.5rem 1.5rem;
    }

    .cta-group {
        flex-direction: column;
        max-width: 300px;
        margin: 0 auto;
    }
}
</style>