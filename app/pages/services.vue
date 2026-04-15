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
        subtitle: 'Presencia digital que convierte',
        icon: `<svg viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>`,
        description: 'Diseñamos y construimos sitios web modernos, rápidos y optimizados para conversiones. Cada pixel cuenta.',
        shortDesc: 'Páginas web profesionales que atraen y convierten clientes.',
        benefits: [
            { title: 'Diseño Responsivo', desc: 'Se ve perfecto en cualquier dispositivo: desktop, tablet, móvil.' },
            { title: 'Optimización SEO', desc: 'Posicionamiento en Google desde el día uno. Más visitas orgánicas.' },
            { title: 'Velocidad Premium', desc: 'Carga rápida = menos abandono = más conversiones.' },
            { title: 'Fácil de Mantener', desc: 'Sin código complicado. Puedes actualizar contenido tú mismo.' },
            { title: 'Seguridad Incluida', desc: 'SSL, backups automáticos y protección contra ataques.' },
            { title: 'Soporte Continuo', desc: '30 días gratis, luego planes de mantenimiento flexible.' }
        ],
        useCases: [
            'Portfolio profesional',
            'Blog corporativo',
            'Landing page de ventas',
            'Sitio informativo',
            'Micrositios'
        ],
        timeline: '2-3 semanas',
        cta: 'Crear mi sitio web'
    },
    {
        id: 'ecommerce',
        title: 'E-COMMERCE',
        subtitle: 'Tienda online que vende',
        icon: `<svg viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>`,
        description: 'Tiendas online completas con productos, pagos peruanos, gestión de inventario y todo lo que necesitas para vender online.',
        shortDesc: 'Plataforma de ventas online con pagos locales integrados.',
        benefits: [
            { title: 'Pasarelas Peruanas', desc: 'Yape, PagoEfectivo, Culqi, transferencias bancarias.' },
            { title: 'Gestión de Productos', desc: 'Agrega, edita y organiza productos sin código.' },
            { title: 'Control de Inventario', desc: 'Stock automático, alertas de bajo inventario, reportes.' },
            { title: 'Carrito Inteligente', desc: 'Carrito abandonado, cupones, promociones, upsells.' },
            { title: 'Gestión de Órdenes', desc: 'Dashboard de pedidos, estados, seguimiento de envíos.' },
            { title: 'Análisis de Ventas', desc: 'Reportes en tiempo real: productos top, conversión, ingresos.' }
        ],
        useCases: [
            'Moda y ropa',
            'Electrónica',
            'Cosméticos',
            'Alimentos',
            'Servicios'
        ],
        timeline: '4-8 semanas',
        cta: 'Lanzar mi tienda'
    },
    {
        id: 'integraciones',
        title: 'INTEGRACIONES API',
        subtitle: 'Conecta tus herramientas',
        icon: `<svg viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>`,
        description: 'Conectamos tu sitio o app con terceros: CRM, email marketing, herramientas de pago, redes sociales y más.',
        shortDesc: 'Automatiza flujos conectando tus sistemas favoritos.',
        benefits: [
            { title: 'CRM Integration', desc: 'Sincroniza leads y contactos automáticamente con HubSpot, Pipedrive, etc.' },
            { title: 'Email Marketing', desc: 'Integración con Mailchimp, Brevo, Klaviyo para campañas automáticas.' },
            { title: 'Redes Sociales', desc: 'Publica automáticamente, sincroniza datos, tracking avanzado.' },
            { title: 'Pagos y Facturación', desc: 'Stripe, PayPal, Culqi + emisión de comprobantes SUNAT.' },
            { title: 'Herramientas Internas', desc: 'Google Sheets, Slack, Discord, Telegram notificaciones en tiempo real.' },
            { title: 'APIs Personalizadas', desc: 'Conectamos cualquier sistema, sin importar qué tan específico sea.' }
        ],
        useCases: [
            'Sincronización de datos',
            'Automación de procesos',
            'Notificaciones en tiempo real',
            'Reportes integrados',
            'Flujos sin fricción'
        ],
        timeline: '2-4 semanas',
        cta: 'Integrar mis sistemas'
    },
    {
        id: 'desarrollo-soluciones',
        title: 'DESARROLLO DE SOLUCIONES',
        subtitle: 'Apps a medida para tu negocio',
        icon: `<svg viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>`,
        description: 'Desarrollamos aplicaciones personalizadas que resuelven problemas específicos de tu negocio. Desde apps web hasta herramientas internas.',
        shortDesc: 'Soluciones digitales diseñadas específicamente para ti.',
        benefits: [
            { title: 'Totalmente Personalizado', desc: 'Nada de templates. Código hecho 100% para tu negocio.' },
            { title: 'Escalable', desc: 'Crece con tu empresa sin necesidad de rehacer todo.' },
            { title: 'Arquitectura Sólida', desc: 'Código limpio y mantenible que dura años.' },
            { title: 'Seguridad Enterprise', desc: 'Encriptación, autenticación, validaciones en cada paso.' },
            { title: 'Dashboard y Reportes', desc: 'Visualiza tus datos de forma que realmente importa.' },
            { title: 'API Robusta', desc: 'Interfaz para conectar con otros sistemas o apps móviles.' }
        ],
        useCases: [
            'Herramientas internas',
            'Apps de gestión',
            'Plataformas SaaS',
            'Aplicaciones móviles',
            'Sistemas de reservas'
        ],
        timeline: '6-12 semanas',
        cta: 'Desarrollar mi solución'
    },
    {
        id: 'automatizacion',
        title: 'AUTOMATIZACIÓN',
        subtitle: 'Ahorra tiempo, aumenta eficiencia',
        icon: `<svg viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>`,
        description: 'Eliminamos tareas repetitivas: emails automáticos, flujos de datos, reportes, alertas. Tu equipo se enfoca en lo importante.',
        shortDesc: 'Automatiza procesos y ahorra horas de trabajo manual.',
        benefits: [
            { title: 'Emails Automáticos', desc: 'Bienvenida, confirmaciones, recordatorios, newsletters sin intervención.' },
            { title: 'Flujos de Datos', desc: 'Los datos se mueven automáticamente entre tus sistemas.' },
            { title: 'Reportes Programados', desc: 'Reportes diarios, semanales o mensuales enviados automáticamente.' },
            { title: 'Alertas Inteligentes', desc: 'Notificaciones cuando algo importante ocurra: bajo stock, nuevo pedido, etc.' },
            { title: 'Webhooks y Triggers', desc: 'Acciones automáticas basadas en eventos específicos.' },
            { title: 'Ahorro de Tiempo', desc: 'Recupera horas de tu equipo cada semana para tareas estratégicas.' }
        ],
        useCases: [
            'Email marketing',
            'Gestión de leads',
            'Actualizaciones de inventario',
            'Facturación automática',
            'Notificaciones al cliente'
        ],
        timeline: '1-2 semanas',
        cta: 'Automatizar procesos'
    },
    {
        id: 'soporte-ti',
        title: 'SOPORTE TI',
        subtitle: 'Infraestructura que no falla',
        icon: `<svg viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>`,
        description: 'Mantenimiento, monitoreo y soporte técnico continuo para que tu infraestructura funcione 24/7 sin interrupciones.',
        shortDesc: 'Cuidamos tu infraestructura para que vos cuidés tu negocio.',
        benefits: [
            { title: 'Monitoreo 24/7', desc: 'Vigilancia continua de servidores, uptime y performance.' },
            { title: 'Mantenimiento Preventivo', desc: 'Updates, patches y mejoras antes de que causen problemas.' },
            { title: 'Backups Automáticos', desc: 'Copias de seguridad diarias, semanales, listas para restaurar.' },
            { title: 'Respuesta Rápida', desc: 'Si algo falla, lo arreglamos en minutos, no horas.' },
            { title: 'Seguridad Actualizada', desc: 'Firewall, SSL, escaneo de vulnerabilidades, protección DDoS.' },
            { title: 'Reportes de Performance', desc: 'Analítica detallada de uso, velocidad y salud del servidor.' }
        ],
        useCases: [
            'Hosting administrado',
            'Monitoreo de uptime',
            'Gestión de seguridad',
            'Optimización de performance',
            'Soporte técnico'
        ],
        timeline: 'Mensual/recurrente',
        cta: 'Contratar soporte'
    }
]

function startDrag(e) {
    isDragging.value = true
    startX.value = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
    dragOffset.value = 0
}

function onDrag(e) {
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

function goToService(index) {
    activeService.value = index
}
</script>

<template>
    <!-- Hero -->
    <section class="hero hero-section">
        <div class="hero-glow"></div>
        <div class="hero-content">
            <p class="top-title text-sm-center">Qué ofrecemos</p>
            <h2 class="hero-h h1 text-sm-center">
                Soluciones <em>completas</em> <br>
                para tu negocio
            </h2>
            <p class="light-text text-sm-center md">
                Desde sitios web hasta automatización. <br class="responsive-ipad">
                Cada servicio diseñado para hacer crecer tu empresa.
            </p>
        </div>
    </section>

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
            <h2 class="h2 text-center">VENTAJAS BLUE LYNK</h2>
        </div>
        <div class="advantages-grid">
            <div class="advantage-card">
                <div class="adv-number">01</div>
                <h3 class="h3">EXPERIENCIA REAL</h3>
                <p class="p-card">Hemos trabajado en proyectos reales. Conocemos los retos de cada industria.</p>
            </div>
            <div class="advantage-card">
                <div class="adv-number">02</div>
                <h3 class="h3">SOLUCIONES ESCALABLES</h3>
                <p class="p-card">Tu solución crece con tu negocio. Diseñamos para el futuro, no solo para hoy.</p>
            </div>
            <div class="advantage-card">
                <div class="adv-number">03</div>
                <h3 class="h3">SOPORTE INCLUIDO</h3>
                <p class="p-card">30 días gratis de soporte. Después, planes flexibles de mantenimiento.</p>
            </div>
            <div class="advantage-card">
                <div class="adv-number">04</div>
                <h3 class="h3">TRANSPARENCIA TOTAL</h3>
                <p class="p-card">Presupuestos claros. Sin sorpresas. Te explicamos cada paso del camino.</p>
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
/* HERO */
.hero-section {
    grid-template-columns: 1fr;
    justify-content: center;
}

.hero-content {
    max-width: 700px;
    margin: 0 auto;
}

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