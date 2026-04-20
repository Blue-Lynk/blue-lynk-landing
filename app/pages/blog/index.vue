<script setup lang="ts">
import { ref } from 'vue'

import posts from '~/composables/posts.json'

const allPosts = posts;
const selectedCategory = ref('all')

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
                Guías y consejos <br> para <em>crecer</em> online
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