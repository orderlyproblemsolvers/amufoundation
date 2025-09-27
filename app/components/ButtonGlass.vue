<template>
    <NuxtLink
            :to="props.path"
            class="liquid-glass-btn inline-block px-6 py-3 rounded-2xl font-medium w-max relative overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
          >
            <div class="flex justify-center items-center relative z-10">
              <p class="text-white/90 group-hover:text-white transition-colors duration-200">{{ props.title }}</p>
              <UIcon
                :name="props.icon"
                class="inline-block w-5 h-5 ml-2 text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200"
              />
            </div>
            
            <!-- Liquid glass background layers -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl border border-white/20 rounded-xl"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-rose-500/30 via-transparent to-transparent rounded-2xl"></div>
            
            <!-- Animated liquid effect -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer rounded-xl"></div>
            </div>
            
            <!-- Glow effect -->
            <div class="absolute -inset-1 bg-gradient-to-r from-rose-400/20 via-purple-400/20 to-rose-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </NuxtLink>
</template>

<script setup>
const props = defineProps({
  path: {
    type: String,
    default: '/'
  },
  title: {
    type: String,
    default: 'Button',
    required: true
  },
    icon: {
        type: String,
        default: 'i-lucide-arrow-right'
    }
})
</script>

<style scoped>
.liquid-glass-btn {
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.liquid-glass-btn:hover {
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-shimmer {
  animation: shimmer 2s ease-in-out infinite;
}

/* Add these utility classes to your Tailwind config if needed */
@supports (backdrop-filter: blur(12px)) {
  .backdrop-blur-xl {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}
</style>