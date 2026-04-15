<script setup lang="ts">

useSeoMeta({
    // 👇 Esto es lo que Google muestra en los resultados de búsqueda
    title: 'Blue Lynk | Desarrollo Web y Apps para PYMEs en Lima, Perú',
    description: 'Diseñamos sitios web, e-commerce y soluciones digitales para PYMEs peruanas. Rápido, moderno y sin complicaciones. Lima, Perú.',

    // 👇 Open Graph: controla cómo se ve al compartir en WhatsApp, Facebook, LinkedIn
    ogTitle: 'Blue Lynk | Tu empresa lista para el futuro',
    ogDescription: 'Soluciones digitales para PYMEs peruanas: sitios web, e-commerce, automatización y más.',
    ogImage: 'https://bluelynk.dev/og-image.jpg', // 1200×630px
    ogUrl: 'https://bluelynk.dev',
    ogType: 'website',
    ogLocale: 'es_PE',
    ogSiteName: 'Blue Lynk',

    // 👇 Twitter/X Card
    twitterCard: 'summary_large_image',
    twitterTitle: 'Blue Lynk | Desarrollo Web para PYMEs en Lima',
    twitterDescription: 'Hacemos crecer a los negocios peruanos con tecnología accesible.',
    twitterImage: 'https://bluelynk.dev/og-image.jpg',

    // 👇 Instrucciones para los crawlers de Google
    robots: 'index, follow',
})

useHead({
    htmlAttrs: { lang: 'es' },
    link: [{ rel: 'canonical', href: 'https://bluelynk.dev' }],

    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness', // o 'ProfessionalService'
                name: 'Blue Lynk',
                description: 'Agencia de desarrollo web y soluciones digitales para PYMEs peruanas.',
                url: 'https://bluelynk.dev',
                logo: 'https://bluelynk.dev/logo.png',
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
                    name: 'Servicios de Blue Lynk',
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

</script>

<template>
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-glow"></div>
        <div>
            <p class="top-title">Soluciones digitales · Lima, Perú</p>
            <h1 class="hero-h h1">TU EMPRESA<br><em>LISTA</em><br>PARA EL<br>FUTURO</h1>
        </div>
        <UiBtnLight variant="btn-primary" class="responsive-mobil">Ver servicios</UiBtnLight>
        <div class="hero-visual ">
            <div class="hero-stat-row responsive-ipad">
                <div class="stats-card">
                    <div class="hstat-num">2<span>+</span></div>
                    <div class="hstat-label h4">Proyectos entregados</div>
                </div>
                <div class="stats-card">
                    <div class="hstat-num">100<span>%</span></div>
                    <div class="hstat-label h4">Clientes satisfechos</div>
                </div>
            </div>
            <div class="stats-card hero-card-2">
                <p class="sec-sub">Diseñamos y construimos herramientas digitales que hacen crecer a las PYMEs
                    peruanas —
                    rápido, bonito y sin complicaciones.</p>
                <div class="hero-btns">
                    <UiBtnLight variant="btn-primary">Ver servicios</UiBtnLight>
                    <UiBtnLight variant="btn-secondary">Ver portafolio</UiBtnLight>
                </div>
            </div>
        </div>
    </section>

    <!-- Ticker Section -->
    <Ticker :items="[
        { text: 'Desarrollo web a medida', highlight: true },
        { text: 'Aplicaciones móviles' },
        { text: 'Integraciones API', highlight: true },
        { text: 'E-commerce' },
        { text: 'SaaS' },
        { text: 'Mantenimiento y soporte', highlight: true },
        { text: 'Hosting' },
    ]" />

    <!-- Services Section -->
    <section class="sec sections light" id="servicios">
        <p class="top-title">Qué hacemos</p>
        <h2 class="h2">NUESTROS SERVICIOS</h2>
        <p class="sec-sub">Soluciones tecnológicas pensadas para negocios reales. Sin tecnicismos, con resultados.
        </p>
        <div class="svc-grid">
            <div class="svc-card">
                <div class="svc-icon"><svg viewBox="0 0 24 24">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8M12 17v4" />
                    </svg></div>
                <h3 class="h3">SITIOS WEB</h3>
                <p class="p">Páginas rápidas y modernas que convierten visitas en clientes. Diseño exclusivo y
                    optimizado.</p>
            </div>
            <div class="svc-card">
                <div class="svc-icon"><svg viewBox="0 0 24 24">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg></div>
                <h3 class="h3">E-COMMERCE</h3>
                <p class="p">Tiendas online con pasarelas de pago peruanas, gestión de inventario y catálogos fáciles de
                    manejar.</p>
            </div>
            <div class="svc-card">
                <div class="svc-icon"><svg viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg></div>
                <h3 class="h3">INTEGRACIONES</h3>
                <p class="p">Ni idea que poner.</p>
            </div>
            <div class="svc-card">
                <div class="svc-icon"><svg viewBox="0 0 24 24">
                        <path d="M18 20V10M12 20V4M6 20v-6" />
                    </svg></div>
                <h3 class="h3">DESARROLLO DE SOLUCIONES</h3>
                <p class="p">Tampoco se que poner.</p>
            </div>
            <div class="svc-card">
                <div class="svc-icon"><svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3" />
                        <path
                            d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg></div>
                <h3 class="h3">AUTOMATIZACIÓN</h3>
                <p class="p">Eliminamos tareas repetitivas con flujos automáticos: emails, reportes, alertas y más.</p>
            </div>
            <div class="svc-card">
                <div class="svc-icon"><svg viewBox="0 0 24 24">
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg></div>
                <h3 class="h3">SOPORTE TI</h3>
                <p class="p">Mantenimiento, seguridad y soporte técnico para que tu infraestructura nunca pare.</p>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section class="sections darkest" id="portafolio">
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
            <UiBtnLight variant="btn-secondary">Ver todos los proyectos</UiBtnLight>
        </div>
    </section>

    <!-- About Section -->
    <section class="sections divided light" id="nosotros">
        <div>
            <p class="top-title">Quiénes somos</p>
            <h2 class="h2">TECNOLOGÍA CON PROPÓSITO</h2>
            <p class="sec-sub">Somos dos emprendedores
                limeños que entendemos los retos reales de las PYMEs peruanas. No vendemos plantillas — construimos
                soluciones que realmente funcionan para tu negocio.</p>
            <div class="svc-grid">
                <div class="svc-card">
                    <div class="about-num-n">2026</div>
                    <div class="about-num-l">Fundada en Lima</div>
                </div>
                <div class="svc-card">
                    <div class="about-num-n ">2+</div>
                    <div class="about-num-l">Proyectos</div>
                </div>
                <div class="svc-card">
                    <div class="about-num-n">2+</div>
                    <div class="about-num-l">Industrias</div>
                </div>
                <div class="svc-card">
                    <div class="about-num-n">2</div>
                    <div class="about-num-l">Co-fundadores</div>
                </div>
            </div>
            <!-- <div class="team-row">
                <div class="team-card">
                    <div class="team-av">D</div>
                    <div class="team-name">Daniel C.</div>
                    <div class="team-role">Project Manager & Creative Director</div>
                </div>
                <div class="team-card">
                    <div class="team-av">N</div>
                    <div class="team-name">Nicolas A.</div>
                    <div class="team-role">Tech Lead & Data Analyst</div>
                </div>
            </div> -->
        </div>
        <div>
            <div class="about-quote">
                <div class="about-quote-mark">"</div>
                <p class="light-text">Creamos Blue Lynk porque vimos demasiadas PYMEs peruanas perdiendo clientes por no
                    tener
                    presencia digital. Nuestra misión es simple: hacer que la tecnología trabaje para ti, no al
                    revés.</p>
                <div class="about-quote-sig vivid-text">— Equipo de Blue Lynk</div>
            </div>
        </div>
    </section>

    <!--FAQ Section -->
    <FaqSection :faqs="homeFaqs" />

    <!-- Contact Section -->
    <Contact />
</template>

<style scoped>
/* animation: fup .6s .1s both */

/* HERO */
.hero-visual {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.hero-stat-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem
}

.stats-card {
    background: var(--color-card-border-dark);
    border: var(--color-card-border-dark);
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    font-family: var(--font-title);
}

.hstat-num {
    font-size: 4rem;
    color: var(--color-bg-light);
}

.hstat-num span {
    font-size: 4rem;
    color: var(--color-primary)
}

.hstat-label {
    font-family: var(--font-title);
    color: var(--color-text-on-dark-muted);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: .2rem
}

.stats-card p {
    color: var(--color-text-on-dark-muted);
    margin-bottom: .5rem
}

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

/* About Section */

.about-num-n {
    font-family: var(--font-title);
    font-size: 2.5rem;
    color: var(--color-primary);
}

.about-num-l {
    font-size: .78rem;
    color: var(--color-text-on-light-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: .2rem
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

.team-row {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem
}

.team-card {
    background: var(--color-bg-lightest);
    border-radius: 12px;
    padding: 1rem;
    flex: 1;
    border: 1px solid rgba(81, 112, 255, 0.1);
    text-align: center
}

.team-av {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-title);
    font-size: 1rem;
    color: var(--color-bg-lightest);
    margin: 0 auto .75rem
}

.team-name {
    font-size: .85rem;
    font-weight: 500;
    color: var(--color-bg-darkest)
}

.team-role {
    font-size: .75rem;
    color: var(--color-text-on-light-muted);
    margin-top: .2rem
}
</style>