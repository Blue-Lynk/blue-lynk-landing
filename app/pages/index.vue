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
    <section class="hero sections">
        <div class="hero-glow"></div>
        <div class="content-res">
            <p class="hero-tag">Soluciones digitales · Lima, Perú</p>
            <h1 class="hero-h">TU EMPRESA<br><em>LISTA</em><br>PARA EL<br>FUTURO</h1>
        </div>
        <div class="hero-visual">
            <div class="hero-stat-row">
                <div class="hstat">
                    <div class="hstat-num">2<span>+</span></div>
                    <div class="hstat-label">Proyectos entregados</div>
                </div>
                <div class="hstat">
                    <div class="hstat-num">100<span>%</span></div>
                    <div class="hstat-label">Clientes satisfechos</div>
                </div>
            </div>
            <div class="hstat-wide">
                <p class="hero-p">Diseñamos y construimos herramientas digitales que hacen crecer a las PYMEs
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
    <section class="sec sections" id="servicios">
        <p class="sec-tag">Qué hacemos</p>
        <h2 class="sec-h">NUESTROS<br>SERVICIOS</h2>
        <p class="sec-sub">Soluciones tecnológicas pensadas para negocios reales. Sin tecnicismos, con resultados.
        </p>
        <div class="svc-grid">
            <div class="svc-card">
                <div class="svc-icon"><svg viewBox="0 0 24 24">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8M12 17v4" />
                    </svg></div>
                <h3>SITIOS WEB</h3>
                <p>Páginas rápidas y modernas que convierten visitas en clientes. Diseño exclusivo y optimizado.</p>
            </div>
            <div class="svc-card">
                <div class="svc-icon"><svg viewBox="0 0 24 24">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg></div>
                <h3>E-COMMERCE</h3>
                <p>Tiendas online con pasarelas de pago peruanas, gestión de inventario y catálogos fáciles de
                    manejar.</p>
            </div>
            <div class="svc-card">
                <div class="svc-icon"><svg viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg></div>
                <h3>INTEGRACIONES</h3>
                <p>Ni idea que poner.</p>
            </div>
            <div class="svc-card">
                <div class="svc-icon"><svg viewBox="0 0 24 24">
                        <path d="M18 20V10M12 20V4M6 20v-6" />
                    </svg></div>
                <h3>DESARROLLO DE SOLUCIONES</h3>
                <p>Tampoco se que poner.</p>
            </div>
            <div class="svc-card">
                <div class="svc-icon"><svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3" />
                        <path
                            d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg></div>
                <h3>AUTOMATIZACIÓN</h3>
                <p>Eliminamos tareas repetitivas con flujos automáticos: emails, reportes, alertas y más.</p>
            </div>
            <div class="svc-card">
                <div class="svc-icon"><svg viewBox="0 0 24 24">
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg></div>
                <h3>SOPORTE TI</h3>
                <p>Mantenimiento, seguridad y soporte técnico para que tu infraestructura nunca pare.</p>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section class="port sections" id="portafolio">
        <p class="sec-tag">Trabajo reciente</p>
        <h2 class="sec-h">PORTAFOLIO</h2>
        <p class="sec-sub">Proyectos que transformaron negocios reales.</p>
        <div class="port-grid">
            <div class="port-card">
                <div class="port-thumb t1">BL</div>
                <div class="port-info">
                    <p class="port-tag">E-Commerce · Retail</p>
                    <h3 class="port-name">MODA PERÚ STORE</h3>
                    <p class="port-desc">Tienda online con +200 productos, pagos con Yape y PagoEfectivo, entrega en
                        todo Lima.</p>
                </div>
            </div>
            <div class="port-card">
                <div class="port-thumb t2">BL</div>
                <div class="port-info">
                    <p class="port-tag">Sistema · Salud</p>
                    <h3 class="port-name">CLÍNICA DIGITAL</h3>
                    <p class="port-desc">Plataforma de citas online, historial de pacientes y facturación
                        electrónica SUNAT.</p>
                </div>
            </div>
            <div class="port-card">
                <div class="port-thumb t3">BL</div>
                <div class="port-info">
                    <p class="port-tag">Web · Educación</p>
                    <h3 class="port-name">ACADEMIA LYNK</h3>
                    <p class="port-desc">Sitio web con landing de conversión, blog SEO y formulario de inscripción
                        integrado.</p>
                </div>
            </div>
        </div>
        <div style="margin-top:2.5rem;text-align:center">
            <UiBtnLight variant="btn-secondary">Ver todos los proyectos</UiBtnLight>
        </div>
    </section>

    <!-- About Section -->
    <section class="about sections" id="nosotros">
        <div class="content-res">
            <p class="sec-tag">Quiénes somos</p>
            <h2 class="sec-h">TECNOLOGÍA<br>CON PROPÓSITO</h2>
            <p style="font-size:.92rem;color:#555;line-height:1.75;margin-top:.75rem">Somos dos emprendedores
                limeños que entendemos los retos reales de las PYMEs peruanas. No vendemos plantillas — construimos
                soluciones que realmente funcionan para tu negocio.</p>
            <div class="about-nums">
                <div class="about-num">
                    <div class="about-num-n">2026</div>
                    <div class="about-num-l">Fundada en Lima</div>
                </div>
                <div class="about-num">
                    <div class="about-num-n">2+</div>
                    <div class="about-num-l">Proyectos</div>
                </div>
                <div class="about-num">
                    <div class="about-num-n">2+</div>
                    <div class="about-num-l">Industrias</div>
                </div>
                <div class="about-num">
                    <div class="about-num-n">2</div>
                    <div class="about-num-l">Co-fundadores</div>
                </div>
            </div>
            <div class="team-row">
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
            </div>
        </div>
        <div>
            <div class="about-quote">
                <div class="about-quote-mark">"</div>
                <p>Creamos Blue Lynk porque vimos demasiadas PYMEs peruanas perdiendo clientes por no tener
                    presencia digital. Nuestra misión es simple: hacer que la tecnología trabaje para ti, no al
                    revés.</p>
                <div class="about-quote-sig">— Equipo de Blue Lynk</div>
            </div>
        </div>
    </section>

    <!--FAQ Section -->
    <FaqSection :faqs="homeFaqs" />

    <!-- Contact Section -->
    <Contact />
</template>

<style scoped>
.hero {
    background: var(--color-bg-darkest);
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
    padding: 0 5rem 0 5rem;
    position: relative;
    overflow: hidden
}

.hero-glow {
    position: absolute;
    top: -100px;
    right: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, var(--btn-secondary-dark-bg-hover) 0%, transparent 65%);
    border-radius: 50%;
    pointer-events: none;
    animation: gpulse 7s ease-in-out infinite
}

.hero-tag {
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--color-primary);
    margin-bottom: 1rem;
    /* animation: fup .6s .1s both */
}

.hero-h {
    line-height: .9;
    color: var(--color-bg-light);
    margin-bottom: 1.5rem;
    /* animation: fup .6s .25s both */
}

.hero-h em {
    color: var(--color-primary);
}

.hero-p {
    line-height: 1.75;
    color: var(--color-text-on-dark-muted);
    max-width: 400px;
    margin-bottom: 2.5rem;
    /* animation: fup .6s .4s both */
}

.hero-btns {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    /* animation: fup .6s .55s both */
}

.hero-visual {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* animation: fup .6s .4s both */
}

.hero-stat-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem
}

.hstat {
    background: rgba(81, 112, 255, 0.12);
    border: 1px solid rgba(81, 112, 255, 0.2);
    border-radius: 12px;
    padding: 1.25rem 1.5rem
}

.hstat-num {
    font-family: var(--font-title);
    font-size: 4rem;
    color: var(--color-bg-light);
    letter-spacing: 1px
}

.hstat-num span {
    font-size: 4rem;
    color: var(--color-primary)
}

.hstat-label {
    color: rgba(244, 246, 255, 0.5);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: .2rem
}

.hstat-wide {
    background: rgba(31, 54, 168, 0.4);
    border: 1px solid rgba(81, 112, 255, 0.2);
    border-radius: 12px;
    padding: 1.25rem 1.5rem
}

.hstat-wide p {
    color: rgba(244, 246, 255, 0.55);
    margin-bottom: .5rem
}

.bar-row {
    display: flex;
    align-items: center;
    gap: .75rem;
    margin-bottom: .4rem
}

.bar-label {
    color: rgba(244, 246, 255, 0.7);
    width: 70px
}

.bar-track {
    flex: 1;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 99px;
    height: 6px;
    overflow: hidden
}

.bar-fill {
    height: 100%;
    border-radius: 99px;
    background: var(--color-primary)
}

/* Services */

.sec {
    padding: 5rem 3rem
}

.sec-tag {
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--color-primary);
    margin-bottom: .5rem
}

.sec-h {
    font-family: 'Bebas Neue', sans-serif;
    color: var(--color-bg-darkest);
    line-height: 1;
    margin-bottom: .75rem
}

.sec-sub {
    color: var(--color-text-on-light-muted);
    max-width: 480px;
    line-height: 1.7;
    margin-bottom: 3rem
}

.svc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.25rem
}

.svc-card {
    background: var(--color-bg-lightest);
    border-radius: 14px;
    padding: 1.75rem 1.5rem;
    border: 1px solid transparent;
    transition: border-color .2s, transform .2s
}

.svc-card:hover {
    border-color: var(--color-primary);
    transform: translateY(-4px)
}

.svc-icon {
    width: 44px;
    height: 44px;
    background: #fff;
    border: 1px solid rgba(81, 112, 255, 0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem
}

.svc-icon svg {
    width: 20px;
    height: 20px;
    stroke: var(--color-primary);
    fill: none;
    stroke-width: 1.8
}

.svc-card h3 {
    color: var(--color-bg-darkest);
    letter-spacing: 1px;
    margin-bottom: .5rem
}

.svc-card p {
    color: var(--color-text-on-light-muted);
    line-height: 1.65
}

/* Portafolio */
.port {
    background: var(--color-bg-darkest);
    padding: 5rem 3rem
}

.port .sec-h {
    color: var(--color-bg-light)
}

.port .sec-sub {
    color: rgba(244, 246, 255, 0.55)
}

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
    transition: transform .2s
}

.port-card:hover {
    transform: scale(1.02)
}

.port-thumb {
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Bebas Neue', sans-serif;
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
    font-size: .68rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--color-primary);
    margin-bottom: .35rem
}

.port-name {
    color: var(--color-bg-light);
    letter-spacing: 1px;
    margin-bottom: .35rem
}

.port-desc {
    color: rgba(244, 246, 255, 0.5);
    line-height: 1.6
}

/* About Section */
.about {
    background: var(--color-bg-light);
    padding: 5rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center
}

.about-nums {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 2.5rem
}

.about-num {
    background: var(--color-bg-lightest);
    border-radius: 12px;
    padding: 1.25rem;
    border: 1px solid rgba(81, 112, 255, 0.1)
}

.about-num-n {
    font-family: 'Bebas Neue', sans-serif;
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
    background: #0D1B5E;
    border-radius: 16px;
    padding: 2rem;
    position: relative
}

.about-quote-mark {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 5rem;
    color: var(--color-primary);
    line-height: .7;
    margin-bottom: .75rem
}

.about-quote p {
    font-size: 1rem;
    color: rgba(244, 246, 255, 0.8);
    line-height: 1.75;
    font-style: italic
}

.about-quote-sig {
    margin-top: 1.25rem;
    font-size: .8rem;
    color: rgba(244, 246, 255, 0.45)
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
    font-family: 'Bebas Neue', sans-serif;
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