<script setup lang="ts">
import { ref } from 'vue'
import posts from '~/composables/posts.json'

const allPosts = posts;

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