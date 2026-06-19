<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useContactForm } from '../composables/useContactForm'

const form = reactive({
  name: '',
  lastname: '',
  company: '',
  email: '',
  service: '',
  message: '',
  honeypot: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref('')

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
  error.value = ''; success.value = false
  const validationError = validate()
  if (validationError) { error.value = validationError; return }
  loading.value = true
  try {
    const { submit } = useContactForm()
    await submit({
      name: `${form.name} ${form.lastname}`.trim(),
      email: form.email,
      message: form.message,
      company: form.company,
      service: form.service,
      honeypot: form.honeypot
    })
    success.value = true
    resetForm()
  } catch {
    error.value = 'No se pudo enviar el mensaje. Intenta nuevamente.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="cc-section dark sections" id="contacto">
    <div class="cc-layout">

      <!-- ── LEFT: info editorial ── -->
      <div class="cc-info">
        <p class="top-title">Hablemos</p>
        <h2 class="h2">EMPIEZA<br>HOY</h2>
        <p class="cc-sub">
          Cuéntanos tu proyecto.<br>Respondemos en menos de 24 horas.
        </p>

        <div class="cc-contacts">
          <a href="mailto:info@bluelynk.dev" class="cc-contact-row">
            <span class="cc-contact-label">Email</span>
            <span class="cc-contact-val">info@bluelynk.dev</span>
          </a>
          <div class="cc-divider"></div>
          <a href="https://wa.me/51987151798" target="_blank" rel="noopener" class="cc-contact-row">
            <span class="cc-contact-label">WhatsApp</span>
            <span class="cc-contact-val">+51 987 151 798</span>
          </a>
          <div class="cc-divider"></div>
          <div class="cc-contact-row">
            <span class="cc-contact-label">Ubicación</span>
            <span class="cc-contact-val">Lima, Perú</span>
          </div>
        </div>
      </div>

      <!-- ── RIGHT: form ── -->
      <form class="cc-form" @submit.prevent="onSubmit">

        <!-- Honeypot -->
        <input v-model="form.honeypot" type="text" name="company_hidden" style="display:none" autocomplete="off" />

        <!-- Row 1 -->
        <div class="cc-row">
          <div class="cc-field">
            <label for="cc-name">Nombre <span class="cc-req">*</span></label>
            <input v-model="form.name" id="cc-name" type="text" placeholder="Tu nombre" autocomplete="given-name" />
          </div>
          <div class="cc-field">
            <label for="cc-lastname">Apellido</label>
            <input v-model="form.lastname" id="cc-lastname" type="text" placeholder="Tu apellido" autocomplete="family-name" />
          </div>
        </div>

        <!-- Row 2 -->
        <div class="cc-row">
          <div class="cc-field">
            <label for="cc-company">Empresa</label>
            <input v-model="form.company" id="cc-company" type="text" placeholder="Nombre de tu empresa" autocomplete="organization" />
          </div>
          <div class="cc-field">
            <label for="cc-email">Email <span class="cc-req">*</span></label>
            <input v-model="form.email" id="cc-email" type="email" placeholder="tu@email.com" autocomplete="email" />
          </div>
        </div>

        <!-- Service pills -->
        <div class="cc-field cc-field--full">
          <label>Servicio de interés</label>
          <div class="cc-pills">
            <button
              v-for="s in ['Sitio web', 'Sistema a medida', 'Análisis de datos', 'Otro']"
              :key="s"
              type="button"
              class="cc-pill"
              :class="{ 'cc-pill--active': form.service === s }"
              @click="form.service = form.service === s ? '' : s"
            >{{ s }}</button>
          </div>
        </div>

        <!-- Message -->
        <div class="cc-field cc-field--full">
          <label for="cc-message">Mensaje <span class="cc-req">*</span></label>
          <textarea v-model="form.message" id="cc-message" placeholder="Cuéntanos sobre tu proyecto..." rows="4"></textarea>
        </div>

        <!-- Submit -->
        <div class="cc-submit-row">
          <button class="cc-submit" type="submit" :disabled="loading">
            <span>{{ loading ? 'Enviando...' : 'Enviar mensaje' }}</span>
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <p v-if="success" class="cc-feedback cc-feedback--ok">✓ Mensaje enviado. Te respondemos pronto.</p>
          <p v-if="error" class="cc-feedback cc-feedback--err">{{ error }}</p>
        </div>

      </form>
    </div>
  </section>
</template>

<style scoped>
/* ── SECTION ───────────────────────────────────────── */
.cc-section {
  padding-top: 5rem;
  padding-bottom: 6rem;
}

.cc-layout {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 5rem;
  align-items: start;
}

/* ── LEFT INFO ─────────────────────────────────────── */
.cc-sub {
  font-size: .9rem;
  line-height: 1.75;
  color: var(--color-text-on-dark-muted);
  margin-bottom: 2.5rem;
}

.cc-contacts {
  margin-top: auto;
}

.cc-contact-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  padding: 1rem 0;
  text-decoration: none;
  transition: opacity .2s;
}

a.cc-contact-row:hover {
  opacity: .6;
}

.cc-contact-label {
  font-size: .6rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-text-on-dark-muted);
  flex-shrink: 0;
}

.cc-contact-val {
  font-family: var(--font-title);
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: var(--color-bg-lightest);
  text-align: right;
}

.cc-divider {
  height: 1px;
  background: rgba(244, 246, 255, 0.1);
}

/* ── FORM FIELDS ───────────────────────────────────── */
.cc-form {
  display: flex;
  flex-direction: column;
  padding-top: .5rem;
}

.cc-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 2rem;
}

.cc-field {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(244, 246, 255, 0.8);
  padding: 1.25rem 0 .55rem;
  transition: border-color .2s;
}

.cc-field:focus-within {
  border-bottom-color: var(--color-primary);
}

.cc-field--full {
  border-bottom: none;
  padding-top: 2rem;
}

.cc-field label {
  font-size: .58rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(244, 246, 255, 0.8);
  margin-bottom: .4rem;
}

.cc-req {
  color: var(--color-primary);
}

.cc-field input,
.cc-field textarea {
  background: transparent;
  border: none;
  outline: none;
  font-family: var(--font-body);
  font-size: .92rem;
  color: var(--color-bg-lightest);
  padding: 0;
  resize: none;
  line-height: 1.6;
}

.cc-field input::placeholder,
.cc-field textarea::placeholder {
  color: rgba(244, 246, 255, 0.4);
}

/* ── PILLS ─────────────────────────────────────────── */
.cc-pills {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  margin-top: .5rem;
}

.cc-pill {
  background: transparent;
  border: 1px solid rgba(244, 246, 255, 0.8);
  border-radius: 20px;
  color: rgba(244, 246, 255, 0.8);
  font-family: var(--font-body);
  font-size: .75rem;
  padding: .4rem .95rem;
  cursor: pointer;
  transition: border-color .2s, color .2s, background .2s;
}

.cc-pill:hover {
  border-color: var(--color-primary);
}

.cc-pill--active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

/* ── SUBMIT ────────────────────────────────────────── */
.cc-submit-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 2.5rem;
  flex-wrap: wrap;
}

.cc-submit {
  display: inline-flex;
  align-items: center;
  gap: .85rem;
  background: var(--color-bg-lightest);
  color: var(--color-bg-darkest);
  border: none;
  border-radius: 8px;
  font-family: var(--font-body);
  font-size: .88rem;
  font-weight: 700;
  padding: .85rem 1.75rem;
  cursor: pointer;
  transition: background .2s, transform .2s;
  letter-spacing: .4px;
}

.cc-submit:hover:not(:disabled) {
  background: var(--color-bg-light);
  transform: translateY(-2px);
}

.cc-submit:disabled {
  opacity: .4;
  cursor: not-allowed;
}

.cc-submit svg {
  width: 17px;
  height: 17px;
  transition: transform .25s;
}

.cc-submit:hover:not(:disabled) svg {
  transform: translateX(4px);
}

.cc-feedback { font-size: .82rem; }
.cc-feedback--ok  { color: #6ee7b7; }
.cc-feedback--err { color: #fca5a5; }

/* ── RESPONSIVE ────────────────────────────────────── */
@media (max-width: 835px) {
  .cc-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .cc-info h2 {
    font-size: 3.5rem;
  }

  .cc-contacts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }

  .cc-divider {
    display: none;
  }

  .cc-contact-row {
    flex-direction: column;
    gap: .25rem;
    padding: .75rem 0;
  }

  .cc-contact-val {
    text-align: left;
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .cc-row {
    grid-template-columns: 1fr;
  }

  .cc-contacts {
    grid-template-columns: 1fr;
  }

  .cc-divider {
    display: block;
  }
}
</style>