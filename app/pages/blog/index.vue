<script setup lang="ts">
import { ref } from 'vue'

const posts = ref([])
const selectedCategory = ref('all')

// En Nuxt 3 deberías usar un composable o API
// Para este ejemplo, asumimos que los posts vienen de una API
// Si usas contenido estático, usa este patrón:
const allPosts = [
    {
        id: 'como-elegir-sitio-web-para-pyme',
        slug: 'como-elegir-sitio-web-para-pyme',
        title: 'Cómo Elegir el Sitio Web Perfecto para tu PYME en 2024',
        description: 'Guía completa sobre qué características debe tener tu sitio web para atraer clientes y mejorar ventas.',
        author: 'Daniel C.',
        date: '2026-04-19',
        category: 'Web Development',
        readTime: 4,
        image: '/blog/sitio-web-pyme.jpg',
        imageAlt: 'Persona trabajando en un sitio web profesional para PYME',
        tags: ['web-design', 'seo', 'negocios']
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
        tags: ['ecommerce', 'ventas', 'conversión']
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
        tags: ['seo', 'marketing', 'trafico']
    }
]

// Actualizar SEO
useSeoMeta({
    title: 'Blog | Blue Lynk | Artículos sobre Web, SEO y E-commerce',
    description: 'Lee nuestros artículos sobre desarrollo web, SEO, e-commerce y cómo hacer crecer tu negocio digital. Tips, estrategias y guías prácticas.',
    ogTitle: 'Blog | Blue Lynk',
    ogDescription: 'Aprende sobre web, SEO y negocios digitales con nuestros artículos.',
    ogImage: 'https://www.bluelynk.dev/og-image.jpg',
    ogUrl: 'https://www.bluelynk.dev/blog',
    ogType: 'website',
    ogLocale: 'es_PE',
    twitterCard: 'summary_large_image',
    robots: 'index, follow'
})

useHead({
    htmlAttrs: { lang: 'es' },
    link: [{ rel: 'canonical', href: 'https://www.bluelynk.dev/blog' }],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Blog',
                name: 'Blue Lynk Blog',
                description: 'Artículos sobre desarrollo web, SEO y negocios digitales',
                url: 'https://www.bluelynk.dev/blog',
                publisher: {
                    '@type': 'Organization',
                    name: 'Blue Lynk',
                    logo: 'https://www.bluelynk.dev/logo.png'
                }
            })
        }
    ]
})

// Obtener categorías únicas
const categories = computed(() => {
    const cats = new Set(allPosts.map(p => p.category))
    return Array.from(cats).sort()
})

// Filtrar posts
const filteredPosts = computed(() => {
    if (selectedCategory.value === 'all') {
        return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }
    return allPosts
        .filter(p => p.category === selectedCategory.value)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

// Formatear fecha
function formatDate(dateString: string) {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('es-PE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date)
}
</script>

<template>
    <!-- Hero -->
    <section class="hero">
        <div class="hero-glow"></div>
        <div class="hero-content content-center-md">
            <p class="top-title text-md-center">Nuestro Blog</p>
            <h1 class="hero-h h1 text-md-center">
                Artículos sobre <em>Web</em>, <br>
                <em>SEO</em> y Negocios
            </h1>
            <p class="sec-sub light-text text-md-center md">
                Consejos, estrategias y guías prácticas para hacer crecer tu negocio digital.
            </p>
        </div>
    </section>

    <!-- Blog Section -->
    <section class="sections light">
        <!-- Filter by Category -->
        <div class="blog-filters">
            <button
                :class="['filter-btn', { active: selectedCategory === 'all' }]"
                @click="selectedCategory = 'all'">
                Todos
            </button>
            <button
                v-for="category in categories"
                :key="category"
                :class="['filter-btn', { active: selectedCategory === category }]"
                @click="selectedCategory = category">
                {{ category }}
            </button>
        </div>

        <!-- Posts Grid -->
        <div class="blog-grid">
            <article
                v-for="post in filteredPosts"
                :key="post.id"
                class="blog-card"
                itemscope
                itemtype="https://schema.org/BlogPosting">
                
                <!-- Post Image -->
                <div class="blog-image">
                    <img
                        :src="post.image"
                        :alt="post.imageAlt"
                        loading="lazy">
                    <div class="blog-category">{{ post.category }}</div>
                </div>

                <!-- Post Content -->
                <div class="blog-content">
                    <div class="blog-meta">
                        <span class="blog-date">
                            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
                        </span>
                        <span class="blog-read-time">{{ post.readTime }} min lectura</span>
                    </div>

                    <h2 class="blog-title h4">
                        <NuxtLink :to="`/blog/${post.slug}`">
                            {{ post.title }}
                        </NuxtLink>
                    </h2>

                    <p class="blog-description">{{ post.description }}</p>

                    <div class="blog-footer">
                        <div class="blog-author">
                            <span class="author-name">Por {{ post.author }}</span>
                        </div>
                        <NuxtLink
                            :to="`/blog/${post.slug}`"
                            class="blog-link">
                            Leer más →
                        </NuxtLink>
                    </div>
                </div>

                <!-- Microdata Schema.org -->
                <meta itemprop="headline" :content="post.title">
                <meta itemprop="description" :content="post.description">
                <meta itemprop="image" :content="post.image">
                <meta itemprop="datePublished" :content="post.date">
                <meta itemprop="author" :content="post.author">
            </article>
        </div>

        <!-- Empty State -->
        <div v-if="filteredPosts.length === 0" class="empty-state">
            <p class="p">No hay artículos en esta categoría aún.</p>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="sections dark">
        <div class="cta-content content-center">
            <h2 class="h2 bright-text text-center">¿Necesitas ayuda con tu estrategia digital?</h2>
            <p class="light-text text-center md">
                Contáctanos para una consulta gratuita sobre cómo mejorar tu presencia online.
            </p>
            <br>
            <UiBtnLight variant="btn-primary" to="/contact">Solicitar asesoría</UiBtnLight>
        </div>
    </section>
</template>

<style scoped>
/* Blog Filters */
.blog-filters {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    justify-content: center;
}

.filter-btn {
    padding: 0.75rem 1.5rem;
    border: 2px solid rgba(81, 112, 255, 0.2);
    background: transparent;
    color: var(--color-bg-darkest);
    border-radius: 20px;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.filter-btn:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
}

.filter-btn.active {
    background: var(--color-primary);
    color: var(--color-bg-lightest);
    border-color: var(--color-primary);
}

/* Blog Grid */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.blog-card {
    background: var(--color-bg-lightest);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
}

.blog-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.blog-image {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%);
}

.blog-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.blog-card:hover .blog-image img {
    transform: scale(1.05);
}

.blog-category {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--color-primary);
    color: var(--color-bg-lightest);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.blog-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.blog-meta {
    display: flex;
    gap: 1rem;
    font-size: 0.85rem;
    color: var(--color-text-on-light-muted);
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.blog-date,
.blog-read-time {
    display: flex;
    align-items: center;
}

.blog-title {
    margin: 0 0 0.75rem 0;
    line-height: 1.3;
    color: var(--color-bg-darkest);
    max-width: 100%;
    
}

.blog-title a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s;
}

.blog-title a:hover {
    color: var(--color-primary);
}

.blog-description {
    color: var(--color-text-on-light-muted);
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: auto;
    margin-top: 0.5rem;
}

.blog-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(81, 112, 255, 0.1);
}

.blog-author {
    font-size: 0.85rem;
    color: var(--color-text-on-light-muted);
}

.author-name {
    font-weight: 500;
}

.blog-link {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: color 0.3s;
}

.blog-link:hover {
    color: var(--color-primary-hover);
}

/* Empty State */
.empty-state {
    text-align: center;
    padding: 4rem 2rem;
    color: var(--color-text-on-light-muted);
}

/* CTA */
.cta-content {
    text-align: center;
}

.cta-content h2 {
    margin-bottom: 1.5rem;
}

/* Responsive */
@media (max-width: 835px) {
    .blog-grid {
        grid-template-columns: 1fr;
    }

    .blog-filters {
        justify-content: start;
    }
}

@media (max-width: 475px) {
    .blog-filters {
        gap: 0.75rem;
    }

    .filter-btn {
        font-size: 0.85rem;
        padding: 0.5rem 1rem;
    }

    .blog-grid {
        gap: 1.5rem;
    }
}
</style>