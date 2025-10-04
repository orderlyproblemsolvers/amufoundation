<script setup lang="ts">
// Optional: Add props if you want to customize the template
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'AMU Foundation',
  description: 'Empowering Children through Education, Music and Sports'
})
</script>

<template>
  <div class="h-full w-full flex flex-col justify-between bg-gradient-to-br from-rose-700 via-rose-800 to-rose-900 p-16">
    <!-- Logo and Title Section -->
    <div class="flex items-center gap-8">
      <!-- AMU Logo -->
      <div class="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
        <img 
          src="/img/amulogo.png" 
          alt="AMU Logo" 
          class="w-32 h-32 object-contain"
        />
      </div>
      
      <div class="flex flex-col">
        <h1 class="text-7xl font-black text-white mb-2 tracking-tight">
          {{ title }}
        </h1>
      </div>
    </div>

    <!-- Description Section -->
    <div class="flex flex-col gap-6">
      <p class="text-4xl font-semibold text-white leading-relaxed">
        {{ description }}
      </p>
      
      <!-- Decorative line -->
      <div class="w-32 h-2 bg-white rounded-full"></div>
    </div>
  </div>
</template>