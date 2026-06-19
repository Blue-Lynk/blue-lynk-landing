<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useContactForm } from '~/composables/useContactForm'

useSeoMeta({
    title: 'Contacto | BlueLynk',
    description: 'Contáctanos para conversar sobre tu proyecto, desarrollo web, automatización o soluciones digitales para tu negocio.',
    ogTitle: 'Contacto | BlueLynk',
    ogDescription: 'Hablemos sobre cómo podemos ayudarte a construir una solución digital moderna para tu negocio.',
    ogImage: 'https://www.bluelynk.dev/og-image.jpg',
    ogUrl: 'https://www.bluelynk.dev/contact',
    ogType: 'website',
    ogLocale: 'es_PE',
    ogSiteName: 'BlueLynk',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Contacto | BlueLynk',
    twitterDescription: 'Cuéntanos sobre tu proyecto.',
    twitterImage: 'https://www.bluelynk.dev/og-image.jpg',
    robots: 'index, follow',
})

useHead({
    htmlAttrs: { lang: 'es' },
    link: [{ rel: 'canonical', href: 'https://www.bluelynk.dev/contact' }],
    script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contacto | BlueLynk',
            url: 'https://www.bluelynk.dev/contact',
        }),
    }],
})

const form = reactive({
    name: '', lastname: '', company: '', email: '',
    service: '', message: '', honeypot: ''
})
const loading = ref(false)
const success = ref(false)
const errorMsg = ref('')

const validate = () => {
    if (!form.name || !form.email || !form.message) return 'Completa los campos obligatorios'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Correo electrónico inválido'
    if (form.message.length < 10) return 'El mensaje debe tener al menos 10 caracteres'
    return null
}

const resetForm = () => {
    form.name = ''; form.lastname = ''; form.company = ''
    form.email = ''; form.service = ''; form.message = ''; form.honeypot = ''
}

const onSubmit = async () => {
    errorMsg.value = ''; success.value = false
    const err = validate()
    if (err) { errorMsg.value = err; return }
    loading.value = true
    try {
        const { submit } = useContactForm()
        await submit({
            name: `${form.name} ${form.lastname}`.trim(),
            email: form.email,
            message: form.message,
            company: form.company,
            service: form.service,
            honeypot: form.honeypot,
        })
        success.value = true
        resetForm()
    } catch {
        errorMsg.value = 'No se pudo enviar el mensaje. Intenta nuevamente.'
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="ct-page">

        <!-- ── HERO ─────────────────────────────────────────── -->
        <section class="ct-hero sections darkest">
            <div class="ct-hero-layout">

                <!-- Left: editorial title block -->
                <div class="ct-hero-left">
                    <p class="top-title">Contacto</p>
                    <h1 class="ct-title h1 bright-text">
                        CUÉNTANOS<br>
                        TU <em>IDEA.</em>
                    </h1>
                    <p class="ct-sub">
                        Respondemos en menos de 24 horas. Sin rodeos, sin presión.
                    </p>
                </div>

                <!-- Right: contact data exposed as typographic display -->
                <div class="ct-hero-right">
                    <a href="mailto:info@bluelynk.dev" class="ct-contact-block">
                        <span class="ct-contact-label">EMAIL</span>
                        <span class="ct-contact-val">info@bluelynk.dev</span>
                    </a>
                    <div class="ct-contact-divider"></div>
                    <a href="https://wa.me/51987151798" target="_blank" rel="noopener" class="ct-contact-block">
                        <span class="ct-contact-label">WHATSAPP</span>
                        <span class="ct-contact-val">+51 987 151 798</span>
                    </a>
                    <div class="ct-contact-divider"></div>
                    <div class="ct-contact-block">
                        <span class="ct-contact-label">UBICACIÓN</span>
                        <span class="ct-contact-val">Lima, Perú</span>
                    </div>
                    <div class="ct-contact-divider"></div>
                    <div class="ct-contact-block">
                        <span class="ct-contact-label">RESPUESTA EN</span>
                        <span class="ct-contact-val">menos de 24h</span>
                    </div>
                </div>

            </div>
        </section>

        <!-- ── FORM SECTION ──────────────────────────────────── -->
        <section class="ct-form-section sections lightest">

            <div class="ct-form-header mid">
                <p class="top-title">Escríbenos</p>
                <h2 class="h2">EMPIEZA <em style="color: var(--color-primary)">HOY</em></h2>
            </div>

            <!-- Honeypot -->
            <input v-model="form.honeypot" type="text" name="company_hidden" style="display:none" autocomplete="off" />

            <div class="ct-form-body">

                <!-- Row 1 -->
                <div class="cf-row">
                    <div class="cf-field">
                        <label for="ct-name">Nombre <span class="cf-req">*</span></label>
                        <input v-model="form.name" id="ct-name" type="text"
                            placeholder="Tu nombre" autocomplete="given-name" />
                    </div>
                    <div class="cf-field">
                        <label for="ct-lastname">Apellido</label>
                        <input v-model="form.lastname" id="ct-lastname" type="text"
                            placeholder="Tu apellido" autocomplete="family-name" />
                    </div>
                </div>

                <!-- Row 2 -->
                <div class="cf-row">
                    <div class="cf-field">
                        <label for="ct-email">Email <span class="cf-req">*</span></label>
                        <input v-model="form.email" id="ct-email" type="email"
                            placeholder="tu@email.com" autocomplete="email" />
                    </div>
                    <div class="cf-field">
                        <label for="ct-company">Empresa</label>
                        <input v-model="form.company" id="ct-company" type="text"
                            placeholder="Nombre de tu empresa" autocomplete="organization" />
                    </div>
                </div>

                <!-- Service pills -->
                <div class="cf-field cf-field--full">
                    <label>Servicio de interés</label>
                    <div class="cf-pills">
                        <button
                            v-for="s in ['Sitio web', 'Sistema a medida', 'Análisis de datos', 'Otro']"
                            :key="s"
                            type="button"
                            class="cf-pill"
                            :class="{ 'cf-pill--active': form.service === s }"
                            @click="form.service = form.service === s ? '' : s"
                        >{{ s }}</button>
                    </div>
                </div>

                <!-- Message -->
                <div class="cf-field cf-field--full">
                    <label for="ct-message">Mensaje <span class="cf-req">*</span></label>
                    <textarea v-model="form.message" id="ct-message"
                        placeholder="Cuéntanos sobre tu proyecto..." rows="5"></textarea>
                </div>

                <!-- Submit -->
                <div class="cf-submit-row">
                    <button class="cf-submit" :disabled="loading" @click.prevent="onSubmit">
                        <span>{{ loading ? 'Enviando...' : 'Enviar mensaje' }}</span>
                        <svg viewBox="0 0 20 20" fill="none">
                            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor"
                                stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>

                    <p v-if="success" class="cf-feedback cf-feedback--ok">
                        ✓ Mensaje enviado. Te respondemos pronto.
                    </p>
                    <p v-if="errorMsg" class="cf-feedback cf-feedback--err">
                        {{ errorMsg }}
                    </p>
                </div>

            </div>
        </section>

    </div>
</template>

<style scoped>

/* ── PAGE ──────────────────────────────────────────── */
.ct-page {
    min-height: 100vh;
}

/* ── HERO ──────────────────────────────────────────── */
.ct-hero {
    padding-top: 6rem;
    padding-bottom: 5rem;
}

.ct-hero-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: end;
}

.ct-title {
    line-height: .88;
    margin: 1rem 0 1.5rem;
}

.ct-sub {
    font-size: .95rem;
    line-height: 1.7;
    color: var(--color-text-on-dark-muted);
    max-width: 36ch;
}

/* Right column: contact data as editorial rows */
.ct-hero-right {
    padding-bottom: .5rem;
}

.ct-contact-block {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    text-decoration: none;
    padding: 1.25rem 0;
    gap: 1rem;
    transition: opacity .2s;
}

a.ct-contact-block:hover {
    opacity: .65;
}

.ct-contact-label {
    font-size: .62rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--color-text-on-dark-muted);
    flex-shrink: 0;
}

.ct-contact-val {
    font-family: var(--font-title);
    font-size: 1.5rem;
    letter-spacing: 1px;
    color: var(--color-bg-lightest);
    text-align: right;
}

.ct-contact-divider {
    height: 1px;
    background: rgba(244, 246, 255, 0.1);
}

/* ── FORM SECTION ──────────────────────────────────── */
.ct-form-section {
    padding-top: 5rem;
    padding-bottom: 7rem;
}

.ct-form-header {
    margin-bottom: 3.5rem;
    border-bottom: 1px solid rgba(3, 0, 107, 0.1);
    padding-bottom: 2.5rem;
}

.ct-form-header h2 {
    max-width: none;
}

.ct-form-body {
    max-width: 820px;
    margin: 0 auto;
}

/* ── FIELD ROWS ────────────────────────────────────── */
.cf-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 3rem;
}

.cf-field {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(3, 0, 107, 0.12);
    padding: 1.5rem 0 .65rem;
    transition: border-color .2s;
}

.cf-field:focus-within {
    border-bottom-color: var(--color-primary);
}

.cf-field--full {
    border-bottom: none;
    padding-top: 2.5rem;
}

.cf-field label {
    font-size: .6rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(3, 0, 107, 0.4);
    margin-bottom: .5rem;
}

.cf-req {
    color: var(--color-primary);
}

.cf-field input,
.cf-field textarea {
    background: transparent;
    border: none;
    outline: none;
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--color-bg-darkest);
    padding: 0;
    resize: none;
    line-height: 1.6;
}

.cf-field input::placeholder,
.cf-field textarea::placeholder {
    color: rgba(3, 0, 107, 0.2);
}

/* Service pills */
.cf-pills {
    display: flex;
    flex-wrap: wrap;
    gap: .55rem;
    margin-top: .5rem;
}

.cf-pill {
    background: transparent;
    border: 1px solid rgba(3, 0, 107, 0.18);
    border-radius: 20px;
    color: rgba(3, 0, 107, 0.45);
    font-family: var(--font-body);
    font-size: .78rem;
    letter-spacing: .5px;
    padding: .45rem 1.1rem;
    cursor: pointer;
    transition: border-color .2s, color .2s, background .2s;
}

.cf-pill:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
}

.cf-pill--active {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: #fff;
}

/* Submit row */
.cf-submit-row {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-top: 3rem;
    flex-wrap: wrap;
}

.cf-submit {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: var(--color-bg-darkest);
    color: var(--color-bg-lightest);
    border: none;
    border-radius: 8px;
    font-family: var(--font-body);
    font-size: .9rem;
    font-weight: 700;
    padding: .9rem 2rem;
    cursor: pointer;
    transition: background .2s, transform .2s;
    letter-spacing: .5px;
}

.cf-submit:hover:not(:disabled) {
    background: var(--color-primary);
    transform: translateY(-2px);
}

.cf-submit:disabled {
    opacity: .45;
    cursor: not-allowed;
}

.cf-submit svg {
    width: 18px;
    height: 18px;
    transition: transform .25s;
}

.cf-submit:hover:not(:disabled) svg {
    transform: translateX(4px);
}

.cf-feedback { font-size: .85rem; }
.cf-feedback--ok  { color: #059669; }
.cf-feedback--err { color: #dc2626; }

/* ── RESPONSIVE ────────────────────────────────────── */
@media (max-width: 835px) {
    .ct-hero-layout {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .ct-hero-right {
        border-top: 1px solid rgba(244, 246, 255, 0.1);
        padding-top: 1rem;
    }
}

@media (max-width: 768px) {
    .cf-row {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .ct-contact-val {
        font-size: 1.2rem;
    }
}

@media (max-width: 475px) {
    .ct-hero {
        padding-top: 4rem;
        padding-bottom: 3.5rem;
    }

    .ct-form-section {
        padding-top: 3.5rem;
        padding-bottom: 5rem;
    }
}
</style>