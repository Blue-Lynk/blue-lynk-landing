<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

const router = useRouter();
gsap.registerPlugin(SplitText);

router.afterEach(() => {
    if (isMenuOpen.value) {
        mainTl.reverse();
        isMenuOpen.value = false;
    }
});

const isMenuOpen = ref(false);
const isAnimating = ref(false);
let mainTl: gsap.core.Timeline;

onMounted(() => {
    // Inicializar SplitText
    const split = new SplitText(".nav-items a", {
        type: "lines",
        linesClass: "line-parent"
    });

    split.lines.forEach(line => {
        line.innerHTML = `<div class="line-inner">${line.textContent}</div>`;
    });

    mainTl = gsap.timeline({ paused: true });

    mainTl.set(".nav-content", { pointerEvents: "all" });

    mainTl.to(".nav-bg", {
        scaleY: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power4.inOut"
    });

    mainTl.to(".nav-items", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.6,
        ease: "power3.inOut"
    }, "-=0.4");

    mainTl.from(".line-inner", {
        y: "100%",
        duration: 0.3,
        stagger: 0.03,
        ease: "power2.out"
    }, "-=0.2");
});

const toggleMenu = () => {
    if (isAnimating.value) return;

    isAnimating.value = true;
    if (!isMenuOpen.value) {
        mainTl.play();
    } else {
        mainTl.reverse();
    }

    isMenuOpen.value = !isMenuOpen.value;

    setTimeout(() => {
        isAnimating.value = false;
    }, mainTl.duration() * 1000);
};
</script>

<template>
    <header>
        <nav class="nav">
            <div class="nav-logo">
                <nuxt-link to="/">
                    <!-- B<em>L</em>UE<b>LYNK</b> -->
                    <img class="responsive-mobil" src="/logo-white-bl.png" alt="Blue Lynk Logo">
                    <img class="responsive-desktop" src="/BlueLynk-horizontal-azul.png" alt="Blue Lynk Logo">
                </nuxt-link>
            </div>


            <button class="nav-toogler" :class="{ open: isMenuOpen }" @click="toggleMenu" aria-label="Abrir menú">
                <div class="hamburger-lines">
                    <span></span>
                    <span></span>
                </div>
                <span class="toogler-text">MENU</span>
            </button>
        </nav>

        <div class="nav-content">
            <div class="nav-bg"></div>
            <div class="nav-bg"></div>
            <div class="nav-bg"></div>
            <div class="nav-bg"></div>

            <div class="nav-items">
                <div class="nav-items-col">
                    <div class="nav-socials">
                        <a href="">WhatsApp</a>
                        <!-- <a href="">Instagram</a> -->
                    </div>
                    <div class="nav-legal">
                        <a href="">Privacy Policy</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Accesibility</a>
                    </div>
                </div>
                <div class="nav-items-col">
                    <div class="nav-prmary-links">
                        <nuxt-link to="/services">Servicios</nuxt-link>
                        <nuxt-link to="/portfolio">Portafolio</nuxt-link>
                        <nuxt-link to="/about">Nosotros</nuxt-link>
                        <nuxt-link to="/faq">FAQ</nuxt-link>
                    </div>
                    <div class="nav-secondary-links">
                        <nuxt-link to="/contact">Contacto</nuxt-link>
                        <a href="/support">Soporte</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.nav {
    height: 55px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    z-index: 100;

    background: var(--color-bg-darkest);
    backdrop-filter: blur(10px);
}

.nav-logo,
.nav-toogler {
    padding: 1rem;
    cursor: pointer;
}

/* .nav-logo a {
    font-family: var(--font-logo);
    font-size: 1.5rem;
    letter-spacing: 3px;
    color: var(--color-bg-light);
}

.nav-logo b {
    color: var(--color-primary);
} */

.nav-logo img {
    width: auto;
    height: 30px;
}

.nav-toogler {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--color-bg-lightest);
    font-family: "Bebas Neue", sans-serif;
    font-size: 1rem;
}

.hamburger-lines {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.nav-toogler span:not(.toogler-text) {
    width: 30px;
    height: 2px;
    background: var(--color-bg-lightest);
    display: block;
}

.nav-toogler.open .hamburger-lines span:nth-child(1) {
    transform: translateY(4px) rotate(45deg);
}

.nav-toogler.open .hamburger-lines span:nth-child(2) {
    transform: translateY(-4px) rotate(-45deg);
}

:deep(.line-parent) {
    overflow: hidden;
    display: block;
}

:deep(.line-inner) {
    display: block;
    will-change: transform;
}

.nav-content {
    margin-top: 55px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 55px);
    pointer-events: none;
    z-index: 99;
}

.nav-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: scaleY(0);
    transform-origin: top;
    will-change: transform;
    pointer-events: none;
}

.nav-bg:nth-child(1) {
    background-color: var(--color-bg-darkest);
}

.nav-bg:nth-child(2) {
    background-color: var(--color-bg-dark);
}

.nav-bg:nth-child(3) {
    background-color: var(--color-primary);
}

.nav-bg:nth-child(4) {
    background-color: var(--color-primary-hover);
}

.nav-items {
    display: flex;
    gap: 2rem;
    padding: 8rem;
    background-color: var(--color-bg-darkest);
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
    will-change: clip-path;
    box-shadow: inset 0 0 0 1px rgba(244, 246, 255, 0.1);
}

.nav-items-col:nth-child(1) {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
}

.nav-items-col:nth-child(2) {
    flex: 4;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}

.nav-socials a {
    font-size: 1.25rem;
}

.nav-legal a {
    font-size: 0.9rem;
    color: var(--color-text-on-dark-muted);
}

.nav-prmary-links a {
    font-size: 3rem;
}

.nav-secondary-links a {
    font-size: 1.5rem;
}

.nav-items-col div {
    display: flex;
    flex-direction: column;
}

a {
    color: var(--color-bg-light);
    text-decoration: none;
    display: block;
    letter-spacing: -2%;
    line-height: 1.1;
    margin-bottom: .5rem;
}

.nav-secondary-links a {
    font-size: 1.5rem;
}

.nav-content a .line {
    position: relative;
    will-change: transform;
    transform: translateY(100%);
}

@media (max-width: 768px) {

    .nav-content,
    .nav-items {
        height: 100dvh;
    }

    .nav-items-col:nth-child(1),
    .nav-items-col:nth-child(2) {
        flex: none;
    }

    .nav-items {
        flex-direction: column;
        justify-content: center;
        padding: 0 2rem;
    }

    .nav-items-col:nth-child(2) {
        display: flex;
        flex-direction: column;
    }
}
</style>