<template>
  <section class="py-12 md:py-20 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div class="text-center mb-10 md:mb-14">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
          Our <span class="text-rose-700">Programs</span>
        </h2>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Join us in making a difference through our impactful community events and programs
        </p>
      </div>

      <!-- Unified Responsive Grid: editorial full-bleed photo cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">

        <!-- B&S Music School -->
        <div class="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-[4/5] sm:aspect-[3/4]">
          <!-- Full-bleed photo -->
          <img
            src="/img/music.webp"
            alt="B&S Music School"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          <!-- Gradient overlay for text legibility -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          <!-- Tag chip -->
          <div class="absolute top-4 left-4 sm:top-5 sm:left-5">
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold tracking-wide">
              Music Program
            </span>
          </div>

          <!-- Content -->
          <div class="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7 text-white">
            <h3 class="text-xl sm:text-2xl font-bold mb-2">
              B&S Music School
            </h3>
            <p class="text-white/90 text-sm sm:text-base leading-relaxed mb-5 line-clamp-3">
              Experience the power of music in building communities and fostering creativity through our music program.
            </p>
            <div class="flex flex-col sm:flex-row gap-2.5">
              <NuxtLink
                to="/stories/programs"
                class="text-center flex-1 bg-white text-rose-600 px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-rose-50 transition-colors duration-200"
              >
                Learn More
            </NuxtLink>
              <NuxtLink
                to="/register/music-school"
                class="text-center flex-1 border bg-rose-600 border-rose-600/70 text-white px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-rose-700 hover:white transition-colors duration-200"
              >
                Register Now
          </NuxtLink>
            </div>
          </div>
        </div>

        <!-- AMU Sports Camp -->
        <div class="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-[4/5] sm:aspect-[3/4]">
          <!-- Full-bleed photo -->
          <img
            src="/img/sports.webp"
            alt="B&S Sports Academy"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          <!-- Gradient overlay for text legibility -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          <!-- Tag chip -->
          <div class="absolute top-4 left-4 sm:top-5 sm:left-5">
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold tracking-wide">
              Sports Program
            </span>
          </div>

          <!-- Content -->
          <div class="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7 text-white">
            <h3 class="text-xl sm:text-2xl font-bold mb-2">
              B&S Sports Academy
            </h3>
            <p class="text-white/90 text-sm sm:text-base leading-relaxed mb-5 line-clamp-3">
              Empower young athletes through comprehensive sports training and character development programs.
            </p>
            <div class="flex flex-col sm:flex-row gap-2.5">
              <NuxtLink
                to="/stories/programs"
                class="text-center flex-1 bg-white text-blue-600 px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Learn More
            </NuxtLink>
              <NuxtLink
                to="/register/sports-academy"
                class="text-center flex-1 border border-blue-600/70 bg-blue-600 text-white px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-700 hover:text-white transition-colors duration-200"
              >
                Join Camp
            </NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Ensure Inter font is used */
* {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Line clamp fallback for broader browser support */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>