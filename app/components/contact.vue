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
  if (!form.name || !form.email || !form.message) {
    return 'Completa los campos obligatorios'
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    return 'Correo electrónico inválido'
  }

  if (form.message.length < 10) {
    return 'El mensaje debe tener al menos 10 caracteres'
  }

  return null
}

const resetForm = () => {
  form.name = ''
  form.lastname = ''
  form.company = ''
  form.email = ''
  form.service = ''
  form.message = ''
  form.honeypot = ''
}

const onSubmit = async () => {
  error.value = ''
  success.value = false

  const validationError = validate()
  if (validationError) {
    error.value = validationError
    return
  }

  loading.value = true

  try {

    const { submit, loading, success, error } = useContactForm()

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

  } catch (err) {
    error.value = 'No se pudo enviar el mensaje. Intenta nuevamente.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="contact sections" id="contacto">
    <!-- INFO -->
    <div>
      <p class="sec-tag">Hablemos</p>
      <h2 class="sec-h">EMPIEZA <br> HOY</h2>
      <p class="sec-sub" style="margin-bottom:1.5rem">
        Cuéntanos tu proyecto. Respondemos en menos de 24 horas.
      </p>

      <div class="contact-info">
        <div class="contact-info-item">
          info@bluelynk.dev
        </div>
        <div class="contact-info-item">
          +51 987 151 798
        </div>
        <div class="contact-info-item">
          Lima, Perú
        </div>
      </div>
    </div>

    <!-- FORM -->
    <form class="cform" @submit.prevent="onSubmit">

      <!-- Honeypot (anti-spam) -->
      <input
        v-model="form.honeypot"
        type="text"
        name="company_hidden"
        style="display:none"
        autocomplete="off"
      />

      <div class="cform-row">
        <div>
          <label for="name">Nombre</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            autocomplete="given-name"
          />
        </div>

        <div>
          <label for="lastname">Apellido</label>
          <input
            v-model="form.lastname"
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Tu apellido"
            autocomplete="family-name"
          />
        </div>
      </div>

      <br>

      <div class="cform-row">
        <div>
          <label for="company">Empresa</label>
          <input
            v-model="form.company"
            type="text"
            id="company"
            name="company"
            placeholder="Nombre de tu empresa"
            autocomplete="organization"
          />
        </div>

        <div>
          <label for="email">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            name="email"
            placeholder="tu@email.com"
            autocomplete="email"
          />
        </div>
      </div>

      <label for="service">Servicio de interés</label>
      <select v-model="form.service" id="service" name="service">
        <option value="">Selecciona...</option>
        <option>Sitio web</option>
        <option>E-commerce</option>
        <option>Sistema a medida</option>
        <option>Marketing digital</option>
        <option>Otro</option>
      </select>

      <label for="message">Mensaje</label>
      <textarea
        v-model="form.message"
        id="message"
        name="message"
        placeholder="Cuéntanos sobre tu proyecto..."
      ></textarea>

      <div style="margin-top:1.5rem">
        <button
          class="btn-p-dark"
          style="width:100%;padding:.8rem"
          :disabled="loading"
        >
          {{ loading ? 'Enviando...' : 'Enviar mensaje' }}
        </button>
      </div>

      <!-- Feedback -->
      <p v-if="success" style="margin-top:1rem;color:lightgreen">
        Mensaje enviado correctamente
      </p>

      <p v-if="error" style="margin-top:1rem;color:#ff6b6b">
        {{ error }}
      </p>

    </form>
  </section>
</template>

<style scoped>
.contact {
    background: var(--color-bg-dark);
    padding: 5rem 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start
}

.sec-h {
    font-family: 'Bebas Neue', sans-serif;
    color: var(--color-bg-light);
    line-height: 1;
    margin-bottom: .75rem
}

.sec-tag {
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--color-primary);
    margin-bottom: .5rem
}

.contact .sec-sub {
    color: rgba(244, 246, 255, 0.6)
}

.contact-info {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem
}

.contact-info-item {
    display: flex;
    align-items: center;
    gap: .75rem;
    font-size: .88rem;
    color: rgba(244, 246, 255, 0.65)
}

.contact-info-item svg {
    width: 16px;
    height: 16px;
    stroke: rgba(244, 246, 255, 0.4);
    fill: none;
    stroke-width: 1.8;
    flex-shrink: 0
}

.cform {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(244, 246, 255, 0.12);
    border-radius: 16px;
    padding: 2rem
}

.cform label {
    display: block;
    font-size: .78rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgba(244, 246, 255, 0.45);
    margin-bottom: .45rem;
    margin-top: 1.1rem
}

.cform label:first-child {
    margin-top: 0
}

.cform input,
.cform textarea,
.cform select {
    width: 100%;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(244, 246, 255, 0.15);
    border-radius: 8px;
    padding: .65rem .9rem;
    font-family: 'DM Sans', sans-serif;
    font-size: .88rem;
    color: var(--color-bg-light);
    outline: none;
    transition: border-color .2s
}

.cform input::placeholder,
.cform textarea::placeholder {
    color: rgba(244, 246, 255, 0.3)
}

.cform input:focus,
.cform textarea:focus {
    border-color: var(--color-primary)
}

.cform textarea {
    resize: vertical;
    min-height: 90px
}

.cform-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem
}

.btn-p-dark{
    background: var(--color-bg-light);
    color: var(--color-bg-dark);
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color .2s
}

@media (max-width: 475px) {
    .cform-row {
        grid-template-columns: 1fr;
    }    
}
</style>
