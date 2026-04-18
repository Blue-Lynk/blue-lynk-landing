<script setup lang="ts">
import { ref } from 'vue'

useSeoMeta({
    title: 'Servicios | Blue Lynk | Soluciones Digitales para PYMEs',
    description: 'Descubre nuestros servicios: desarrollo web, e-commerce, integraciones API, automatización y más. Soluciones digitales para tu negocio en Lima, Perú.',
    ogTitle: 'Servicios | Blue Lynk',
    ogDescription: 'Soluciones digitales completas para PYMEs peruanas: web, e-commerce, APIs y más.',
    ogImage: 'https://bluelynk.dev/og-image.jpg',
    ogUrl: 'https://bluelynk.dev/servicios',
    ogType: 'website',
    ogLocale: 'es_PE',
    ogSiteName: 'Blue Lynk',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Servicios | Blue Lynk',
    twitterDescription: 'Descubre nuestras soluciones digitales para tu negocio.',
    twitterImage: 'https://bluelynk.dev/og-image.jpg',
    robots: 'index, follow',
})

useHead({
    htmlAttrs: { lang: 'es' },
    link: [{ rel: 'canonical', href: 'https://bluelynk.dev/servicios' }],
})

const activeService = ref(0)
const carouselRef = ref(null)
const isDragging = ref(false)
const startX = ref(0)
const currentX = ref(0)
const dragOffset = ref(0)

const services = [
    {
        id: 'sitios-web',
        title: 'SITIOS WEB',
        subtitle: 'Presencia digital orientada a resultados',
        icon: `<svg viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>`,
        description: 'Diseñamos y desarrollamos sitios web modernos, rápidos y enfocados en conversión. Cada elemento está pensado para captar clientes y reforzar tu marca.',
        shortDesc: 'Sitios web profesionales diseñados para atraer y convertir.',
        benefits: [
            { title: 'Diseño Responsivo', desc: 'Experiencia optimizada en todos los dispositivos.' },
            { title: 'Optimización SEO', desc: 'Base técnica preparada para posicionamiento en buscadores.' },
            { title: 'Alto Rendimiento', desc: 'Velocidad de carga optimizada para mejorar conversión.' },
            { title: 'Gestión de Contenido', desc: 'Edición sencilla sin necesidad de conocimientos técnicos.' },
            { title: 'Seguridad Integrada', desc: 'Protección, certificados SSL y backups automatizados.' },
            { title: 'Soporte Inicial', desc: 'Acompañamiento posterior a la entrega para asegurar funcionamiento.' }
        ],
        useCases: [
            'Sitios corporativos',
            'Landing pages',
            'Portfolios profesionales',
            'Páginas institucionales',
            'Micrositios de campaña'
        ],
        timeline: '2-3 semanas',
        cta: 'Crear mi sitio web'
    },
    {
        id: 'ecommerce',
        title: 'E-COMMERCE',
        subtitle: 'Plataformas de venta listas para escalar',
        icon: `<svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>`,
        benefits: [
            { title: 'Pagos Locales Integrados', desc: 'Integración con Yape, Culqi, PagoEfectivo y más.' },
            { title: 'Gestión de Productos', desc: 'Administración simple de catálogo, precios y promociones.' },
            { title: 'Control de Inventario', desc: 'Seguimiento automático de stock y alertas.' },
            { title: 'Optimización de Conversión', desc: 'Flujos de compra diseñados para reducir abandono.' },
            { title: 'Gestión de Pedidos', desc: 'Control completo de órdenes y estados.' },
            { title: 'Analítica de Ventas', desc: 'Indicadores clave para toma de decisiones.' }
        ],
        useCases: [
            'Retail y moda',
            'Productos especializados',
            'Venta de servicios',
            'Negocios en expansión digital',
            'Catálogos con pagos online'
        ],
        timeline: '4-8 semanas',
        cta: 'Lanzar mi tienda'
    },
    {
        id: 'integraciones',
        title: 'INTEGRACIONES API',
        subtitle: 'Conectividad entre tus sistemas',
        icon: `<svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>`,
        description: 'Integramos tus herramientas y plataformas para centralizar la información, automatizar procesos y mejorar la eficiencia operativa.',
        shortDesc: 'Conecta tus sistemas y elimina procesos manuales.',
        benefits: [
            { title: 'Integración con CRM', desc: 'Centraliza la gestión de clientes y leads.' },
            { title: 'Automatización de Flujos', desc: 'Elimina tareas manuales entre sistemas.' },
            { title: 'Conexión con Plataformas', desc: 'Integración con herramientas de marketing, pagos y más.' },
            { title: 'Sincronización de Datos', desc: 'Información consistente en todos tus sistemas.' },
            { title: 'APIs Personalizadas', desc: 'Conexión con sistemas específicos del negocio.' },
            { title: 'Escalabilidad', desc: 'Preparado para integrar nuevas herramientas en el futuro.' }
        ],
        useCases: [
            'Sincronización de clientes',
            'Automatización de procesos internos',
            'Integración con CRM',
            'Conexión de plataformas externas',
            'Flujos operativos automatizados'
        ],
        timeline: '2-4 semanas',
        cta: 'Integrar mis sistemas'
    },
    {
        id: 'desarrollo-soluciones',
        title: 'DESARROLLO DE SOLUCIONES',
        subtitle: 'Software adaptado a tu operación',
        icon: `<svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>`,
        description: 'Creamos sistemas, plataformas y aplicaciones a medida que resuelven necesidades específicas y optimizan la operación de tu negocio.',
        shortDesc: 'Software diseñado específicamente para tus procesos.',
        benefits: [
            { title: 'Desarrollo a Medida', desc: 'Soluciones diseñadas según tus procesos reales.' },
            { title: 'Arquitectura Escalable', desc: 'Preparado para crecer junto a tu negocio.' },
            { title: 'Optimización Operativa', desc: 'Reducción de tiempos y errores manuales.' },
            { title: 'Seguridad', desc: 'Protección de datos y control de accesos.' },
            { title: 'Dashboards y Reportes', desc: 'Visualización clara de la información clave.' },
            { title: 'Integración Total', desc: 'Compatible con otros sistemas existentes.' }
        ],
        useCases: [
            'Sistemas internos',
            'Plataformas de gestión',
            'MVPs de negocio',
            'Sistemas de reservas',
            'Herramientas operativas'
        ],
        timeline: '6-12 semanas',
        cta: 'Desarrollar mi solución'
    },
    {
        id: 'automatizacion',
        title: 'AUTOMATIZACIÓN',
        subtitle: 'Procesos más eficientes, menos trabajo manual',
        icon: `<svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>`,
        description: 'Automatizamos procesos operativos para reducir tareas manuales, minimizar errores y mejorar la eficiencia de tu equipo.',
        shortDesc: 'Optimiza tu operación con automatización inteligente.',
        benefits: [
            { title: 'Automatización de Comunicaciones', desc: 'Emails, notificaciones y seguimientos automáticos.' },
            { title: 'Flujos de Datos', desc: 'Movimiento automático de información entre sistemas.' },
            { title: 'Reportes Automáticos', desc: 'Generación y envío programado de reportes.' },
            { title: 'Alertas Inteligentes', desc: 'Notificaciones ante eventos clave.' },
            { title: 'Integración de Procesos', desc: 'Conexión entre áreas operativas.' },
            { title: 'Ahorro de Tiempo', desc: 'Reducción significativa de tareas repetitivas.' }
        ],
        useCases: [
            'Gestión de leads',
            'Seguimiento de clientes',
            'Facturación automática',
            'Notificaciones operativas',
            'Automatización interna'
        ],
        timeline: '1-2 semanas',
        cta: 'Automatizar procesos'
    },
    {
        id: 'soporte-ti',
        title: 'SOPORTE TI',
        subtitle: 'Continuidad y estabilidad operativa',
        icon: `<svg viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>`,
        description: 'Brindamos soporte técnico continuo, mantenimiento y monitoreo para garantizar el correcto funcionamiento de tu infraestructura tecnológica.',
        shortDesc: 'Soporte técnico para mantener tu operación activa.',
        benefits: [
            { title: 'Monitoreo Continuo', desc: 'Supervisión constante de sistemas y servicios.' },
            { title: 'Mantenimiento Preventivo', desc: 'Actualizaciones y mejoras periódicas.' },
            { title: 'Backups Automatizados', desc: 'Protección y recuperación de información.' },
            { title: 'Respuesta Ágil', desc: 'Atención rápida ante incidentes.' },
            { title: 'Seguridad', desc: 'Protección ante vulnerabilidades y amenazas.' },
            { title: 'Optimización', desc: 'Mejora continua del rendimiento.' }
        ],
        useCases: [
            'Gestión de servidores',
            'Soporte técnico empresarial',
            'Monitoreo de sistemas',
            'Optimización de infraestructura',
            'Seguridad tecnológica'
        ],
        timeline: 'Mensual/recurrente',
        cta: 'Contratar soporte'
    }
]

function startDrag(e: any) {
    isDragging.value = true
    startX.value = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
    dragOffset.value = 0
}

function onDrag(e: any) {
    if (!isDragging.value) return

    const currentXPos = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
    dragOffset.value = currentXPos - startX.value
}

function endDrag() {
    if (!isDragging.value) return
    isDragging.value = false

    // Threshold to change slide (50px)
    if (Math.abs(dragOffset.value) > 50) {
        if (dragOffset.value > 0) {
            prevService()
        } else {
            nextService()
        }
    }
    dragOffset.value = 0
}

function nextService() {
    activeService.value = (activeService.value + 1) % services.length
}

function prevService() {
    activeService.value = (activeService.value - 1 + services.length) % services.length
}

function goToService(index: number) {
    activeService.value = index
}
</script>

<template>
    <!-- Hero -->
     <section class="hero">
        <div class="hero-glow"></div>
        <div class="hero-content content-center-md">
            <p class="top-title text-md-center">Qué ofrecemos</p>
            <h1 class="hero-h h1 text-md-center">
                Soluciones <em>completas</em> <br>
                para tu negocio
            </h1>
            <p class="sec-sub light-text text-md-center md">
                 Desde sitios web hasta automatización. <br class="responsive-ipad">
                Cada servicio diseñado para hacer crecer tu empresa.
            </p>
            <div class="hero-btns ">
                <UiBtnLight variant="btn-primary" to="/contact">Agenda tu Cita</UiBtnLight>
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

    <!-- Services Carousel -->
    <section class="sections darkest">
        <div class="carousel-wrapper">
            <!-- Left Arrow -->
            <button class="carousel-arrow carousel-arrow-left" @click="prevService" aria-label="Servicio anterior">
                ‹
            </button>

            <!-- Carousel Container -->
            <div class="carousel-container" ref="carouselRef" @mousedown="startDrag" @touchstart="startDrag"
                @mousemove="onDrag" @touchmove="onDrag" @mouseup="endDrag" @mouseleave="endDrag" @touchend="endDrag"
                :style="{ cursor: isDragging ? 'grabbing' : 'grab' }">
                <div class="carousel-track" :style="{
                    transform: `translateX(calc(-${activeService * 100}% + ${dragOffset}px))`,
                    transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)'
                }">
                    <div v-for="(service, index) in services" :key="index" class="carousel-slide">
                        <div class="service-content">
                            <div class="service-header">
                                <div class="svc-icon" v-html="service.icon"></div>
                                <div>
                                    <h2 class="service-title bright-text">{{ service.title }}</h2>
                                    <p class="service-subtitle vivid-text">{{ service.subtitle }}</p>
                                </div>
                            </div>
                            <p class="service-description light-text">{{ service.description }}</p>

                            <!-- Benefits Grid -->
                            <div class="benefits-section">
                                <h3 class="benefits-title bright-text">BENEFICIOS</h3>
                                <div class="benefits-grid">
                                    <div v-for="(benefit, i) in service.benefits" :key="i" class="benefit-item">
                                        <div class="benefit-dot"></div>
                                        <div>
                                            <h4 class="benefit-title-sm bright-text">{{ benefit.title }}</h4>
                                            <p class="benefit-desc light-text">{{ benefit.desc }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Use Cases -->
                            <div class="usecases-section">
                                <div>
                                    <h3 class="usecases-title bright-text">CASOS DE USO</h3>
                                    <ul class="usecases-list">
                                        <li v-for="useCase in service.useCases" :key="useCase" class="usecase-item">
                                            {{ useCase }}
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 class="usecases-title bright-text">INFORMACIÓN</h3>
                                    <div class="info-box">
                                        <div class="info-item">
                                            <p class="info-label light-text">Tiempo de entrega estimado</p>
                                            <p class="info-value bright-text">{{ service.timeline }}</p>
                                        </div>
                                    </div>
                                    <UiBtnLight variant="btn-primary" class="service-cta">{{ service.cta }}
                                    </UiBtnLight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Arrow -->
            <button class="carousel-arrow carousel-arrow-right" @click="nextService" aria-label="Siguiente servicio">
                ›
            </button>
        </div>

        <!-- Slide Indicators -->
        <div class="carousel-indicators">
            <button v-for="(service, index) in services" :key="index"
                :class="['indicator-dot', { active: activeService === index }]" @click="goToService(index)"
                :aria-label="`Ir al servicio ${index + 1}: ${service.title}`">
            </button>
        </div>
    </section>

    <!-- Why Blue Lynk Section -->
    <section class="sections light">
        <div class="why-header">
            <p class="top-title text-center">Por qué elegirnos</p>
            <h2 class="h2 text-center">¿POR QUÉ BLUE LYNK?</h2>
        </div>

        <div class="advantages-grid">

            <div class="advantage-card">
                <div class="adv-number">01</div>
                <h3 class="h3">SOLUCIONES A MEDIDA</h3>
                <p class="p-card">
                    Cada proyecto se desarrolla desde cero según tus procesos y objetivos.
                    No utilizamos plantillas ni soluciones genéricas.
                </p>
            </div>

            <div class="advantage-card">
                <div class="adv-number">02</div>
                <h3 class="h3">ENFOQUE EN NEGOCIO</h3>
                <p class="p-card">
                    Analizamos tu operación antes de desarrollar. Buscamos impacto real
                    en eficiencia, control y crecimiento.
                </p>
            </div>

            <div class="advantage-card">
                <div class="adv-number">03</div>
                <h3 class="h3">SOLUCIONES ESCALABLES</h3>
                <p class="p-card">
                    Diseñamos herramientas preparadas para crecer contigo, evitando
                    rehacer sistemas a medida que tu empresa evoluciona.
                </p>
            </div>

            <div class="advantage-card">
                <div class="adv-number">04</div>
                <h3 class="h3">ACOMPAÑAMIENTO CONTINUO</h3>
                <p class="p-card">
                    Brindamos soporte, mejoras y asesoría para asegurar que la solución
                    siga generando valor después de su implementación.
                </p>
            </div>

        </div>
    </section>


    <!-- CTA Section -->
    <section class="sections dark">
        <div class="final-cta">
            <h2 class="h2 bright-text text-center">¿Cuál es el siguiente paso para tu negocio?</h2>
            <p class="light-text text-center md">
                Cuéntanos qué necesitas. Te haremos una propuesta personalizada.
            </p>
            <UiBtnLight variant="btn-primary">Solicitar cotización</UiBtnLight>
        </div>
    </section>
</template>

<style scoped>
/* CAROUSEL WRAPPER */
.carousel-wrapper {
    position: relative;
    display: block;
    /* grid-template-columns: auto 1fr auto;
    gap: 1.5rem;
    align-items: center; */
    margin-bottom: 3rem;
    padding-inline: 2.75rem;
}

/* Carousel Container */
.carousel-container {
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    background: rgba(81, 112, 255, 0.08);
    border: 1px solid rgba(81, 112, 255, 0.2);
}

.carousel-track {
    display: flex;
    width: 100%;
}

.carousel-slide {
    min-width: 100%;
    padding: 3rem 2.5rem;
    display: flex;
    align-items: center;
}

.service-content {
    width: 100%;
}

/* Carousel Arrows */
.carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(81, 112, 255, 0.15);
    border: 2px solid rgba(81, 112, 255, 0.3);
    color: var(--color-primary);
    font-size: 2.5rem;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    line-height: 1;
    padding: 0;
}

.carousel-arrow-left {
    left: -18px;
}

.carousel-arrow-right {
    right: -18px;
}

.carousel-arrow:hover {
    background: var(--color-primary);
    color: var(--color-bg-darkest);
    border-color: var(--color-primary);
    transform: translateY(-50%) scale(1.1);
}

.carousel-arrow:active {
    transform: translateY(-50%) scale(0.95);
}

.svc-icon {
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    line-height: 0;
}

.svc-icon :deep(svg) {
    width: 100%;
    height: 100%;
    display: block;
}

/* Service Header */
.service-header {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    margin-bottom: 2rem;
}

.service-title {
    font-size: 2.5rem;
    margin: 0 0 0.5rem 0;
    letter-spacing: 2px;
}

.service-subtitle {
    font-size: 1.1rem;
    margin: 0;
}

.service-description {
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 3rem;
}

/* Benefits Grid */
.benefits-section {
    margin-bottom: 3rem;
}

.benefits-title {
    font-size: 1.8rem;
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.benefit-item {
    display: flex;
    gap: 1.25rem;
}

.benefit-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--color-primary);
    flex-shrink: 0;
    margin-top: 0.5rem;
}

.benefit-title-sm {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
}

.benefit-desc {
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
}

/* Use Cases Section */
.usecases-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    margin-bottom: 2rem;
}

.usecases-title {
    font-size: 1.8rem;
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
}

.usecases-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.usecase-item {
    color: var(--color-text-on-dark-muted);
    padding-left: 1.5rem;
    position: relative;
    font-size: 0.95rem;
    line-height: 1.6;
}

.usecase-item::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--color-primary);
    font-weight: bold;
}

.info-box {
    background: rgba(81, 112, 255, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
}

.info-item {
    margin: 0;
}

.info-label {
    font-size: 0.85rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}

.info-value {
    font-size: 1.5rem;
    margin: 0;
}

.service-cta {
    width: 100%;
}

/* Slide Indicators */
.carousel-indicators {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.indicator-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(81, 112, 255, 0.3);
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.3s;
}

.indicator-dot:hover {
    background: rgba(81, 112, 255, 0.6);
}

.indicator-dot.active {
    background: var(--color-primary);
    border-color: var(--color-primary);
}

/* ADVANTAGES */
.why-header {
    text-align: center;
    margin-bottom: 3rem;
}

.advantages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
}

.advantage-card {
    background: var(--color-bg-lightest);
    border: 1px solid rgba(81, 112, 255, 0.15);
    border-radius: 14px;
    padding: 2rem 1.5rem;
    text-align: center;
    transition: transform 0.3s, border-color 0.3s;
}

.advantage-card:hover {
    transform: translateY(-4px);
    border-color: var(--color-primary);
}

.adv-number {
    font-family: var(--font-title);
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: 1rem;
}

.advantage-card h3 {
    color: var(--color-bg-darkest);
    margin-bottom: 0.75rem;
    letter-spacing: 1px;
}

.advantage-card p {
    color: var(--color-text-on-light-muted);
    font-size: 0.95rem;
    line-height: 1.65;
    margin: 0;
}

/* CTA */
.final-cta {
    text-align: center;
}

.final-cta h2 {
    margin-bottom: 1.5rem;
}

.final-cta p {
    margin: 0 auto 2rem;
}

/* Responsive */
@media (max-width: 1050px) {
    .carousel-slide {
        padding: 2rem 1.75rem;
    }

    .service-title {
        font-size: 2rem;
    }

    .service-header {
        gap: 1.5rem;
    }

    .benefits-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 835px) {
    .carousel-wrapper {
        padding-inline: 1.75rem;
    }

    .carousel-arrow-left {
        left: -14px;
    }

    .carousel-arrow-right {
        right: -14px;
    }

    .carousel-container {
        position: relative;
    }

    .service-header {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .usecases-section {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .advantages-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .carousel-slide {
        padding: 2rem 1.75rem;
    }

    .carousel-arrow {
        width: 45px;
        height: 45px;
        font-size: 2rem;
    }
}

@media (max-width: 475px) {
    .carousel-wrapper {
        padding-inline: 1rem;
    }


    .carousel-arrow-left {
        left: -10px;
    }

    .carousel-arrow-right {
        right: -10px;
    }

    .carousel-slide {
        padding: 1.5rem 1.5rem;
    }

    .carousel-arrow {
        width: 40px;
        height: 40px;
        font-size: 1.75rem;
    }

    .service-title {
        font-size: 1.8rem;
    }

    .service-header {
        gap: 1rem;
    }

    .benefits-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .usecases-section {
        grid-template-columns: 1fr;
    }

    .advantages-grid {
        grid-template-columns: 1fr;
    }

    .carousel-indicators {
        gap: 0.75rem;
    }

    .indicator-dot {
        width: 10px;
        height: 10px;
    }
}
</style>