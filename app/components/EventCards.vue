<template>
  <section class="py-8 md:py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-8 md:mb-12">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
          Our <span class="text-rose-700">Programs</span>
        </h2>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Join us in making a difference through our impactful community events and programs
        </p>
      </div>

      <!-- Events Grid/Scroll Container -->
      <div class="block md:hidden">
        <!-- Mobile: Horizontal Scroll -->
        <div class="overflow-x-auto pb-6 hide-scrollbar">
          <div class="flex gap-4 w-max px-1">
            
            <!-- B&S Music Event - Mobile -->
            <div class="w-96 bg-gradient-to-r from-rose-400 to-rose-700 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
              <div class="p-6">
                <h3 class="text-lg font-bold mb-4 text-center text-white">
                  B&S Music School
                </h3>
                
                <div class="space-y-4">
                  <!-- Image -->
                  <div class="w-16 h-16 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 overflow-hidden mx-auto">
                    <img src="/img/music.jpeg" alt="B&S Music" class="w-full h-full object-cover">
                  </div>

                  <!-- Content -->
                  <div class="text-center space-y-4">
                    <p class="text-white/90 text-sm leading-relaxed">
                      Experience the power of music in building communities and fostering creativity through our music program.
                    </p>
                    
                    <div class="space-y-2">
                      <button @click="navigateTo('/stories/events')" class="w-full bg-white text-rose-600 px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-rose-50 transition-colors duration-200">
                        Learn More
                      </button>
                      <button @click="navigateTo('/stories/events#registrations')" class="w-full border border-white text-white px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-white hover:text-rose-600 transition-colors duration-200">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- AMU Sports Camp Event - Mobile -->
            <div class="w-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
              <div class="p-6">
                <h3 class="text-lg font-bold mb-4 text-center text-white">
                  AMU Sports Camp
                </h3>
                
                <div class="space-y-4">
                  <!-- Image -->
                  <div class="w-16 h-16 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 overflow-hidden mx-auto">
                    <img src="/img/sports.jpeg" alt="AMU Sports Camp" class="w-full h-full object-cover">
                  </div>

                  <!-- Content -->
                  <div class="text-center space-y-4">
                    <p class="text-white/90 text-sm leading-relaxed">
                      Empower young athletes through comprehensive sports training and character development programs.
                    </p>
                    
                    <div class="space-y-2">
                      <button @click="navigateTo('/stories/events')" class="w-full bg-white text-blue-600 px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-50 transition-colors duration-200">
                        Learn More
                      </button>
                      <button @click="navigateTo('/stories/events#registrations')" class="w-full border border-white text-white px-4 py-2.5 rounded-md text-sm font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                        Join Camp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Desktop/Tablet: Grid Layout (2 columns centered) -->
      <div class="hidden md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        <!-- B&S Music Event - Desktop -->
        <div class="bg-gradient-to-r from-rose-400 to-rose-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-101 transition-all duration-300">
          <div class="p-8 text-white">
            <h3 class="text-xl font-bold mb-4 text-center">
              B&S Music School
            </h3>
            
            <div class="flex gap-4 items-start">
              <!-- Image -->
              <div class="w-20 h-20 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 overflow-hidden flex-shrink-0">
                <img src="/img/music.jpeg" alt="B&S Music" class="w-full h-full object-cover">
              </div>

              <!-- Content -->
              <div class="flex-1 space-y-3">
                <p class="text-white/90 text-sm leading-relaxed">
                  Experience the power of music in building communities and fostering creativity through our music program.
                </p>
                
                <div class="space-y-2">
                  <button @click="navigateTo('/stories/events')" class="w-full bg-white text-rose-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-rose-50 transition-colors duration-200">
                    Learn More
                  </button>
                  <button @click="navigateTo('/stories/events#registrations')" class="w-full border border-white text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-white hover:text-rose-600 transition-colors duration-200">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- AMU Sports Camp Event - Desktop -->
        <div class="bg-gradient-to-r from-blue-500 to-[#1E67A8] rounded-xl shadow-lg overflow-hidden transform hover:scale-101 transition-all duration-300">
          <div class="p-8 text-white">
            <h3 class="text-xl font-bold mb-4 text-center">
              AMU Sports Camp
            </h3>
            
            <div class="flex gap-4 items-start">
              <!-- Image -->
              <div class="w-20 h-20 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 overflow-hidden flex-shrink-0">
                <img src="/img/sports.jpeg" alt="AMU Sports Camp" class="w-full h-full object-cover">
              </div>

              <!-- Content -->
              <div class="flex-1 space-y-3">
                <p class="text-white/90 text-sm leading-relaxed">
                  Empower young athletes through comprehensive sports training and character development programs.
                </p>
                
                <div class="space-y-2">
                  <button @click="navigateTo('/stories/events')" class="w-full bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-50 transition-colors duration-200">
                    Learn More
                  </button>
                  <button @click="navigateTo('/stories/events#registrations')" class="w-full border border-white text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                    Join Camp
                  </button>
                </div>
              </div>
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

/* Custom hover effects */
.hover\:scale-105:hover {
  transform: scale(1.01);
}

/* Smooth transitions */
button {
  transition: all 0.2s ease;
}

/* Hide scrollbar for mobile horizontal scroll */
.hide-scrollbar {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}
.hide-scrollbar::-webkit-scrollbar { 
  display: none;  /* Safari and Chrome */
}

/* Ensure proper touch scrolling on mobile */
.overflow-x-auto {
  -webkit-overflow-scrolling: touch;
} 
</style>