<script setup lang="ts">
// @ts-ignore
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

let lenis: Lenis | null = null;
const activeIndex = ref<number | null>(0);

// Altura del header de Nuxt — ajusta este valor al tuyo
const HEADER_HEIGHT = 64; // px

onMounted(() => {
    lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis?.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    const headers = document.querySelectorAll<HTMLElement>(".nosotros-header");

    // Entrada desde los lados
    ScrollTrigger.create({
        trigger: ".nosotros",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        onUpdate: (self) => {
            const p = self.progress;
            gsap.set(headers[0], { x: `${(1 - p) * 100}vw` });
            gsap.set(headers[1], { x: `${-(1 - p) * 100}vw` });
            gsap.set(headers[2], { x: `${(1 - p) * 100}vw` });
        }
    });

    // Pin + escala
    ScrollTrigger.create({
        trigger: ".nosotros",
        start: "top top",
        end: `+=${window.innerHeight * 2}`,
        pin: true,
        scrub: 1,
        pinSpacing: false,
        onUpdate: (self) => {
            if (self.progress <= 0.5) {
                const yP = self.progress * 2;
                gsap.set(headers[0], { y: `${yP * 100}%` });
                gsap.set(headers[2], { y: `${-yP * 100}%` });
            } else {
                gsap.set(headers[0], { y: `100%` });
                gsap.set(headers[2], { y: `-100%` });

                const scaleP = (self.progress - 0.5) * 0.5 * 2;
                const minScale = window.innerWidth <= 768 ? 0.25 : 0.1;
                const scale = 1 - scaleP * (1 - minScale);
                headers.forEach(h => gsap.set(h, { scale }));
            }
        },
    });

    const profileImagesContainer = document.querySelector<HTMLElement>(".profile-images");
    const profileImages = document.querySelectorAll<HTMLElement>(".profile-images .img");
    const nameElements = document.querySelectorAll<HTMLElement>(".profile-names .name");
    const nameHeadings = document.querySelectorAll<HTMLElement>(".profile-names .name h2");

    // 1. Preparar SplitText y estados iniciales
    nameElements.forEach((el, i) => {
        const h2 = el.querySelector("h2");
        const p = el.querySelector("p");

        if (h2) {
            const split = new SplitText(h2, { type: "chars" });
            gsap.set(split.chars, { y: "105%", opacity: 0 });
            (el as any)._splitChars = split.chars;
        }

        if (p) {
            gsap.set(p, { y: 20, opacity: 0 });
        }
    });

    const showMember = (index: number) => {
        const el = nameElements[index];
        const chars = (el as any)._splitChars;
        const p = el.querySelector("p");

        const tl = gsap.timeline();
        tl.to(chars, {
            y: "0%",
            opacity: 1,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.03
        })
            .to(p, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            }, "-=0.4");
    };

    const hideMember = (index: number) => {
        const el = nameElements[index];
        const chars = (el as any)._splitChars;
        const p = el.querySelector("p");

        gsap.to(chars, { y: "-105%", opacity: 0, duration: 0.4, ease: "power2.in" });
        gsap.to(p, { y: -10, opacity: 0, duration: 0.3 });
    };

    // 3. Eventos
    profileImages.forEach((img, i) => {
        const handleInteraction = () => {
            if (activeIndex.value === i) return;
            if (activeIndex.value !== null) hideMember(activeIndex.value);

            activeIndex.value = i;
            showMember(i);

            gsap.to(profileImages, { scale: 0.8, opacity: 0.5, duration: 0.4 });
            gsap.to(img, { scale: 1.2, opacity: 1, duration: 0.4, ease: "back.out(2)" });
        };

        img.addEventListener("mouseenter", handleInteraction);
        img.addEventListener("touchstart", (e) => {
            // e.preventDefault(); // Opcional, para evitar scroll accidental
            handleInteraction();
        });
    });

    // Mostrar el primero por defecto
    showMember(0);
});

onUnmounted(() => {
    lenis?.destroy();
    ScrollTrigger.getAll().forEach(t => t.kill());
});
</script>

<template>
    <section class="hero-container sections">
        <div class="hero-content">
            <div class="content-res">
                <p class="hero-tag">Soluciones digitales · Lima, Perú</p>
                <h1 class="hero-h">NOSOTROS <em>SABEMOS</em><br>LO QUE NECESITAS</h1>
                <p class="hero-p">Conoce al equipo detrás de nuestras soluciones digitales innovadoras en Lima,
                    Perú.</p>
                <div class="hero-btns">
                    <UiBtnLight variant="btn-primary">Contáctanos</UiBtnLight>
                </div>
            </div>
        </div>
    </section>

    <section class="nosotros">
        <div class="nosotros-header">
            <img src="/images/conocenos-text.svg" alt="Texto Nosotros">
        </div>
        <div class="nosotros-header">
            <img src="/images/conocenos-text.svg" alt="Texto Nosotros">
        </div>
        <div class="nosotros-header">
            <img src="/images/conocenos-text.svg" alt="Texto Nosotros">
        </div>
    </section>

    <section class="about-section">
        <div class="about-grid">
            <div class="about-intro">
                <span class="section-label">Quiénes somos</span>
                <h2 class="about-title">Construimos experiencias digitales que perduran.</h2>
            </div>
            <div class="about-body">
                <p>Somos un equipo de diseñadores y desarrolladores enfocados en crear productos digitales que
                    combinan funcionalidad, diseño y estrategia. Nos interesa construir soluciones que no solo se
                    vean bien, sino que tengan un impacto real en quienes las usan.</p>
                <p>Trabajamos de cerca con cada cliente para entender a fondo sus objetivos y necesidades. Más que
                    ejecutar ideas, buscamos aportar criterio y construir productos que realmente funcionen en el
                    mundo real.</p>
                <div class="about-stats">
                    <div class="stat">
                        <span class="stat-number">+2</span>
                        <span class="stat-label">Proyectos entregados</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">3+</span>
                        <span class="stat-label">Años de experiencia</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">100%</span>
                        <span class="stat-label">Clientes satisfechos</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="team">
        <aside class="profile-images">
            <div class="img"><img src="/images/person.webp" alt="Nicolas Acevedo"></div>
            <div class="img"><img src="/images/person.webp" alt="Daniel Carbone"></div>
        </aside>
        <br>
        <aside class="profile-names">
            <div class="name">
                <h2>Nicolas Acevedo</h2>
                <p>Estratega de producto y especialista en interfaces que convierten.</p>
            </div>
            <div class="name">
                <h2>Daniel Carbone</h2>
                <p>Desarrollador con enfoque en diseño, creatividad y soluciones. Me interesa crear productos digitales
                    que se sientan bien, funcionen mejor y tengan un propósito claro. <br> Siempre buscando ese punto
                    donde la idea, la estética y la tecnología encajan perfecto.</p>
            </div>
        </aside>
    </section>

    <Contact />
</template>

<style scoped>
.team {
    position: relative;
    width: 100vw;
    background: var(--color-bg-light);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
    padding: 4rem 0;
}

.profile-images {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    z-index: 20;
}

.img {
    position: relative;
    width: 80px;
    height: 80px;
    cursor: pointer;
    overflow: visible;
}

.img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid transparent;
    transition: border-color 0.3s;
}

.profile-names {
    position: relative;
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.name h2 {
    font-size: clamp(3rem, 12vw, 15rem);
    line-height: 0.9;
    margin: 0;
    color: var(--color-bg-dark);
    text-align: center;
    overflow: hidden;
}

.name {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
}


.name p {
    font-size: 1.2rem;
    max-width: 800px;
    text-align: center;
    color: var(--color-primary);
    margin-top: 1rem;
    font-weight: 500;
    letter-spacing: 2px;
}

:deep(.letter) {
    display: inline-block;
    will-change: transform;
}

.img {
    transition: transform 0.3s ease;
    z-index: 10;
}

@media (max-width: 768px) {
    .team {
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 15vh;
    }

    .profile-images {
        gap: 15px;
    }

    .img {
        width: 65px;
        height: 65px;
    }

    .profile-names {
        height: 250px;
        margin-top: 2rem;
    }

    .name h2 {
        font-size: 3.5rem;
    }

    .name p {
        font-size: 0.9rem;
        padding: 0 2rem;
        max-width: 100%;
    }
}

.hero-container {
    background: var(--color-bg-darkest);
    min-height: 100vh;
    padding: 0 5rem 0 5rem;
    align-items: center;
    display: flex;
}

.hero-content {
    position: relative;
    width: 100%;
    height: 100%;
}

.content-res {
    display: grid;
    gap: 1.5rem;
    text-align: right;
}

.hero-tag {
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--color-primary);
}

.hero-h {
    line-height: .9;
    color: var(--color-bg-light);
    margin-bottom: .5rem;
}

.hero-h em {
    color: var(--color-primary);
}

.hero-p {
    line-height: 1.75;
    color: var(--color-text-on-dark-muted);
    margin-bottom: .5rem;
}

.nosotros {
    background: var(--color-bg-darkest);
    position: relative;
    width: 100%;
    height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
}

.nosotros-header {
    position: relative;
    width: 100%;
    padding: 0;
    background: var(--color-bg-darkest);
    will-change: transform;
}

.nosotros-header img {
    object-fit: contain;
    width: 100%;
    height: auto;
    display: block;
}

.nosotros-header:nth-child(1),
.nosotros-header:nth-child(3) {
    transform: translateX(100vw);
}

.nosotros-header:nth-child(2) {
    transform: translateX(-100vw);
    z-index: 2;
}

@media (min-width: 768px) {
    .nosotros-header {
        padding: 0 1rem;
    }
}

.about-section {
    margin-top: calc(100svh * 2);
    background: var(--color-bg-dark);
    padding: 5rem 3rem;
    border-top: 1px solid color-mix(in srgb, var(--color-primary) 20%, transparent);
}

.about-grid {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
}

@media (min-width: 768px) {
    .about-grid {
        grid-template-columns: 1fr 1.4fr;
        gap: 5rem;
        align-items: start;
    }
}

.section-label {
    display: inline-block;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--color-bg-lightest);
    margin-bottom: 1.25rem;
}

.about-title {
    color: var(--color-bg-light);
    line-height: 1.1;
    margin: 0;
    font-size: 5rem;
}

.about-body p {
    color: var(--color-text-on-dark-muted);
    line-height: 1.8;
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    margin-bottom: 1.25rem;
}

.about-body p:last-of-type {
    margin-bottom: 2.5rem;
}

.about-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding-top: 2rem;
    border-top: 1px solid color-mix(in srgb, var(--color-bg-light) 12%, transparent);
}

.stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.stat-number {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--color-text-on-dark-muted);
    line-height: 1;
    font-family: var(--font-title);
}

.stat-label {
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--color-text-on-dark-muted);
}
</style>