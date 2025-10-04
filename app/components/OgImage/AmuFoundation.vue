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
  <div style="display: flex; height: 100%; width: 100%; flex-direction: column; justify-content: space-between; background: linear-gradient(135deg, #be123c 0%, #9f1239 50%, #881337 100%); padding: 64px;">
    <!-- Logo and Title Section -->
    <div style="display: flex; flex-direction: row; align-items: center; gap: 32px;">
      <!-- AMU Logo -->
      <div style="display: flex; width: 128px; height: 128px; background-color: white; border-radius: 16px; align-items: center; justify-content: center; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">
        <img 
          src="/img/amulogo.png" 
          alt="AMU Logo" 
          width="128"
          height="128"
          style="object-fit: contain;"
        />
      </div>
      
      <div style="display: flex; flex-direction: column;">
        <h1 style="font-size: 72px; font-weight: 900; color: white; margin: 0; letter-spacing: -0.025em;">
          {{ title }}
        </h1>
      </div>
    </div>

    <!-- Description Section -->
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <p style="font-size: 40px; font-weight: 600; color: white; margin: 0; line-height: 1.5;">
        {{ description }}
      </p>
      
      <!-- Decorative line -->
      <div style="width: 128px; height: 8px; background-color: white; border-radius: 9999px;"></div>
    </div>
  </div>
</template>