<script setup lang="ts">
</script>

<template>
    <section class="contact sections dark" id="contacto">
        <div>
            <p class="top-title">¿Listo para comenzar?</p>
            <h2 class="sec-h">HAGAMOS CRECER TU NEGOCIO</h2>
            <p class="sec-sub" style="margin-bottom:1.5rem">Cuéntanos tu proyecto. Respondemos en menos de 24 horas.</p>
            <div class="contact-info">
                <div class="contact-info-item"><svg viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                    </svg> info@bluelynk.dev</div>
                <div class="contact-info-item"><svg viewBox="0 0 24 24">
                        <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg> +51 987 151 798</div>
                <div class="contact-info-item"><svg viewBox="0 0 24 24">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg> Lima, Perú</div>
            </div>
        </div>
        <div class="cform">
            <div class="cform-row">
                <div><label for="name">Nombre</label><input type="text" id="name" placeholder="Tu nombre" /></div>
                <div><label for="lastname">Apellido</label><input type="text" id="lastname" placeholder="Tu apellido" /></div>
            </div>
            <br>
            <div class="cform-row">
                <div><label for="company">Empresa</label><input type="text" id="company" placeholder="Nombre de tu empresa" /></div>
                <div><label for="email">Email</label><input type="email" id="email" placeholder="tu@email.com" /></div>
            </div>
            <label for="service">Servicio de interés</label>
            <select id="service"
                style="width:100%;background:rgba(255,255,255,0.08);border:1px solid rgba(244,246,255,0.15);border-radius:8px;padding:.65rem .9rem;font-family:'DM Sans',sans-serif;font-size:.88rem;color:#F4F6FF;outline:none;appearance:none">
                <option value="" style="background:#1F36A8">Selecciona...</option>
                <option style="background:#1F36A8">Sitio web</option>
                <option style="background:#1F36A8">E-commerce</option>
                <option style="background:#1F36A8">Sistema a medida</option>
                <option style="background:#1F36A8">Marketing digital</option>
                <option style="background:#1F36A8">Otro</option>
            </select>
            <label for="message">Mensaje</label>
            <textarea id="message" placeholder="Cuéntanos sobre tu proyecto..." ></textarea>
            <div style="margin-top:1.5rem">
                <button class="btn-p-dark" style="width:100%;padding:.8rem">Enviar mensaje</button>
            </div>
        </div>
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
