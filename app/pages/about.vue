<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

useSeoMeta({
    title: 'Nosotros | BlueLynk',
    description: 'Conoce BlueLynk, una consultora digital en Lima enfocada en desarrollo web, automatización y soluciones modernas para negocios que quieren crecer.',
    ogTitle: 'Nosotros | BlueLynk',
    ogDescription: 'Diseñamos experiencias digitales modernas, funcionales y pensadas para el crecimiento de tu negocio.',
    ogImage: 'https://www.bluelynk.dev/og-image.jpg',
    ogUrl: 'https://www.bluelynk.dev/about',
    ogType: 'website',
    ogLocale: 'es_PE',
    ogSiteName: 'BlueLynk',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Nosotros | BlueLynk',
    twitterDescription: 'Conoce al equipo detrás de BlueLynk y nuestra forma de trabajar.',
    twitterImage: 'https://www.bluelynk.dev/og-image.jpg',
    robots: 'index, follow',
})

useHead({
    htmlAttrs: { lang: 'es' },
    link: [{ rel: 'canonical', href: 'https://www.bluelynk.dev/about' }],
    script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'Sobre BlueLynk',
            url: 'https://www.bluelynk.dev/about',
        }),
    }],
})

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText)

    // ── Filosofía: palabra gigante + texto aparecen juntos ──
    const filosItems = document.querySelectorAll('.filos-item')
    filosItems.forEach((item) => {
        const ghost = item.querySelector('.filos-ghost')
        const content = item.querySelector('.filos-content')

        gsap.from(ghost, {
            opacity: 0,
            x: 80,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 75%' }
        })
        gsap.from(content, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 75%' }
        })
    })

    // ── Manifesto palabras ─────────────────────────────
    gsap.from('.manifesto-line', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: { trigger: '.manifesto-section', start: 'top 75%' }
    })
    gsap.from('.manifesto-word', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.04,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.manifesto-section', start: 'top 65%' }
    })

    // ── Pillar rows ────────────────────────────────────
    gsap.from('.pillar-row', {
        x: -60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.pillars-section', start: 'top 70%' }
    })

    // ── Stats counter ──────────────────────────────────
    gsap.utils.toArray('.stat-num').forEach((el) => {
        const elem = el as HTMLElement
        const target = parseInt(elem.dataset.val || '0', 10)
        ScrollTrigger.create({
            trigger: elem,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                gsap.to({ val: 0 }, {
                    val: target,
                    duration: 1.4,
                    ease: 'power2.out',
                    onUpdate: function () {
                        elem.textContent = Math.round((this.targets()[0] as any).val) + (elem.dataset.suffix || '')
                    }
                })
            }
        })
    })
})
</script>

<template>
    <!-- ── HERO ─────────────────────────────────────── -->
    <section class="hero">
        <div class="hero-glow"></div>
        <div class="hero-content content-center-md">
            <p class="top-title">Conocenos</p>
            <h1 class="hero-h h1">
                Nosotros <em>sabemos</em> <br>
                lo que necesitas
            </h1>
            <p class="sec-sub light-text text-md-center md">
                Porque tu negocio merece crecer sin complicaciones. <br class="responsive-ipad">
                Elige claridad, elige resultados, elige Blue Lynk.
            </p>
            <div class="hero-btns">
                <UiBtnLight variant="btn-primary" to="/contact">Solicitar asesoría</UiBtnLight>
                <UiBtnLight variant="btn-secondary" to="/services">Nuestros Servicios</UiBtnLight>
            </div>
        </div>
    </section>

    <Ticker :items="[
        { text: 'SaaS' },
        { text: 'Desarrollo web a medida', highlight: true },
        { text: 'Aplicaciones móviles' },
        { text: 'Integraciones API', highlight: true },
        { text: 'E-commerce' },
        { text: 'Mantenimiento y soporte', highlight: true },
        { text: 'Hosting' },
    ]" />

    <!-- ── FILOSOFÍA ─────────────────────────────────── -->
    <!-- Tres bloques apilados: cada uno tiene una palabra enorme en outline
         que actúa como "fondo visual" y el texto real encima/lado -->
    <section class="filos-section sections lightest">
        <p class="top-title filos-eyebrow">Nuestra filosofía</p>

        <div class="filos-item">
            <span class="filos-ghost">CRECER</span>
            <div class="filos-content filos-content--left">
                <h3 class="filos-heading">Tecnología que sirve a las personas</h3>
                <p>Creamos soluciones digitales para marcas que quieren dar el siguiente paso. Sin rodeos, sin plantillas, sin código que nadie entiende.</p>
            </div>
        </div>

        <div class="filos-item filos-item--reverse">
            <span class="filos-ghost">CLARO</span>
            <div class="filos-content filos-content--right">
                <h3 class="filos-heading">Sin Complejidades. Sin sorpresas.</h3>
                <p>Explicamos todo simple. Sabes exactamente qué construimos, cuándo estará listo y cuánto cuesta. Siempre.</p>
            </div>
        </div>

        <div class="filos-item">
            <span class="filos-ghost">TUYO</span>
            <div class="filos-content filos-content--left">
                <h3 class="filos-heading">Cada proyecto, desde cero</h3>
                <p>Somos diseñadores y desarrolladores que entienden tu negocio antes de escribir una línea de código. Tu solución refleja exactamente cómo operas.</p>
            </div>
        </div>
    </section>

    <!-- ── STATS STRIP ───────────────────────────────── -->
    <div class="stats-strip">
        <div class="stats-inner">
            <div class="stat-block">
                <span class="stat-num" data-val="1" data-suffix="+">0+</span>
                <span class="stat-label">Proyectos entregados</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-block">
                <span class="stat-num" data-val="24" data-suffix="h">0h</span>
                <span class="stat-label">Tiempo de respuesta</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-block">
                <span class="stat-num" data-val="100" data-suffix="%">0%</span>
                <span class="stat-label">Proyectos a medida</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-block">
                <span class="stat-num" data-val="2026">0</span>
                <span class="stat-label">Año de fundación</span>
            </div>
        </div>
    </div>

    <!-- ── MANIFESTO ─────────────────────────────────── -->
    <section class="manifesto-section sections darkest">
        <div class="manifesto-inner">
            <div class="manifesto-line"></div>
            <p class="top-title">Lo que creemos</p>
            <div class="manifesto-body">
                <span v-for="(word, i) in 'Sin plantillas. Sin atajos. Sin código spaghetti. Cada proyecto nace de una conversación honesta sobre lo que tu negocio realmente necesita.'.split(' ')" :key="i" class="manifesto-word">{{ word }}&nbsp;</span>
            </div>
            <div class="manifesto-line"></div>
        </div>
    </section>

    <!-- ── PILLARS ───────────────────────────────────── -->
    <section class="pillars-section sections lightest">
        <div class="pillars-inner">
            <p class="top-title">Cómo operamos</p>

            <div class="pillar-row">
                <span class="pillar-tag">VELOCIDAD</span>
                <p class="pillar-body">Entregamos resultados en semanas, no meses. Sin comprometer calidad ni estabilidad.</p>
            </div>
            <div class="pillar-row">
                <span class="pillar-tag">CLARIDAD</span>
                <p class="pillar-body">Explicamos todo en español simple. Cero jerga técnica que no entiendas.</p>
            </div>
            <div class="pillar-row">
                <span class="pillar-tag">RESULTADOS</span>
                <p class="pillar-body">Medimos lo que importa: conversión, ingresos, satisfacción real.</p>
            </div>
            <div class="pillar-row">
                <span class="pillar-tag">SOPORTE</span>
                <p class="pillar-body">No desaparecemos después de entregar. Estamos aquí para ti siempre.</p>
            </div>
        </div>
    </section>

    <!-- ── CTA ──────────────────────────────────────── -->
    <section class="sections darkest">
        <div class="final-cta">
            <h2 class="h2 bright-text text-center">¿Listos para <em>crecer</em> juntos?</h2>
            <p class="light-text text-center md">Cuéntanos sobre tu proyecto. Te responderemos en 24 horas.</p>
            <UiBtnLight variant="btn-primary" to="/contact">Empezar ahora</UiBtnLight>
        </div>
    </section>
</template>

<style scoped>

/* ── FILOSOFÍA ──────────────────────────────────────── */
.filos-section {
    padding-top: 5rem;
    padding-bottom: 2rem;
    overflow: hidden;
}

.filos-eyebrow {
    padding: 0 3rem;
    margin-bottom: 1rem;
}

.filos-item {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 220px;
    padding: 3rem;
    border-top: 1px solid rgba(3, 0, 107, 0.08);
    overflow: hidden;
}

.filos-item:last-child {
    border-bottom: 1px solid rgba(3, 0, 107, 0.08);
    margin-bottom: 3rem;
}

/* Enormous outline ghost word */
.filos-ghost {
    position: absolute;
    font-family: var(--font-title);
    font-size: clamp(8rem, 18vw, 16rem);
    line-height: 1;
    letter-spacing: -2px;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(3, 0, 107, 0.07);
    user-select: none;
    pointer-events: none;
    right: -1rem;
    top: 50%;
    transform: translateY(-50%);
    white-space: nowrap;
}

.filos-item--reverse .filos-ghost {
    right: auto;
    left: -1rem;
}

/* Real content floating on top */
.filos-content {
    position: relative;
    z-index: 2;
    max-width: 480px;
}

.filos-content--right {
    margin-left: auto;
    text-align: right;
}

.filos-heading {
    font-family: var(--font-title);
    font-size: 2.2rem;
    letter-spacing: 1px;
    color: var(--color-bg-darkest);
    margin-bottom: .75rem;
    text-transform: uppercase;
    line-height: 1;
}

.filos-content p {
    font-size: .95rem;
    line-height: 1.8;
    color: var(--color-text-on-light-muted);
}

/* ── STATS STRIP ──────────────────────────────────── */
.stats-strip {
    padding: 2.5rem 3rem;
    background: var(--color-bg-dark);
}

.stats-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
}

.stat-block {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    text-align: center;
}

.stat-num {
    font-family: var(--font-title);
    font-size: clamp(2.8rem, 5vw, 4.5rem);
    color: var(--color-bg-lightest);
    line-height: 1;
    letter-spacing: 1px;
}

.stat-label {
    font-size: .7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--color-text-on-dark-muted);
}

.stat-divider {
    width: 1px;
    height: 60px;
    background: rgba(244, 246, 255, 0.15);
    flex-shrink: 0;
    margin: 0 2rem;
}

/* ── MANIFESTO ────────────────────────────────────── */
.manifesto-section {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.manifesto-inner {
    max-width: 900px;
    margin: 0 auto;
}

.manifesto-line {
    height: 1px;
    background: rgba(244, 246, 255, 0.15);
    margin-bottom: 2.5rem;
    transform-origin: left center;
}

.manifesto-body {
    font-family: var(--font-title);
    font-size: clamp(2rem, 4.5vw, 3.8rem);
    line-height: 1.05;
    color: var(--color-bg-light);
    margin-bottom: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    text-transform: uppercase;
}

.manifesto-word {
    display: inline-block;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    line-height: inherit;
}

/* ── PILLARS ──────────────────────────────────────── */
.pillars-section {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.pillars-inner {
    max-width: 1200px;
    margin: 0 auto;
}

.pillars-inner > .top-title {
    margin-bottom: 3rem;
}

.pillar-row {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 3rem;
    align-items: baseline;
    padding: 2rem 0;
    border-top: 1px solid rgba(3, 0, 107, 0.1);
    transition: background .3s;
}

.pillar-row:last-child {
    border-bottom: 1px solid rgba(3, 0, 107, 0.1);
}

.pillar-row:hover .pillar-tag {
    color: var(--color-primary);
}

.pillar-tag {
    font-family: var(--font-title);
    font-size: 2rem;
    letter-spacing: 2px;
    color: var(--color-bg-darkest);
    transition: color .3s;
    text-transform: uppercase;
}

.pillar-body {
    font-size: .95rem;
    line-height: 1.75;
    color: var(--color-text-on-light-muted);
    max-width: 540px;
}

/* ── CTA ──────────────────────────────────────────── */
.final-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.final-cta h2 { margin-bottom: 1.25rem; }
.final-cta .md { margin-bottom: 2rem; }

/* ── RESPONSIVE ───────────────────────────────────── */
@media (max-width: 835px) {
    .filos-item {
        min-height: 180px;
        padding: 2.5rem 2rem;
    }

    .filos-ghost {
        font-size: clamp(6rem, 22vw, 10rem);
        opacity: 0.6;
    }

    .filos-content--right {
        margin-left: 0;
        text-align: left;
    }

    .stats-inner {
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
    }

    .stat-divider { display: none; }

    .stat-block { flex: 0 0 calc(50% - 2rem); }

    .pillar-row {
        grid-template-columns: 1fr;
        gap: .75rem;
    }
}

@media (max-width: 475px) {
    .filos-eyebrow { padding: 0 1.5rem; }

    .filos-item { padding: 2rem 1.5rem; }

    .filos-ghost { font-size: 5.5rem; }

    .stats-strip { padding: 2rem 1.5rem; }

    .stat-block { flex: 0 0 100%; }

    .manifesto-body { font-size: 1.9rem; }
}
</style>