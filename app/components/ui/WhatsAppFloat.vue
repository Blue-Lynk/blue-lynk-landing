<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  phone: {
    type: String,
    required: true
  },
  message: {
    type: String,
    default: 'Hola, quiero información'
  },
  delay: {
    type: Number,
    default: 3000 
  }
})

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, props.delay)
})

const whatsappUrl = computed(() => {
  const text = encodeURIComponent(props.message)
  return `https://wa.me/${props.phone}?text=${text}`
})
</script>

<template>
  <Transition name="whatsapp">
    <a
      v-if="isVisible"
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-float"
    >
      <svg viewBox="0 0 32 32" class="icon">
        <path
          d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.89.754 5.713 2.188 8.193L0 32l7.633-2.148a15.93 15.93 0 0 0 8.367 2.396c8.836 0 16-7.164 16-16S24.836.396 16 .396z"
          fill="currentColor"
        />
      </svg>
    </a>
  </Transition>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;

  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #25D366;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);

  animation: pulse 2s infinite;
}

.icon {
  width: 28px;
  height: 28px;
}

.whatsapp-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.8);
}
.whatsapp-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.whatsapp-enter-active {
  transition: all 0.4s ease;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}
</style>