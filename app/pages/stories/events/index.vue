<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Page Header -->
    <section class="relative bg-gradient-to-br from-rose-700 via-rose-800 to-rose-900 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="relative container mx-auto px-4 py-16 md:py-24">
        <div class="text-center max-w-4xl mx-auto">


          <!-- Hero Content -->
          <div class="space-y-6">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Our Events & Programs
            </h1>
            <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join us in making a difference through impactful community events that build character, foster creativity, and empower the next generation.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-32 h-32 bg-red-300/20 rounded-full blur-2xl animate-bounce"></div>
    </section>

    <!-- Events Section -->
    <section ref="eventsSection" class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <!-- Section Introduction -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Lives Through <span class="text-blue-600">Action</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Our signature programs are designed to empower individuals and strengthen communities through education, sports, and creative expression.
          </p>
        </div>

        <!-- Events Grid -->
        <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <!-- B&S Music School Card -->
          <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <!-- Card Header with Gradient -->
            <div class="h-48 bg-gradient-to-br from-rose-400 to-rose-600 relative overflow-hidden">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <i class="fas fa-music text-3xl"></i>
                  </div>
                  <h3 class="text-2xl font-bold">B&S Music School</h3>
                </div>
              </div>
              <!-- Decorative elements -->
              <div class="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
              <div class="absolute bottom-4 left-4 w-8 h-8 bg-white/15 rounded-full animate-bounce"></div>
            </div>

            <!-- Card Content -->
            <div class="p-8">
              <div class="space-y-6">
                <!-- Description -->
                <p class="text-gray-600 text-lg leading-relaxed">
                  Experience the transformative power of music in building communities and fostering creativity. Our comprehensive music program offers professional instruction across multiple instruments and vocal training.
                </p>

                <!-- Features -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-check-circle text-rose-500 mr-2"></i>
                    Professional Instructors
                  </div>
                  <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-check-circle text-rose-500 mr-2"></i>
                    All Skill Levels
                  </div>
                  <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-check-circle text-rose-500 mr-2"></i>
                    Performance Opportunities
                  </div>
                  <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-check-circle text-rose-500 mr-2"></i>
                    Community Building
                  </div>
                </div>

                <!-- Event Details -->
                <div class="bg-rose-50 rounded-lg p-4 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-700">Next Session Starts</span>
                    <span class="text-sm font-bold text-rose-600">January 15, 2025</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-700">Duration</span>
                    <span class="text-sm font-bold text-rose-600">12 Weeks</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-700">Age Group</span>
                    <span class="text-sm font-bold text-rose-600">All Ages</span>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-3">
                  <button 
                    @click="learnMore('music')"
                    class="flex-1 bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <i class="fas fa-info-circle mr-2"></i>
                    Learn More
                  </button>
                  <button 
                    @click="registerForEvent('music')"
                    class="flex-1 border-2 border-rose-600 text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-rose-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    <i class="fas fa-user-plus mr-2"></i>
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- AMU Sports Camp Card -->
          <div class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <!-- Card Header with Gradient -->
            <div class="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
              <div class="absolute inset-0 bg-black/20"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white">
                  <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <i class="fas fa-football-ball text-3xl"></i>
                  </div>
                  <h3 class="text-2xl font-bold">AMU Sports Camp</h3>
                </div>
              </div>
              <!-- Decorative elements -->
              <div class="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
              <div class="absolute bottom-4 left-4 w-8 h-8 bg-white/15 rounded-full animate-bounce"></div>
            </div>

            <!-- Card Content -->
            <div class="p-8">
              <div class="space-y-6">
                <!-- Description -->
                <p class="text-gray-600 text-lg leading-relaxed">
                  Empower young athletes through comprehensive sports training and character development programs. Our camp focuses on building both physical excellence and strong moral character.
                </p>

                <!-- Features -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                    Expert Coaching
                  </div>
                  <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                    Character Building
                  </div>
                  <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                    Team Sports
                  </div>
                  <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-check-circle text-blue-500 mr-2"></i>
                    Leadership Training
                  </div>
                </div>

                <!-- Event Details -->
                <div class="bg-blue-50 rounded-lg p-4 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-700">Next Camp Dates</span>
                    <span class="text-sm font-bold text-blue-600">Feb 1-14, 2025</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-700">Duration</span>
                    <span class="text-sm font-bold text-blue-600">2 Weeks</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-medium text-gray-700">Age Group</span>
                    <span class="text-sm font-bold text-blue-600">8-18 Years</span>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-3">
                  <button 
                    @click="learnMore('sports')"
                    class="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <i class="fas fa-info-circle mr-2"></i>
                    Learn More
                  </button>
                  <button 
                    @click="registerForEvent('sports')"
                    class="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    <i class="fas fa-user-plus mr-2"></i>
                    Join Camp
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Get Involved?</h2>
        <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join our community of learners, athletes, and changemakers. Together, we can make a lasting impact.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="contactUs" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            <i class="fas fa-phone mr-2"></i>
            Contact Us
          </button>
          <button @click="viewAllPrograms" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
            <i class="fas fa-calendar-alt mr-2"></i>
            View All Programs
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// SEO Meta
useHead({
  title: 'Events & Programs - AMU Foundation',
  meta: [
    { name: 'description', content: 'Join AMU Foundation events including B&S Music School and AMU Sports Camp. Empowering communities through music education and sports training programs.' },
    { name: 'keywords', content: 'AMU Foundation, events, music school, sports camp, community programs, education' }
  ]
})

// Refs
const eventsSection = ref(null)

// Methods
const scrollToEvents = () => {
  if (eventsSection.value) {
    eventsSection.value.scrollIntoView({ behavior: 'smooth' })
  }
}

const learnMore = (eventType) => {
  // Navigate to detailed event page (you'll create these later)
  if (eventType === 'music') {
    navigateTo('/events/music-school')
  } else if (eventType === 'sports') {
    navigateTo('/events/sports-camp')
  }
}

const registerForEvent = (eventType) => {
  // Navigate to registration page (you'll create these later)
  if (eventType === 'music') {
    navigateTo('/register/music-school')
  } else if (eventType === 'sports') {
    navigateTo('/register/sports-camp')
  }
}

const contactUs = () => {
  navigateTo('/contact')
}

const viewAllPrograms = () => {
  navigateTo('/programs')
}
</script>

<style scoped>
* {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Enhanced hover effects */
.group:hover .animate-pulse {
  animation-duration: 1s;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom gradient overlays */
.gradient-overlay {
  background: linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%);
}

/* Button hover effects */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover {
  transform: translateY(-2px);
}
</style>