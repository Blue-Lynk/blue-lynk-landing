<script setup lang="ts">
import { ref } from 'vue'

// Los posts datos - en producción vendrían de una API
const allPosts = [
    {
        id: 'como-elegir-sitio-web-para-pyme',
        slug: 'como-elegir-sitio-web-para-pyme',
        title: 'Cómo Elegir el Sitio Web Perfecto para tu PYME en 2026',
        description: 'Guía completa sobre qué características debe tener tu sitio web para atraer clientes y mejorar ventas.',
        author: 'Daniel C.',
        date: '2026-04-19',
        category: 'Web Development',
        readTime: 4,
        image: '/blog/sitio-web-pyme.jpg',
        imageAlt: 'Persona trabajando en un sitio web profesional para PYME',
        content: `
# Cómo Elegir el Sitio Web Perfecto para tu PYME en 2026

Un buen sitio web es la base de tu presencia digital. Pero, ¿qué hace que un sitio sea realmente efectivo? En este artículo te muestro qué debes buscar.

## 1. Diseño Responsivo es OBLIGATORIO

Tu sitio debe verse perfecto en:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

Si no es responsive, pierdes al 60% de tus potenciales clientes que navegan desde celular.

## 2. Velocidad: Menos es Más

Un sitio que tarda más de 3 segundos en cargar pierde visitantes. En 2026:
- Usa imágenes optimizadas (WebP)
- Implementa lazy loading
- CDN para distribuir contenido

**Resultado:** +15% conversión si mejoras la velocidad de 5s a 2s.

## 3. SEO desde el Inicio

No basta un diseño bonito. Necesitas:
- Títulos y descripciones meta optimizadas
- URLs amigables (no /producto?id=123)
- Headings bien estructurados (H1, H2, H3)
- Contenido de calidad (mínimo 300 palabras por página)

## 4. Seguridad HTTPS

Google penaliza sitios sin SSL. Es GRATIS con Let's Encrypt.

## 5. Call-to-Action Clara

¿Quieres que compren? ¿Que se suscriban? ¿Que llamen?
- Botones visibles y contrastantes
- Múltiples CTAs en la página (pero no spam)
- Mensajes claros

## Ejemplo de Estructura Mínima

Un buen sitio para PYME necesita:

1. **Home** - Valor, beneficios, casos de éxito
2. **Servicios** - Qué ofreces, precios (opcional pero recomendado)
3. **Portafolio** - Casos reales, resultados medibles
4. **Blog** - Educación, SEO, confianza
5. **Contacto** - Múltiples canales: formulario, WhatsApp, email

## Presupuesto Realista

En 2026:
- Sitio web básico (5-10 páginas): $1,500 - $3,500
- E-commerce pequeño: $3,500 - $8,000
- Aplicación personalizada: $10,000+

Lo importante es que genere ROI.

## Conclusión

Tu sitio web no es un gasto, es una inversión. Elige bien, mantén actualizado, y verás cómo tus clientes llegan a ti.

**¿Necesitas un sitio web que realmente funcione?** [Contacta con Blue Lynk](/)
        `,
        tags: ['web-design', 'seo', 'negocios'],
        relatedPostIds: ['errores-comunes-ecommerce', 'seo-basico-para-pymes']
    },
    {
        id: 'errores-comunes-ecommerce',
        slug: 'errores-comunes-ecommerce',
        title: '5 Errores Críticos en E-commerce que Pierden Ventas',
        description: 'Descubre los 5 errores más comunes en tiendas online y cómo evitarlos para aumentar tus conversiones.',
        author: 'Nicolás A.',
        date: '2026-04-19',
        category: 'E-commerce',
        readTime: 4,
        image: '/blog/errores-ecommerce.jpg',
        imageAlt: 'Análisis de errores en tienda online',
        content: `
# 5 Errores Críticos en E-commerce que Pierden Ventas

Hemos analizado cientos de tiendas online. Estos 5 errores aparecen una y otra vez. Y son fáciles de arreglar.

## Error 1: Checkout Complicado

El 70% de los carritos se abandona por procesos de compra complejos.

**Lo que debes hacer:**
- Máximo 3 pasos: Carrito → Envío/Pago → Confirmación
- Permite comprar sin crear cuenta
- Muestra progreso visual

## Error 2: Falta de Reseñas

Las reseñas son el 92% de las decisiones de compra.

**Solución:**
- Pide reseñas después de 7 días
- Responde SIEMPRE a críticas negativas
- Muestra fotos de clientes reales

## Error 3: Descripción de Productos Pobre

"Camiseta azul" no vende. Pero "Camiseta 100% algodón, antialérgica, ideal para climas cálidos" sí.

## Error 4: Sin Opciones de Pago Local

Si solo aceptas tarjeta de crédito, pierdes clientes. En Perú necesitas:
- Yape
- PagoEfectivo
- Transferencia bancaria

## Error 5: Envío Caro o Lento

"$50 USD de envío" mata la compra. Ofrece:
- Envío gratis a partir de X monto
- Múltiples opciones (estándar, express)
- Tracking en tiempo real

## El Impacto Real

Una tienda que arregla estos 5 errores típicamente:
- Aumenta conversión 25-40%
- Reduce devoluciones 15%
- Mejora satisfacción del cliente

## Próximos Pasos

¿Tu tienda tiene estos problemas? Podemos auditarla gratis.

        `,
        tags: ['ecommerce', 'ventas', 'conversión'],
        relatedPostIds: ['como-elegir-sitio-web-para-pyme', 'seo-basico-para-pymes']
    },
    {
        id: 'seo-basico-para-pymes',
        slug: 'seo-basico-para-pymes',
        title: 'SEO Básico para PYMES: Posiciónate en Google sin Agencias',
        description: 'Aprende las tácticas SEO esenciales que puedes implementar tú mismo para aparecer en Google.',
        author: 'Daniel C.',
        date: '2026-04-19',
        category: 'SEO',
        readTime: 3,
        image: '/blog/seo-pymes.jpg',
        imageAlt: 'Estrategia SEO para pequeñas empresas',
        content: `
# SEO Básico para PYMES: Posiciónate en Google sin Agencias

No necesitas pagar agencias caras. Aquí está lo que necesitas saber para empezar con SEO.

## ¿Por Qué SEO?

1 de cada 3 clientes nuevos viene de Google. Si no estás en Google, no existes.

## Los 3 Pilares del SEO

### 1. SEO On-Page (En tu sitio)

**Palabras clave**
- Investiga qué buscan tus clientes (Google Trends, Ubersuggest free)
- Usa 1 palabra clave principal por página
- Incluye variantes naturalmente

**Estructura**
- 1 H1 por página
- Encabezados lógicos (H2, H3)
- URLs amigables: /blog/seo-para-pymes (no /blog?id=123)

**Meta datos**
- Título: 50-60 caracteres
- Descripción: 150-160 caracteres
- Incluye palabra clave en ambos

### 2. SEO Off-Page (Fuera de tu sitio)

**Backlinks** (enlaces de otros sitios al tuyo)
- 1 enlace de sitio relevante > 100 de spam
- Estrategia: guest posts, directorios relevantes, partners

### 3. SEO Técnico

- Sitemap XML
- Robots.txt
- Mobile-first indexing
- Velocidad de carga

## Herramientas Gratuitas

- Google Search Console (gratis, obligatorio)
- Google Analytics 4 (gratis)
- Ubersuggest free (palabras clave)
- AnswerThePublic (preguntas que hace la gente)

## Plan de Acción en 30 Días

**Semana 1:** Auditoría SEO básica + Google Search Console
**Semana 2:** Optimiza 5 páginas top (títulos, descripciones, H1)
**Semana 3:** Crea contenido (blog post) optimizado
**Semana 4:** Analiza resultados, ajusta

## Resultados Realistas

- 1-3 meses: Pequeños cambios en posiciones
- 3-6 meses: Primeros top 10
- 6-12 meses: Múltiples palabras clave en top 3

La paciencia es clave.

## Conclusión

SEO no es complicado. Es consistencia + datos + mejora continua.

        `,
        tags: ['seo', 'marketing', 'trafico'],
        relatedPostIds: ['como-elegir-sitio-web-para-pyme', 'errores-comunes-ecommerce']
    }
]

const route = useRoute()
const router = useRouter()

// Obtener el post actual
const post = ref(allPosts.find(p => p.slug === route.params.slug))

// Obtener posts relacionados
const relatedPosts = computed(() => {
    if (!post.value) return []
    return allPosts.filter(p => post.value.relatedPostIds?.includes(p.id)).slice(0, 3)
})

const tableOfContents = computed(() => {
    if (!post.value) return []

    const headings = post.value.content.match(/^## (.*?)$/gm) || []

    return headings.map(h => {
        const title = h.replace('## ', '')
        const id = title.toLowerCase()
            .trim()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '')
        return { title, id }
    })
})

// SEO Meta Tags
if (post.value) {
    useSeoMeta({
        title: `${post.value.title} | Blue Lynk Blog`,
        description: post.value.description,
        ogTitle: post.value.title,
        ogDescription: post.value.description,
        ogImage: post.value.image,
        ogUrl: `https://www.bluelynk.dev/blog/${post.value.slug}`,
        ogType: 'article',
        ogLocale: 'es_PE',
        twitterCard: 'summary_large_image',
        twitterTitle: post.value.title,
        twitterDescription: post.value.description,
        twitterImage: post.value.image,
        robots: 'index, follow'
    })

    useHead({
        htmlAttrs: { lang: 'es' },
        link: [{ rel: 'canonical', href: `https://www.bluelynk.dev/blog/${post.value.slug}` }],
        script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    headline: post.value.title,
                    description: post.value.description,
                    image: post.value.image,
                    datePublished: post.value.date,
                    author: {
                        '@type': 'Person',
                        name: post.value.author
                    },
                    publisher: {
                        '@type': 'Organization',
                        name: 'Blue Lynk',
                        logo: 'https://www.bluelynk.dev/logo.png'
                    }
                })
            }
        ]
    })
}

// Formatear fecha
function formatDate(dateString) {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('es-PE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date)
}

// Renderizar markdown simple (para este ejemplo)
function renderMarkdown(markdown) {
    const slugify = (text) => text.toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');

    let html = markdown
        .replace(/^### (.*?)$/gm, '<h3 class="blog-h3">$1</h3>')
        .replace(/^## (.*?)$/gm, (match, title) => {
            return `<h2 id="${slugify(title)}" class="blog-h2">${title}</h2>`
        })
        .replace(/^# (.*?)$/gm, '<h1 class="blog-h1">$1</h1>')
        
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        
        .replace(/^- (.*?)$/gm, '<li>$1</li>');

    html = html.replace(/((?:<li>.*?<\/li>\s*)+)/g, '<ul>$1</ul>');

    return html
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(?!<)(.*?)$/gm, '<p>$1</p>')
        .replace(/<p><\/p>/g, '');
}
</script>

<template>
    <div v-if="post" class="blog-post-page">
        <!-- Hero con imagen -->
        <section class="blog-hero">
            <img :src="post.image" :alt="post.imageAlt" class="blog-hero-image">
            <div class="blog-hero-overlay"></div>
            <div class="blog-hero-content">
                <span class="blog-category-badge">{{ post.category }}</span>
                <h1 class="blog-hero-title">{{ post.title }}</h1>
                <div class="blog-meta-hero">
                    <span class="meta-item">
                        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
                    </span>
                    <span class="meta-item">Por {{ post.author }}</span>
                    <span class="meta-item">{{ post.readTime }} min de lectura</span>
                </div>
            </div>
        </section>

        <!-- Back Button -->
        <section class="go-back lightest">
            <NuxtLink to="/blog" class="back-link">← Volver al blog</NuxtLink>
        </section>

        <!-- Contenido -->
        <article class="blog-article">
            <div class="blog-container">
                <!-- Contenido principal -->
                <div class="blog-main">
                    <div class="blog-body" v-html="renderMarkdown(post.content)"></div>

                    <!-- Tags -->
                    <div class="blog-tags" v-if="post.tags && post.tags.length">
                        <span v-for="tag in post.tags" :key="tag" class="tag">
                            #{{ tag }}
                        </span>
                    </div>

                    <!-- Autor info -->
                    <div class="blog-author-box">
                        <div class="author-avatar">{{ post.author.charAt(0) }}</div>
                        <div>
                            <h3 class="author-name">{{ post.author }}</h3>
                            <p class="author-bio">Especialista en desarrollo web y estrategia digital para PYMEs.</p>
                        </div>
                    </div>

                    <!-- CTA -->
                    <div class="blog-cta">
                        <h3 class="h3">¿Te gustó este artículo?</h3>
                        <p>Descubre cómo podemos ayudarte a crecer tu negocio digital.</p>
                        <UiBtnLight variant="btn-primary" to="/contact">Solicitar asesoría</UiBtnLight>
                    </div>
                </div>

                <!-- Sidebar -->
                <aside class="blog-sidebar">
                    <!-- TOC (Table of Contents) -->
                    <div class="sidebar-widget toc-widget">
                        <h4 class="h4">En este artículo</h4>
                        <ul class="toc-list">
                            <li v-for="item in tableOfContents" :key="item.id">
                                <a :href="`#${item.id}`">{{ item.title }}</a>
                            </li>
                        </ul>
                    </div>

                    <!-- Newsletter -->
                    <div class="sidebar-widget newsletter-widget">
                        <h4 class="h4">Newsletter</h4>
                        <p class="widget-desc">Recibe tips semanales sobre web y negocios digitales.</p>
                        <form @submit.prevent class="newsletter-form">
                            <input type="email" placeholder="tu@email.com" required>
                            <button type="submit">Suscribirse</button>
                        </form>
                    </div>
                </aside>
            </div>
        </article>

        <!-- Posts Relacionados -->
        <section class="sections light" v-if="relatedPosts.length">
            <h2 class="h2 text-center" style="margin-bottom: 3rem;">Artículos Relacionados</h2>
            <div class="related-posts-grid">
                <NuxtLink v-for="relatedPost in relatedPosts" :key="relatedPost.id" :to="`/blog/${relatedPost.slug}`"
                    class="related-post-card">
                    <div class="related-post-image">
                        <img :src="relatedPost.image" :alt="relatedPost.imageAlt" loading="lazy">
                    </div>
                    <div class="related-post-content">
                        <span class="related-category">{{ relatedPost.category }}</span>
                        <h3 class="related-title h3">{{ relatedPost.title }}</h3>
                        <p class="related-date">{{ formatDate(relatedPost.date) }}</p>
                    </div>
                </NuxtLink>
            </div>
        </section>
    </div>

    <!-- 404 -->
    <div v-else class="sections light">
        <div class="content-center">
            <h1 class="h1">Artículo no encontrado</h1>
            <p class="sec-sub">Lo sentimos, el artículo que buscas no existe.</p>
            <NuxtLink to="/blog" class="btn-primary">Ir al blog</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
/* Hero */
.blog-hero {
    position: relative;
    height: 400px;
    overflow: hidden;
}

.blog-hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
}

.blog-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 40%, var(--color-bg-darkest) 100%);
}

.blog-hero-content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 3rem;
    color: var(--color-bg-light);
}

.blog-category-badge {
    background: var(--color-primary);
    color: var(--color-bg-darkest);
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 1rem;
    width: fit-content;
}

.blog-hero-title {
    font-size: 3.4rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    max-width: 900px;
}

.blog-meta-hero {
    display: flex;
    gap: 2rem;
    font-size: 0.95rem;
    flex-wrap: wrap;
}

.meta-item {
    display: flex;
    align-items: center;
}

/* Article */
.blog-article {
    padding: 2rem 2.5rem;
    background: var(--color-bg-lightest);
}

.blog-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 3rem;
}

.blog-main {
    flex: 1;
}

.blog-body {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--color-text-on-light-muted);
    max-width: 800px;
}

.blog-body :deep(h1),
.blog-body :deep(h2),
.blog-body :deep(h3) {
    color: var(--color-bg-darkest);
    margin: 2rem 0 1rem 0;
    font-family: var(--font-title);
    font-weight: bold;
    text-transform: uppercase;
}

.blog-body :deep(h1) {
    font-size: 2.5rem;
    margin-top: 0;
}

.blog-body :deep(h2) {
    font-size: 2rem;
}

.blog-body :deep(h3) {
    font-size: 1.5rem;
}

.blog-body :deep(p) {
    margin: 1.25rem 0;
}

.blog-body :deep(ul) {
    margin: 1.5rem 0 1.5rem 2rem;
    list-style: disc;
}

.blog-body :deep(li) {
    margin-bottom: 0.5rem;
    line-height: 1.8;
}

.blog-body :deep(strong) {
    color: var(--color-bg-darkest);
    font-weight: 600;
}

.blog-body :deep(em) {
    color: var(--color-primary);
    font-style: italic;
}

.blog-body :deep(h2[id]), 
.blog-body :deep(h3[id]) {
    scroll-margin-top: 80px;
}

/* Tags */
.blog-tags {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 2rem 0;
    padding-top: 2rem;
    border-top: 1px solid rgba(81, 112, 255, 0.1);
}

.tag {
    background: var(--color-bg-light);
    color: var(--color-primary);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
}

/* Author Box */
.blog-author-box {
    display: flex;
    gap: 1.5rem;
    background: var(--color-bg-light);
    padding: 2rem;
    border-radius: 12px;
    margin: 3rem 0;
    border-left: 4px solid var(--color-primary);
}

.author-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--color-primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-title);
    font-size: 1.5rem;
    flex-shrink: 0;
}

.author-name {
    font-size: 1.1rem;
    color: var(--color-bg-darkest);
    margin: 0 0 0.25rem 0;
}

.author-bio {
    color: var(--color-text-on-light-muted);
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
}

/* CTA Box */
.blog-cta {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%);
    color: white;
    padding: 2.5rem;
    border-radius: 16px;
    text-align: center;
    margin: 3rem 0;
}

.blog-cta h3 {
    color: white;
    margin-bottom: 0.5rem;
}

.blog-cta p {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1.5rem;
}

/* Sidebar */
.blog-sidebar {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.sidebar-widget {
    background: var(--color-bg-light);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(81, 112, 255, 0.1);
}

.sidebar-widget h4 {
    color: var(--color-bg-darkest);
    margin: 0 0 1rem 0;
}

.toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.toc-list li {
    margin-bottom: 0.75rem;
}

.toc-list a {
    color: var(--color-primary);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s;
}

.toc-list a:hover {
    color: var(--color-primary-hover);
}

.widget-desc {
    color: var(--color-text-on-light-muted);
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.newsletter-form input {
    padding: 0.75rem;
    border: 1px solid rgba(81, 112, 255, 0.2);
    border-radius: 8px;
    font-family: var(--font-body);
    font-size: 0.9rem;
    transition: border-color 0.3s;
}

.newsletter-form input:focus {
    outline: none;
    border-color: var(--color-primary);
}

.newsletter-form button {
    padding: 0.75rem;
    background: var(--color-primary);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s;
}

.newsletter-form button:hover {
    background: var(--color-primary-hover);
}

/* Related Posts */
.related-posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.related-post-card {
    display: block;
    border-radius: 12px;
    overflow: hidden;
    background: var(--color-bg-lightest);
    border: 1px solid rgba(81, 112, 255, 0.1);
    text-decoration: none;
    transition: transform 0.3s, box-shadow 0.3s;
}

.related-post-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.related-post-image {
    width: 100%;
    height: 180px;
    overflow: hidden;
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
}

.related-post-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.related-post-card:hover .related-post-image img {
    transform: scale(1.05);
}

.related-post-content {
    padding: 1.5rem;
}

.related-category {
    background: var(--color-bg-light);
    color: var(--color-primary);
    display: inline-block;
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
}

.related-title {
    color: var(--color-bg-darkest);
    margin: 0.75rem 0;
    line-height: 1.3;
}

.related-date {
    color: var(--color-text-on-light-muted);
    font-size: 0.85rem;
    margin: 0;
}

/* Back Link */
.back-link {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
}

.back-link:hover {
    color: var(--color-primary-hover);
}

.go-back {
    padding: 1rem;
}

/* Responsive */
@media (max-width: 1050px) {
    .blog-container {
        grid-template-columns: 1fr;
    }

    .blog-sidebar {
        display: none;
    }

    .blog-hero-title {
        font-size: 2.5rem;
    }
}

@media (max-width: 768px) {
    .blog-article {
        padding: 1rem 1.5rem;
    }

    .blog-hero-content {
        padding: 2rem;
    }

    .blog-hero-title {
        font-size: 2rem;
    }

    .blog-meta-hero {
        gap: 1rem;
        font-size: 0.85rem;
    }

    .blog-author-box {
        flex-direction: column;
    }

    .author-avatar {
        width: 50px;
        height: 50px;
    }
}

@media (max-width: 475px) {
    .blog-article {
        padding: 1rem 1rem;
    }

    .blog-body {
        font-size: 0.95rem;
    }

    .blog-body :deep(h1) {
        font-size: 1.8rem;
    }

    .blog-body :deep(h2) {
        font-size: 1.4rem;
    }

    .blog-tags {
        gap: 0.5rem;
    }

    .blog-cta {
        padding: 1.5rem;
    }
}
</style>