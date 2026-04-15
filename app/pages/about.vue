<script setup lang="ts">
// About Page - Version 2: Diseño Propuesto (Moderno y Atrevido)
</script>

<template>
    <!-- Hero -->
    <section class="hero hero-section">
        <div class="hero-glow"></div>
        <div class="hero-content">
            <p class="top-title text-sm-center">Quiénes somos</p>
            <h2 class="hero-h h1 text-sm-center">
                Nostros <em>sabemos</em> <br>
                lo que necesitas
            </h2>
            <p class="light-text text-sm-center md">
                Porque tu negocio merece crecer sin complicaciones. <br class="responsive-ipad">
                Elige claridad, elige resultados, elige Blue Lynk.
            </p>
        </div>
    </section>

    <!-- Ticker -->
    <Ticker :items="[
        { text: 'Desarrollo web a medida', highlight: true },
        { text: 'Aplicaciones móviles' },
        { text: 'Integraciones API', highlight: true },
        { text: 'E-commerce' },
        { text: 'SaaS' },
        { text: 'Mantenimiento y soporte', highlight: true },
        { text: 'Hosting' },
    ]" />

    <!-- Filosofía -->
    <section class="sections divided light">
        <div class="philosophy-text">
            <p class="top-title">Por qué existimos</p>
            <h2 class="h2">FILOSOFÍA</h2>
            <p class="sec-sub">En Perú hay miles de empresas que pierden clientes diarios por no tener presencia
                digital real. Vimos eso y decidimos cambiar el juego.</p>
            <div class="philosophy-checks">
                <div class="philosophy-point">
                    <div class="philosophy-icon">✓</div>
                    <div>
                        <h3 class="h3 dark-text">Sin excusas de presupuesto</h3>
                        <p class="p-card">Soluciones escalables que crecen con tu negocio, no al revés.</p>
                    </div>
                </div>
                <div class="philosophy-point">
                    <div class="philosophy-icon">✓</div>
                    <div>
                        <h3 class="h3 dark-text">Tecnología transparente</h3>
                        <p class="p-card">Te explicamos qué hacemos, por qué y cuál es el resultado real.</p>
                    </div>
                </div>
                <div class="philosophy-point">
                    <div class="philosophy-icon">✓</div>
                    <div>
                        <h3 class="h3 dark-text">Socios, no proveedores</h3>
                        <p class="p-card">Tu éxito es nuestro éxito. Crecemos juntos en tiempo real.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="philosophy-visual">
            <div class="philosophy-box">
                <div class="philosophy-blob">
                    <div class="philosophy-inner">
                        <p class="dark-text h3 text-center">
                            "Hacemos que la tecnología trabaje para tu negocio"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Pilares -->
    <section class="sections darkest">
        <p class="top-title">Cómo Operamos</p>
        <h2 class="h2">NUESTROS PILARES</h2>
        <div class="pillars-grid">
            <div class="pillar-card">
                <div class="pillar-number">01</div>
                <h3 class="h3 bright-text">VELOCIDAD</h3>
                <p class="light-text">Entregamos resultados en semanas, no meses. Sin comprometer calidad ni
                    estabilidad.</p>
            </div>
            <div class="pillar-card">
                <div class="pillar-number">02</div>
                <h3 class="h3 bright-text">CLARIDAD</h3>
                <p class="light-text">Explicamos todo en español simple. Cero jerga técnica que no entiendas.</p>
            </div>
            <div class="pillar-card">
                <div class="pillar-number">03</div>
                <h3 class="h3 bright-text">RESULTADOS</h3>
                <p class="light-text">Medimos lo que importa: conversión, ingresos, satisfacción real.</p>
            </div>
            <div class="pillar-card">
                <div class="pillar-number">04</div>
                <h3 class="h3 bright-text">SOPORTE</h3>
                <p class="light-text">No desaparecemos después de entregar. Estamos aquí para ti siempre.</p>
            </div>
        </div>
    </section>

    <!-- Team  -->
    <!-- <section class="sections light">
        <p class="top-title">El corazón del proyecto</p>
        <h2 class="h2">EL EQUIPO</h2>
        <div class="team-spotlight">
            <div class="team-member">
                <div class="member-header">
                    <div class="member-avatar daniel">D</div>
                </div>
                <div class="member-body">
                    <h3 class="h3">DANIEL C.</h3>
                    <p class="h4" style="color: var(--color-primary); margin-bottom: 1rem;">Creative Director & PM</p>
                    <p class="p-card">Diseñador y estratega. Obsesionado con convertir ideas en productos que realmente
                        funcionen. Especializado en UX/UI y experiencia del usuario.</p>
                    <div class="member-tags">
                        <span class="tag">Diseño</span>
                        <span class="tag">Estrategia</span>
                        <span class="tag">UX</span>
                    </div>
                </div>
            </div>
            <div class="team-member">
                <div class="member-header">
                    <div class="member-avatar nicolas">N</div>
                </div>
                <div class="member-body">
                    <h3 class="h3">NICOLAS A.</h3>
                    <p class="h4" style="color: var(--color-primary); margin-bottom: 1rem;">Tech Lead & Developer</p>
                    <p class="p-card">Full-stack engineer con 8+ años de experiencia. Especializado en arquitecturas
                        escalables, APIs robustas y soluciones que aguanten cualquier carga.</p>
                    <div class="member-tags">
                        <span class="tag">Backend</span>
                        <span class="tag">APIs</span>
                        <span class="tag">DevOps</span>
                    </div>
                </div>
            </div>
        </div>
    </section> -->

    <!-- Timeline -->
    <!-- <section class="sections darkest">
        <p class="top-title">Nuestra evolución</p>
        <h2 class="h2">HITO POR HITO</h2>
        <div class="milestones">
            <div class="milestone">
                <div class="milestone-dot"></div>
                <div class="milestone-text">
                    <p class="milestone-year h4">2026</p>
                    <h3 class="h3 bright-text">Blue Lynk nace</h3>
                    <p class="light-text">Una idea simple: eliminar la brecha digital de PYMEs peruanas con tecnología
                        moderna y accesible.</p>
                </div>
            </div>
            <div class="milestone">
                <div class="milestone-dot"></div>
                <div class="milestone-text">
                    <p class="milestone-year h4">2026</p>
                    <h3 class="h3 bright-text">Primeros éxitos</h3>
                    <p class="light-text">Completamos proyectos en retail, salud y educación. Los clientes confirman:
                        esto funciona.</p>
                </div>
            </div>
            <div class="milestone">
                <div class="milestone-dot"></div>
                <div class="milestone-text">
                    <p class="milestone-year h4">Ahora</p>
                    <h3 class="h3 bright-text">Escalando</h3>
                    <p class="light-text">Ayudando a más empresas peruanas a crecer, una transformación digital a la
                        vez.</p>
                </div>
            </div>
        </div>
    </section> -->

    <!-- Process -->
    <section class="sections light">
        <p class="top-title">Cómo trabajamos contigo</p>
        <h2 class="h2">NUESTRO PROCESO</h2>
        <div class="svc-grid">
            <div class="svc-card text-center">
                <div class="process-icon">1</div>
                <h3 class="h3">DESCUBRIMIENTO</h3>
                <p class="p-card">Entendemos tu negocio profundamente: qué necesitas, cuál es tu presupuesto, cuáles son
                    tus miedos.</p>
            </div>
            <div class="svc-card text-center">
                <div class="process-icon">2</div>
                <h3 class="h3">PROPUESTA</h3>
                <p class="p-card">Te damos una solución clara, con timeline, presupuesto y expectativas realistas.</p>
            </div>
            <div class="svc-card text-center">
                <div class="process-icon">3</div>
                <h3 class="h3">CONSTRUCCIÓN</h3>
                <p class="p-card">Construimos, te mostramos progreso semanal, recopilamos feedback y ajustamos.</p>
            </div>
            <div class="svc-card text-center">
                <div class="process-icon">4</div>
                <h3 class="h3">LANZAMIENTO</h3>
                <p class="p-card">Tu producto sale al mundo. Nosotros estamos aquí para asegurar que todo funcione
                    perfecto.</p>
            </div>
            <div class="svc-card text-center">
                <div class="process-icon">5</div>
                <h3 class="h3">CRECIMIENTO</h3>
                <p class="p-card">Soporte continuo, mejoras, escalabilidad. Tu éxito es un viaje, no un destino.</p>
            </div>
        </div>
    </section>

    <!-- Final -->
    <section class="sections dark">
        <div class="final-cta">
            <h2 class="h2 bright-text text-center">¿Listos para <em>crecer</em> juntos?</h2>
            <p class="light-text text-center md">
                Cuéntanos sobre tu proyecto. Te responderemos en 24 horas.
            </p>
            <UiBtnLight variant="btn-primary">Empezar ahora</UiBtnLight>
        </div>
    </section>
</template>

<style scoped>
/* HERO */
.hero-section {
    grid-template-columns: 1fr;
    justify-content: center;
}

/* FILOSOFIA */
.philosophy-text {
    max-width: 500px;
}

.philosophy-checks{
    margin-top: 2rem; 
    display: grid; 
    gap: 1.5rem;
}

.philosophy-point {
    display: flex;
    gap: 1.25rem;
}

.philosophy-icon {
    font-size: 1.5rem;
    color: var(--color-primary);
    font-weight: bold;
    flex-shrink: 0;
    margin-top: 0.25rem;
}

.philosophy-point .p-card {
    color: var(--color-text-on-light-muted);
}

.philosophy-visual {
    display: flex;
    align-items: center;
    justify-content: center;
}

.philosophy-box {
    width: 100%;
    aspect-ratio: 1;
    background: linear-gradient(135deg, var(--color-bg-light) 0%, rgba(90, 140, 255, 0.1) 100%);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border: 2px solid rgba(90, 140, 255, 0.2);
}

.philosophy-blob {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(90, 140, 255, 0.15) 0%, rgba(90, 140, 255, 0.05) 100%);
}

.philosophy-inner {
    padding: 2rem;
}

/* PILARES */
.pillars-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem;
}

.pillar-card {
    background: rgba(81, 112, 255, 0.12);
    border: 1px solid rgba(81, 112, 255, 0.2);
    border-radius: 16px;
    padding: 2.5rem 2rem;
    position: relative;
    transition: transform 0.3s, border-color 0.3s;
}

.pillar-card:hover {
    transform: translateY(-8px);
    border-color: var(--color-primary);
}

.pillar-number {
    font-family: var(--font-title);
    font-size: 3rem;
    color: var(--color-text-vivid);
    line-height: 1;
    opacity: 0.6;
}

.pillar-card h3 {
    padding: 1rem 0;
}

.pillar-card p {
    color: var(--color-text-on-dark-muted);
}

/* TEAM */
.team-spotlight {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 3rem;
}

.team-member {
    background: var(--color-bg-lightest);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s;
}

.team-member:hover {
    transform: translateY(-8px);
}

.member-header {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%);
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.member-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-title);
    font-size: 2.5rem;
    color: white;
    border: 4px solid white;
}

.member-avatar.daniel {
    background: linear-gradient(135deg, #5A8CFF, #3D5AFE);
}

.member-avatar.nicolas {
    background: linear-gradient(135deg, #3D5AFE, #1F36A8);
}

.member-body {
    padding: 2rem;
}

.member-body h3 {
    color: var(--color-bg-darkest);
    margin-bottom: 0.5rem;
}

.member-body .p-card {
    color: var(--color-text-on-light-muted);
    margin-bottom: 1.5rem;
    line-height: 1.7;
}

.member-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.tag {
    background: var(--color-bg-light);
    color: var(--color-primary);
    padding: 0.4rem 0.9rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Timeline */
.milestones {
    display: grid;
    gap: 3rem;
    position: relative;
    padding-left: 2rem;
}

.milestones::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, var(--color-primary), transparent);
}

.milestone {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
    position: relative;
}

.milestone-dot {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--color-primary);
    border: 4px solid var(--color-bg-darkest);
    position: absolute;
    left: -12.5px;
    top: 0.5rem;
}

.milestone-text {
    padding-top: 0.5rem;
}

.milestone-year {
    color: var(--color-primary);
    margin-bottom: 0.5rem;
}

.milestone-text .bright-text {
    margin-bottom: 0.75rem;
}

/* Proceso */
.process-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-hover));
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-bg-lightest);
    font-family: var(--font-title);
    font-size: 1.5rem;
    margin: 0 auto 1.5rem;
}

/* FINAL */
.final-cta {
    text-align: center;
}

/* Responsive */

@media (max-width: 835px) {
    .team-spotlight {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 475px) {
    .pillars-grid {
        grid-template-columns: 1fr;
    }

    .milestones::before {
        left: -1px;
    }

    .milestone-dot {
        left: -9.5px;
    }
}
</style>