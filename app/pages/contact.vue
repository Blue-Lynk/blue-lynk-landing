<script setup lang="ts">
useSeoMeta({
    // SEO principal
    title: 'Contacto | BlueLynk',
    description:
        'Contáctanos para conversar sobre tu proyecto, desarrollo web, automatización o soluciones digitales para tu negocio.',
    // Open Graph
    ogTitle: 'Contacto | BlueLynk',
    ogDescription:
        'Hablemos sobre cómo podemos ayudarte a construir una solución digital moderna para tu negocio.',
    ogImage: 'https://www.bluelynk.dev/og-image.jpg',
    ogUrl: 'https://www.bluelynk.dev/contact',
    ogType: 'website',
    ogLocale: 'es_PE',
    ogSiteName: 'BlueLynk',
    // Twitter / X
    twitterCard: 'summary_large_image',
    twitterTitle: 'Contacto | BlueLynk',
    twitterDescription:
        'Cuéntanos sobre tu proyecto y conversemos sobre la mejor solución para tu negocio.',
    twitterImage: 'https://www.bluelynk.dev/og-image.jpg',

    // Crawlers
    robots: 'index, follow',
})

useHead({
    htmlAttrs: {
        lang: 'es',
    },
    link: [
        {
            rel: 'canonical',
            href: 'https://www.bluelynk.dev/contact',
        },
    ],

    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ContactPage',
                name: 'Contacto | BlueLynk',
                description:
                    'Página de contacto de BlueLynk para consultas sobre desarrollo web, automatización y soluciones digitales.',
                url: 'https://www.bluelynk.dev/contact',
                mainEntity: {
                    '@type': 'Organization',
                    name: 'BlueLynk',
                    alternateName: [
                        'Blue Lynk',
                        'BlueLink',
                        'Blue Link',
                        'Blu Lynk',
                        'bluelynk',
                        'bluelink'
                    ],
                    url: 'https://www.bluelynk.dev',
                    logo: 'https://www.bluelynk.dev/logo.png',
                    email: 'info@bluelynk.dev',
                    telephone: '+51 987 151 798',
                    contactPoint: {
                        '@type': 'ContactPoint',
                        telephone: '+51 987 151 798',
                        contactType: 'customer support',
                        areaServed: 'PE',
                        availableLanguage: ['Spanish'],
                    },
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Lima',
                        addressRegion: 'Lima',
                        addressCountry: 'PE',
                    },
                },
            }),
        },
    ],
})
import ContactForm from '~/components/contact/ContactForm.vue'
</script>

<template>
    <Contact />
  <main class="contact-page">

    <!-- HERO -->
    <section class="contact-hero">
      <p class="top-title">Contacto</p>

      <h1>
        Hablemos sobre
        <span>tu proyecto</span>
      </h1>

      <p class="hero-sub">
        Desarrollamos soluciones digitales a medida para empresas
        que buscan modernizar procesos y mejorar su presencia digital.
      </p>
    </section>

    <!-- CONTENT -->
    <section class="contact-wrapper">

      <!-- INFO -->
      <aside class="contact-side">

        <div class="info-card">
          <h3>Información</h3>

          <div class="info-item">
            <span>Email</span>
            <p>info@bluelynk.dev</p>
          </div>

          <div class="info-item">
            <span>Teléfono</span>
            <p>+51 987 151 798</p>
          </div>

          <div class="info-item">
            <span>Ubicación</span>
            <p>Lima, Perú</p>
          </div>
        </div>

        <div class="info-card">
          <h3>Tiempo de respuesta</h3>

          <p>
            Respondemos consultas en menos de 24 horas hábiles.
          </p>
        </div>

        <div class="info-card">
          <h3>Servicios</h3>

          <ul>
            <li>Desarrollo web</li>
            <li>E-commerce</li>
            <li>Sistemas a medida</li>
            <li>Power BI</li>
            <li>Consultoría TI</li>
          </ul>
        </div>

      </aside>

      <!-- FORM -->
        <ContactForm />

    </section>

  </main>
</template>

<style scoped></style>
<style scoped>

.contact-page {
  min-height: 100vh;
  background: var(--color-bg-dark);
  color: var(--color-bg-light);
}

/* HERO */

.contact-hero {
  max-width: 900px;
  margin: 0 auto;
  padding: 10rem 1.5rem 5rem;
  text-align: center;
}

.contact-hero h1 {
  font-size: clamp(3rem, 8vw, 5.5rem);
  line-height: .95;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}

.contact-hero h1 span {
  color: var(--color-primary);
}

.hero-sub {
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(244,246,255,.7);
}

/* CONTENT */

.contact-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem 6rem;
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 2rem;
  align-items: start;
}

/* SIDEBAR */

.contact-side {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 20px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
}

.info-card h3 {
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
}

.info-item {
  margin-bottom: 1rem;
}

.info-item span {
  display: block;
  font-size: .75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(244,246,255,.45);
  margin-bottom: .35rem;
}

.info-item p {
  color: rgba(244,246,255,.85);
}

.info-card ul {
  display: flex;
  flex-direction: column;
  gap: .8rem;
  padding-left: 1rem;
  color: rgba(244,246,255,.75);
}

/* FORM */

.contact-form-container {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 24px;
  padding: 2rem;
  backdrop-filter: blur(12px);
}

/* MOBILE */

@media (max-width: 980px) {

  .contact-wrapper {
    grid-template-columns: 1fr;
  }

  .contact-hero {
    padding-top: 7rem;
  }

}

</style>